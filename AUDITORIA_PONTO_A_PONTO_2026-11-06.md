# Auditoria Completa Ponto a Ponto — Paris em Cena (06/11/2026)

**Repositório:** `https://github.com/paulamcunha/paris`  
**Site publicado:** `https://paulamcunha.github.io/paris/`  
**Total auditado:** **25 guias · 368 pontos de gravação (takes) + 41 fichas históricas de passagens = 409 pontos · 1.056 fotografias de referência em takes · 47 mapas interativos · 210 rotas a pé Google Maps · 392 links OpenStreetMap com coordenadas exatas**

---

## 1. Resumo das Correções Efetuadas na Auditoria Ponto a Ponto

1. **Alinhamento Cartográfico Absoluto (`0 m` de divergência entre Mapa, JSON e OpenStreetMap):**
   - Corrigidos os 4 marcadores nos blocos `script[data-map-config]` e seus links OpenStreetMap correspondentes em `index.html` (`g10-take-12` Porte Saint-Martin: `48.86914, 2.35258`; `g15-take-07` Petite Ceinture · Vaugirard: `48.8369, 2.2908`; `g17-take-12` Tribunal de Paris: `48.8959, 2.3189`; `g19-take-05` Parc des Buttes-Chaumont · Templo: `48.8809, 2.3812`), eliminando 100% das divergências em relação ao arquivo `marcadores_arrondissements_04_20_2026-11-06.json`.
2. **Conclusão das 2 Fichas Pendentes (`g13-take-09` e `g15-take-05`):**
   - Adicionadas 2 fotografias reais e verificadas do Wikimedia Commons em `g13-take-09` (*Quartier asiatique · Olympiades*: `Dalle_des_Olympiades,_Paris_19_March_2017.jpg` e `Avenue_d'Ivry_Chinatown_Paris.jpg`) e 2 em `g15-take-05` (*Marché du livre ancien · halle*: `Marché_du_livre_ancien_et_d'occasion,_Paris_March_2013.jpg` e `Marché_du_livre_ancien_et_d'occasion,_Paris_(01).jpg`).
   - Com isso, **100% dos takes dos arrondissements `04` e `07` a `20` possuem 2 a 3 fotografias verificadas** (totalizando **1.056 fotografias** e **367/368 takes** com múltiplas referências).
3. **Padronização de Licenças Explícitas nas 45 Legendas Restantes:**
   - Substituídas todas as 45 menções residuais do tipo `"Consultar licença na ficha original"`, `"Ver ficha original"` ou `"Conferir ficha Commons"` (`g07`, `g08`, `g09`, `g11`, `g14`, `g15`, `g16`, `g20` e `passagens`) pelo autor, ano e licença exatos verificados na API do Wikimedia Commons (`CC BY-SA 4.0`, `CC BY-SA 3.0`, `CC BY 2.0`, `CC0`, etc.). Resultado da verificação automática: **0 anomalias em todos os 368 takes**.

---

## 2. Inventário e Verificação Ponto a Ponto (Todos os 25 Guias e 368 Takes)

### 1º Arrondissement · Louvre (`#g01`)

- **Takes:** 24 · **Fotografias verificadas:** 49 · **Mapa geral:** `mapa-g01`
- **Percurso total Ponto a Ponto:** **~7.69 km a pé** (~96 min de caminhada contínua) vs. **5.83 km** em linha reta

| # | ID do Ponto | Local / Monumento | Coordenadas (`lat, lon`) | Fotos | Licença & Link Commons | Próximo Ponto (`N → N+1`) | Linha Reta → Caminhada Est. | Status |
| :-: | :--- | :--- | :---: | :-: | :---: | :---: | :---: | :---: |
| 1 | `g01-p1-01` | Jeu de Paume | `48.86625, 2.32356` | 2 | 100% Verificado | `→ g01-p1-02` | 284 m → ~375 m (~5 min) | **Aprovado** |
| 2 | `g01-p1-02` | Musée de l’Orangerie | `48.86377, 2.32266` | 2 | 100% Verificado | `→ g01-p1-03` | 315 m → ~416 m (~5 min) | **Aprovado** |
| 3 | `g01-p1-03` | Jardin des Tuileries | `48.86357, 2.32696` | 2 | 100% Verificado | `→ g01-p1-04` | 479 m → ~632 m (~8 min) | **Aprovado** |
| 4 | `g01-p1-04` | Place Vendôme | `48.86753, 2.32953` | 3 | 100% Verificado | `→ g01-p1-05` | 348 m → ~459 m (~6 min) | **Aprovado** |
| 5 | `g01-p1-05` | Église Saint-Roch | `48.86495, 2.33224` | 2 | 100% Verificado | `→ g01-p1-06` | 209 m → ~276 m (~3 min) | **Aprovado** |
| 6 | `g01-p1-06` | Musée des Arts Décoratifs | `48.86321, 2.33332` | 2 | 100% Verificado | `→ g01-p1-07` | 168 m → ~222 m (~3 min) | **Aprovado** |
| 7 | `g01-p1-07` | Arc de Triomphe du Carrousel | `48.86173, 2.33291` | 2 | 100% Verificado | `→ g01-p1-08` | 230 m → ~304 m (~4 min) | **Aprovado** |
| 8 | `g01-p1-08` | Musée du Louvre | `48.86099, 2.33584` | 2 | 100% Verificado | `→ g01-p1-09` | 314 m → ~414 m (~5 min) | **Aprovado** |
| 9 | `g01-p1-09` | Pont des Arts | `48.85841, 2.33755` | 3 | 100% Verificado | `→ g01-p1-10` | 464 m → ~612 m (~8 min) | **Aprovado** |
| 10 | `g01-p1-10` | Domaine national du Palais-Royal | `48.86255, 2.33675` | 2 | 100% Verificado | `→ g01-p1-11` | 46 m → ~61 m (~1 min) | **Aprovado** |
| 11 | `g01-p1-11` | Fondation Cartier pour l’art contemporain | `48.86238, 2.33732` | 1 | 100% Verificado | `→ g01-p1-12` | 142 m → ~187 m (~2 min) | **Aprovado** |
| 12 | `g01-p1-12` | Comédie-Française, Salle Richelieu | `48.86336, 2.33607` | 2 | 100% Verificado | `→ g01-p2-01` | 465 m → ~614 m (~8 min) | **Aprovado** |
| 13 | `g01-p2-01` | Bourse de Commerce, Pinault Collection | `48.86295, 2.34240` | 2 | 100% Verificado | `→ g01-p2-02` | 206 m → ~272 m (~3 min) | **Aprovado** |
| 14 | `g01-p2-02` | Église Saint-Eustache | `48.86340, 2.34513` | 2 | 100% Verificado | `→ g01-p2-03` | 219 m → ~289 m (~4 min) | **Aprovado** |
| 15 | `g01-p2-03` | Canopée des Halles | `48.86213, 2.34741` | 2 | 100% Verificado | `→ g01-p2-04` | 172 m → ~227 m (~3 min) | **Aprovado** |
| 16 | `g01-p2-04` | Fontaine des Innocents | `48.86064, 2.34802` | 2 | 100% Verificado | `→ g01-p2-05` | 426 m → ~562 m (~7 min) | **Aprovado** |
| 17 | `g01-p2-05` | La Samaritaine | `48.85909, 2.34270` | 2 | 100% Verificado | `→ g01-p2-06` | 156 m → ~206 m (~3 min) | **Aprovado** |
| 18 | `g01-p2-06` | Église Saint-Germain-l’Auxerrois | `48.85983, 2.34090` | 2 | 100% Verificado | `→ g01-p2-07` | 238 m → ~314 m (~4 min) | **Aprovado** |
| 19 | `g01-p2-07` | Pont Neuf | `48.85780, 2.34192` | 2 | 100% Verificado | `→ g01-p2-08` | 136 m → ~180 m (~2 min) | **Aprovado** |
| 20 | `g01-p2-08` | Place Dauphine | `48.85662, 2.34237` | 2 | 100% Verificado | `→ g01-p2-09` | 279 m → ~368 m (~5 min) | **Aprovado** |
| 21 | `g01-p2-09` | Conciergerie | `48.85568, 2.34592` | 2 | 100% Verificado | `→ g01-p2-10` | 135 m → ~178 m (~2 min) | **Aprovado** |
| 22 | `g01-p2-10` | Sainte-Chapelle | `48.85465, 2.34494` | 2 | 100% Verificado | `→ g01-p2-11` | 355 m → ~469 m (~6 min) | **Aprovado** |
| 23 | `g01-p2-11` | Théâtre du Châtelet | `48.85761, 2.34676` | 2 | 100% Verificado | `→ g01-p2-12` | 41 m → ~54 m (~1 min) | **Aprovado** |
| 24 | `g01-p2-12` | Fontaine du Palmier | `48.85750, 2.34729` | 2 | 100% Verificado | *(Fim do roteiro)* | — | **Aprovado** |

### 2º Arrondissement · Bourse (`#g02`)

- **Takes:** 14 · **Fotografias verificadas:** 32 · **Mapa geral:** `mapa-g02`
- **Percurso total Ponto a Ponto:** **~4.64 km a pé** (~58 min de caminhada contínua) vs. **3.51 km** em linha reta

| # | ID do Ponto | Local / Monumento | Coordenadas (`lat, lon`) | Fotos | Licença & Link Commons | Próximo Ponto (`N → N+1`) | Linha Reta → Caminhada Est. | Status |
| :-: | :--- | :--- | :---: | :-: | :---: | :---: | :---: | :---: |
| 1 | `g02-take-01` | Place des Victoires | `48.86602, 2.34111` | 3 | 100% Verificado | `→ g02-take-02` | 83 m → ~110 m (~1 min) | **Aprovado** |
| 2 | `g02-take-02` | Basilique Notre-Dame-des-Victoires | `48.86677, 2.34123` | 2 | 100% Verificado | `→ g02-take-03` | 142 m → ~187 m (~2 min) | **Aprovado** |
| 3 | `g02-take-03` | Galerie Vivienne | `48.86621, 2.33948` | 3 | 100% Verificado | `→ g02-take-04` | 99 m → ~131 m (~2 min) | **Aprovado** |
| 4 | `g02-take-04` | Bibliothèque nationale de France, site Richelieu | `48.86702, 2.33891` | 2 | 100% Verificado | `→ g02-take-05` | 125 m → ~165 m (~2 min) | **Aprovado** |
| 5 | `g02-take-05` | Square Louvois e Fontaine Louvois | `48.86792, 2.33788` | 2 | 100% Verificado | `→ g02-take-06` | 307 m → ~405 m (~5 min) | **Aprovado** |
| 6 | `g02-take-06` | Opéra-Comique, Salle Favart | `48.87067, 2.33765` | 2 | 100% Verificado | `→ g02-take-07` | 424 m → ~560 m (~7 min) | **Aprovado** |
| 7 | `g02-take-07` | Passage Choiseul | `48.86724, 2.33514` | 2 | 100% Verificado | `→ g02-take-08` | 547 m → ~722 m (~9 min) | **Aprovado** |
| 8 | `g02-take-08` | Palais Brongniart | `48.86941, 2.34185` | 2 | 100% Verificado | `→ g02-take-09` | 234 m → ~309 m (~4 min) | **Aprovado** |
| 9 | `g02-take-09` | Passage des Panoramas | `48.87151, 2.34192` | 2 | 100% Verificado | `→ g02-take-10` | 433 m → ~572 m (~7 min) | **Aprovado** |
| 10 | `g02-take-10` | Le Grand Rex | `48.87056, 2.34767` | 2 | 100% Verificado | `→ g02-take-11` | 284 m → ~375 m (~5 min) | **Aprovado** |
| 11 | `g02-take-11` | Passage du Caire | `48.86811, 2.34879` | 2 | 100% Verificado | `→ g02-take-12` | 443 m → ~585 m (~7 min) | **Aprovado** |
| 12 | `g02-take-12` | Tour Jean-sans-Peur | `48.86414, 2.34831` | 2 | 100% Verificado | `→ g02-take-13` | 144 m → ~190 m (~2 min) | **Aprovado** |
| 13 | `g02-take-13` | Passage du Grand-Cerf | `48.86467, 2.35011` | 3 | 100% Verificado | `→ g02-take-14` | 248 m → ~327 m (~4 min) | **Aprovado** |
| 14 | `g02-take-14` | Rue Montorgueil | `48.86524, 2.34684` | 3 | 100% Verificado | *(Fim do roteiro)* | — | **Aprovado** |

### 3º Arrondissement · Haut-Marais (Temple) (`#g03`)

- **Takes:** 14 · **Fotografias verificadas:** 28 · **Mapa geral:** `mapa-g03`
- **Percurso total Ponto a Ponto:** **~4.38 km a pé** (~55 min de caminhada contínua) vs. **3.32 km** em linha reta

| # | ID do Ponto | Local / Monumento | Coordenadas (`lat, lon`) | Fotos | Licença & Link Commons | Próximo Ponto (`N → N+1`) | Linha Reta → Caminhada Est. | Status |
| :-: | :--- | :--- | :---: | :-: | :---: | :---: | :---: | :---: |
| 1 | `g03-take-01` | Musée des Arts et Métiers | `48.86571, 2.35542` | 2 | 100% Verificado | `→ g03-take-02` | 122 m → ~161 m (~2 min) | **Aprovado** |
| 2 | `g03-take-02` | Église Saint-Nicolas-des-Champs | `48.86562, 2.35375` | 2 | 100% Verificado | `→ g03-take-03` | 232 m → ~306 m (~4 min) | **Aprovado** |
| 3 | `g03-take-03` | Maison de Nicolas Flamel | `48.86357, 2.35316` | 2 | 100% Verificado | `→ g03-take-04` | 342 m → ~451 m (~6 min) | **Aprovado** |
| 4 | `g03-take-04` | Musée d’art et d’histoire du Judaïsme (mahJ) | `48.86096, 2.35562` | 2 | 100% Verificado | `→ g03-take-05` | 164 m → ~216 m (~3 min) | **Aprovado** |
| 5 | `g03-take-05` | Archives nationales · Hôtel de Soubise | `48.85996, 2.35727` | 2 | 100% Verificado | `→ g03-take-06` | 197 m → ~260 m (~3 min) | **Aprovado** |
| 6 | `g03-take-06` | Musée de la Chasse et de la Nature | `48.86150, 2.35862` | 2 | 100% Verificado | `→ g03-take-07` | 583 m → ~770 m (~10 min) | **Aprovado** |
| 7 | `g03-take-07` | Musée Carnavalet · Histoire de Paris | `48.85706, 2.36285` | 2 | 100% Verificado | `→ g03-take-08` | 163 m → ~215 m (~3 min) | **Aprovado** |
| 8 | `g03-take-08` | Musée Cognacq-Jay · Hôtel de Donon | `48.85820, 2.36147` | 2 | 100% Verificado | `→ g03-take-09` | 174 m → ~230 m (~3 min) | **Aprovado** |
| 9 | `g03-take-09` | Musée national Picasso-Paris · Hôtel Salé | `48.85960, 2.36252` | 2 | 100% Verificado | `→ g03-take-10` | 159 m → ~210 m (~3 min) | **Aprovado** |
| 10 | `g03-take-10` | Église Saint-Denys-du-Saint-Sacrement | `48.85983, 2.36466` | 2 | 100% Verificado | `→ g03-take-11` | 393 m → ~519 m (~6 min) | **Aprovado** |
| 11 | `g03-take-11` | Marché des Enfants Rouges | `48.86295, 2.36216` | 2 | 100% Verificado | `→ g03-take-12` | 170 m → ~224 m (~3 min) | **Aprovado** |
| 12 | `g03-take-12` | Carreau du Temple | `48.86448, 2.36207` | 2 | 100% Verificado | `→ g03-take-13` | 164 m → ~216 m (~3 min) | **Aprovado** |
| 13 | `g03-take-13` | Square du Temple · Elie Wiesel | `48.86301, 2.36226` | 2 | 100% Verificado | `→ g03-take-14` | 454 m → ~599 m (~7 min) | **Aprovado** |
| 14 | `g03-take-14` | Place de la République | `48.86702, 2.36341` | 2 | 100% Verificado | *(Fim do roteiro)* | — | **Aprovado** |

### 4º Arrondissement · Marais & Îles (Hôtel-de-Ville) (`#g04`)

- **Takes:** 14 · **Fotografias verificadas:** 41 · **Mapa geral:** `mapa-g04`
- **Percurso total Ponto a Ponto:** **~4.87 km a pé** (~61 min de caminhada contínua) vs. **3.69 km** em linha reta

| # | ID do Ponto | Local / Monumento | Coordenadas (`lat, lon`) | Fotos | Licença & Link Commons | Próximo Ponto (`N → N+1`) | Linha Reta → Caminhada Est. | Status |
| :-: | :--- | :--- | :---: | :-: | :---: | :---: | :---: | :---: |
| 1 | `g04-take-01` | Tour Saint-Jacques | `48.85825, 2.34939` | 3 | 100% Verificado | `→ g04-take-02` | 262 m → ~346 m (~4 min) | **Aprovado** |
| 2 | `g04-take-02` | Centre Pompidou | `48.86031, 2.35113` | 3 | 100% Verificado | `→ g04-take-03` | 95 m → ~125 m (~2 min) | **Aprovado** |
| 3 | `g04-take-03` | Fontaine Stravinsky | `48.85948, 2.35148` | 3 | 100% Verificado | `→ g04-take-04` | 74 m → ~98 m (~1 min) | **Aprovado** |
| 4 | `g04-take-04` | Église Saint-Merry | `48.85929, 2.35051` | 3 | 100% Verificado | `→ g04-take-05` | 288 m → ~380 m (~5 min) | **Aprovado** |
| 5 | `g04-take-05` | Hôtel de Ville de Paris | `48.85677, 2.35143` | 3 | 100% Verificado | `→ g04-take-06` | 319 m → ~421 m (~5 min) | **Aprovado** |
| 6 | `g04-take-06` | Église Saint-Gervais-Saint-Protais | `48.85541, 2.35526` | 3 | 100% Verificado | `→ g04-take-07` | 99 m → ~131 m (~2 min) | **Aprovado** |
| 7 | `g04-take-07` | Mémorial de la Shoah | `48.85485, 2.35631` | 3 | 100% Verificado | `→ g04-take-08` | 347 m → ~458 m (~6 min) | **Aprovado** |
| 8 | `g04-take-08` | Rue des Rosiers | `48.85771, 2.35820` | 3 | 100% Verificado | `→ g04-take-09` | 302 m → ~399 m (~5 min) | **Aprovado** |
| 9 | `g04-take-09` | Maison européenne de la photographie (MEP) | `48.85508, 2.35924` | 3 | 100% Verificado | `→ g04-take-10` | 186 m → ~246 m (~3 min) | **Aprovado** |
| 10 | `g04-take-10` | Église Saint-Paul-Saint-Louis | `48.85476, 2.36174` | 3 | 100% Verificado | `→ g04-take-11` | 148 m → ~195 m (~2 min) | **Aprovado** |
| 11 | `g04-take-11` | Hôtel de Sully | `48.85441, 2.36370` | 3 | 100% Verificado | `→ g04-take-12` | 168 m → ~222 m (~3 min) | **Aprovado** |
| 12 | `g04-take-12` | Place des Vosges | `48.85533, 2.36552` | 2 | 100% Verificado | `→ g04-take-13` | 713 m → ~941 m (~12 min) | **Aprovado** |
| 13 | `g04-take-13` | Église Saint-Louis-en-l’Île | `48.85127, 2.35798` | 3 | 100% Verificado | `→ g04-take-14` | 691 m → ~912 m (~11 min) | **Aprovado** |
| 14 | `g04-take-14` | Cathédrale Notre-Dame de Paris | `48.85299, 2.34890` | 3 | 100% Verificado | *(Fim do roteiro)* | — | **Aprovado** |

### 5º Arrondissement · Quartier Latin (Panthéon) (`#g05`)

- **Takes:** 14 · **Fotografias verificadas:** 41 · **Mapa geral:** `mapa-g05`
- **Percurso total Ponto a Ponto:** **~6.42 km a pé** (~80 min de caminhada contínua) vs. **4.86 km** em linha reta

| # | ID do Ponto | Local / Monumento | Coordenadas (`lat, lon`) | Fotos | Licença & Link Commons | Próximo Ponto (`N → N+1`) | Linha Reta → Caminhada Est. | Status |
| :-: | :--- | :--- | :---: | :-: | :---: | :---: | :---: | :---: |
| 1 | `g05-take-01` | Église Saint-Séverin | `48.85182, 2.34506` | 3 | 100% Verificado | `→ g05-take-02` | 197 m → ~260 m (~3 min) | **Aprovado** |
| 2 | `g05-take-02` | Musée de Cluny, musée national du Moyen Âge | `48.85052, 2.34323` | 3 | 100% Verificado | `→ g05-take-03` | 125 m → ~165 m (~2 min) | **Aprovado** |
| 3 | `g05-take-03` | Sorbonne, fachada da rue des Écoles | `48.84964, 2.34430` | 2 | 100% Verificado | `→ g05-take-04` | 425 m → ~561 m (~7 min) | **Aprovado** |
| 4 | `g05-take-04` | Panthéon | `48.84594, 2.34571` | 3 | 100% Verificado | `→ g05-take-05` | 155 m → ~205 m (~3 min) | **Aprovado** |
| 5 | `g05-take-05` | Église Saint-Étienne-du-Mont | `48.84673, 2.34745` | 3 | 100% Verificado | `→ g05-take-06` | 132 m → ~174 m (~2 min) | **Aprovado** |
| 6 | `g05-take-06` | Bibliothèque Sainte-Geneviève | `48.84714, 2.34575` | 3 | 100% Verificado | `→ g05-take-07` | 398 m → ~525 m (~7 min) | **Aprovado** |
| 7 | `g05-take-07` | Place de la Contrescarpe | `48.84459, 2.34958` | 3 | 100% Verificado | `→ g05-take-08` | 267 m → ~352 m (~4 min) | **Aprovado** |
| 8 | `g05-take-08` | Rue Mouffetard | `48.84219, 2.34965` | 3 | 100% Verificado | `→ g05-take-09` | 400 m → ~528 m (~7 min) | **Aprovado** |
| 9 | `g05-take-09` | Arènes de Lutèce | `48.84506, 2.35294` | 3 | 100% Verificado | `→ g05-take-10` | 305 m → ~403 m (~5 min) | **Aprovado** |
| 10 | `g05-take-10` | Grande Mosquée de Paris | `48.84245, 2.35419` | 3 | 100% Verificado | `→ g05-take-11` | 442 m → ~583 m (~7 min) | **Aprovado** |
| 11 | `g05-take-11` | Jardin des Plantes | `48.84404, 2.35973` | 3 | 100% Verificado | `→ g05-take-12` | 394 m → ~520 m (~7 min) | **Aprovado** |
| 12 | `g05-take-12` | Grande Galerie de l’Évolution, fachada | `48.84149, 2.35599` | 3 | 100% Verificado | `→ g05-take-13` | 854 m → ~1127 m (~14 min) | **Aprovado** |
| 13 | `g05-take-13` | Institut du monde arabe | `48.84917, 2.35621` | 3 | 100% Verificado | `→ g05-take-14` | 767 m → ~1012 m (~13 min) | **Aprovado** |
| 14 | `g05-take-14` | Shakespeare and Company | `48.85259, 2.34711` | 3 | 100% Verificado | *(Fim do roteiro)* | — | **Aprovado** |

### 6º Arrondissement · Saint-Germain-des-Prés (Luxembourg) (`#g06`)

- **Takes:** 14 · **Fotografias verificadas:** 38 · **Mapa geral:** `mapa-g06`
- **Percurso total Ponto a Ponto:** **~3.80 km a pé** (~48 min de caminhada contínua) vs. **2.88 km** em linha reta

| # | ID do Ponto | Local / Monumento | Coordenadas (`lat, lon`) | Fotos | Licença & Link Commons | Próximo Ponto (`N → N+1`) | Linha Reta → Caminhada Est. | Status |
| :-: | :--- | :--- | :---: | :-: | :---: | :---: | :---: | :---: |
| 1 | `g06-take-01` | Monnaie de Paris | `48.85675, 2.33920` | 3 | 100% Verificado | `→ g06-take-02` | 148 m → ~195 m (~2 min) | **Aprovado** |
| 2 | `g06-take-02` | Institut de France | `48.85729, 2.33736` | 2 | 100% Verificado | `→ g06-take-03` | 227 m → ~300 m (~4 min) | **Aprovado** |
| 3 | `g06-take-03` | Beaux-Arts de Paris | `48.85649, 2.33450` | 3 | 100% Verificado | `→ g06-take-04` | 242 m → ~319 m (~4 min) | **Aprovado** |
| 4 | `g06-take-04` | Rue de Furstemberg e Musée national Eugène-Delacroix | `48.85444, 2.33564` | 3 | 100% Verificado | `→ g06-take-05` | 151 m → ~199 m (~2 min) | **Aprovado** |
| 5 | `g06-take-05` | Église Saint-Germain-des-Prés | `48.85403, 2.33367` | 2 | 100% Verificado | `→ g06-take-06` | 82 m → ~108 m (~1 min) | **Aprovado** |
| 6 | `g06-take-06` | Café de Flore | `48.85413, 2.33256` | 3 | 100% Verificado | `→ g06-take-07` | 309 m → ~408 m (~5 min) | **Aprovado** |
| 7 | `g06-take-07` | Rue de Buci | `48.85369, 2.33673` | 3 | 100% Verificado | `→ g06-take-08` | 234 m → ~309 m (~4 min) | **Aprovado** |
| 8 | `g06-take-08` | Cour du Commerce-Saint-André | `48.85248, 2.33935` | 3 | 100% Verificado | `→ g06-take-09` | 296 m → ~391 m (~5 min) | **Aprovado** |
| 9 | `g06-take-09` | Odéon, Théâtre de l’Europe | `48.84985, 2.33872` | 3 | 100% Verificado | `→ g06-take-10` | 204 m → ~269 m (~3 min) | **Aprovado** |
| 10 | `g06-take-10` | Fontaine Médicis | `48.84806, 2.33929` | 3 | 100% Verificado | `→ g06-take-11` | 258 m → ~341 m (~4 min) | **Aprovado** |
| 11 | `g06-take-11` | Jardin du Luxembourg, grande perspectiva | `48.84672, 2.33641` | 2 | 100% Verificado | `→ g06-take-12` | 225 m → ~297 m (~4 min) | **Aprovado** |
| 12 | `g06-take-12` | Palais du Luxembourg | `48.84854, 2.33778` | 3 | 100% Verificado | `→ g06-take-13` | 274 m → ~362 m (~5 min) | **Aprovado** |
| 13 | `g06-take-13` | Musée du Luxembourg | `48.84889, 2.33407` | 3 | 100% Verificado | `→ g06-take-14` | 229 m → ~302 m (~4 min) | **Aprovado** |
| 14 | `g06-take-14` | Église Saint-Sulpice | `48.85095, 2.33396` | 2 | 100% Verificado | *(Fim do roteiro)* | — | **Aprovado** |

### 7º Arrondissement · Invalides & Torre Eiffel (Palais-Bourbon) (`#g07`)

- **Takes:** 14 · **Fotografias verificadas:** 42 · **Mapa geral:** `mapa-g07`
- **Percurso total Ponto a Ponto:** **~7.55 km a pé** (~94 min de caminhada contínua) vs. **5.72 km** em linha reta

| # | ID do Ponto | Local / Monumento | Coordenadas (`lat, lon`) | Fotos | Licença & Link Commons | Próximo Ponto (`N → N+1`) | Linha Reta → Caminhada Est. | Status |
| :-: | :--- | :--- | :---: | :-: | :---: | :---: | :---: | :---: |
| 1 | `g07-take-01` | Musée d’Orsay | `48.85992, 2.32658` | 3 | 100% Verificado | `→ g07-take-02` | 592 m → ~781 m (~10 min) | **Aprovado** |
| 2 | `g07-take-02` | Palais Bourbon · Assemblée nationale | `48.86082, 2.31861` | 3 | 100% Verificado | `→ g07-take-03` | 424 m → ~560 m (~7 min) | **Aprovado** |
| 3 | `g07-take-03` | Pont Alexandre III · margem esquerda | `48.86303, 2.31389` | 3 | 100% Verificado | `→ g07-take-04` | 351 m → ~463 m (~6 min) | **Aprovado** |
| 4 | `g07-take-04` | Esplanade des Invalides | `48.85990, 2.31440` | 3 | 100% Verificado | `→ g07-take-05` | 463 m → ~611 m (~8 min) | **Aprovado** |
| 5 | `g07-take-05` | Musée Rodin · exterior | `48.85587, 2.31599` | 3 | 100% Verificado | `→ g07-take-06` | 404 m → ~533 m (~7 min) | **Aprovado** |
| 6 | `g07-take-06` | Dôme des Invalides · Place Vauban | `48.85322, 2.31222` | 3 | 100% Verificado | `→ g07-take-07` | 561 m → ~741 m (~9 min) | **Aprovado** |
| 7 | `g07-take-07` | Rue Cler · comércio de bairro | `48.85658, 2.30651` | 3 | 100% Verificado | `→ g07-take-08` | 473 m → ~624 m (~8 min) | **Aprovado** |
| 8 | `g07-take-08` | École Militaire · Place Joffre | `48.85288, 2.30334` | 3 | 100% Verificado | `→ g07-take-09` | 543 m → ~717 m (~9 min) | **Aprovado** |
| 9 | `g07-take-09` | Champ de Mars · grande perspectiva | `48.85614, 2.29782` | 3 | 100% Verificado | `→ g07-take-10` | 380 m → ~502 m (~6 min) | **Aprovado** |
| 10 | `g07-take-10` | Tour Eiffel · base sul | `48.85882, 2.29460` | 3 | 100% Verificado | `→ g07-take-11` | 461 m → ~609 m (~8 min) | **Aprovado** |
| 11 | `g07-take-11` | Rue de l’Université · vista para a Torre Eiffel | `48.85743, 2.30054` | 3 | 100% Verificado | `→ g07-take-12` | 487 m → ~643 m (~8 min) | **Aprovado** |
| 12 | `g07-take-12` | Musée du quai Branly · Jacques Chirac | `48.86003, 2.29518` | 3 | 100% Verificado | `→ g07-take-13` | 212 m → ~280 m (~4 min) | **Aprovado** |
| 13 | `g07-take-13` | Port de La Bourdonnais · Sena | `48.86172, 2.29651` | 3 | 100% Verificado | `→ g07-take-14` | 369 m → ~487 m (~6 min) | **Aprovado** |
| 14 | `g07-take-14` | Pont d’Iéna · cabeceira sul | `48.85909, 2.29343` | 3 | 100% Verificado | *(Fim do roteiro)* | — | **Aprovado** |

### 8º Arrondissement · Champs-Élysées & Madeleine (Élysée) (`#g08`)

- **Takes:** 14 · **Fotografias verificadas:** 42 · **Mapa geral:** `mapa-g08`
- **Percurso total Ponto a Ponto:** **~8.95 km a pé** (~112 min de caminhada contínua) vs. **6.78 km** em linha reta

| # | ID do Ponto | Local / Monumento | Coordenadas (`lat, lon`) | Fotos | Licença & Link Commons | Próximo Ponto (`N → N+1`) | Linha Reta → Caminhada Est. | Status |
| :-: | :--- | :--- | :---: | :-: | :---: | :---: | :---: | :---: |
| 1 | `g08-take-01` | Gare Saint-Lazare · fachada | `48.87664, 2.32680` | 3 | 100% Verificado | `→ g08-take-02` | 543 m → ~717 m (~9 min) | **Aprovado** |
| 2 | `g08-take-02` | Église Saint-Augustin | `48.87517, 2.31972` | 3 | 100% Verificado | `→ g08-take-03` | 859 m → ~1134 m (~14 min) | **Aprovado** |
| 3 | `g08-take-03` | Parc Monceau · colunata e lago | `48.88052, 2.31124` | 3 | 100% Verificado | `→ g08-take-04` | 220 m → ~290 m (~4 min) | **Aprovado** |
| 4 | `g08-take-04` | Musée Nissim de Camondo · fachada | `48.87886, 2.31287` | 3 | 100% Verificado | `→ g08-take-05` | 425 m → ~561 m (~7 min) | **Aprovado** |
| 5 | `g08-take-05` | Musée Jacquemart-André · fachada | `48.87526, 2.31087` | 3 | 100% Verificado | `→ g08-take-06` | 1170 m → ~1544 m (~19 min) | **Aprovado** |
| 6 | `g08-take-06` | Arc de Triomphe · vista exterior | `48.87378, 2.29504` | 3 | 100% Verificado | `→ g08-take-07` | 921 m → ~1216 m (~15 min) | **Aprovado** |
| 7 | `g08-take-07` | Avenue des Champs-Élysées | `48.87071, 2.30673` | 3 | 100% Verificado | `→ g08-take-08` | 309 m → ~408 m (~5 min) | **Aprovado** |
| 8 | `g08-take-08` | Avenue Montaigne · Triangle d’Or | `48.86884, 2.30984` | 3 | 100% Verificado | `→ g08-take-09` | 277 m → ~366 m (~5 min) | **Aprovado** |
| 9 | `g08-take-09` | Grand Palais · fachada | `48.86719, 2.31268` | 3 | 100% Verificado | `→ g08-take-10` | 142 m → ~187 m (~2 min) | **Aprovado** |
| 10 | `g08-take-10` | Petit Palais · entrada principal | `48.86608, 2.31364` | 3 | 100% Verificado | `→ g08-take-11` | 561 m → ~741 m (~9 min) | **Aprovado** |
| 11 | `g08-take-11` | Palais de l’Élysée · portão exterior | `48.87063, 2.31693` | 3 | 100% Verificado | `→ g08-take-12` | 446 m → ~589 m (~7 min) | **Aprovado** |
| 12 | `g08-take-12` | Jardins des Champs-Élysées · alamedas | `48.86684, 2.31493` | 3 | 100% Verificado | `→ g08-take-13` | 485 m → ~640 m (~8 min) | **Aprovado** |
| 13 | `g08-take-13` | Place de la Concorde · Obélisque de Louxor | `48.86706, 2.32155` | 3 | 100% Verificado | `→ g08-take-14` | 422 m → ~557 m (~7 min) | **Aprovado** |
| 14 | `g08-take-14` | Église de la Madeleine | `48.87027, 2.32463` | 3 | 100% Verificado | *(Fim do roteiro)* | — | **Aprovado** |

### 9º Arrondissement · Opéra & Grands Boulevards (`#g09`)

- **Takes:** 14 · **Fotografias verificadas:** 41 · **Mapa geral:** `mapa-g09`
- **Percurso total Ponto a Ponto:** **~4.36 km a pé** (~55 min de caminhada contínua) vs. **3.31 km** em linha reta

| # | ID do Ponto | Local / Monumento | Coordenadas (`lat, lon`) | Fotos | Licença & Link Commons | Próximo Ponto (`N → N+1`) | Linha Reta → Caminhada Est. | Status |
| :-: | :--- | :--- | :---: | :-: | :---: | :---: | :---: | :---: |
| 1 | `g09-take-01` | Palais Garnier | `48.87104, 2.33214` | 3 | 100% Verificado | `→ g09-take-02` | 241 m → ~318 m (~4 min) | **Aprovado** |
| 2 | `g09-take-02` | Galeries Lafayette Haussmann · fachada | `48.87320, 2.33243` | 3 | 100% Verificado | `→ g09-take-03` | 319 m → ~421 m (~5 min) | **Aprovado** |
| 3 | `g09-take-03` | Printemps Haussmann · exterior | `48.87377, 2.32816` | 3 | 100% Verificado | `→ g09-take-04` | 428 m → ~565 m (~7 min) | **Aprovado** |
| 4 | `g09-take-04` | Église de la Sainte-Trinité | `48.87687, 2.33164` | 3 | 100% Verificado | `→ g09-take-05` | 234 m → ~309 m (~4 min) | **Aprovado** |
| 5 | `g09-take-05` | Musée national Gustave Moreau · fachada | `48.87791, 2.33442` | 3 | 100% Verificado | `→ g09-take-06` | 342 m → ~451 m (~6 min) | **Aprovado** |
| 6 | `g09-take-06` | Musée de la Vie romantique · entrada | `48.88090, 2.33329` | 3 | 100% Verificado | `→ g09-take-07` | 421 m → ~556 m (~7 min) | **Aprovado** |
| 7 | `g09-take-07` | Place Saint-Georges · monumento Gavarni | `48.87841, 2.33762` | 2 | 100% Verificado | `→ g09-take-08` | 153 m → ~202 m (~3 min) | **Aprovado** |
| 8 | `g09-take-08` | Rue des Martyrs · trecho do 9º | `48.87784, 2.33952` | 3 | 100% Verificado | `→ g09-take-09` | 194 m → ~256 m (~3 min) | **Aprovado** |
| 9 | `g09-take-09` | Église Notre-Dame-de-Lorette | `48.87616, 2.33882` | 3 | 100% Verificado | `→ g09-take-10` | 360 m → ~475 m (~6 min) | **Aprovado** |
| 10 | `g09-take-10` | Hôtel Drouot · fachada | `48.87309, 2.34039` | 3 | 100% Verificado | `→ g09-take-11` | 129 m → ~170 m (~2 min) | **Aprovado** |
| 11 | `g09-take-11` | Passage Verdeau · entrada | `48.87313, 2.34216` | 3 | 100% Verificado | `→ g09-take-12` | 143 m → ~189 m (~2 min) | **Aprovado** |
| 12 | `g09-take-12` | Passage Jouffroy · entrada | `48.87186, 2.34181` | 3 | 100% Verificado | `→ g09-take-13` | 12 m → ~16 m (~1 min) | **Aprovado** |
| 13 | `g09-take-13` | Musée Grévin · fachada | `48.87184, 2.34197` | 3 | 100% Verificado | `→ g09-take-14` | 330 m → ~436 m (~5 min) | **Aprovado** |
| 14 | `g09-take-14` | Folies Bergère · fachada | `48.87409, 2.34490` | 3 | 100% Verificado | *(Fim do roteiro)* | — | **Aprovado** |

### 10º Arrondissement · Canal Saint-Martin & Gares (Entrepôt) (`#g10`)

- **Takes:** 14 · **Fotografias verificadas:** 41 · **Mapa geral:** `mapa-g10`
- **Percurso total Ponto a Ponto:** **~4.76 km a pé** (~60 min de caminhada contínua) vs. **3.61 km** em linha reta

| # | ID do Ponto | Local / Monumento | Coordenadas (`lat, lon`) | Fotos | Licença & Link Commons | Próximo Ponto (`N → N+1`) | Linha Reta → Caminhada Est. | Status |
| :-: | :--- | :--- | :---: | :-: | :---: | :---: | :---: | :---: |
| 1 | `g10-take-01` | Gare du Nord · fachada principal | `48.88038, 2.35355` | 3 | 100% Verificado | `→ g10-take-02` | 206 m → ~272 m (~3 min) | **Aprovado** |
| 2 | `g10-take-02` | Église Saint-Vincent-de-Paul | `48.87939, 2.35118` | 3 | 100% Verificado | `→ g10-take-03` | 398 m → ~525 m (~7 min) | **Aprovado** |
| 3 | `g10-take-03` | Marché couvert Saint-Quentin | `48.87698, 2.35519` | 3 | 100% Verificado | `→ g10-take-04` | 315 m → ~416 m (~5 min) | **Aprovado** |
| 4 | `g10-take-04` | Gare de l’Est · fachada | `48.87710, 2.35949` | 3 | 100% Verificado | `→ g10-take-05` | 191 m → ~252 m (~3 min) | **Aprovado** |
| 5 | `g10-take-05` | Couvent des Récollets · fachada externa | `48.87542, 2.36002` | 3 | 100% Verificado | `→ g10-take-06` | 172 m → ~227 m (~3 min) | **Aprovado** |
| 6 | `g10-take-06` | Jardin Villemin · Mahsa Jîna Amini | `48.87450, 2.36191` | 3 | 100% Verificado | `→ g10-take-07` | 206 m → ~272 m (~3 min) | **Aprovado** |
| 7 | `g10-take-07` | Passerelle Arletty · écluse des Récollets | `48.87318, 2.36388` | 3 | 100% Verificado | `→ g10-take-08` | 44 m → ~58 m (~1 min) | **Aprovado** |
| 8 | `g10-take-08` | Hôtel du Nord · fachada | `48.87355, 2.36407` | 3 | 100% Verificado | `→ g10-take-09` | 64 m → ~84 m (~1 min) | **Aprovado** |
| 9 | `g10-take-09` | Quai de Valmy · perspectiva do canal | `48.87305, 2.36364` | 3 | 100% Verificado | `→ g10-take-10` | 418 m → ~552 m (~7 min) | **Aprovado** |
| 10 | `g10-take-10` | Passerelle Jane Birkin · écluse du Temple | `48.86980, 2.36651` | 3 | 100% Verificado | `→ g10-take-11` | 316 m → ~417 m (~5 min) | **Aprovado** |
| 11 | `g10-take-11` | Place de la République · monumento | `48.86822, 2.36292` | 3 | 100% Verificado | `→ g10-take-12` | 763 m → ~1007 m (~13 min) | **Aprovado** |
| 12 | `g10-take-12` | Porte Saint-Martin | `48.86914, 2.35258` | 3 | 100% Verificado | `→ g10-take-13` | 287 m → ~379 m (~5 min) | **Aprovado** |
| 13 | `g10-take-13` | Passage Brady · entrada | `48.87160, 2.35378` | 3 | 100% Verificado | `→ g10-take-14` | 228 m → ~301 m (~4 min) | **Aprovado** |
| 14 | `g10-take-14` | Porte Saint-Denis | `48.86957, 2.35410` | 2 | 100% Verificado | *(Fim do roteiro)* | — | **Aprovado** |

### 11º Arrondissement · Bastille, Oberkampf & République (Popincourt) (`#g11`)

- **Takes:** 14 · **Fotografias verificadas:** 42 · **Mapa geral:** `mapa-g11`
- **Percurso total Ponto a Ponto:** **~7.36 km a pé** (~92 min de caminhada contínua) vs. **5.58 km** em linha reta

| # | ID do Ponto | Local / Monumento | Coordenadas (`lat, lon`) | Fotos | Licença & Link Commons | Próximo Ponto (`N → N+1`) | Linha Reta → Caminhada Est. | Status |
| :-: | :--- | :--- | :---: | :-: | :---: | :---: | :---: | :---: |
| 1 | `g11-take-01` | 01 Place de la République | `48.86679, 2.36543` | 3 | 100% Verificado | `→ g11-take-02` | 430 m → ~568 m (~7 min) | **Aprovado** |
| 2 | `g11-take-02` | 02 Cirque d’Hiver Bouglione | `48.86312, 2.36727` | 3 | 100% Verificado | `→ g11-take-03` | 264 m → ~348 m (~4 min) | **Aprovado** |
| 3 | `g11-take-03` | 03 Le Bataclan | `48.86311, 2.37088` | 3 | 100% Verificado | `→ g11-take-04` | 412 m → ~544 m (~7 min) | **Aprovado** |
| 4 | `g11-take-04` | 04 Rue Oberkampf | `48.86519, 2.37555` | 3 | 100% Verificado | `→ g11-take-05` | 524 m → ~692 m (~9 min) | **Aprovado** |
| 5 | `g11-take-05` | 05 Square Maurice-Gardette | `48.86109, 2.37907` | 3 | 100% Verificado | `→ g11-take-06` | 141 m → ~186 m (~2 min) | **Aprovado** |
| 6 | `g11-take-06` | 06 Atelier des Lumières | `48.86157, 2.38086` | 3 | 100% Verificado | `→ g11-take-07` | 465 m → ~614 m (~8 min) | **Aprovado** |
| 7 | `g11-take-07` | 07 Église Saint-Ambroise | `48.86134, 2.37451` | 3 | 100% Verificado | `→ g11-take-08` | 776 m → ~1024 m (~13 min) | **Aprovado** |
| 8 | `g11-take-08` | 08 Square de la Roquette | `48.85899, 2.38449` | 3 | 100% Verificado | `→ g11-take-09` | 729 m → ~962 m (~12 min) | **Aprovado** |
| 9 | `g11-take-09` | 09 Église Sainte-Marguerite | `48.85283, 2.38105` | 3 | 100% Verificado | `→ g11-take-10` | 520 m → ~686 m (~9 min) | **Aprovado** |
| 10 | `g11-take-10` | 10 Cour de l’Industrie | `48.85049, 2.38720` | 3 | 100% Verificado | `→ g11-take-11` | 919 m → ~1213 m (~15 min) | **Aprovado** |
| 11 | `g11-take-11` | 11 Passage Lhomme | `48.85321, 2.37534` | 3 | 100% Verificado | `→ g11-take-12` | 189 m → ~249 m (~3 min) | **Aprovado** |
| 12 | `g11-take-12` | 12 Rue de Lappe | `48.85364, 2.37285` | 3 | 100% Verificado | `→ g11-take-13` | 201 m → ~265 m (~3 min) | **Aprovado** |
| 13 | `g11-take-13` | 13 Cour Damoye | `48.85372, 2.37011` | 3 | 100% Verificado | `→ g11-take-14` | 8 m → ~11 m (~1 min) | **Aprovado** |
| 14 | `g11-take-14` | 14 Place de la Bastille · Colonne de Juillet | `48.85371, 2.37021` | 3 | 100% Verificado | *(Fim do roteiro)* | — | **Aprovado** |

### 12º Arrondissement · Bercy, Aligre & Coulée Verte (Reuilly) (`#g12`)

- **Takes:** 14 · **Fotografias verificadas:** 38 · **Mapa geral:** `mapa-g12`
- **Percurso total Ponto a Ponto:** **~11.34 km a pé** (~142 min de caminhada contínua) vs. **8.59 km** em linha reta

| # | ID do Ponto | Local / Monumento | Coordenadas (`lat, lon`) | Fotos | Licença & Link Commons | Próximo Ponto (`N → N+1`) | Linha Reta → Caminhada Est. | Status |
| :-: | :--- | :--- | :---: | :-: | :---: | :---: | :---: | :---: |
| 1 | `g12-take-01` | 01 Place de la Bastille · Colonne de Juillet | `48.85277, 2.36994` | 2 | 100% Verificado | `→ g12-take-02` | 152 m → ~201 m (~3 min) | **Aprovado** |
| 2 | `g12-take-02` | 02 Opéra Bastille · fachada exterior | `48.85150, 2.37074` | 3 | 100% Verificado | `→ g12-take-03` | 771 m → ~1018 m (~13 min) | **Aprovado** |
| 3 | `g12-take-03` | 03 Viaduc des Arts · arcos | `48.84635, 2.37780` | 2 | 100% Verificado | `→ g12-take-04` | 507 m → ~669 m (~8 min) | **Aprovado** |
| 4 | `g12-take-04` | 04 Coulée verte René-Dumont | `48.84368, 2.38343` | 3 | 100% Verificado | `→ g12-take-05` | 986 m → ~1302 m (~16 min) | **Aprovado** |
| 5 | `g12-take-05` | 05 Rue Crémieux | `48.84688, 2.37087` | 3 | 100% Verificado | `→ g12-take-06` | 246 m → ~325 m (~4 min) | **Aprovado** |
| 6 | `g12-take-06` | 06 Gare de Lyon · fachada e relógio | `48.84504, 2.37274` | 3 | 100% Verificado | `→ g12-take-07` | 588 m → ~776 m (~10 min) | **Aprovado** |
| 7 | `g12-take-07` | 07 Marché d’Aligre · praça e barracas | `48.84893, 2.37818` | 3 | 100% Verificado | `→ g12-take-08` | 1016 m → ~1341 m (~17 min) | **Aprovado** |
| 8 | `g12-take-08` | 08 Jardin de Reuilly · Paul Pernin | `48.84219, 2.38753` | 3 | 100% Verificado | `→ g12-take-09` | 787 m → ~1039 m (~13 min) | **Aprovado** |
| 9 | `g12-take-09` | 09 Accor Arena · Bercy | `48.83922, 2.37777` | 3 | 100% Verificado | `→ g12-take-10` | 492 m → ~649 m (~8 min) | **Aprovado** |
| 10 | `g12-take-10` | 10 Parc de Bercy | `48.83564, 2.38172` | 3 | 100% Verificado | `→ g12-take-11` | 195 m → ~257 m (~3 min) | **Aprovado** |
| 11 | `g12-take-11` | 11 Cinémathèque française | `48.83729, 2.38261` | 3 | 100% Verificado | `→ g12-take-12` | 548 m → ~723 m (~9 min) | **Aprovado** |
| 12 | `g12-take-12` | 12 Bercy Village · Cour Saint-Émilion | `48.83310, 2.38652` | 2 | 100% Verificado | `→ g12-take-13` | 1697 m → ~2240 m (~28 min) | **Aprovado** |
| 13 | `g12-take-13` | 13 Palais de la Porte Dorée | `48.83464, 2.40959` | 3 | 100% Verificado | `→ g12-take-14` | 607 m → ~801 m (~10 min) | **Aprovado** |
| 14 | `g12-take-14` | 14 Lac Daumesnil · Bois de Vincennes | `48.83076, 2.41541` | 2 | 100% Verificado | *(Fim do roteiro)* | — | **Aprovado** |

### 13º Arrondissement · Butte-aux-Cailles, Olympiades & BnF (Gobelins) (`#g13`)

- **Takes:** 14 · **Fotografias verificadas:** 40 · **Mapa geral:** `mapa-g13`
- **Percurso total Ponto a Ponto:** **~9.46 km a pé** (~118 min de caminhada contínua) vs. **7.17 km** em linha reta

| # | ID do Ponto | Local / Monumento | Coordenadas (`lat, lon`) | Fotos | Licença & Link Commons | Próximo Ponto (`N → N+1`) | Linha Reta → Caminhada Est. | Status |
| :-: | :--- | :--- | :---: | :-: | :---: | :---: | :---: | :---: |
| 1 | `g13-take-01` | 01 Manufacture nationale des Gobelins | `48.83510, 2.35272` | 3 | 100% Verificado | `→ g13-take-02` | 459 m → ~606 m (~8 min) | **Aprovado** |
| 2 | `g13-take-02` | 02 Place d’Italie | `48.83134, 2.35534` | 2 | 100% Verificado | `→ g13-take-03` | 677 m → ~894 m (~11 min) | **Aprovado** |
| 3 | `g13-take-03` | 03 Rue de la Butte-aux-Cailles | `48.82764, 2.34800` | 3 | 100% Verificado | `→ g13-take-04` | 329 m → ~434 m (~5 min) | **Aprovado** |
| 4 | `g13-take-04` | 04 Piscine de la Butte-aux-Cailles | `48.82743, 2.35248` | 3 | 100% Verificado | `→ g13-take-05` | 452 m → ~597 m (~7 min) | **Aprovado** |
| 5 | `g13-take-05` | 05 Petite Alsace · fachada da rue Daviel | `48.82781, 2.34633` | 3 | 100% Verificado | `→ g13-take-06` | 578 m → ~763 m (~10 min) | **Aprovado** |
| 6 | `g13-take-06` | 06 Cité Florale · rue des Glycines | `48.82270, 2.34482` | 3 | 100% Verificado | `→ g13-take-07` | 700 m → ~924 m (~12 min) | **Aprovado** |
| 7 | `g13-take-07` | 07 Square des Peupliers | `48.82540, 2.35346` | 3 | 100% Verificado | `→ g13-take-08` | 479 m → ~632 m (~8 min) | **Aprovado** |
| 8 | `g13-take-08` | 08 Parc de Choisy | `48.82678, 2.35966` | 3 | 100% Verificado | `→ g13-take-09` | 507 m → ~669 m (~8 min) | **Aprovado** |
| 9 | `g13-take-09` | 09 Quartier asiatique · Olympiades | `48.82373, 2.36480` | 3 | 100% Verificado | `→ g13-take-10` | 1221 m → ~1612 m (~20 min) | **Aprovado** |
| 10 | `g13-take-10` | 10 Fresques da rue Jeanne-d’Arc | `48.83458, 2.36223` | 3 | 100% Verificado | `→ g13-take-11` | 615 m → ~812 m (~10 min) | **Aprovado** |
| 11 | `g13-take-11` | 11 Station F · Halle Freyssinet | `48.83451, 2.37063` | 3 | 100% Verificado | `→ g13-take-12` | 739 m → ~975 m (~12 min) | **Aprovado** |
| 12 | `g13-take-12` | 12 Les Frigos · antiga instalação ferroviária | `48.83132, 2.37950` | 3 | 100% Verificado | `→ g13-take-13` | 317 m → ~418 m (~5 min) | **Aprovado** |
| 13 | `g13-take-13` | 13 BnF · site François-Mitterrand | `48.83383, 2.37743` | 2 | 100% Verificado | `→ g13-take-14` | 97 m → ~128 m (~2 min) | **Aprovado** |
| 14 | `g13-take-14` | 14 Passerelle Simone-de-Beauvoir | `48.83465, 2.37696` | 3 | 100% Verificado | *(Fim do roteiro)* | — | **Aprovado** |

### 14º Arrondissement · Montparnasse, Daguerre & Parc Montsouris (Observatoire) (`#g14`)

- **Takes:** 14 · **Fotografias verificadas:** 41 · **Mapa geral:** `mapa-g14`
- **Percurso total Ponto a Ponto:** **~7.84 km a pé** (~98 min de caminhada contínua) vs. **5.94 km** em linha reta

| # | ID do Ponto | Local / Monumento | Coordenadas (`lat, lon`) | Fotos | Licença & Link Commons | Próximo Ponto (`N → N+1`) | Linha Reta → Caminhada Est. | Status |
| :-: | :--- | :--- | :---: | :-: | :---: | :---: | :---: | :---: |
| 1 | `g14-take-01` | 01 Rue de la Gaîté e Théâtre Montparnasse | `48.83950, 2.32353` | 3 | 100% Verificado | `→ g14-take-02` | 306 m → ~404 m (~5 min) | **Aprovado** |
| 2 | `g14-take-02` | 02 Cimetière du Montparnasse | `48.83997, 2.32766` | 3 | 100% Verificado | `→ g14-take-03` | 893 m → ~1179 m (~15 min) | **Aprovado** |
| 3 | `g14-take-03` | 03 Église Notre-Dame-du-Travail | `48.83619, 2.31689` | 3 | 100% Verificado | `→ g14-take-04` | 407 m → ~537 m (~7 min) | **Aprovado** |
| 4 | `g14-take-04` | 04 Rue des Thermopyles | `48.83273, 2.31873` | 3 | 100% Verificado | `→ g14-take-05` | 856 m → ~1130 m (~14 min) | **Aprovado** |
| 5 | `g14-take-05` | 05 Rue Daguerre · trecho de pedestres | `48.83368, 2.33034` | 2 | 100% Verificado | `→ g14-take-06` | 90 m → ~119 m (~1 min) | **Aprovado** |
| 6 | `g14-take-06` | 06 Place Denfert-Rochereau · Lion de Belfort | `48.83396, 2.33149` | 3 | 100% Verificado | `→ g14-take-07` | 75 m → ~99 m (~1 min) | **Aprovado** |
| 7 | `g14-take-07` | 07 Catacombes de Paris · entrada exterior | `48.83398, 2.33251` | 3 | 100% Verificado | `→ g14-take-08` | 46 m → ~61 m (~1 min) | **Aprovado** |
| 8 | `g14-take-08` | 08 Musée de la Libération · pavilhão Ledoux | `48.83401, 2.33188` | 3 | 100% Verificado | `→ g14-take-09` | 475 m → ~627 m (~8 min) | **Aprovado** |
| 9 | `g14-take-09` | 09 Observatoire de Paris · fachada | `48.83697, 2.33655` | 3 | 100% Verificado | `→ g14-take-10` | 37 m → ~49 m (~1 min) | **Aprovado** |
| 10 | `g14-take-10` | 10 Maison du Fontainier | `48.83725, 2.33628` | 3 | 100% Verificado | `→ g14-take-11` | 1241 m → ~1638 m (~20 min) | **Aprovado** |
| 11 | `g14-take-11` | 11 Église Saint-Pierre-de-Montrouge | `48.82798, 2.32684` | 3 | 100% Verificado | `→ g14-take-12` | 482 m → ~636 m (~8 min) | **Aprovado** |
| 12 | `g14-take-12` | 12 Villa Seurat · casas de artistas | `48.82617, 2.33282` | 3 | 100% Verificado | `→ g14-take-13` | 566 m → ~747 m (~9 min) | **Aprovado** |
| 13 | `g14-take-13` | 13 Parc Montsouris · lago | `48.82419, 2.33993` | 3 | 100% Verificado | `→ g14-take-14` | 463 m → ~611 m (~8 min) | **Aprovado** |
| 14 | `g14-take-14` | 14 Cité internationale universitaire de Paris | `48.82011, 2.33862` | 3 | 100% Verificado | *(Fim do roteiro)* | — | **Aprovado** |

### 15º Arrondissement · Georges-Brassens, Beaugrenelle & Bir-Hakeim (Vaugirard) (`#g15`)

- **Takes:** 14 · **Fotografias verificadas:** 39 · **Mapa geral:** `mapa-g15`
- **Percurso total Ponto a Ponto:** **~13.10 km a pé** (~164 min de caminhada contínua) vs. **9.92 km** em linha reta

| # | ID do Ponto | Local / Monumento | Coordenadas (`lat, lon`) | Fotos | Licença & Link Commons | Próximo Ponto (`N → N+1`) | Linha Reta → Caminhada Est. | Status |
| :-: | :--- | :--- | :---: | :-: | :---: | :---: | :---: | :---: |
| 1 | `g15-take-01` | 01 Tour Montparnasse · exterior | `48.84227, 2.32124` | 3 | 100% Verificado | `→ g15-take-02` | 209 m → ~276 m (~3 min) | **Aprovado** |
| 2 | `g15-take-02` | 02 Musée Bourdelle · fachada | `48.84298, 2.31859` | 3 | 100% Verificado | `→ g15-take-03` | 1378 m → ~1819 m (~23 min) | **Aprovado** |
| 3 | `g15-take-03` | 03 Mairie do 15º · Place Adolphe-Chérioux | `48.84152, 2.29988` | 3 | 100% Verificado | `→ g15-take-04` | 1004 m → ~1325 m (~17 min) | **Aprovado** |
| 4 | `g15-take-04` | 04 Villa Santos-Dumont · entrada | `48.83317, 2.30511` | 3 | 100% Verificado | `→ g15-take-05` | 150 m → ~198 m (~2 min) | **Aprovado** |
| 5 | `g15-take-05` | 05 Marché du livre ancien · halle | `48.83234, 2.30348` | 3 | 100% Verificado | `→ g15-take-06` | 226 m → ~298 m (~4 min) | **Aprovado** |
| 6 | `g15-take-06` | 06 Parc Georges-Brassens | `48.83269, 2.30044` | 2 | 100% Verificado | `→ g15-take-07` | 847 m → ~1118 m (~14 min) | **Aprovado** |
| 7 | `g15-take-07` | 07 Petite Ceinture · acesso Vaugirard | `48.83690, 2.29080` | 3 | 100% Verificado | `→ g15-take-08` | 562 m → ~742 m (~9 min) | **Aprovado** |
| 8 | `g15-take-08` | 08 Paris Expo · Porte de Versailles | `48.83203, 2.28871` | 3 | 100% Verificado | `→ g15-take-09` | 1483 m → ~1958 m (~24 min) | **Aprovado** |
| 9 | `g15-take-09` | 09 Rue du Commerce | `48.84509, 2.29284` | 3 | 100% Verificado | `→ g15-take-10` | 237 m → ~313 m (~4 min) | **Aprovado** |
| 10 | `g15-take-10` | 10 Église Saint-Jean-Baptiste de Grenelle | `48.84298, 2.29240` | 3 | 100% Verificado | `→ g15-take-11` | 1299 m → ~1715 m (~21 min) | **Aprovado** |
| 11 | `g15-take-11` | 11 Parc André-Citroën | `48.84342, 2.27466` | 3 | 100% Verificado | `→ g15-take-12` | 1280 m → ~1690 m (~21 min) | **Aprovado** |
| 12 | `g15-take-12` | 12 Front de Seine · Beaugrenelle | `48.85227, 2.28586` | 2 | 100% Verificado | `→ g15-take-13` | 452 m → ~597 m (~7 min) | **Aprovado** |
| 13 | `g15-take-13` | 13 Île aux Cygnes · Statue de la Liberté | `48.84957, 2.28126` | 3 | 100% Verificado | `→ g15-take-14` | 794 m → ~1048 m (~13 min) | **Aprovado** |
| 14 | `g15-take-14` | 14 Pont de Bir-Hakeim · acesso pelo 15º | `48.85515, 2.28800` | 2 | 100% Verificado | *(Fim do roteiro)* | — | **Aprovado** |

### 16º Arrondissement · Trocadéro, Passy & Auteuil (Passy) (`#g16`)

- **Takes:** 14 · **Fotografias verificadas:** 41 · **Mapa geral:** `mapa-g16`
- **Percurso total Ponto a Ponto:** **~12.07 km a pé** (~151 min de caminhada contínua) vs. **9.15 km** em linha reta

| # | ID do Ponto | Local / Monumento | Coordenadas (`lat, lon`) | Fotos | Licença & Link Commons | Próximo Ponto (`N → N+1`) | Linha Reta → Caminhada Est. | Status |
| :-: | :--- | :--- | :---: | :-: | :---: | :---: | :---: | :---: |
| 1 | `g16-take-01` | 01 Palais Galliera · Museu da Moda · fachada | `48.86597, 2.29657` | 3 | 100% Verificado | `→ g16-take-02` | 235 m → ~310 m (~4 min) | **Aprovado** |
| 2 | `g16-take-02` | 02 Musée Guimet · Fachada do museu de artes asiáticas | `48.86502, 2.29370` | 3 | 100% Verificado | `→ g16-take-03` | 517 m → ~682 m (~9 min) | **Aprovado** |
| 3 | `g16-take-03` | 03 Jardins du Trocadéro · Fontaine de Varsovie | `48.86135, 2.28936` | 3 | 100% Verificado | `→ g16-take-04` | 164 m → ~216 m (~3 min) | **Aprovado** |
| 4 | `g16-take-04` | 04 Esplanade du Trocadéro · Parvis dos Direitos Humanos · vista Eiffel | `48.86266, 2.28834` | 3 | 100% Verificado | `→ g16-take-05` | 368 m → ~486 m (~6 min) | **Aprovado** |
| 5 | `g16-take-05` | 05 Avenue de Camoëns · Rua fotográfica · perspectiva da Torre Eiffel | `48.85967, 2.28618` | 3 | 100% Verificado | `→ g16-take-06` | 606 m → ~800 m (~10 min) | **Aprovado** |
| 6 | `g16-take-06` | 06 Rue de l’Annonciation · Vida de bairro · antigo Passy | `48.85668, 2.27927` | 3 | 100% Verificado | `→ g16-take-07` | 202 m → ~267 m (~3 min) | **Aprovado** |
| 7 | `g16-take-07` | 07 Maison de Balzac · Casa histórica · fachada e jardim | `48.85520, 2.28089` | 2 | 100% Verificado | `→ g16-take-08` | 354 m → ~467 m (~6 min) | **Aprovado** |
| 8 | `g16-take-08` | 08 Maison de la Radio et de la Musique · Arquitetura circular · margem do Sena | `48.85215, 2.27953` | 3 | 100% Verificado | `→ g16-take-09` | 361 m → ~477 m (~6 min) | **Aprovado** |
| 9 | `g16-take-09` | 09 Castel Béranger · Art nouveau de Hector Guimard | `48.85233, 2.27461` | 3 | 100% Verificado | `→ g16-take-10` | 789 m → ~1041 m (~13 min) | **Aprovado** |
| 10 | `g16-take-10` | 10 Jardin du Ranelagh · Passeio arborizado · La Muette | `48.85862, 2.26964` | 3 | 100% Verificado | `→ g16-take-11` | 184 m → ~243 m (~3 min) | **Aprovado** |
| 11 | `g16-take-11` | 11 Musée Marmottan Monet · Exterior · patrimônio impressionista | `48.85921, 2.26728` | 3 | 100% Verificado | `→ g16-take-12` | 828 m → ~1093 m (~14 min) | **Aprovado** |
| 12 | `g16-take-12` | 12 Maison La Roche · Arquitetura modernista · Le Corbusier | `48.85188, 2.26532` | 3 | 100% Verificado | `→ g16-take-13` | 1165 m → ~1538 m (~19 min) | **Aprovado** |
| 13 | `g16-take-13` | 13 Stade Roland-Garros · Tênis · exterior do complexo | `48.84743, 2.25090` | 3 | 100% Verificado | `→ g16-take-14` | 3374 m → ~4454 m (~56 min) | **Aprovado** |
| 14 | `g16-take-14` | 14 Fondation Louis Vuitton · Arquitetura contemporânea · Bois de Boulogne | `48.87665, 2.26334` | 3 | 100% Verificado | *(Fim do roteiro)* | — | **Aprovado** |

### 17º Arrondissement · Ternes, Monceau & Batignolles (`#g17`)

- **Takes:** 14 · **Fotografias verificadas:** 40 · **Mapa geral:** `mapa-g17`
- **Percurso total Ponto a Ponto:** **~9.21 km a pé** (~115 min de caminhada contínua) vs. **6.98 km** em linha reta

| # | ID do Ponto | Local / Monumento | Coordenadas (`lat, lon`) | Fotos | Licença & Link Commons | Próximo Ponto (`N → N+1`) | Linha Reta → Caminhada Est. | Status |
| :-: | :--- | :--- | :---: | :-: | :---: | :---: | :---: | :---: |
| 1 | `g17-take-01` | Palais des Congrès · Porte Maillot | `48.87860, 2.28380` | 3 | 100% Verificado | `→ g17-take-02` | 527 m → ~696 m (~9 min) | **Aprovado** |
| 2 | `g17-take-02` | Église Saint-Ferdinand-des-Ternes | `48.87875, 2.29100` | 3 | 100% Verificado | `→ g17-take-03` | 833 m → ~1100 m (~14 min) | **Aprovado** |
| 3 | `g17-take-03` | Promenade Pereire | `48.88497, 2.29736` | 3 | 100% Verificado | `→ g17-take-04` | 648 m → ~855 m (~11 min) | **Aprovado** |
| 4 | `g17-take-04` | Marché Poncelet · rue Bayen | `48.87916, 2.29687` | 3 | 100% Verificado | `→ g17-take-05` | 1063 m → ~1403 m (~18 min) | **Aprovado** |
| 5 | `g17-take-05` | Place du Général-Catroux · Dumas | `48.88276, 2.31033` | 3 | 100% Verificado | `→ g17-take-06` | 194 m → ~256 m (~3 min) | **Aprovado** |
| 6 | `g17-take-06` | Musée national Jean-Jacques Henner | `48.88304, 2.30771` | 3 | 100% Verificado | `→ g17-take-07` | 1402 m → ~1851 m (~23 min) | **Aprovado** |
| 7 | `g17-take-07` | Place de Clichy | `48.88376, 2.32685` | 2 | 100% Verificado | `→ g17-take-08` | 376 m → ~496 m (~6 min) | **Aprovado** |
| 8 | `g17-take-08` | Mairie du 17e · place Richard-Baret | `48.88449, 2.32183` | 3 | 100% Verificado | `→ g17-take-09` | 364 m → ~480 m (~6 min) | **Aprovado** |
| 9 | `g17-take-09` | Église Sainte-Marie-des-Batignolles | `48.88665, 2.31809` | 3 | 100% Verificado | `→ g17-take-10` | 243 m → ~321 m (~4 min) | **Aprovado** |
| 10 | `g17-take-10` | Square des Batignolles | `48.88804, 2.31554` | 3 | 100% Verificado | `→ g17-take-11` | 40 m → ~53 m (~1 min) | **Aprovado** |
| 11 | `g17-take-11` | Parc Clichy-Batignolles · Martin-Luther-King | `48.88835, 2.31526` | 3 | 100% Verificado | `→ g17-take-12` | 880 m → ~1162 m (~15 min) | **Aprovado** |
| 12 | `g17-take-12` | Tribunal judiciaire de Paris | `48.89590, 2.31890` | 3 | 100% Verificado | `→ g17-take-13` | 63 m → ~83 m (~1 min) | **Aprovado** |
| 13 | `g17-take-13` | Petite Ceinture · jardim do 17º | `48.89545, 2.31838` | 2 | 100% Verificado | `→ g17-take-14` | 344 m → ~454 m (~6 min) | **Aprovado** |
| 14 | `g17-take-14` | Cité des Fleurs · entrada da rue Guy-Môquet | `48.89263, 2.32032` | 3 | 100% Verificado | *(Fim do roteiro)* | — | **Aprovado** |

### 18º Arrondissement · Montmartre, Pigalle & Goutte d’Or (Butte-Montmartre) (`#g18`)

- **Takes:** 14 · **Fotografias verificadas:** 40 · **Mapa geral:** `mapa-g18`
- **Percurso total Ponto a Ponto:** **~2.35 km a pé** (~29 min de caminhada contínua) vs. **1.78 km** em linha reta

| # | ID do Ponto | Local / Monumento | Coordenadas (`lat, lon`) | Fotos | Licença & Link Commons | Próximo Ponto (`N → N+1`) | Linha Reta → Caminhada Est. | Status |
| :-: | :--- | :--- | :---: | :-: | :---: | :---: | :---: | :---: |
| 1 | `g18-take-01` | Moulin Rouge | `48.88402, 2.33262` | 3 | 100% Verificado | `→ g18-take-02` | 436 m → ~576 m (~7 min) | **Aprovado** |
| 2 | `g18-take-02` | Métro Abbesses · entrada Art Nouveau | `48.88475, 2.33848` | 2 | 100% Verificado | `→ g18-take-03` | 7 m → ~9 m (~1 min) | **Aprovado** |
| 3 | `g18-take-03` | Mur des Je t’aime | `48.88481, 2.33852` | 3 | 100% Verificado | `→ g18-take-04` | 147 m → ~194 m (~2 min) | **Aprovado** |
| 4 | `g18-take-04` | Bateau-Lavoir · Place Émile-Goudeau | `48.88605, 2.33778` | 3 | 100% Verificado | `→ g18-take-05` | 153 m → ~202 m (~3 min) | **Aprovado** |
| 5 | `g18-take-05` | Moulin de la Galette | `48.88734, 2.33705` | 3 | 100% Verificado | `→ g18-take-06` | 68 m → ~90 m (~1 min) | **Aprovado** |
| 6 | `g18-take-06` | Le Passe-Muraille · Place Marcel-Aymé | `48.88768, 2.33782` | 3 | 100% Verificado | `→ g18-take-07` | 92 m → ~121 m (~2 min) | **Aprovado** |
| 7 | `g18-take-07` | Place Dalida · busto | `48.88851, 2.33796` | 3 | 100% Verificado | `→ g18-take-08` | 79 m → ~104 m (~1 min) | **Aprovado** |
| 8 | `g18-take-08` | Rue de l’Abreuvoir | `48.88824, 2.33896` | 2 | 100% Verificado | `→ g18-take-09` | 55 m → ~73 m (~1 min) | **Aprovado** |
| 9 | `g18-take-09` | La Maison Rose | `48.88799, 2.33960` | 3 | 100% Verificado | `→ g18-take-10` | 26 m → ~34 m (~1 min) | **Aprovado** |
| 10 | `g18-take-10` | Clos Montmartre · vinhedo | `48.88816, 2.33984` | 3 | 100% Verificado | `→ g18-take-11` | 64 m → ~84 m (~1 min) | **Aprovado** |
| 11 | `g18-take-11` | Au Lapin Agile | `48.88873, 2.33999` | 3 | 100% Verificado | `→ g18-take-12` | 251 m → ~331 m (~4 min) | **Aprovado** |
| 12 | `g18-take-12` | Place du Tertre | `48.88652, 2.34067` | 3 | 100% Verificado | `→ g18-take-13` | 211 m → ~279 m (~3 min) | **Aprovado** |
| 13 | `g18-take-13` | Basilique du Sacré-Cœur | `48.88709, 2.34342` | 3 | 100% Verificado | `→ g18-take-14` | 191 m → ~252 m (~3 min) | **Aprovado** |
| 14 | `g18-take-14` | Square Louise-Michel · escadarias | `48.88538, 2.34354` | 3 | 100% Verificado | *(Fim do roteiro)* | — | **Aprovado** |

### 19º Arrondissement · Buttes-Chaumont, Bassin de la Villette & Ourcq (`#g19`)

- **Takes:** 14 · **Fotografias verificadas:** 42 · **Mapa geral:** `mapa-g19`
- **Percurso total Ponto a Ponto:** **~10.49 km a pé** (~131 min de caminhada contínua) vs. **7.95 km** em linha reta

| # | ID do Ponto | Local / Monumento | Coordenadas (`lat, lon`) | Fotos | Licença & Link Commons | Próximo Ponto (`N → N+1`) | Linha Reta → Caminhada Est. | Status |
| :-: | :--- | :--- | :---: | :-: | :---: | :---: | :---: | :---: |
| 1 | `g19-take-01` | 01 · Rotonde de la Villette | `48.88332, 2.36948` | 3 | 100% Verificado | `→ g19-take-02` | 519 m → ~685 m (~9 min) | **Aprovado** |
| 2 | `g19-take-02` | 02 · Bassin de la Villette | `48.88568, 2.37560` | 3 | 100% Verificado | `→ g19-take-03` | 564 m → ~744 m (~9 min) | **Aprovado** |
| 3 | `g19-take-03` | 03 · CENTQUATRE-PARIS | `48.88998, 2.37151` | 3 | 100% Verificado | `→ g19-take-04` | 1318 m → ~1740 m (~22 min) | **Aprovado** |
| 4 | `g19-take-04` | 04 · Butte Bergeyre | `48.87818, 2.37324` | 3 | 100% Verificado | `→ g19-take-05` | 656 m → ~866 m (~11 min) | **Aprovado** |
| 5 | `g19-take-05` | 05 · Parc des Buttes-Chaumont · Templo | `48.88090, 2.38120` | 3 | 100% Verificado | `→ g19-take-06` | 859 m → ~1134 m (~14 min) | **Aprovado** |
| 6 | `g19-take-06` | 06 · Église Saint-Jean-Baptiste de Belleville | `48.87534, 2.38936` | 3 | 100% Verificado | `→ g19-take-07` | 784 m → ~1035 m (~13 min) | **Aprovado** |
| 7 | `g19-take-07` | 07 · Quartier de la Mouzaïa | `48.88040, 2.39682` | 3 | 100% Verificado | `→ g19-take-08` | 127 m → ~168 m (~2 min) | **Aprovado** |
| 8 | `g19-take-08` | 08 · Parc de la Butte-du-Chapeau-Rouge | `48.88153, 2.39711` | 3 | 100% Verificado | `→ g19-take-09` | 898 m → ~1185 m (~15 min) | **Aprovado** |
| 9 | `g19-take-09` | 09 · Philharmonie de Paris | `48.88931, 2.39382` | 3 | 100% Verificado | `→ g19-take-10` | 108 m → ~143 m (~2 min) | **Aprovado** |
| 10 | `g19-take-10` | 10 · Grande Halle de la Villette | `48.88895, 2.39245` | 3 | 100% Verificado | `→ g19-take-11` | 723 m → ~954 m (~12 min) | **Aprovado** |
| 11 | `g19-take-11` | 11 · Parc de la Villette · Folie R4 | `48.89489, 2.38844` | 3 | 100% Verificado | `→ g19-take-12` | 518 m → ~684 m (~9 min) | **Aprovado** |
| 12 | `g19-take-12` | 12 · Canal de l’Ourcq · La Villette | `48.89097, 2.38460` | 3 | 100% Verificado | `→ g19-take-13` | 498 m → ~657 m (~8 min) | **Aprovado** |
| 13 | `g19-take-13` | 13 · La Géode | `48.89457, 2.38866` | 3 | 100% Verificado | `→ g19-take-14` | 373 m → ~492 m (~6 min) | **Aprovado** |
| 14 | `g19-take-14` | 14 · Cité des Sciences et de l’Industrie | `48.89724, 2.38557` | 3 | 100% Verificado | *(Fim do roteiro)* | — | **Aprovado** |

### 20º Arrondissement · Belleville, Ménilmontant & Père-Lachaise (`#g20`)

- **Takes:** 14 · **Fotografias verificadas:** 42 · **Mapa geral:** `mapa-g20`
- **Percurso total Ponto a Ponto:** **~8.59 km a pé** (~107 min de caminhada contínua) vs. **6.50 km** em linha reta

| # | ID do Ponto | Local / Monumento | Coordenadas (`lat, lon`) | Fotos | Licença & Link Commons | Próximo Ponto (`N → N+1`) | Linha Reta → Caminhada Est. | Status |
| :-: | :--- | :--- | :---: | :-: | :---: | :---: | :---: | :---: |
| 1 | `g20-take-01` | 01 · Rue Dénoyez · arte urbana | `48.87170, 2.37851` | 3 | 100% Verificado | `→ g20-take-02` | 496 m → ~655 m (~8 min) | **Aprovado** |
| 2 | `g20-take-02` | 02 · Parc de Belleville · Belvédère Willy-Ronis | `48.87032, 2.38495` | 3 | 100% Verificado | `→ g20-take-03` | 452 m → ~597 m (~7 min) | **Aprovado** |
| 3 | `g20-take-03` | 03 · Rue des Cascades | `48.87243, 2.39023` | 3 | 100% Verificado | `→ g20-take-04` | 280 m → ~370 m (~5 min) | **Aprovado** |
| 4 | `g20-take-04` | 04 · Villa de l’Ermitage | `48.87044, 2.39259` | 3 | 100% Verificado | `→ g20-take-05` | 227 m → ~300 m (~4 min) | **Aprovado** |
| 5 | `g20-take-05` | 05 · La Bellevilloise | `48.86841, 2.39216` | 3 | 100% Verificado | `→ g20-take-06` | 469 m → ~619 m (~8 min) | **Aprovado** |
| 6 | `g20-take-06` | 06 · Église Notre-Dame-de-la-Croix | `48.86834, 2.38575` | 3 | 100% Verificado | `→ g20-take-07` | 637 m → ~841 m (~11 min) | **Aprovado** |
| 7 | `g20-take-07` | 07 · Pavillon Carré de Baudouin | `48.86997, 2.39410` | 3 | 100% Verificado | `→ g20-take-08` | 158 m → ~209 m (~3 min) | **Aprovado** |
| 8 | `g20-take-08` | 08 · Rue du Retrait · arte urbana | `48.86857, 2.39451` | 3 | 100% Verificado | `→ g20-take-09` | 1025 m → ~1353 m (~17 min) | **Aprovado** |
| 9 | `g20-take-09` | 09 · Cimetière du Père-Lachaise · entrada principal | `48.86001, 2.38934` | 3 | 100% Verificado | `→ g20-take-10` | 787 m → ~1039 m (~13 min) | **Aprovado** |
| 10 | `g20-take-10` | 10 · Mur des Fédérés · Père-Lachaise | `48.85968, 2.40008` | 3 | 100% Verificado | `→ g20-take-11` | 607 m → ~801 m (~10 min) | **Aprovado** |
| 11 | `g20-take-11` | 11 · Mairie du 20e · Place Gambetta | `48.86509, 2.39900` | 3 | 100% Verificado | `→ g20-take-12` | 648 m → ~855 m (~11 min) | **Aprovado** |
| 12 | `g20-take-12` | 12 · La Campagne à Paris | `48.86596, 2.40776` | 3 | 100% Verificado | `→ g20-take-13` | 422 m → ~557 m (~7 min) | **Aprovado** |
| 13 | `g20-take-13` | 13 · Pavillon de l’Ermitage | `48.86226, 2.40645` | 3 | 100% Verificado | `→ g20-take-14` | 295 m → ~389 m (~5 min) | **Aprovado** |
| 14 | `g20-take-14` | 14 · Église Saint-Germain-de-Charonne | `48.86030, 2.40373` | 3 | 100% Verificado | *(Fim do roteiro)* | — | **Aprovado** |

### Passagens Cobertas de Paris (14 Takes + 41 Fichas Históricas) (`#passagens`)

- **Takes:** 14 · **Fotografias verificadas:** 42 · **Mapa geral:** `mapa-pass-geral`
- **Percurso total Ponto a Ponto:** **~6.21 km a pé** (~78 min de caminhada contínua) vs. **4.70 km** em linha reta

| # | ID do Ponto | Local / Monumento | Coordenadas (`lat, lon`) | Fotos | Licença & Link Commons | Próximo Ponto (`N → N+1`) | Linha Reta → Caminhada Est. | Status |
| :-: | :--- | :--- | :---: | :-: | :---: | :---: | :---: | :---: |
| 1 | `pass-take-1` | Galerie de la Madeleine | `48.86970, 2.32269` | 3 | 100% Verificado | `→ pass-take-2` | 955 m → ~1261 m (~16 min) | **Aprovado** |
| 2 | `pass-take-2` | Passage Choiseul | `48.86787, 2.33545` | 3 | 100% Verificado | `→ pass-take-3` | 324 m → ~428 m (~5 min) | **Aprovado** |
| 3 | `pass-take-3` | Passage des Deux-Pavillons | `48.86612, 2.33898` | 3 | 100% Verificado | `→ pass-take-4` | 38 m → ~50 m (~1 min) | **Aprovado** |
| 4 | `pass-take-4` | Galerie Vivienne | `48.86621, 2.33948` | 3 | 100% Verificado | `→ pass-take-5` | 29 m → ~38 m (~1 min) | **Aprovado** |
| 5 | `pass-take-5` | Galerie Colbert | `48.86634, 2.33913` | 3 | 100% Verificado | `→ pass-take-6` | 400 m → ~528 m (~7 min) | **Aprovado** |
| 6 | `pass-take-6` | Galerie Véro-Dodat | `48.86280, 2.34017` | 3 | 100% Verificado | `→ pass-take-7` | 706 m → ~932 m (~12 min) | **Aprovado** |
| 7 | `pass-take-7` | Passage du Grand-Cerf | `48.86481, 2.34933` | 3 | 100% Verificado | `→ pass-take-8` | 103 m → ~136 m (~2 min) | **Aprovado** |
| 8 | `pass-take-8` | Passage du Bourg-l'Abbé | `48.86452, 2.35067` | 3 | 100% Verificado | `→ pass-take-9` | 367 m → ~484 m (~6 min) | **Aprovado** |
| 9 | `pass-take-9` | Passage du Caire | `48.86782, 2.35061` | 3 | 100% Verificado | `→ pass-take-10` | 290 m → ~383 m (~5 min) | **Aprovado** |
| 10 | `pass-take-10` | Passage du Prado | `48.86956, 2.35356` | 3 | 100% Verificado | `→ pass-take-11` | 215 m → ~284 m (~4 min) | **Aprovado** |
| 11 | `pass-take-11` | Passage Brady | `48.87125, 2.35500` | 3 | 100% Verificado | `→ pass-take-12` | 976 m → ~1288 m (~16 min) | **Aprovado** |
| 12 | `pass-take-12` | Passage des Panoramas | `48.87083, 2.34167` | 3 | 100% Verificado | `→ pass-take-13` | 199 m → ~263 m (~3 min) | **Aprovado** |
| 13 | `pass-take-13` | Passage Jouffroy | `48.87258, 2.34222` | 3 | 100% Verificado | `→ pass-take-14` | 99 m → ~131 m (~2 min) | **Aprovado** |
| 14 | `pass-take-14` | Passage Verdeau | `48.87347, 2.34236` | 3 | 100% Verificado | *(Fim do roteiro)* | — | **Aprovado** |

### Igrejas de Paris (14 Takes) (`#igrejas`)

- **Takes:** 14 · **Fotografias verificadas:** 28 · **Mapa geral:** `mapa-igrejas-geral`
- **Percurso total Ponto a Ponto:** **~14.59 km a pé** (~182 min de caminhada contínua) vs. **11.05 km** em linha reta

| # | ID do Ponto | Local / Monumento | Coordenadas (`lat, lon`) | Fotos | Licença & Link Commons | Próximo Ponto (`N → N+1`) | Linha Reta → Caminhada Est. | Status |
| :-: | :--- | :--- | :---: | :-: | :---: | :---: | :---: | :---: |
| 1 | `igrejas-take-01` | Saint-Germain-l’Auxerrois | `48.85951, 2.34135` | 2 | 100% Verificado | `→ igrejas-take-02` | 969 m → ~1279 m (~16 min) | **Aprovado** |
| 2 | `igrejas-take-02` | Cathédrale Notre-Dame de Paris | `48.85294, 2.35005` | 2 | 100% Verificado | `→ igrejas-take-03` | 444 m → ~586 m (~7 min) | **Aprovado** |
| 3 | `igrejas-take-03` | Église Saint-Gervais-Saint-Protais | `48.85551, 2.35470` | 2 | 100% Verificado | `→ igrejas-take-04` | 502 m → ~663 m (~8 min) | **Aprovado** |
| 4 | `igrejas-take-04` | Église Saint-Paul-Saint-Louis | `48.85461, 2.36143` | 2 | 100% Verificado | `→ igrejas-take-05` | 1183 m → ~1562 m (~20 min) | **Aprovado** |
| 5 | `igrejas-take-05` | Église Saint-Séverin | `48.85209, 2.34571` | 2 | 100% Verificado | `→ igrejas-take-06` | 639 m → ~843 m (~11 min) | **Aprovado** |
| 6 | `igrejas-take-06` | Église Saint-Étienne-du-Mont | `48.84655, 2.34802` | 2 | 100% Verificado | `→ igrejas-take-07` | 1287 m → ~1699 m (~21 min) | **Aprovado** |
| 7 | `igrejas-take-07` | Église Saint-Germain-des-Prés | `48.85397, 2.33452` | 2 | 100% Verificado | `→ igrejas-take-08` | 332 m → ~438 m (~5 min) | **Aprovado** |
| 8 | `igrejas-take-08` | Église Saint-Sulpice | `48.85099, 2.33487` | 2 | 100% Verificado | `→ igrejas-take-09` | 1571 m → ~2074 m (~26 min) | **Aprovado** |
| 9 | `igrejas-take-09` | Église Saint-Eustache | `48.86340, 2.34513` | 2 | 100% Verificado | `→ igrejas-take-10` | 939 m → ~1239 m (~15 min) | **Aprovado** |
| 10 | `igrejas-take-10` | Église Saint-Roch | `48.86538, 2.33265` | 2 | 100% Verificado | `→ igrejas-take-11` | 795 m → ~1049 m (~13 min) | **Aprovado** |
| 11 | `igrejas-take-11` | Église de la Madeleine | `48.87013, 2.32454` | 2 | 100% Verificado | `→ igrejas-take-12` | 1849 m → ~2441 m (~31 min) | **Aprovado** |
| 12 | `igrejas-take-12` | Église Saint-Jean de Montmartre | `48.88424, 2.33794` | 2 | 100% Verificado | `→ igrejas-take-13` | 468 m → ~618 m (~8 min) | **Aprovado** |
| 13 | `igrejas-take-13` | Basilique du Sacré-Cœur | `48.88681, 2.34302` | 2 | 100% Verificado | `→ igrejas-take-14` | 72 m → ~95 m (~1 min) | **Aprovado** |
| 14 | `igrejas-take-14` | Église Saint-Pierre de Montmartre | `48.88672, 2.34204` | 2 | 100% Verificado | *(Fim do roteiro)* | — | **Aprovado** |

### Paris com Vista para a Torre Eiffel (14 Takes) (`#torre-eiffel`)

- **Takes:** 14 · **Fotografias verificadas:** 56 · **Mapa geral:** `mapa-eiffel-geral`
- **Percurso total Ponto a Ponto:** **~6.50 km a pé** (~81 min de caminhada contínua) vs. **4.92 km** em linha reta

| # | ID do Ponto | Local / Monumento | Coordenadas (`lat, lon`) | Fotos | Licença & Link Commons | Próximo Ponto (`N → N+1`) | Linha Reta → Caminhada Est. | Status |
| :-: | :--- | :--- | :---: | :-: | :---: | :---: | :---: | :---: |
| 1 | `eiffel-take-01` | Avenue de Camoëns | `48.85987, 2.28587` | 4 | 100% Verificado | `→ eiffel-take-02` | 315 m → ~416 m (~5 min) | **Aprovado** |
| 2 | `eiffel-take-02` | Esplanade du Trocadéro | `48.86200, 2.28870` | 4 | 100% Verificado | `→ eiffel-take-03` | 117 m → ~154 m (~2 min) | **Aprovado** |
| 3 | `eiffel-take-03` | Jardins du Trocadéro | `48.86121, 2.28975` | 4 | 100% Verificado | `→ eiffel-take-04` | 51 m → ~67 m (~1 min) | **Aprovado** |
| 4 | `eiffel-take-04` | Fontaines de Varsovie | `48.86084, 2.29016` | 4 | 100% Verificado | `→ eiffel-take-05` | 180 m → ~238 m (~3 min) | **Aprovado** |
| 5 | `eiffel-take-05` | Pont d’Iéna · acesso Trocadéro | `48.85994, 2.29220` | 4 | 100% Verificado | `→ eiffel-take-06` | 580 m → ~766 m (~10 min) | **Aprovado** |
| 6 | `eiffel-take-06` | Pont de Bir-Hakeim · colunata | `48.85572, 2.28755` | 4 | 100% Verificado | `→ eiffel-take-07` | 370 m → ~488 m (~6 min) | **Aprovado** |
| 7 | `eiffel-take-07` | Rue de Buenos-Aires | `48.85708, 2.29216` | 4 | 100% Verificado | `→ eiffel-take-08` | 414 m → ~546 m (~7 min) | **Aprovado** |
| 8 | `eiffel-take-08` | Champ-de-Mars · junto à Torre | `48.85690, 2.29781` | 4 | 100% Verificado | `→ eiffel-take-09` | 352 m → ~465 m (~6 min) | **Aprovado** |
| 9 | `eiffel-take-09` | Champ-de-Mars · alameda central | `48.85526, 2.30192` | 4 | 100% Verificado | `→ eiffel-take-10` | 582 m → ~768 m (~10 min) | **Aprovado** |
| 10 | `eiffel-take-10` | Rue Saint-Dominique · eixo da Torre | `48.86024, 2.30436` | 4 | 100% Verificado | `→ eiffel-take-11` | 282 m → ~372 m (~5 min) | **Aprovado** |
| 11 | `eiffel-take-11` | Rue de l’Université · vista clássica | `48.85936, 2.30074` | 4 | 100% Verificado | `→ eiffel-take-12` | 116 m → ~153 m (~2 min) | **Aprovado** |
| 12 | `eiffel-take-12` | Rue de Monttessuy | `48.85953, 2.29917` | 4 | 100% Verificado | `→ eiffel-take-13` | 375 m → ~495 m (~6 min) | **Aprovado** |
| 13 | `eiffel-take-13` | Passerelle Debilly | `48.86256, 2.29693` | 4 | 100% Verificado | `→ eiffel-take-14` | 1191 m → ~1572 m (~20 min) | **Aprovado** |
| 14 | `eiffel-take-14` | Pont Alexandre III | `48.86376, 2.31311` | 4 | 100% Verificado | *(Fim do roteiro)* | — | **Aprovado** |

### Pontes e Margens do Sena (22 Takes) (`#pontes-sena`)

- **Takes:** 22 · **Fotografias verificadas:** 88 · **Mapa geral:** `mapa-pontes-geral`
- **Percurso total Ponto a Ponto:** **~11.92 km a pé** (~149 min de caminhada contínua) vs. **9.03 km** em linha reta

| # | ID do Ponto | Local / Monumento | Coordenadas (`lat, lon`) | Fotos | Licença & Link Commons | Próximo Ponto (`N → N+1`) | Linha Reta → Caminhada Est. | Status |
| :-: | :--- | :--- | :---: | :-: | :---: | :---: | :---: | :---: |
| 1 | `pontes-take-01` | Pont de Bir-Hakeim | `48.85556, 2.28778` | 4 | 100% Verificado | `→ pontes-take-02` | 566 m → ~747 m (~9 min) | **Aprovado** |
| 2 | `pontes-take-02` | Pont d’Iéna | `48.85972, 2.29222` | 4 | 100% Verificado | `→ pontes-take-03` | 463 m → ~611 m (~8 min) | **Aprovado** |
| 3 | `pontes-take-03` | Passerelle Debilly | `48.86250, 2.29694` | 4 | 100% Verificado | `→ pontes-take-04` | 392 m → ~517 m (~6 min) | **Aprovado** |
| 4 | `pontes-take-04` | Pont de l’Alma | `48.86417, 2.30167` | 4 | 100% Verificado | `→ pontes-take-05` | 348 m → ~459 m (~6 min) | **Aprovado** |
| 5 | `pontes-take-05` | Port du Gros-Caillou | `48.86297, 2.30606` | 4 | 100% Verificado | `→ pontes-take-06` | 548 m → ~723 m (~9 min) | **Aprovado** |
| 6 | `pontes-take-06` | Pont Alexandre III | `48.86347, 2.31352` | 4 | 100% Verificado | `→ pontes-take-07` | 434 m → ~573 m (~7 min) | **Aprovado** |
| 7 | `pontes-take-07` | Pont de la Concorde | `48.86361, 2.31944` | 4 | 100% Verificado | `→ pontes-take-08` | 428 m → ~565 m (~7 min) | **Aprovado** |
| 8 | `pontes-take-08` | Passerelle Léopold-Sédar-Senghor | `48.86194, 2.32472` | 4 | 100% Verificado | `→ pontes-take-09` | 425 m → ~561 m (~7 min) | **Aprovado** |
| 9 | `pontes-take-09` | Pont Royal | `48.86083, 2.33028` | 4 | 100% Verificado | `→ pontes-take-10` | 242 m → ~319 m (~4 min) | **Aprovado** |
| 10 | `pontes-take-10` | Pont du Carrousel | `48.86000, 2.33333` | 4 | 100% Verificado | `→ pontes-take-11` | 357 m → ~471 m (~6 min) | **Aprovado** |
| 11 | `pontes-take-11` | Pont des Arts | `48.85833, 2.33750` | 4 | 100% Verificado | `→ pontes-take-12` | 306 m → ~404 m (~5 min) | **Aprovado** |
| 12 | `pontes-take-12` | Pont Neuf | `48.85667, 2.34083` | 4 | 100% Verificado | `→ pontes-take-13` | 111 m → ~147 m (~2 min) | **Aprovado** |
| 13 | `pontes-take-13` | Square du Vert-Galant | `48.85750, 2.34000` | 4 | 100% Verificado | `→ pontes-take-14` | 496 m → ~655 m (~8 min) | **Aprovado** |
| 14 | `pontes-take-14` | Pont au Change | `48.85667, 2.34667` | 4 | 100% Verificado | `→ pontes-take-15` | 331 m → ~437 m (~5 min) | **Aprovado** |
| 15 | `pontes-take-15` | Pont Saint-Michel | `48.85403, 2.34457` | 4 | 100% Verificado | `→ pontes-take-16` | 582 m → ~768 m (~10 min) | **Aprovado** |
| 16 | `pontes-take-16` | Pont de l’Archevêché | `48.85167, 2.35167` | 4 | 100% Verificado | `→ pontes-take-17` | 130 m → ~172 m (~2 min) | **Aprovado** |
| 17 | `pontes-take-17` | Pont Saint-Louis | `48.85278, 2.35222` | 4 | 100% Verificado | `→ pontes-take-18` | 239 m → ~315 m (~4 min) | **Aprovado** |
| 18 | `pontes-take-18` | Quai de Bourbon | `48.85296, 2.35547` | 4 | 100% Verificado | `→ pontes-take-19` | 150 m → ~198 m (~2 min) | **Aprovado** |
| 19 | `pontes-take-19` | Pont Marie | `48.85278, 2.35750` | 4 | 100% Verificado | `→ pontes-take-20` | 325 m → ~429 m (~5 min) | **Aprovado** |
| 20 | `pontes-take-20` | Pont de Sully | `48.85000, 2.35889` | 4 | 100% Verificado | `→ pontes-take-21` | 767 m → ~1012 m (~13 min) | **Aprovado** |
| 21 | `pontes-take-21` | Pont d’Austerlitz | `48.84500, 2.36611` | 4 | 100% Verificado | `→ pontes-take-22` | 1390 m → ~1835 m (~23 min) | **Aprovado** |
| 22 | `pontes-take-22` | Passerelle Simone-de-Beauvoir | `48.83528, 2.37806` | 4 | 100% Verificado | *(Fim do roteiro)* | — | **Aprovado** |

### Paris vista pelos reflexos (14 Takes) (`#reflexos`)

- **Takes:** 14 · **Fotografias verificadas:** 42 · **Mapa geral:** `mapa-reflexos-geral`
- **Percurso total Ponto a Ponto:** **~10.12 km a pé** (~126 min de caminhada contínua) vs. **7.67 km** em linha reta

| # | ID do Ponto | Local / Monumento | Coordenadas (`lat, lon`) | Fotos | Licença & Link Commons | Próximo Ponto (`N → N+1`) | Linha Reta → Caminhada Est. | Status |
| :-: | :--- | :--- | :---: | :-: | :---: | :---: | :---: | :---: |
| 1 | `reflexos-take-01` | Fontaines du Trocadéro | `48.86109, 2.29008` | 3 | 100% Verificado | `→ reflexos-take-02` | 60 m → ~79 m (~1 min) | **Aprovado** |
| 2 | `reflexos-take-02` | Jardins du Trocadéro após a chuva | `48.86135, 2.28936` | 3 | 100% Verificado | `→ reflexos-take-03` | 570 m → ~752 m (~9 min) | **Aprovado** |
| 3 | `reflexos-take-03` | Passerelle Debilly | `48.86256, 2.29693` | 3 | 100% Verificado | `→ reflexos-take-04` | 677 m → ~894 m (~11 min) | **Aprovado** |
| 4 | `reflexos-take-04` | Port du Gros-Caillou | `48.86307, 2.30616` | 3 | 100% Verificado | `→ reflexos-take-05` | 540 m → ~713 m (~9 min) | **Aprovado** |
| 5 | `reflexos-take-05` | Pont Alexandre III | `48.86347, 2.31352` | 3 | 100% Verificado | `→ reflexos-take-06` | 2220 m → ~2930 m (~37 min) | **Aprovado** |
| 6 | `reflexos-take-06` | Passage des Panoramas | `48.87095, 2.34166` | 3 | 100% Verificado | `→ reflexos-take-07` | 490 m → ~647 m (~8 min) | **Aprovado** |
| 7 | `reflexos-take-07` | Galerie Vivienne | `48.86673, 2.33976` | 3 | 100% Verificado | `→ reflexos-take-08` | 278 m → ~367 m (~5 min) | **Aprovado** |
| 8 | `reflexos-take-08` | Palais Royal e Colonnes de Buren | `48.86465, 2.33765` | 3 | 100% Verificado | `→ reflexos-take-09` | 293 m → ~387 m (~5 min) | **Aprovado** |
| 9 | `reflexos-take-09` | Rue de Rivoli e suas vitrines | `48.86304, 2.33447` | 3 | 100% Verificado | `→ reflexos-take-10` | 448 m → ~591 m (~7 min) | **Aprovado** |
| 10 | `reflexos-take-10` | Cour Carrée do Louvre | `48.86037, 2.33905` | 3 | 100% Verificado | `→ reflexos-take-11` | 245 m → ~323 m (~4 min) | **Aprovado** |
| 11 | `reflexos-take-11` | Pyramide du Louvre | `48.86099, 2.33584` | 3 | 100% Verificado | `→ reflexos-take-12` | 604 m → ~797 m (~10 min) | **Aprovado** |
| 12 | `reflexos-take-12` | Pont Neuf e margem do Sena | `48.85667, 2.34083` | 3 | 100% Verificado | `→ reflexos-take-13` | 90 m → ~119 m (~1 min) | **Aprovado** |
| 13 | `reflexos-take-13` | Square du Vert-Galant | `48.85741, 2.34033` | 3 | 100% Verificado | `→ reflexos-take-14` | 1150 m → ~1518 m (~19 min) | **Aprovado** |
| 14 | `reflexos-take-14` | Quai de Bourbon | `48.85321, 2.35469` | 3 | 100% Verificado | *(Fim do roteiro)* | — | **Aprovado** |
