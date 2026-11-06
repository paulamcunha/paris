# Paris em Cena | Guias de Campo

Projeto pessoal, com os 20 arrondissements de Paris e 10 coleções temáticas (Passagens cobertas, Igrejas de Paris, Paris com Vista para a Torre Eiffel, Pontes e Margens do Sena, Paris vista pelos reflexos, Paris secreta: vilas, pátios e ruas silenciosas, Mirantes, escadarias e perspectivas elevadas, Cafés históricos, livrarias e fachadas clássicas, Jardins, parques e fontes monumentais e Paris Art Nouveau e Art Déco: arquitetura e detalhes), totalizando **30 guias**, **438 takes documentais** (+ 41 fichas históricas de passagens cobertas), **1.267 fotografias de referência verificadas no Wikimedia Commons** (100% dos 438 takes com 2 a 4 fotografias), **72 mapas interativos**, **230 links de itinerários a pé** no Google Maps e **31 arquivos KML** (incluindo o KML Mestre unificado `Paris_em_Cena_Completo_438_pontos.kml`).

## Site público e acesso ao repositório

Desde **6 de novembro de 2026**, o repositório é **público** e o site foi publicado no **GitHub Pages**, com autorização da responsável.

**Site:** https://paulamcunha.github.io/paris/  
**Repositório:** https://github.com/paulamcunha/paris  
**Publicação automática:** GitHub Actions, arquivo `.github/workflows/pages.yml`, acionado por alterações em HTML, CSS, KML ou no workflow na branch `main`.

A configuração original privada com Codespaces descrita abaixo permanece disponível como **alternativa de desenvolvimento**, não é mais necessária para consultar o site publicado.

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

- `AUDITORIA_PONTO_A_PONTO_2026-11-06.md`: inventário e auditoria de ponta a ponta dos 438 takes nos 30 guias, com coordenadas exatas, distâncias e tempos estimados ponto a ponto (`N → N+1`) e verificação de licenças das 1.267 fotografias (`0` anomalias).
- `AUDITORIA_COMPLETA_2026-11-06.md`: relatório completo da auditoria técnica, visual, cartográfica, de acessibilidade e expansão fotográfica (de 626 para 1.267 fotografias verificadas em takes), com status dos 30 guias e resultados das suítes de testes automatizados em navegador.
- `DOCUMENTACAO_HISTORICA_COMPLETA_PARIS_EM_CENA_2026-11-06.md`: histórico de 15/10 a 06/11, decisões, entregas, auditorias, links e 38 commits anteriores à sua criação.
- `index.html`: site completo com os 30 guias integrados.
- `ajustes-tipografia.css`: folha de estilo complementar vinculada em `index.html` com regras responsivas de tipografia (corpo `16 px`, legendas `>= 14 px`), espaçamento de links e acessibilidade.
- `tests/auditoria-automatizada.mjs`: suíte reproduzível de testes automatizados em navegador (Google Chrome Headless via CDP) para os 13 requisitos funcionais e 8 larguras de tela (`320` a `1920 px`).
- `.devcontainer/devcontainer.json`: configura o ambiente e a porta 8000.
- `.devcontainer/start-site.sh`: inicia o servidor HTTP do Python e a sincronização.
- `.devcontainer/sync-repo.sh`: verifica novas versões a cada dois minutos.

**Observação histórica:** o projeto começou privado e foi publicado publicamente em 06/11/2026. O GitHub Pages e o repositório são públicos. Para trabalho de desenvolvimento, pode-se manter a porta 8000 do Codespaces como **Private**. Verifique sempre as licenças e atribuições das fotografias usadas em páginas públicas.

## Guia temático das igrejas de Paris

O guia **Igrejas de Paris** está integrado à página inicial, com 14 takes, 28 fotografias de referência com créditos e licenças verificados, quatro mapas setoriais, mapa geral com 14 marcadores, estimativa de caminhada via rede de pedestres OSRM e links de caminhada no Google Maps.

- No site, selecione **Igrejas de Paris** no menu ou abra `index.html#igrejas`.
- O arquivo `igrejas.html` abre a mesma seção do site.
- O arquivo `Paris_em_Cena_Igrejas_14_pontos.kml` permite importar os 14 marcadores para o Google My Maps.
- Os mapas mostram localização; os trajetos a pé são calculados externamente pelo Google Maps e devem ser conferidos antes da saída.
- Fotografias de referência e mapas dependem de internet.

## Guia de ensaios diurnos com vista para a Torre Eiffel

O guia **Paris com Vista para a Torre Eiffel** contém **14 pontos externos gratuitos**, organizados em **quatro setores por proximidade**. São **56 referências visuais únicas**, com **quatro fotografias por ficha**, todas catalogadas no Wikimedia Commons com link para a página original, autoria, ano e licença. A galeria não inclui imagens geradas por IA.

- No site, selecione **Vistas da Torre Eiffel** no menu ou abra `index.html#torre-eiffel`.
- Mapa geral: 14 marcadores. Mapas setoriais: 5, 4, 3 e 2 marcadores.
- O arquivo atual é `Paris_em_Cena_Eiffel_Ensaios_Diurnos_14_pontos.kml`. O KML antigo de 18 pontos permanece no histórico do projeto, mas não é mais o arquivo recomendado.
- As fotos são referências documentais, e não ensaios de clientes ou sugestões de poses. A perspectiva real, o horário e a presença da Torre em cada imagem devem ser conferidos na ficha original.
- Os links do Google Maps são trajetos propostos. Acessibilidade, obras, eventuais restrições locais e tempo real de caminhada devem ser confirmados antes da sessão.

## Guia Pontes e Margens do Sena

A coleção temática **Pontes e Margens do Sena** está integrada à página inicial e ao menu lateral:

- **22 locais externos de acesso gratuito**: pontes históricas, passarelas e pontos nas margens do Sena;
- **88 fotografias de referência**, quatro por lugar, cada uma com link individual para o arquivo original, autoria, ano e licença no Wikimedia Commons;
- **6 mapas**: um geral com 22 marcadores e cinco setoriais com 4, 5, 5, 5 e 3 pontos;
- **5 percursos a pé** calculáveis por Google Maps, separados por proximidade;
- página no site: `index.html#pontes-sena`;
- atalho: `pontes-sena.html`, que redireciona para a seção no site;
- KML: `Paris_em_Cena_Pontes_Margens_Sena_22_pontos.kml`;
- fonte de dados editável: `pontes_margens_sena_dados.json`.

## Guia Paris vista pelos reflexos

Coleção temática de Reel documental, acessível pelo menu **Paris vista pelos reflexos** ou pelo endereço `index.html#reflexos`. O arquivo `reflexos.html` redireciona para o guia principal.

- **14 locais**, selecionados para reflexos no Sena, espelhos d’água, vitrines e poças temporárias;
- **42 fotografias documentais reais**, três por lugar, com links individuais, autoria, ano e licença verificados no Wikimedia Commons;
- **5 mapas**: um geral de 14 pontos e quatro setoriais com **3, 2, 6 e 3** pontos, com Google Maps para percursos a pé;
- **Reel de 42 segundos**, com roteiro editorial de 14 tomadas de aproximadamente três segundos;
- **KML**: `Paris_em_Cena_Reflexos_14_pontos.kml`;
- **dados de edição**: `paris_vista_pelos_reflexos_dados.json`.

**Nota editorial:** As 42 fotografias são referências de cada lugar e **não garantem que os reflexos desejados estejam visíveis nas imagens**. A gravação depende de chuva recente, incidência de luz, vento, superfície molhada e estado dos espelhos d’água. O Passage des Panoramas e a Galerie Vivienne são passagens cobertas com acesso público gratuito geralmente sujeito a regras e horários, não locais externos disponíveis 24 horas.

## Cinco novas coleções temáticas diurnas (2026)

1. **Paris secreta: vilas, pátios e ruas silenciosas (`index.html#paris-secreta` / `paris-secreta.html`)**
   - **14 refúgios silenciosos** (Hôtel de Sully, Cour Damoye, Passage Lhomme, Cour de l’Industrie, Petite Alsace, Cité Florale, Square des Peupliers, Rue des Thermopyles, Villa Seurat, Villa Santos-Dumont, Cité des Fleurs, Quartier de la Mouzaïa, Villa de l’Ermitage e La Campagne à Paris), ideais para gravar locução em câmera (áudio limpo sem trânsito) e fotografar a Paris intimista;
   - **42 fotografias documentais verificadas** no Wikimedia Commons (3 por ponto), **5 mapas** (1 geral + 4 setoriais), KML (`Paris_em_Cena_Paris_Secreta_14_pontos.kml`) e JSON (`paris_secreta_dados.json`).
2. **Mirantes, escadarias e perspectivas elevadas (`index.html#mirantes` / `mirantes.html`)**
   - **14 pontos elevados** (Parvis du Sacré-Cœur, Square Louise-Michel, Place Dalida, Place du Tertre, Butte Bergeyre, Île du Belvédère em Buttes-Chaumont, Butte-du-Chapeau-Rouge, Belvédère Willy-Ronis em Belleville, Terraço Galeries Lafayette, Terraço Printemps Haussmann, Place de l’Étoile, Esplanade du Trocadéro, Belvedere Bir-Hakeim / Île aux Cygnes e Montagne Sainte-Geneviève);
   - **42 fotografias documentais verificadas** no Wikimedia Commons (3 por ponto), **5 mapas** (1 geral + 4 setoriais), KML (`Paris_em_Cena_Mirantes_Escadarias_14_pontos.kml`) e JSON (`mirantes_perspectivas_dados.json`).
3. **Cafés históricos, livrarias e fachadas clássicas (`index.html#cafes-livrarias` / `cafes-livrarias.html`)**
   - **14 fachadas históricas e literárias** (Café de Flore, Cour du Commerce-Saint-André / Le Procope, Rue de Buci, Shakespeare and Company, Rue Mouffetard, Rue des Rosiers, Rue Montorgueil, Galerie Vivienne, Passage des Panoramas, Passage Jouffroy, Rue des Martyrs, Hôtel du Nord, La Maison Rose e Au Lapin Agile) para planos de B-Roll de 2 a 3 segundos;
   - **42 fotografias documentais verificadas** no Wikimedia Commons (3 por ponto), **5 mapas** (1 geral + 4 setoriais), KML (`Paris_em_Cena_Cafes_Livrarias_Fachadas_14_pontos.kml`) e JSON (`cafes_livrarias_fachadas_dados.json`).
4. **Jardins, parques e fontes monumentais (`index.html#jardins-fontes` / `jardins-fontes.html`)**
   - **14 jardins e fontes históricas** (Jardin du Palais-Royal, Square de la Tour Saint-Jacques, Fontaine Stravinsky, Jardins des Champs-Élysées, Fontaine Médicis, Arènes de Lutèce, Grande Mosquée de Paris, Jardin des Plantes, Fontaines de Varsovie, Champ-de-Mars, Parc Monceau, Square des Batignolles, Coulée verte René-Dumont e Parc Montsouris);
   - **42 fotografias documentais verificadas** no Wikimedia Commons (3 por ponto), **5 mapas** (1 geral + 4 setoriais), KML (`Paris_em_Cena_Jardins_Parques_Fontes_14_pontos.kml`) e JSON (`jardins_parques_fontes_dados.json`).
5. **Paris Art Nouveau e Art Déco: arquitetura e detalhes (`index.html#art-nouveau-deco` / `art-nouveau-deco.html`)**
   - **14 marcos arquitetônicos** (Castel Béranger, Maison La Roche, Pont de Bir-Hakeim, Palais Galliera, Grand Palais, La Samaritaine, Galeries Lafayette, Printemps Haussmann, Folies Bergère, Passage du Prado, Marché Saint-Quentin, Cirque d’Hiver, Piscine de la Butte-aux-Cailles e Palais de la Porte Dorée);
   - **42 fotografias documentais verificadas** no Wikimedia Commons (3 por ponto), **5 mapas** (1 geral + 4 setoriais), KML (`Paris_em_Cena_Art_Nouveau_Art_Deco_14_pontos.kml`) e JSON (`art_nouveau_art_deco_dados.json`).

## Ferramentas práticas de campo e modo offline (PWA)

- **Botão `"Perto de mim"` (Radar GPS cruzando os 30 guias) + Filtros de Clima, Luz e Áudio:** disponível no cabeçalho do site, calcula na hora os **12 takes mais próximos** entre todos os 438 pontos usando o GPS real do celular ou um dos 13 pontos de referência de Paris, com filtros rápidos (`🌧️ Abrigado da chuva`, `🎙️ Silencioso`, `🌅 Pôr do sol`, `☀️ Manhã cedo`).
- **Montador de Roteiro Personalizado (`⭐ Meu Roteiro do Dia`):** permite selecionar takes de qualquer um dos 30 guias, ordená-los automaticamente pela caminhada mais curta (vizinho mais próximo) e abrir a rota multi-paradas no Google Maps.
- **Calculadora de Luz Solar e Golden Hour em Paris (`#solar-panel`):** integrada ao **Modo gravação**, calcula automaticamente para qualquer data os horários exatos de **Hora Azul da manhã, Nascer do sol, Golden Hour da manhã, Meio-dia solar, Golden Hour da tarde, Pôr do sol e Hora Azul da noite** nas coordenadas de Paris (`48,8566° N, 2,3522° L`, fuso `Europe/Paris`).
- **Claquete / Notas de Campo por Take + Backup `JSON` e `CSV`:** campo de anotação individual por take dentro do **Modo gravação** (`ex.: "Take_0412.MOV"`), salvo no aparelho e incluído na exportação/importação em `.json` ou planilha `.csv`.
- **Modo Teleprompter / Gerador de Roteiro e Legenda (`#script-modal`) + Modo Prancha de Contato (`Contact Sheet`) + Folha de Bolso (`@media print`):** geração instantânea de texto de locução e legenda com créditos Wikimedia Commons por guia, visualização rápida de fotos lado a lado e impressão limpa em 1 página A4.
- **Pacote completo de 31 arquivos `.kml`:** além dos KMLs individuais dos 20 arrondissements (`Paris_em_Cena_Arrondissement_01.kml` a `20.kml`) e das 10 coleções temáticas, o arquivo mestre **`Paris_em_Cena_Completo_438_pontos.kml`** reúne todos os 438 pontos organizados em 30 pastas para uso no Google My Maps, Organic Maps ou Maps.me.
- **Modo Offline Instalável (`manifest.webmanifest` + `sw.js`):** permite adicionar o **Paris em Cena** à Tela de Início no iOS/Android e mantém o site, estilos, KML mestre e blocos de mapa/fotos já visitados em cache para consulta no metrô.

## Auditoria de leitura, fotografias e testes automatizados (06/11/2026)

Ferramentas de controle disponíveis no repositório e no GitHub Pages:

- `auditoria-mobile.html`: mede rolagem horizontal, tamanho da tipografia e área de controles em 320, 360, 390, 430, 768 e 1280 px.
- `auditoria-funcional.html`: valida funções de fotos, busca, modo gravação, mapa e visualizador no próprio navegador, restaurando os valores anteriores do `localStorage` após o teste.
- `auditoria-fotografias.html`: verificador sob demanda, guia a guia, das 1.267 URLs de imagens dos 30 guias; registra imagens que não carregam, URLs duplicadas, texto alternativo vazio e permite exportar CSV.
- `tests/auditoria-automatizada.mjs`: executa via Node.js e Google Chrome Headless as suítes de testes automatizados (abertura dos 30 guias + início = 31 painéis, semântica, busca, carregamento das 1.267 fotos, visualizador, 72 mapas gerais/setoriais, 230 links Google Maps, Radar GPS + filtros de clima/luz/áudio, Painel Solar, Notas de Campo, Roteiro do Dia, Teleprompter, Prancha de Contato, Backup JSON/CSV, responsividade nas 8 larguras `320–1920 px` e ausência de erros no console). Para executar localmente: `node tests/auditoria-automatizada.mjs`.

O arquivo `ajustes-tipografia.css` está vinculado diretamente em `index.html` e garante texto base de `16 px` e legendas mínimas de `14 px` em todas as larguras de tela, além de espaçamento adequado para áreas de toque.
