# Paris em Cena | Guias de Campo

Projeto pessoal, com os 20 arrondissements de Paris e as passagens cobertas, fotografias de referência e acesso a OpenStreetMap e Google Maps.

## Acesso ao site, exclusivamente pelo GitHub

Este repositório é **privado**. Não ative o GitHub Pages: em uma conta pessoal, o site publicado pelo Pages pode ser público mesmo que o código esteja privado.

O site pode ser aberto com **GitHub Codespaces**, com a porta 8000 configurada como **Private**. Ela exige autenticação no GitHub e funciona quando o Codespace está em execução.

1. No repositório, selecione **Code > Codespaces > Create codespace on main**.
2. Espere o ambiente iniciar automaticamente o servidor local.
3. Na aba **Ports**, confira que a porta **8000** esteja marcada como **Private**. Se necessário, altere a visibilidade antes de abrir o endereço.
4. Abra a URL da porta 8000. O arquivo `index.html` é a página inicial.
5. Para usar novamente: abra https://github.com/codespaces e inicie o Codespace salvo.

**Importante:** Codespaces pode consumir sua franquia gratuita e eventualmente gerar custos conforme o plano e as configurações da conta. Encerre o Codespace quando não estiver utilizando. A URL fica indisponível enquanto ele estiver parado.

As fotografias e os mapas dependem da internet e de serviços externos. Os percursos a pé precisam ser conferidos antes do uso em campo.

## Atualização automática do site

O Codespaces verifica a branch `main` no GitHub **a cada 2 minutos**, enquanto estiver ligado.

- Quando novas versões são enviadas ao GitHub, os arquivos locais são sincronizados automaticamente.
- Para ver a nova versão, **recarregue a página do site** no navegador. A página aberta não é recarregada automaticamente para não interromper a consulta de um guia.
- O processo não apaga alterações locais. Se houver edições não publicadas no Codespaces ou histórico divergente, a atualização será adiada por segurança.
- Com o Codespaces parado, nenhuma sincronização acontece. Ao iniciar novamente, o processo retoma as verificações.
- Se o Codespace já existia antes desta configuração, execute uma única vez `git pull --ff-only origin main` no terminal e depois `bash .devcontainer/start-site.sh` para ativar a rotina. Em Codespaces novos, a configuração inicia sozinha.
- Registro de funcionamento: `/tmp/paris-em-cena-sync.log`.
- Para conferir manualmente: `bash .devcontainer/sync-repo.sh --once`.

**Atenção:** a sincronização mantém os arquivos da branch `main` atualizados, mas não publica alterações sem solicitação. Acesso privado depende do repositório privado e da porta 8000 em modo **Private**.

## Arquivos

- `index.html`: site completo.
- `.devcontainer/devcontainer.json`: configura o ambiente e a porta 8000.
- `.devcontainer/start-site.sh`: inicia o servidor HTTP do Python e a sincronização.\n- `.devcontainer/sync-repo.sh`: verifica novas versões a cada dois minutos.

**Privacidade:** mantenha o repositório privado, a porta 8000 privada e não ative GitHub Pages ou outro serviço de hospedagem pública.

## Guia temático das igrejas de Paris

O guia **Igrejas de Paris** está integrado à página inicial, com 14 takes, 28 fotografias de referência, quatro mapas setoriais, mapa geral com 14 marcadores e links de caminhada no Google Maps.

- No site, selecione **Igrejas de Paris** no menu ou abra `index.html#igrejas`.
- O arquivo `igrejas.html` abre a mesma seção do site.
- O arquivo `Paris_em_Cena_Igrejas_14_pontos.kml` permite importar os 14 marcadores para o Google My Maps.
- Os mapas mostram localização; os trajetos a pé são calculados externamente pelo Google Maps e devem ser conferidos antes da saída.
- Fotografias de referência e mapas dependem de internet.
