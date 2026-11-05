#!/usr/bin/env bash
# Sincroniza somente a branch principal, sem sobrescrever alterações locais.
set -u
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
INTERVAL="${PARIS_SYNC_INTERVAL_SECONDS:-120}"
export GIT_TERMINAL_PROMPT=0
export GCM_INTERACTIVE=never

log() { printf '[%s] %s\n' "$(date '+%Y-%m-%d %H:%M:%S %z')" "$*"; }

sync_once() {
  cd "$ROOT" || return 1
  if [[ "$(git branch --show-current 2>/dev/null)" != "main" ]]; then
    log "Sincronização ignorada: branch atual não é main."
    return 0
  fi
  if [[ -n "$(git status --porcelain --untracked-files=no 2>/dev/null)" ]]; then
    log "Sincronização adiada: existem mudanças locais. Nada foi sobrescrito."
    return 0
  fi
  if ! git fetch --quiet origin main; then
    log "Falha ao consultar origin/main; nova tentativa no próximo ciclo."
    return 1
  fi
  local current remote
  current="$(git rev-parse HEAD)" || return 1
  remote="$(git rev-parse FETCH_HEAD)" || return 1
  if [[ "$current" == "$remote" ]]; then
    log "Site atualizado: ${current:0:8}."
    return 0
  fi
  if ! git merge-base --is-ancestor "$current" "$remote"; then
    log "Sincronização adiada: histórico divergente. Nada foi sobrescrito."
    return 0
  fi
  if git -c merge.autoStash=false merge --ff-only "$remote"; then
    log "Versão aplicada automaticamente: ${remote:0:8}."
  else
    log "Falha ao aplicar a nova versão; arquivos locais preservados."
    return 1
  fi
}

if [[ "${1:-}" == "--once" ]]; then
  sync_once
  exit $?
fi

if ! [[ "$INTERVAL" =~ ^[0-9]+$ ]] || (( INTERVAL < 30 )); then
  log "Intervalo inválido; usando 120 segundos."
  INTERVAL=120
fi
log "Sincronização iniciada: busca de atualizações a cada ${INTERVAL}s."
while true; do
  sync_once || true
  sleep "$INTERVAL"
done
