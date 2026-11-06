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

## Guia de ensaios diurnos com vista para a Torre Eiffel

O guia **Paris com Vista para a Torre Eiffel** contém **14 pontos externos gratuitos**, organizados em **quatro setores por proximidade**. São **56 referências visuais**, com **quatro fotografias por ficha**. Todas as imagens apontam para arquivos catalogados no Wikimedia Commons, com link para a página original e os créditos. A galeria não inclui imagens geradas por IA.

- No site, selecione **Vistas da Torre Eiffel** no menu ou abra `index.html#torre-eiffel`.
- Mapa geral: 14 marcadores. Mapas setoriais: 5, 4, 3 e 2 marcadores.
- O arquivo atual é `Paris_em_Cena_Eiffel_Ensaios_Diurnos_14_pontos.kml`. O KML antigo de 18 pontos permanece no histórico do projeto, mas não é mais o arquivo recomendado.
- As fotos são referências documentais, e não ensaios de clientes ou sugestões de poses. A perspectiva real, o horário e a presença da Torre em cada imagem devem ser conferidos na ficha original.
- Os links do Google Maps são trajetos propostos. Acessibilidade, obras, eventuais restrições locais e tempo real de caminhada devem ser confirmados antes da sessão.
- O acesso ao site continua privado pelo GitHub Codespaces. As imagens externas e mapas dependem da internet.

## Guia Pontes e Margens do Sena

A coleção temática **Pontes e Margens do Sena** foi integrada à página inicial e ao menu lateral:

- **22 locais externos de acesso gratuito**: pontes históricas, passarelas e pontos nas margens do Sena;
- **88 fotografias de referência**, quatro por lugar, cada uma com link individual para o arquivo original e seus créditos no Wikimedia Commons;
- **6 mapas**: um geral com 22 marcadores e cinco setoriais com 4, 5, 5, 5 e 3 pontos;
- **5 percursos a pé** calculáveis por Google Maps, separados por proximidade;
- página no site: `index.html#pontes-sena`;
- atalho: `pontes-sena.html`, que redireciona para a seção no site;
- KML: `Paris_em_Cena_Pontes_Margens_Sena_22_pontos.kml`;
- fonte de dados editável: `pontes_margens_sena_dados.json`.

**Verificações efetuadas em 06/11/2026**: os 88 nomes de arquivos foram encontrados no Wikimedia Commons; 22 fichas, 88 URLs de imagem, seis configurações válidas de mapas, cinco links de caminhada e 22 entradas de busca foram verificados na estrutura HTML. Não foram identificados IDs duplicados nem links internos sem destino.

**Pendências importantes:** é necessário abrir o site para conferir se todas as fotos carregam, verificar visualmente a iluminação e a diversidade real dos ângulos, inspecionar o enquadramento apropriado de cada local e testar em celular/Mac os mapas e a navegação externa. A API confirma a existência dos arquivos, não a qualidade visual nem o funcionamento da visualização no navegador. Distâncias e caminhos a pé devem ser conferidos antes de ir ao local. Acesso público e gratuito não equivale à autorização para fechar a via ou ocupar espaço com equipamentos de produção.

## Guia Paris vista pelos reflexos

Nova coleção temática de Reel documental, acessível pelo menu **Paris vista pelos reflexos** ou pelo endereço `index.html#reflexos`. O arquivo `reflexos.html` redireciona para o guia principal.

- **14 locais**, selecionados para reflexos no Sena, espelhos d’água, vitrines e poças temporárias;
- **42 fotografias documentais reais**, três por lugar, com links individuais para as fichas de imagem do Wikimedia Commons;
- **5 mapas**: um geral de 14 pontos e quatro setoriais com **3, 2, 6 e 3** pontos, com Google Maps para percursos a pé;
- **Reel de 42 segundos**, com roteiro editorial de 14 tomadas de aproximadamente três segundos;
- **KML**: `Paris_em_Cena_Reflexos_14_pontos.kml`;
- **dados de edição**: `paris_vista_pelos_reflexos_dados.json`.

**Nota editorial:** As 42 fotografias são referências de cada lugar e **não garantem que os reflexos desejados estejam visíveis nas imagens**. A gravação depende de chuva recente, incidência de luz, vento, superfície molhada e estado dos espelhos d’água. O Passage des Panoramas e a Galerie Vivienne são passagens cobertas com acesso público gratuito geralmente sujeito a regras e horários, não locais externos disponíveis 24 horas.

**Verificações em 06/11/2026:** os 42 títulos de fotografias foram conferidos no catálogo do Wikimedia Commons. A seção HTML contém 14 fichas, 42 imagens, cinco configurações de mapas, 14 entradas de busca e os links do mapa KML. O trajeto setorial mais longo oferece ainda dois links menores conectados para uso no celular.

**A validar:** abertura e apresentação das fotografias no navegador, adequação visual de cada imagem ao tema, variações reais de enquadramento, carregamento dos mapas no Chrome e no celular, tempo e acessibilidade dos deslocamentos e situação de água/chuva/acesso no momento de gravar. Nenhum desses testes externos foi considerado concluído pela validação de estrutura.
