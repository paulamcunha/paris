#!/usr/bin/env bash
set -eu
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

# Inicia o site uma única vez, preservando a porta 8000.
if curl -fsS --max-time 2 http://127.0.0.1:8000/index.html >/dev/null 2>&1; then
  echo "Paris em Cena: servidor já está ativo na porta 8000."
else
  nohup python3 -m http.server 8000 --bind 0.0.0.0 >/tmp/paris-em-cena-http.log 2>&1 </dev/null &
  ready=0
  for i in 1 2 3 4 5; do
    if curl -fsS --max-time 2 http://127.0.0.1:8000/index.html >/dev/null 2>&1; then
      ready=1
      break
    fi
    sleep 1
  done
  if [[ "$ready" -ne 1 ]]; then
    echo "Falha ao iniciar site. Confira /tmp/paris-em-cena-http.log" >&2
    exit 1
  fi
  echo "Paris em Cena: site disponível na porta 8000."
fi

# Sincroniza atualizações do GitHub em segundo plano, sem alterar arquivos em uso.
pidfile=/tmp/paris-em-cena-sync.pid
if [[ -f "$pidfile" ]] && kill -0 "$(cat "$pidfile")" 2>/dev/null; then
  echo "Paris em Cena: sincronização automática já está ativa."
else
  nohup bash .devcontainer/sync-repo.sh >>/tmp/paris-em-cena-sync.log 2>&1 </dev/null &
  echo "$!" > "$pidfile"
  echo "Paris em Cena: sincronização automática iniciada (a cada 2 minutos)."
fi
