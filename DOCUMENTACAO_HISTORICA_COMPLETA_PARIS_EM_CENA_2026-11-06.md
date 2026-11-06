# Paris em Cena | Guias de Campo
## Documentação histórica, técnica e operacional

**Responsável:** Paula Cunha Fotografia  
**Período reconstruído:** 15 de outubro a 6 de novembro de 2026  
**Emissão:** 6 de novembro de 2026  
**Fuso horário utilizado:** Europe/Paris.  
**Projeto público atual:** https://github.com/paulamcunha/paris  
**Site público confirmado:** https://paulamcunha.github.io/paris/  
**Branch principal:** main.

> **Critério documental.** A cronologia reúne informações recuperadas das conversas anteriores e alterações efetivamente registradas no GitHub. Para 15/10 a 04/11, a evidência principal é a conversa, inclusive quando uma versão foi *declarada concluída*, mas a usuária relatou que não abria ou faltavam imagens. Para 05 e 06/11, há ainda commits verificáveis. Esta documentação não é uma transcrição literal de todas as mensagens de todos os chats e não declara testes que não foram executados.

## 1. Como o projeto chegou ao site atual

O Paris em Cena começou como um projeto de **20 guias de campo dos arrondissements**, voltados a Reels e vídeos curtos. Desde o início, eram prioritários: 14 tomadas de aproximadamente três segundos por lugar/guia, locais turísticos importantes, fotografias reais, orientações simples de enquadramento, deslocamentos por proximidade e mapas. O trabalho passou por protótipos em Canva, PPTX, PDFs, HTMLs separados, ZIPs, auditorias e finalmente um **HTML único** hospedado no GitHub.

**Situação em 06/11/2026:** há **26 painéis principais** no HTML, sendo uma página inicial, 20 arrondissements e cinco guias temáticos. O índice territorial atual informa **290 takes**, com 24 no 01 | Louvre e 14 em cada um dos demais 19 arrondissements. Números antigos como 280 ou 294 se referem a versões e critérios anteriores, não devem ser confundidos com a contagem atual.

| Guia ou coleção | Conteúdo atual registrado | Evidência/limite |
|---|---|---|
| 20 arrondissements | 290 takes (24 + 19 × 14) | Integrado ao HTML; auditoria visual geral e rotas reais não encerradas |
| Passagens cobertas | 14 fichas principais, cinco roteiros, inventário ampliado com 41 registros | Inventário mais amplo que as fichas completas |
| Igrejas de Paris | 14 fichas, 28 referências, mapa geral e quatro setores | Commit em 05/11 |
| Vista para a Torre Eiffel | 14 pontos gratuitos, 56 referências (55 arquivos distintos), mapa geral e quatro setores | Curadoria revisada; confirmação visual pendente |
| Pontes e Margens do Sena | 22 pontos, 88 fotos, seis mapas e cinco caminhadas | 88 arquivos encontrados no Wikimedia Commons; testes estruturais |
| Paris vista pelos reflexos | 14 pontos, 42 fotos, cinco mapas e roteiro de Reel de 42 s | Fotos dos lugares, nem sempre do reflexo; condições variáveis |

Os quantitativos de fotos são **referências no arquivo**, não atestados de que todas carregam, mostram o ângulo correto ou cumprem requisitos de licença.

## 2. Cronologia das conversas, decisões e entregas

### 15/10/2026 | Primeiro modelo dos guias

Foram estabelecidos **20 guias**, aproximadamente **14 takes de três segundos** cada, vídeo final em torno de **42 segundos**, instruções numeradas para filmagem e uma apresentação compreensível em campo. A direção visual discutida incluía fundo **#FCFCFC**, títulos em bordô **#890F0E** e imagens inicialmente **4:3**. A usuária rejeitou o fundo vermelho pela baixa legibilidade. Foram testadas provas em Canva/PPTX, inclusive uma prévia de duas páginas do Louvre; fotografias e extensão aos demais guias não estavam concluídas. Em parte dos testes, Louvre e Palais Royal foram tratados como guias separados.

### 16/10/2026 | Captura horizontal e revisão visual

Foi aceita a **captação horizontal 16:9** e ajustado o modelo visual. Faltavam verificação de todas as fotos, créditos, fontes e exportações. Mais tarde os próprios **materiais de consulta** chegaram a ser orientados em **9:16**, o que não contradiz necessariamente a captação horizontal: trata-se de formatos diferentes em etapas distintas do projeto.

### 26/10/2026 | Processo de filmagem e navegação

O fluxo considerava **gravar de 8 a 12 segundos** por tomada para editar trechos de cerca de 3 s, organizar deslocamentos por proximidade e separar a ordem física da caminhada da ordem narrativa na montagem. Foram discutidas fontes **Cormorant Garamond Semibold** e **Channe Regular**, capas e guias de aproximadamente 15 páginas. O mapa geral e os mapas de cada rota já eram requisitos. Alguns arquivos eram apenas cópias ou protótipos, sem todas as fotografias.

### 27 e 28/10/2026 | Revisão de identidade e modelos

Foram descritas versões de site e rotas para vários arrondissements, mas com fotografias ainda faltantes. Em **28/10**, a usuária pediu recriação sem comprometer originais, composição limpa, fundos claros, barra bordô, numeração consistente, fotos e créditos reais, prévias antes de aplicar mudanças aos 20 arrondissements. Houve arquivos de 15 páginas para Louvre e Palais Royal, mas o registro os qualificava como **modelos**, não produção fotográfica final aprovada.

### 29/10/2026 | Reformulação

A orientação voltou a favorecer páginas de guia **verticais 9:16**, eliminando rótulos provisórios como “GUIA DE CAMPO · PILOTO”. O Louvre servia de teste antes da aplicação ampla. A relação entre vídeo final, arquivo de leitura e captação foi mudando, portanto não cabe apresentar uma única especificação histórica como definitiva para todas as versões.

### 30/10/2026 | Mapas integrados

Sete guias foram relatados com mapas e navegação incorporados em HTML/ZIP. Ainda faltavam 13 arrondissements nessa etapa. A prioridade passou a ser conectar **cada ficha ao mapa**, com links para deslocamento a pé e funcionamento em computador e celular. O arquivo INICIO.html e os primeiros ZIPs permitiam navegação entre guias, mas a usuária encontrou problemas práticos de abertura em versões posteriores.

### 31/10/2026 | Pacotes completos e inconsistências

Foram anunciados ZIPs com 20 guias e **280 takes** (14 × 20), com arquivos de entrada e testes de integridade alegados. Uma auditoria posterior encontrou lacunas em 01, 04, 13 e 15, além de necessidade de revisar fotos, fontes, locais, rotas e abertura de arquivos. **Ter gerado um ZIP não significava que todos os itens estivessem plenamente validados.** A usuária insistiu em um pacote único e na conclusão das fotografias.

### 01/11/2026 | Curadoria turística e fotografias

Houve revisão do conjunto de lugares para eliminar pontos aleatórios, priorizar marcos turísticos e históricos e corrigir sobreposições. Registros intermediários falavam em **cerca de 190 fotografias incorporadas e 90 restantes**, variando conforme o pacote e a versão. A usuária não considerou a produção concluída enquanto faltassem referências, e solicitou inspeção individual. Mapas esquemáticos e distâncias não conferidas continuaram pendentes.

### 02/11/2026 | Padrão do Louvre, fotos online e mapa geral

O 01 | Louvre passou a ser o modelo obrigatório dos demais. A usuária aceitou fotografias **somente online**, pediu referências reais e diversificadas e solicitou **mapa geral do caminho**, além dos mapas por ponto. Determinou que os 14 lugares de cada arrondissement fossem **os externos mais relevantes**, incluindo lugares culturalmente importantes e ruas reconhecidas para fotografar a Torre Eiffel quando fizessem sentido. Relatos de arquivos que não abriam levaram a uma abordagem **um arrondissement por vez**. Parte das rotas OSM/IGN foi calculada em ensaios de teste, sem comprovar todos os percursos.

### 03/11/2026 | Auditoria de ponta a ponta e entrega individual

Foi criado o plano de auditoria global para fotos, coordenadas, fontes, layout, mapas online, navegação e facilidade de uso no celular. O modelo de 01 | Louvre e o requisito de **mapas online sem WebGL** foram reforçados. Guias como 14 | Observatoire, 15 | Vaugirard, 16 | Passy, 17 | Batignolles-Monceau, 19 | Buttes-Chaumont e 20 | Ménilmontant passaram por ciclos individuais. Foram relatados testes estruturais em Chromium para larguras móveis e desktop e integridade de ZIPs, mas não uma auditoria visual final de fotos externas, transporte e trajetos de todos os pontos. A usuária voltou a relatar arquivos que não abriam.

### 04/11/2026 | Consolidação e nome do projeto

O consolidado passou a ser descrito como **20 guias e 290 takes**: 24 para Louvre e 14 para cada um dos 19 restantes. O nome **Paris em Cena | Guias de Campo** foi sugerido para substituir nomes técnicos. Foram solicitados documentação detalhada e um prompt reutilizável para criar temas como galerias, igrejas, parques e ruas. Arquivos DOCX/ZIP de documentação foram anunciados, mas a usuária informou que **não conseguiam ser abertos**. Continuavam pendentes a inspeção visual das referências, pesquisa histórica remanescente e validação global dos mapas.

### 05/11/2026 | Passagens, GitHub, Codespaces e igrejas

**Manhã:** o guia de **passagens cobertas** ganhou 14 pontos detalhados, cinco roteiros e inventário ampliado de **41 registros**. Foram pedidos mapas separados e um mapa geral. A usuária observou links que não abriam no Google Maps e exigiu continuidade entre os roteiros. A incorporação em um único HTML consolidou acesso, pesquisa e navegação.

**17h32 a 18h02 (horário de Paris):** foi criado o repositório **privado** paulamcunha/paris-em-cena-guias-de-campo. O arquivo central **index.html** foi enviado. O GitHub Codespaces recebeu servidor Python na **porta 8000**, inicialmente privado, e rotina para consultar a branch **main a cada dois minutos**, apenas enquanto o Codespace estivesse ligado. A rotina evitava substituir alterações locais e exigia recarregar o navegador para ver novidades.

**18h33 a 18h34:** foram registrados no GitHub o guia de **14 igrejas**, KML, atalho igrejas.html e documentação. O conteúdo inclui **28 fotografias**, mapa geral e quatro mapas setoriais.

### 05/11/2026 | Torre Eiffel, três fases na mesma noite

**20h48:** entrou o primeiro guia de **34 pontos gratuitos** com vista para a Torre Eiffel.  
**20h55–21h07:** o conjunto foi reduzido para **18 locais adequados a ensaios de dia**, com retirada de referências noturnas, correção dos números, ordem, busca e âncoras.  
**21h30–21h32:** depois do pedido para conservar apenas locais gratuitos em que a Torre apareça e reunir **várias perspectivas do mesmo lugar**, a curadoria passou a **14 pontos, 56 referências**, quatro por lugar. Um novo KML foi criado. Na verificação, foram encontrados **55 nomes distintos de arquivos** entre as 56 referências, sem aprovar visualmente todas as imagens. Os KMLs históricos de 18 e 34 pontos permaneceram arquivados.

### 06/11/2026 | Guia Pontes e Margens do Sena

**09h26–09h34 (Paris):** foram integrados **22 pontos e 88 fotografias** reais de referência, um mapa geral e cinco mapas setoriais, além de cinco links de caminhada. Criaram-se arquivos de dados JSON, KML e o atalho pontes-sena.html. Uma correção ajustou o fechamento de seções na página inicial. Os testes estruturais encontraram 22 fichas, 88 links para as fontes, mapas JSON válidos, links de caminhada e âncoras internas coerentes. O catálogo Wikimedia Commons confirmou a existência dos arquivos, mas **não substituiu uma auditoria visual das imagens no navegador**.

### 06/11/2026 | Guia Paris vista pelos reflexos

**09h50–09h55 (Paris):** foi criado um guia para Reel de **14 tomadas × 3 segundos = 42 segundos**, com **42 fotografias documentais**, quatro setores, mapa geral e quatro mapas setoriais. Inclui reflexos em águas do Sena, vitrines, pisos molhados e poças temporárias. Cada ficha diferencia o **lugar real** da **condição necessária ao reflexo**; uma foto da localização não comprova o efeito. O setor central recebeu duas rotas móveis menores conectadas pela Rue de Rivoli. Foram criados JSON, KML, reflexos.html, README e relatório de auditoria.

### 06/11/2026 | Publicação GitHub Pages

**10h04 (Paris):** o workflow **.github/workflows/pages.yml** foi registrado para publicar HTML e KML na branch main. A primeira execução, identificada por **42192257604**, falhou na etapa configure-pages porque o GitHub Pages não estava ativado.

**Cerca de 10h13–10h17 (Paris):** a usuária alterou a configuração no GitHub, autorizou a publicação pública, configurou **GitHub Actions** como fonte e a tentativa 2 do workflow foi concluída **com sucesso às 10h17**. O site original foi verificado em https://paulamcunha.github.io/paris-em-cena-guias-de-campo/.

**Após 10h19 (Paris):** discutiu-se encurtar o endereço. O nome de usuário **paulacunha** pertence a outra conta e não pode ser utilizado na hospedagem da conta atual. A opção possível era **paulamcunha.github.io/paris/**. Na verificação realizada para esta documentação, o repositório estava **efetivamente renomeado para paulamcunha/paris**, público, e a nova URL **https://paulamcunha.github.io/paris/** abriu o Paris em Cena. A renomeação não gera um commit Git próprio, por isso **seu horário exato não pôde ser fixado**.

## 3. Decisões editoriais consolidadas

**Locais relevantes.** Não usar ruas aleatórias para completar números. Dar preferência a monumentos, marcos culturais, fachadas, praças, paisagens e pontos com justificativa fotográfica ou histórica. Conferir arrondissement, fontes e endereço.

**Tomadas e montagem.** O padrão recorrente é cerca de **3 s no vídeo final**, captando mais segundos no local. A ordem de visita é geográfica; a edição pode reordenar os takes para construir narrativa. Para Louvre, discutiu-se divisão em **dois vídeos com 10 a 12 takes**; isso foi proposta editorial, não alteração comprovada de todos os arquivos.

**Imagens.** Usar fotos reais, com créditos e referência ao lugar correto. Fotografia existente no Wikimedia Commons não significa que a miniatura carregue nem que mostre o ângulo escolhido. Em ensaio com Torre Eiffel, priorizar vistas gratuitas diurnas e várias perspectivas do mesmo local. Em reflexos, não confundir foto do lugar com exemplo confirmado do reflexo.

**Mapas.** Ter mapas individuais, por setor e geral, links OSM/Google Maps e roteiros por proximidade. Marcadores são **referências de localização**, não posições certificadas de câmera. Não inventar distâncias, duração, acesso ou continuidade. Evitar sistemas que dependam de WebGL.

**Leiaute.** Preserve o padrão do 01 | Louvre; boa leitura em celular e Mac; fundo claro, contraste suficiente e apresentação documental. Nos primeiros modelos foram discutidos **#FCFCFC** (fundo), **#890F0E** (bordô), **Channe Regular** e **Cormorant Garamond Semibold**, mas não se deve presumir que todos os HTMLs finais usem exatamente as mesmas fontes desses protótipos.

**Gratuidade.** Acesso gratuito ao exterior não equivale a autorização irrestrita para produção profissional. Passagens cobertas podem ter horários e regras; margens do Sena podem fechar por cheias.

## 4. Estrutura técnica atual

| Item | Configuração ou função |
|---|---|
| Repositório | https://github.com/paulamcunha/paris |
| Visibilidade | **Público** desde 06/11/2026 |
| Endereço ativo | https://paulamcunha.github.io/paris/ |
| Arquivo central | **index.html** |
| Branch | **main** |
| Hospedagem | GitHub Pages |
| Automação | **.github/workflows/pages.yml** |
| Acompanhamento | https://github.com/paulamcunha/paris/actions |
| Codespaces | Servidor Python, porta 8000 e sincronização a cada dois minutos quando ligado |
| Imagens | Fontes online externas, principalmente Wikimedia Commons |
| Cartografia | OpenStreetMap online e links externos Google Maps |

O workflow envia **index.html, outros .html e .kml** para o Pages. Arquivos **.md e .json** ficam no repositório público, mas não integram o artefato do site. O Pages permanece disponível sem Codespaces ligado. Para atualizações automáticas, é necessário **commit/push na main**, seguido de execução bem-sucedida do workflow. A simples alteração do texto em uma conversa **não modifica o site**.

### Arquivos importantes

- **index.html:** página inicial, 20 arrondissements, passagens, igrejas, Eiffel, pontes e reflexos.
- **igrejas.html, pontes-sena.html, reflexos.html:** atalhos que redirecionam para a seção correspondente.
- **Paris_em_Cena_Igrejas_14_pontos.kml:** locais das igrejas.
- **Paris_em_Cena_Eiffel_Ensaios_Diurnos_14_pontos.kml:** seleção atual da Torre Eiffel.
- **Paris_em_Cena_Pontes_Margens_Sena_22_pontos.kml:** mapa de pontes e margens.
- **Paris_em_Cena_Reflexos_14_pontos.kml:** mapa do Reel de reflexos.
- **pontes_margens_sena_dados.json:** dados das 22 fichas do Sena.
- **paris_vista_pelos_reflexos_dados.json:** dados das 14 fichas de reflexos.
- **AUDITORIA_PONTES_MARGENS_SENA_2026-11-06.md:** auditoria estrutural desse guia.
- **AUDITORIA_PARIS_VISTA_PELOS_REFLEXOS_2026-11-06.md:** auditoria do guia de reflexos.
- **.devcontainer/devcontainer.json, start-site.sh, sync-repo.sh:** ambiente e sincronização no Codespaces.
- **README.md:** instruções gerais. **Atenção:** contém passagens históricas mandando manter o repositório privado e não ativar Pages; essas frases ficaram **desatualizadas** depois da decisão de publicar o site em 06/11.

### Links internos diretos

| Coleção | Endereço |
|---|---|
| Arrondissements | https://paulamcunha.github.io/paris/#g01 até #g20 |
| Passagens | https://paulamcunha.github.io/paris/#passagens |
| Igrejas | https://paulamcunha.github.io/paris/#igrejas |
| Torre Eiffel | https://paulamcunha.github.io/paris/#torre-eiffel |
| Pontes e Margens do Sena | https://paulamcunha.github.io/paris/#pontes-sena |
| Paris vista pelos reflexos | https://paulamcunha.github.io/paris/#reflexos |

## 5. Erros, soluções e limites das verificações

| Erro ou dificuldade | Medida tomada | Situação |
|---|---|---|
| ZIP e HTML não abriam localmente | HTML único e, depois, hospedagem GitHub Pages | Site público responde; arquivos antigos não foram todos revalidados |
| Fotografias não apareciam | Fontes online, títulos do Commons e novas galerias | Teste de carregamento e inspeção visual total pendentes |
| Referências não eram do lugar ou eram noturnas | Curadoria, revisão Eiffel 34 → 18 → 14 | Estrutura revisada; adequação de todas as imagens não certificada |
| Pontos turísticos aleatórios | Seleção editorial reforçada por arrondissement | Revisão global ainda necessária |
| Mapa WebGL ou links quebrados | OSM sem WebGL, Google Maps, mapas gerais e por setor | Estrutura adicionada; navegação real em todos os aparelhos pendente |
| Rotas divididas sem continuidade | Revisão dos pontos de ligação, inclusive Rue de Rivoli | Links criados; distâncias e travessias não certificadas |
| Guias com leiautes divergentes | Modelo 01 | Louvre como padrão obrigatório | Padronização relatada; QA visual total pendente |
| Site dependia do Codespaces ligado | Workflow GitHub Pages e acesso público | **Resolvido quanto à hospedagem** |
| URL longa | Repositório renomeado para **paris** | **Novo endereço verificado** |

## 6. Pendências atuais em ordem de prioridade

1. **Direitos e privacidade pública.** A justificativa antiga “é só para uso pessoal” deixou de ser suficiente quando o site e o repositório ficaram públicos. Revisar licenças individuais, créditos, autores, condições de reprodução e histórico do GitHub antes de considerar a exposição pública definitiva. Link para o original pode não satisfazer sozinho todas as exigências de atribuição.
2. **Auditoria visual das imagens.** Conferir cada imagem aberta no navegador: miniatura funciona, lugar exato, luz adequada, variedade real de enquadramentos, autoria, licença e duplicações. Nos reflexos, confirmar a presença do efeito ou rotular a foto apenas como referência territorial.
3. **Mapas e caminhadas.** Conferir ordem por proximidade, travessias, acessibilidade, funcionamento do Google Maps, possíveis obras, horários e cheias do Sena. Não inventar tempos ou distâncias.
4. **Teste móvel e desktop.** Abrir no Chrome para Mac e em telas móveis; conferir menu, busca, âncoras, carregamento de fotos, mapas, botões de fallback, rolagem e velocidade.
5. **Auditoria dos 20 arrondissements.** Reexaminar as 290 fichas segundo relevância do lugar, coordenadas, fontes oficiais, materiais fotográficos e consistência com o 01 | Louvre.
6. **Documentação do repositório.** Atualizar avisos antigos de repositório privado; manter datas, versão e links atuais.

## 7. Procedimento recomendado para novos guias e alterações

**Etapa 1. Pesquisa e seleção.** Definir o conceito, listar pontos realmente relevantes e obter referências confiáveis. Separar ponto turístico, posição sugerida de câmera e início da caminhada.

**Etapa 2. Fotografias.** Procurar imagens reais e suas páginas originais; checar autor, licença, data, lugar, ângulo, horário e se a imagem efetivamente mostra o que a ficha promete.

**Etapa 3. Roteiros.** Agrupar por proximidade; gerar mapa geral, mapas setoriais e KML; confirmar rotas a pé no Google Maps. Se um trajeto for longo, dividir em setores conectados.

**Etapa 4. HTML.** Preservar leiaute, cores, responsividade, navegação e busca. Não quebrar âncoras existentes nem o mapa de outros guias.

**Etapa 5. QA de estrutura.** Conferir IDs duplicados, links internos, JSON de mapas, contagem de fotos e fichas e existência dos arquivos externos.

**Etapa 6. QA visual.** Abrir realmente o guia, fotos, mapas e links em Mac e celular. Registrar separadamente verificações concluídas e itens não testados.

**Etapa 7. Publicação.** Enviar mudanças para **main** do repositório paulamcunha/paris, conferir **Actions** e abrir https://paulamcunha.github.io/paris/ após publicação concluída.

**Etapa 8. Histórico.** Documentar data, arquivos, mudanças de quantidade, versões substituídas, resultados de testes e pendências sem declarar conclusões não verificadas.

## 8. Registro de todos os 38 commits do GitHub

A tabela abaixo reproduz **os 38 commits retornados pela API do repositório** na consulta de 06/11/2026. As datas foram convertidas para **Europe/Paris**. É um registro técnico verificável; as alterações anteriores ao repositório são descritas na linha do tempo das conversas acima.

| Data e hora em Paris | Commit | Mensagem registrada |
|---|---|---|
| 05/11/2026, 17:32 | [f49cc7f08c](https://github.com/paulamcunha/paris/commit/f49cc7f08cccd5bbbde5a2f0ecf6ed361d37aa05) | Iniciar repositório privado Paris em Cena |
| 05/11/2026, 17:33 | [9540c59c3f](https://github.com/paulamcunha/paris/commit/9540c59c3f0843e6469b239f5f7ec11e636481e0) | Publicar HTML completo de Paris em Cena em repositório privado |
| 05/11/2026, 17:33 | [cbf37a16ea](https://github.com/paulamcunha/paris/commit/cbf37a16ea3c30c9cc3df3549b202c0252356b6a) | Configurar Codespaces com porta 8000 privada |
| 05/11/2026, 17:33 | [57dadd0094](https://github.com/paulamcunha/paris/commit/57dadd00944da65d31a8d11c02e12b49fe4ce338) | Adicionar servidor local para abrir Paris em Cena no Codespaces |
| 05/11/2026, 18:01 | [e853967d7a](https://github.com/paulamcunha/paris/commit/e853967d7a4821ff3ccce3c5378bc7c8d9850423) | Adicionar sincronização automática segura a cada 2 minutos |
| 05/11/2026, 18:01 | [491aad17d9](https://github.com/paulamcunha/paris/commit/491aad17d9cb4634f65b3f2953cb664c94968135) | Ativar verificação automática de atualizações ao iniciar Codespaces |
| 05/11/2026, 18:01 | [9ecdbd4ac7](https://github.com/paulamcunha/paris/commit/9ecdbd4ac72385e479bb335f54a81a93b4724c79) | Documentar sincronização automática e ativação no Codespaces |
| 05/11/2026, 18:33 | [16406a64bb](https://github.com/paulamcunha/paris/commit/16406a64bb3b5533aacb3598d9398f7675a24d88) | Adicionar KML com as 14 igrejas verificadas |
| 05/11/2026, 18:33 | [7380bdd794](https://github.com/paulamcunha/paris/commit/7380bdd794f49e0737a608eb6b59b101c5adb21a) | Criar acesso direto ao guia de igrejas |
| 05/11/2026, 18:33 | [069009e5dc](https://github.com/paulamcunha/paris/commit/069009e5dcfab0f9fe6ed1b19148914e76496dbe) | Adicionar guia completo de igrejas ao Paris em Cena |
| 05/11/2026, 18:33 | [8c6422b8dc](https://github.com/paulamcunha/paris/commit/8c6422b8dc65e3f920c8826f97b76743982d5c02) | Documentar novo guia de igrejas e links de acesso |
| 05/11/2026, 20:48 | [020d7fdf7d](https://github.com/paulamcunha/paris/commit/020d7fdf7d1527d456a3a08eb3cf8fb1db3386fe) | Adicionar KML com 34 pontos gratuitos da Torre Eiffel |
| 05/11/2026, 20:48 | [da8c639e0b](https://github.com/paulamcunha/paris/commit/da8c639e0b0f0cc41b0307a1e6f1e6f8d188a3b8) | Integrar guia de 34 vistas gratuitas da Torre Eiffel ao Paris em Cena |
| 05/11/2026, 20:55 | [2a16af6020](https://github.com/paulamcunha/paris/commit/2a16af60209803259387ea56a1d410a72696e15b) | Adicionar KML de 18 pontos gratuitos para ensaios de dia |
| 05/11/2026, 20:55 | [ea77f88159](https://github.com/paulamcunha/paris/commit/ea77f881591e45af2ff80d74b4de9027e3eb709a) | Selecionar pontos de ensaio diurno na Torre Eiffel e substituir fotos noturnas |
| 05/11/2026, 20:58 | [40f6e0a444](https://github.com/paulamcunha/paris/commit/40f6e0a4446c73cae9a1d09d9cb9f83ec03be3c5) | Corrigir numeracao do mapa de ensaios da Torre Eiffel de 01 a 18 |
| 05/11/2026, 20:58 | [9ab74846a9](https://github.com/paulamcunha/paris/commit/9ab74846a9be4d04f16e265c2218007c50fed7ff) | Corrigir ordem dos takes e manter apenas fotos diurnas verificadas nos pontos de ensaio |
| 05/11/2026, 20:58 | [c57f44ca18](https://github.com/paulamcunha/paris/commit/c57f44ca180745109203cdf58832aa4c10855885) | Alinhar links dos marcadores aos 18 takes do guia de ensaios diurnos |
| 05/11/2026, 21:07 | [df1fba5db6](https://github.com/paulamcunha/paris/commit/df1fba5db69726036ef4be7ee275f5be30d3cbc2) | Sincronizar capa, busca e mapas do guia de 18 ensaios diurnos |
| 05/11/2026, 21:07 | [f30638e30f](https://github.com/paulamcunha/paris/commit/f30638e30fa7053f5ede3bc49bcc9567af5f872d) | Documentar guia revisado de ensaios diurnos com 18 pontos |
| 05/11/2026, 21:30 | [b9a143fa55](https://github.com/paulamcunha/paris/commit/b9a143fa55a2641a9c71c3987b96d706bd664e55) | Curar 14 pontos gratuitos da Torre Eiffel e ampliar para 56 fotografias por ângulos |
| 05/11/2026, 21:30 | [6151ab2a9a](https://github.com/paulamcunha/paris/commit/6151ab2a9aa953ccecf240b70783ff697462055f) | Adicionar KML final dos 14 lugares gratuitos para ensaio da Torre Eiffel |
| 05/11/2026, 21:31 | [db73062f8f](https://github.com/paulamcunha/paris/commit/db73062f8f24b24d9c2c2fa0bd60d040d9595785) | Atualizar documentação da curadoria da Torre Eiffel: 14 locais e 56 referências |
| 06/11/2026, 09:26 | [b6756304c6](https://github.com/paulamcunha/paris/commit/b6756304c62ad3f045f4647b3922c0d2175844f4) | Catalogar 22 pontos de pontes e margens do Sena, 88 fotos e coordenadas para guia de campo |
| 06/11/2026, 09:29 | [cce0ae715a](https://github.com/paulamcunha/paris/commit/cce0ae715ae41d4dc2076a987f6229f2e702ebff) | Integrar Pontes e Margens do Sena: 22 lugares, 88 fotos e seis mapas |
| 06/11/2026, 09:30 | [aab3deee7c](https://github.com/paulamcunha/paris/commit/aab3deee7c7f5065c4aa672a378a344b2098684c) | Adicionar mapa KML dos 22 pontos das pontes e margens do Sena |
| 06/11/2026, 09:30 | [9e348987ce](https://github.com/paulamcunha/paris/commit/9e348987ce433217bd7065814f93ec126ae2983e) | Adicionar acesso direto ao guia Pontes e Margens do Sena |
| 06/11/2026, 09:32 | [dce6d1fbec](https://github.com/paulamcunha/paris/commit/dce6d1fbec500d30d99b82b478d08b41c84b57a5) | Documentar Pontes e Margens do Sena e resultados da auditoria estrutural |
| 06/11/2026, 09:32 | [f4a5313001](https://github.com/paulamcunha/paris/commit/f4a53130013046a3c31bf52b4a247c9965fd3336) | Registrar auditoria estrutural e pendências visuais do guia Pontes e Margens do Sena |
| 06/11/2026, 09:34 | [145bca5896](https://github.com/paulamcunha/paris/commit/145bca589606d9967a33141261e4b689421b080e) | Corrigir aninhamento das seções temáticas na página inicial |
| 06/11/2026, 09:50 | [7fee747215](https://github.com/paulamcunha/paris/commit/7fee747215dd70a51b2461b5d81428bfa9bcf7f0) | Catalogar 14 pontos para Reel Paris vista pelos reflexos, 42 imagens e instruções de vídeo |
| 06/11/2026, 09:53 | [679ae964f5](https://github.com/paulamcunha/paris/commit/679ae964f59eabf223c574bba057fe4956a8d58a) | Criar Paris vista pelos reflexos: 14 fichas, 42 referências e 5 mapas |
| 06/11/2026, 09:53 | [89881d7a73](https://github.com/paulamcunha/paris/commit/89881d7a73c0a5121854b916c686741cf1cb78e9) | Adicionar mapa KML dos 14 pontos do Reel de reflexos |
| 06/11/2026, 09:53 | [585b9d8185](https://github.com/paulamcunha/paris/commit/585b9d8185ea02d3f7f7cbc72f5d317547b1ca18) | Adicionar atalho HTML para Paris vista pelos reflexos |
| 06/11/2026, 09:54 | [6445dbec31](https://github.com/paulamcunha/paris/commit/6445dbec3147f989126b60ab46a11443375f3f3b) | Ligar os dois trechos pedestres do setor central para uso no celular |
| 06/11/2026, 09:55 | [b2711e0d1b](https://github.com/paulamcunha/paris/commit/b2711e0d1bb7275cea6c08a430b86652d20c4d4e) | Documentar guia Paris vista pelos reflexos e limites da auditoria |
| 06/11/2026, 09:55 | [6e7a2931c0](https://github.com/paulamcunha/paris/commit/6e7a2931c0cbe5e01143164ba738e37abd33f465) | Registrar auditoria editorial e limitações do guia Paris vista pelos reflexos |
| 06/11/2026, 10:04 | [afb4e17176](https://github.com/paulamcunha/paris/commit/afb4e17176011719d10e7645d247f579a3532f2a) | Preparar publicação automática do HTML e KML no GitHub Pages |

## 9. Fontes e metodologia

**Fonte 1, histórico conversacional:** recuperadas as conversas relacionadas ao projeto entre 15/10 e 06/11, preservando distinção entre pedidos, protótipos, entregas declaradas e correções. As antigas contagens contraditórias refletem versões diferentes.

**Fonte 2, histórico do GitHub:** https://github.com/paulamcunha/paris/commits/main

**Fonte 3, workflow e execução:** https://github.com/paulamcunha/paris/actions/runs/42192257604 (primeira tentativa falhou; segunda terminou com sucesso).

**Fonte 4, documentação e arquivos:** https://github.com/paulamcunha/paris

**Fonte 5, site público:** https://paulamcunha.github.io/paris/ (abertura verificada em 06/11/2026).

**Fonte 6, informações territoriais e fotografias:** OpenStreetMap, Google Maps, Wikimedia Commons, Ville de Paris e Paris je t’aime, com consultas pontuais a serviços de roteamento/IGN durante o desenvolvimento.

**Limitação explícita:** não há transcrição integral de todos os chats nem certificação de todos os arquivos ZIP/PDF históricos; menções a testes “realizados” antes de o projeto estar no GitHub são **relatos existentes nas conversas**, não necessariamente reproduzidos ou revalidados nesta revisão.

## 10. Situação consolidada e próximos temas

**Site:** público e funcionando no endereço curto.  
**Conteúdo:** 20 arrondissements e cinco coleções temáticas integradas.  
**Auditoria:** estrutura recente verificada; fotografia, cartografia, condições locais e uso público das imagens ainda exigem revisão.  
**Guias discutidos e não incorporados até a data desta documentação:** **Parques e Jardins de Paris**, **Praças Históricas de Paris**, **Fontes e Esculturas de Paris**.

**Versão documental: 1.0, 6 de novembro de 2026.**

**Fim da documentação.**
