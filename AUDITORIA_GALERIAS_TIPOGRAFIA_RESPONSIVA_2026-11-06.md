# Paris em Cena | Auditoria estrutural de galerias e tipografia

Data: 06/11/2026

## Escopo e limites

- Inventário automático de todas as imagens incorporadas no HTML principal. Não equivale a auditoria visual, nem confirma que as miniaturas carregam em todos os navegadores.
- A etapa tipográfica foi corrigida em CSS responsivo: leitura de conteúdo a partir de 16 px em até 800 px, textos de apoio em 14 a 15 px, hierarquia de títulos e entrelinhas revistas, legenda legível e galeria em coluna única até 480 px.
- Mantido o viewport com escala do usuário permitida. Testes reais no iPhone/Android, zoom do sistema e efeitos de carregamento externo ainda exigem inspeção em dispositivos.

## Galerias por guia

| Guia | Lugares/takes | Fotografias | QR codes | Fotos por lugar (média) |
|---|---:|---:|---:|---:|
| reflexos | 14 | 42 | 0 | 3.0 |
| pontes-sena | 22 | 88 | 0 | 4.0 |
| igrejas | 14 | 28 | 0 | 2.0 |
| torre-eiffel | 14 | 56 | 0 | 4.0 |
| g01 | 24 | 49 | 0 | 2.0 |
| g02 | 14 | 32 | 0 | 2.3 |
| g03 | 14 | 28 | 0 | 2.0 |
| g04 | 14 | 14 | 0 | 1.0 |
| g05 | 14 | 41 | 0 | 2.9 |
| g06 | 14 | 38 | 0 | 2.7 |
| g07 | 14 | 14 | 0 | 1.0 |
| g08 | 14 | 14 | 0 | 1.0 |
| g09 | 14 | 14 | 0 | 1.0 |
| g10 | 14 | 14 | 0 | 1.0 |
| g11 | 14 | 14 | 0 | 1.0 |
| g12 | 14 | 14 | 0 | 1.0 |
| g13 | 14 | 14 | 0 | 1.0 |
| g14 | 14 | 14 | 0 | 1.0 |
| g15 | 14 | 14 | 0 | 1.0 |
| g16 | 14 | 14 | 0 | 1.0 |
| g17 | 14 | 14 | 14 | 1.0 |
| g18 | 14 | 14 | 14 | 1.0 |
| g19 | 14 | 14 | 0 | 1.0 |
| g20 | 14 | 14 | 0 | 1.0 |
| passagens | 14 | 14 | 0 | 1.0 |

Total: **626 fotografias** incorporadas e **28 QR codes** no HTML.

## Achados e prioridades

1. Nos arrondissements 04, 07 a 16 e 17 a 20, somente uma fotografia por take está incorporada no HTML. Os QR codes dos guias 17 e 18 não são fotografias extras.
2. O 01 Louvre tem 49 referências para 24 takes; 02 Bourse tem 32 para 14; 03 Temple tem 28 para 14; 05 Panthéon tem 41 para 14; 06 Luxembourg tem 38 para 14.
3. Igrejas tem duas perspectivas por ponto; Reflexos tem três; Pontes/Sena e Torre Eiffel têm quatro.
4. Confirmar visualmente, por foto, local correto, ângulo distinto, luz diurna quando solicitada, atualidade, crédito e licença. Não substituir por imagens selecionadas apenas pelo nome de arquivo.
5. Priorização para curadoria de novas imagens: 04 e 07 a 20, seguidos por 01 a 03, 05, 06, igrejas e passagens.

## Testes técnicos a finalizar

- Renderização real a 320, 360, 390, 430, 768 e 1280 pixels e com texto ampliado a 200%.
- Conferir ausência de rolagem horizontal e de cortes de controles.
- Testar legibilidade de legendas, busca, menu, títulos longos, fichas e painéis de mapas no dispositivo.
- Verificar cada imagem na página pública, sua ficha original e seu enquadramento. Este relatório não marca essas inspeções como concluídas.

## Arquivo alterado

- `index.html`: apenas regras CSS adicionais ao final do bloco `<style>`.
- Nenhuma fotografia, conteúdo das fichas, KML, marcador cartográfico ou lógica JavaScript foi alterada nesta fase.
