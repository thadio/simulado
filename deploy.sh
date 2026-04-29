#!/usr/bin/env bash
set -euo pipefail

if [[ -f ".env" ]]; then
  set -a
  # shellcheck disable=SC1091
  source ".env"
  set +a
fi

cleanup_paths=()
cleanup() {
  if [[ ${#cleanup_paths[@]} -gt 0 ]]; then
    rm -rf "${cleanup_paths[@]}"
  fi
}
trap cleanup EXIT

: "${SSH_HOST:?Defina SSH_HOST no .env}"
: "${SSH_USER:?Defina SSH_USER no .env}"
: "${SSH_PORT:?Defina SSH_PORT no .env}"
: "${SSH_KEY:?Defina SSH_KEY no .env}"
: "${REMOTE_DIR:?Defina REMOTE_DIR no .env}"
: "${DB_HOST:?Defina DB_HOST no .env}"
: "${DB_PORT:?Defina DB_PORT no .env}"
: "${DB_NAME:?Defina DB_NAME no .env}"
: "${DB_USER:?Defina DB_USER no .env}"
: "${DB_PASSWORD:?Defina DB_PASSWORD no .env}"
: "${DB_CHARSET:?Defina DB_CHARSET no .env}"

if [[ -n "${SSH_PASS:-}" ]] && ! ssh-add -l 2>/dev/null | grep -q "$(ssh-keygen -lf "$SSH_KEY" | awk '{print $2}')"; then
  askpass_dir="$(mktemp -d)"
  cleanup_paths+=("$askpass_dir")
  askpass_file="${askpass_dir}/askpass.sh"

  cat > "$askpass_file" <<'EOF'
#!/usr/bin/env sh
printf '%s\n' "$SSH_PASS"
EOF
  chmod 700 "$askpass_file"

  SSH_ASKPASS="$askpass_file" SSH_ASKPASS_REQUIRE=force DISPLAY=:0 ssh-add "$SSH_KEY" </dev/null
fi

app_env_file="$(mktemp)"
cleanup_paths+=("$app_env_file")
{
  printf 'DB_HOST=%s\n' "$DB_HOST"
  printf 'DB_PORT=%s\n' "$DB_PORT"
  printf 'DB_NAME=%s\n' "$DB_NAME"
  printf 'DB_USER=%s\n' "$DB_USER"
  printf 'DB_PASSWORD=%s\n' "$DB_PASSWORD"
  printf 'DB_CHARSET=%s\n' "$DB_CHARSET"
} > "$app_env_file"

rsync -avz --delete \
  -e "ssh -p ${SSH_PORT} -i ${SSH_KEY}" \
  --exclude ".git/" \
  --exclude ".env" \
  --exclude ".DS_Store" \
  --exclude "deploy.sh" \
  ./ "${SSH_USER}@${SSH_HOST}:${REMOTE_DIR}"

rsync -az \
  -e "ssh -p ${SSH_PORT} -i ${SSH_KEY}" \
  "$app_env_file" "${SSH_USER}@${SSH_HOST}:${REMOTE_DIR}.env"

ssh -p "$SSH_PORT" -i "$SSH_KEY" "${SSH_USER}@${SSH_HOST}" \
  "chmod 600 '${REMOTE_DIR}.env'"
