# Paris em Cena | Integração e controle de qualidade
Data: 06/11/2026
Branch: `integracao-final-paris-2026-11-06`

## Escopo
Integração das melhorias para os 20 arrondissements e cinco coleções temáticas, preservando o tema editorial e o link público atual.

## Funcionalidades presentes no HTML
- Tipografia responsiva e melhorias de contraste/tamanho de legendas em CSS; continuam pendentes testes reais com telas de 320, 360, 390 e 430 px e texto aumentado.
- Busca por local com filtro por guia (25 índices).
- Modo gravação: seleção de guia, 14/24 takes, marcação de concluídos e progresso salvo em `localStorage` no próprio navegador; não sincroniza entre dispositivos.
- Visualizador de fotografias nas galerias, com navegação e link para o original.
- `loading=lazy` em 654 imagens de conteúdo (626 fotografias e 28 QR codes).
- `content-visibility:auto` nas fichas e inicialização de mapas somente quando estão próximos da área visível.
- Mapas online sem WebGL.

## Correções realizadas nesta branch
- Alterado `$('.side-link[data-view-link]').filter(...)` para `$$('.side-link[data-view-link]').filter(...)`. O seletor anterior devolvia somente um elemento e gerava erro ao chamar `.filter()`, interrompendo o script.
- Alterado `$('.map-box').filter(...)` para `$$('.map-box').filter(...)`. O seletor anterior impedia a preparação dos mapas.
- Acrescentado `aria-label` nos marcadores dos mapas para informar número e nome do take.

## Auditoria estrutural
- 25 coleções/guias indexados na busca.
- 47 mapas com JSON válido e 447 marcadores somados (incluindo mapas setoriais e mapas gerais).
- Todas as âncoras dos marcadores têm destino no HTML.
- 210 links Google Maps com parâmetros de origem, destino e modo a pé, sem erro de formatação na análise estática.
- Três scripts executáveis avaliados quanto a sintaxe JavaScript; todos válidos.
- Nenhum ID HTML duplicado.
- O único `href="#"` é um placeholder do link da fonte no visualizador de fotografias, preenchido quando a janela abre.

## Fotografias
- O HTML incorpora 626 fotografias de referência e 28 QR codes, sem contabilizar a imagem vazia utilizada pelo visualizador.
- Os arrondissements 04 e 07 a 20 têm somente uma fotografia incorporada por take (15 guias).
- Esta versão NÃO acrescenta fotografias por busca automática. As fotografias extras devem corresponder ao local correto, ter ângulos distintos e crédito/licença conferidos.
- Não concluída a inspeção individual de 626 miniaturas, nem a conferência de autoria/licença e adequação de enquadramento. A busca de mais fotos pode ser feita pelos links das fichas existentes.

## Caminhadas e coordenadas
- Endereços e marcadores já constam nos mapas; apenas a estrutura de links foi validada neste pacote.
- Tempos, distâncias pelo percurso, travessias e posições precisas de câmera NÃO foram confirmados em campo.
- Avisos de distância em linha reta no modo gravação não equivalem a estimativas de caminhada.

## Verificações para aprovação total
1. Teste visual em Chrome/Safari mobile a 320/360/390/430 px e escala de texto 200%.
2. Verificar abertura de menu, busca por guia, modo gravação e persistência após recarregar.
3. Verificar exibição dos mapas e acesso aos links externos em cada coleção.
4. Abrir individualmente as 626 fotografias originais, conferir local, perspectiva, data, licença e crédito; selecionar vistas adicionais sem duplicações.
5. Abrir os 210 itinerários e verificar a sequência de paradas; confirmar dados de trajeto no terreno.
6. Medir desempenho de carregamento inicial e mudanças de guia em dispositivo real.

Este documento distingue os testes estáticos concluídos dos testes de navegador/dispositivo e da auditoria editorial ainda pendentes.
