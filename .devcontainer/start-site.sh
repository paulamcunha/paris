#!/usr/bin/env bash
set -eu
cd "$(dirname "${BASH_SOURCE[0]}")/.."
if curl -fsS --max-time 2 http://127.0.0.1:8000/index.html >/dev/null 2>&1; then
  echo "Paris em Cena: servidor já está ativo na porta 8000."
  exit 0
fi
nohup python3 -m http.server 8000 --bind 0.0.0.0 >/tmp/paris-em-cena-http.log 2>&1 </dev/null &
for i in 1 2 3 4 5; do
  if curl -fsS --max-time 2 http://127.0.0.1:8000/index.html >/dev/null 2>&1; then
    echo "Paris em Cena: site em execução na porta 8000."
    exit 0
  fi
  sleep 1
done
echo "Não foi possível iniciar o servidor. Confira /tmp/paris-em-cena-http.log" >&2
exit 1
