# Paris em Cena | Auditoria do guia Pontes e Margens do Sena

Data: 06/11/2026

## Escopo

- 22 pontos, divididos em cinco regiões por proximidade geográfica
- 88 fotografias de referência com links para Wikimedia Commons, quatro por ficha
- Um mapa geral de 22 pontos, cinco mapas setoriais com 4/5/5/5/3 marcadores
- Cinco links de caminhada com Google Maps; KML de todos os pontos para My Maps
- Layout original mantido, incluindo menu lateral, ficha fotográfica, fallback de mapas e recursos responsivos

## Testes de estrutura realizados

- 25 seções principais no arquivo HTML, incluindo a página inicial e os guias existentes
- 659 identificadores HTML; nenhum duplicado
- Nenhum link interno apontando para ID inexistente
- 16 mapas do pacote com configuração JSON válida e marcadores que apontam para fichas existentes
- No novo guia: 22 fichas, 88 imagens únicas e 88 links para os arquivos originais
- Seis mapas válidos, cinco links para Google Maps e cinco seções setoriais
- Índice de busca do site com 22 entradas para este guia
- Catálogo Wikimedia Commons consultado para os 88 nomes de arquivo: todos existem

## Limitações ainda abertas

- A existência do arquivo no catálogo não comprova carregamento da miniatura no Chrome ou no navegador móvel
- Não houve auditoria visual quadro a quadro da adequação, da luz do dia ou da diferença entre os ângulos
- Tempos de caminhada, travessias, obras, fechamento por cheias e acessos de cada ponto não foram certificados em campo
- Não foi executado teste de tela real com o GitHub Codespaces conectado, nem testes de desempenho visual móvel
- Não foi verificada a necessidade de autorização para produções específicas, como uso de equipamentos volumosos

## Fontes principais

- https://parisjetaime.com/article/paris-la-seine-ses-ponts-et-passerelles-a025
- https://parisjetaime.com/transport/parc-rives-de-seine-p2011
- https://www.paris.fr/pages/les-rives-de-seine-s-offrent-a-vous-21328
- https://commons.wikimedia.org/
- https://www.openstreetmap.org/copyright

## Arquivos e versões

- index.html (seção `#pontes-sena`)
- pontes-sena.html
- pontes_margens_sena_dados.json
- Paris_em_Cena_Pontes_Margens_Sena_22_pontos.kml
