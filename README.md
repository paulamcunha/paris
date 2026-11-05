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

## Arquivos

- `index.html`: site completo.
- `.devcontainer/devcontainer.json`: configura o ambiente e a porta 8000.
- `.devcontainer/start-site.sh`: inicia o servidor HTTP do Python.

**Privacidade:** mantenha o repositório privado, a porta 8000 privada e não ative GitHub Pages ou outro serviço de hospedagem pública.
