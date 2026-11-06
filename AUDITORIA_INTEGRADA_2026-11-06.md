# Paris em Cena | Auditoria integrada de trajetos, imagens e usabilidade

Data: 06/11/2026

## O que foi implementado no pacote

- Busca com filtro para os 25 guias e limite ampliado de resultados.
- Mapas carregados quando se aproximam da área visível, evitando inicializar simultaneamente mapas distantes.
- Modo gravação com checklist por guia, salvamento local no navegador, acesso a fichas e mapas, próximo/anterior e aviso para trechos longos.
- Ampliação das fotografias já selecionadas em um visualizador com legenda e link aos créditos originais.
- Melhorias adicionais em áreas de toque no mapa.
- Teste de responsividade em `auditoria-mobile.html`, com larguras de 320, 360, 390, 430, 768 e 1280 px.

## Verificações estruturais

- 47 configurações de mapa.
- 25 mapas gerais de guia, 368 marcadores, sem mapa geral vazio.
- 210 URLs de direção a pé do Google Maps com parâmetros completos; 0 malformadas estruturalmente.
- 626 fotografias online incorporadas, 28 QR codes incorporados.

## Distâncias entre paradas consecutivas

As medidas a seguir representam apenas a **soma de distâncias em linha reta entre marcadores**, não a distância real pela rede de ruas ou a distância entre posições de câmera. A avaliação visual e a validação da rota por pedestres permanecem pendentes.

| Guia | Pontos | Soma em linha reta | Maior trecho em linha reta | Trechos acima de 1,2 km |
|---|---:|---:|---:|---:|
| Paris vista pelos reflexos · 14 pontos | 14 | 7.7 km | 2.2 km | 1 |
| Pontes e Margens do Sena · 22 pontos | 22 | 9.0 km | 1.4 km | 1 |
| Igrejas de Paris | 14 | 11.1 km | 1.8 km | 3 |
| Vistas da Torre Eiffel · Ensaios diurnos | 14 | 4.9 km | 1.2 km | 0 |
| 01 / Louvre | 24 | 5.8 km | 0.5 km | 0 |
| 02 / Bourse | 14 | 3.5 km | 0.5 km | 0 |
| 03 / Temple | 14 | 3.3 km | 0.6 km | 0 |
| 04 / Hôtel-de-Ville | 14 | 3.7 km | 0.7 km | 0 |
| 05 / Panthéon | 14 | 4.9 km | 0.9 km | 0 |
| 06 / Luxembourg | 14 | 2.9 km | 0.3 km | 0 |
| 07 / Palais-Bourbon | 14 | 5.7 km | 0.6 km | 0 |
| 08 / Élysée | 14 | 6.8 km | 1.2 km | 0 |
| 09 / Opéra | 14 | 3.3 km | 0.4 km | 0 |
| 10 / Entrepôt | 14 | 3.4 km | 0.5 km | 0 |
| 11 / Popincourt | 14 | 5.6 km | 0.9 km | 0 |
| 12 / Reuilly | 14 | 8.6 km | 1.7 km | 1 |
| 13 / Gobelins | 14 | 7.2 km | 1.2 km | 1 |
| 14 / Observatoire | 14 | 5.9 km | 1.2 km | 1 |
| 15 / Vaugirard | 14 | 10.7 km | 1.5 km | 5 |
| 16 / Passy | 14 | 9.1 km | 3.4 km | 1 |
| 17 / Batignolles-Monceau | 14 | 7.3 km | 1.4 km | 1 |
| 18 / Butte-Montmartre | 14 | 1.8 km | 0.4 km | 0 |
| 19 / Buttes-Chaumont | 14 | 8.2 km | 1.3 km | 2 |
| 20 / Ménilmontant | 14 | 6.5 km | 1.0 km | 0 |
| 14 passagens cobertas | 14 | 4.7 km | 1.0 km | 0 |

## Saltos que exigem atenção

- **Paris vista pelos reflexos · 14 pontos**: Pont Alexandre III → Passage des Panoramas, 2.22 km em linha reta. Confirmar no Google Maps antes de filmar.
- **Pontes e Margens do Sena · 22 pontos**: Pont d’Austerlitz → Passerelle Simone-de-Beauvoir, 1.39 km em linha reta. Confirmar no Google Maps antes de filmar.
- **Igrejas de Paris**: Église Saint-Étienne-du-Mont → Église Saint-Germain-des-Prés, 1.29 km em linha reta. Confirmar no Google Maps antes de filmar.
- **Igrejas de Paris**: Église Saint-Sulpice → Église Saint-Eustache, 1.57 km em linha reta. Confirmar no Google Maps antes de filmar.
- **Igrejas de Paris**: Église de la Madeleine → Église Saint-Jean de Montmartre, 1.85 km em linha reta. Confirmar no Google Maps antes de filmar.
- **12 | Reuilly**: 12 Bercy Village · Cour Saint-Émilion → 13 Palais de la Porte Dorée, 1.70 km em linha reta. Confirmar no Google Maps antes de filmar.
- **13 | Gobelins**: 09 Quartier asiatique · Olympiades → 10 Fresques da rue Jeanne-d’Arc, 1.22 km em linha reta. Confirmar no Google Maps antes de filmar.
- **14 | Observatoire**: 10 Maison du Fontainier → 11 Église Saint-Pierre-de-Montrouge, 1.24 km em linha reta. Confirmar no Google Maps antes de filmar.
- **15 | Vaugirard**: 02 Musée Bourdelle · fachada → 03 Mairie do 15º · Place Adolphe-Chérioux, 1.38 km em linha reta. Confirmar no Google Maps antes de filmar.
- **15 | Vaugirard**: 07 Petite Ceinture · acesso Vaugirard → 08 Paris Expo · Porte de Versailles, 1.35 km em linha reta. Confirmar no Google Maps antes de filmar.
- **15 | Vaugirard**: 08 Paris Expo · Porte de Versailles → 09 Rue du Commerce, 1.48 km em linha reta. Confirmar no Google Maps antes de filmar.
- **15 | Vaugirard**: 10 Église Saint-Jean-Baptiste de Grenelle → 11 Parc André-Citroën, 1.30 km em linha reta. Confirmar no Google Maps antes de filmar.
- **15 | Vaugirard**: 11 Parc André-Citroën → 12 Front de Seine · Beaugrenelle, 1.28 km em linha reta. Confirmar no Google Maps antes de filmar.
- **16 | Passy**: 13 Stade Roland-Garros · Tênis · exterior do complexo → 14 Fondation Louis Vuitton · Arquitetura contemporânea · Bois de Boulogne, 3.37 km em linha reta. Confirmar no Google Maps antes de filmar.
- **17 | Batignolles-Monceau**: Musée national Jean-Jacques Henner → Place de Clichy, 1.40 km em linha reta. Confirmar no Google Maps antes de filmar.
- **19 | Buttes-Chaumont**: CENTQUATRE-PARIS → Butte Bergeyre, 1.32 km em linha reta. Confirmar no Google Maps antes de filmar.
- **19 | Buttes-Chaumont**: Parc des Buttes-Chaumont · Templo → Église Saint-Jean-Baptiste de Belleville, 1.23 km em linha reta. Confirmar no Google Maps antes de filmar.

## Fotografias: curadoria ainda pendente

- Os 15 arrondissements 04 e 07 a 20 mantêm uma única fotografia incorporada por take. Os 28 QR codes não são fotografias adicionais.
- A interface agora permite ampliar a referência existente e abrir a pesquisa de outros ângulos no Wikimedia Commons. **Não foram acrescentadas fotografias não verificadas**.
- Ainda é necessário conferir a validade e atualidade das imagens individuais e selecionar outras perspectivas adequadas ao local.

## Verificações não concluídas

- Teste visual real em aparelhos iOS/Android, inclusive com texto ampliado.
- Acessibilidade com leitor de tela, contraste por componente e funcionamento completo por teclado.
- Confirmação dos trajetos, acessos e obras em campo.
- Auditoria individual das 626 fotografias e seleção de novas referências por enquadramento.
- Medição real do tempo de carregamento antes e depois da atualização.

## Arquivos

- `index.html`: interface e funcionalidades.
- `auditoria-mobile.html`: teste reproduzível de larguras e tipografia.
- `AUDITORIA_INTEGRADA_2026-11-06.md`: este relatório.

Nota: os registros do modo gravação ficam no armazenamento local do navegador. Limpar os dados do navegador pode apagá-los; não existe sincronização com outros aparelhos.
