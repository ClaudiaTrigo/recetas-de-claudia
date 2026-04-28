M3. Imatges i animació a la web
En aquest tercer mòdul de l'assignatura Eines HTML i CSS I descobrirem com gestionar adequadament recursos visuals com imatges i formes, i com millorar l'experiència d'usuari de les nostres webs i aplicacions a través d'animacions.

En primer lloc, ens familiaritzarem amb els diversos formats d'imatges i aprendrem els avantatges de cadascun per a saber quin utilitzar en cada cas. Veurem també quines diferències existeixen entre navegadors en aquest aspecte.

A continuació explorarem les diverses eines que tenim a l'abast per a utilitzar imatges de la forma més accessible possible i optimitzant el seu pes. Aquí tractarem conceptes tan importants com les imatges responsive.

Ens centrarem especialment en el format SVG, un format per a mostrar gràfics en web que ofereix unes característiques úniques. Entendrem què el fa tan especial, aprendrem a usar-ho i veurem alguns casos d'ús.

Una vegada coneguem el funcionament bàsic, implementarem algunes d'aquestes eines en el nostre boilerplate de desenvolupament web. El punt de partida d'aquest mòdul serà, per tant, el resultat del mòdul anterior.

Finalment, entrarem breument en el món de les transicions i animacions web, sobretot en CSS. Entendrem per què és important tenir-les en compte avui dia, i com implementar-les per a oferir una millor experiència a les persones que utilitzin la nostra aplicació.

Com sempre, els materials d'aprenentatge estan disponibles en la secció Recursos bàsics. En la secció Continguts i activitats trobareu diferents idees i propostes d'activitats senzilles per a consolidar els coneixements adquirits amb els recursos proposats. Si teniu qualsevol dubte sobre alguna de les activitats proposades o no trobeu la resposta a alguna de les preguntes, obriu un fil en el fòrum per a parlar-ne.

Objectius d'aprenentatge
Familiaritzar-se amb els formats d’imatge disponibles a la web, i conèixer-ne els avantatges i inconvenients.
Conèixer les possibilitats que ofereix la web a l’hora de gestionar imatges de forma responsive, accessible i amb un bon rendiment.
Conèixer els avantatges que ofereix el format SVG.
Conèixer com integrar el processament d’imatges en un boilerplate modern per desenvolupar projectes web.
Conèixer els principis bàsics de transformacions i animacions CSS.
Recursos bàsics
Les lectures que us portaran a assolir els objectius d'aprenentatge d'aquest mòdul són les següents:

Introducció a les imatges responsive: https://cloudfour.com/thinks/responsive-images-101-definitions/Links to an external site. (l'article enllaçat és la primera part d'una sèrie molt interessant de 10 articles sobre imatges responsive).
I, també, sobre el mateix tema: https://developer.mozilla.org/en-us/docs/learn/html/multimedia_and_embedding/responsive_imagesLinks to an external site.
L'apartat "Images" de Web Fundamentals de Google Developers: https://developers.google.com/web/fundamentals/design-and-ux/responsive/imagesLinks to an external site.
La documentació completa sobre SVG a MDN: https://developer.mozilla.org/en-us/docs/web/svgLinks to an external site.
Introducció a clip-path i els conceptes de clipping i masking: https://css-tricks.com/clipping-masking-css/Links to an external site.
Els articles sobre optimització d’imatges a web.dev: https://web.dev/explore/fast#optimize-your-imagesLinks to an external site. 
Introducció a l'animació basada en CSS: https://thoughtbot.com/blog/css-animation-for-beginnersLinks to an external site.
L’article sobre CSS Transitions a MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitionsLinks to an external site. 
Atenció: les documentacions tècniques dels conceptes i eines que figuren aquí a dalt poden ser molt extenses i contenen molta més informació de la necessària per a aconseguir els objectius d'aprenentatge d'aquest mòdul. Les documentacions han d'usar-se com a referència i no com a lectura seqüencial obligatòria, i només serà necessari que entengueu i aprengueu el necessari per a aquest curs. Per aquestes raons, es recomana la lectura d'aquests documents i la realització de les activitats d'acord amb les pautes proposades en la secció Continguts i activitats. Us animem que, a més, llegiu i aprengueu tot el que us interessi i que complementi els continguts d'aquest curs.

P2. Web i recursos multimèdia (enunciat complet)

En els primers mòduls, i en concret en el primer lliurament, hem creat un entorn modern per desenvolupar aplicacions web, i fins i tot l'hem utilitzat per crear un lloc web.

Així doncs, aquesta pràctica proposa el repte de continuar afegint funcionalitats sobre el codi desenvolupat en la primera PAC i el coneixement adquirit en el Mòdul 3. La pràctica té uns requisits mínims que s'especifiquen en l'apartat de Descripció. Tot el procés que segueixis haurà d'estar documentat, i caldrà lliurar exactament el que es demana en l'apartat de Format abans data de la data límit de lliurament per poder ser avaluat.

Recorda que el pes d'aquesta PAC és d'un 35% de la nota de l'avaluació contínua.

Objectius
Afegir adequadament recursos multimèdia al nostre lloc web responsive.
Utilitzar l’inspector DOM, l’editor d’estils i les eines per a disseny responsive del navegador com a ajuda per al desenvolupament.
Implementar adequadament les tècniques de clipping, imatges responsive i animació web, i fer-ho de manera accessible.
Descripció
La PAC consta de dues parts: desenvolupament del lloc web i documentació. Cal realitzar i lliurar les dues parts de la PAC perquè sigui avaluada.

 

Part 1: Desenvolupament

En la part de desenvolupament, hauràs de seguir treballant en el projecte web de la PAC anterior, seguint les directrius marcades. No obstant això, pots fer les modificacions que creguis oportunes mentre mantinguis la mateixa estructura i requeriments definits en la PAC 1.

Utilitza el mateix repositori de github i publica la web sota el mateix domini.

El lloc web haurà de seguir les característiques que s'especifiquen a continuació:

1. Totes les imatges de la web han de ser responsive i almenys ha d'haver-hi una imatge per cada tècnica d'imatges responsive.
2. Utilitza sharp per optimitzar totes les imatges de la web. Considera, si ho trobes necessari, canviar els formats utilitzats com a part del procés d'optimització.
3. La web ha de ser responsivei s'ha de visualitzar correctament des de qualsevol dispositiu modern (telèfon, tauleta, ordinador, etc.). Tal com hem vist en el Mòdul 3, això implica que els continguts multimèdia (especialment imatges) han d'adequar-se al dispositiu que consulta la web: és important que s’adaptin, com a mínim, a la grandària de la pantalla. De nou, i sabent que habitualment volem un disseny tan net com sigui possible, intenteu desenvolupar una pàgina que permeti ensenyar el que s'ha après.
4. La web ha de tenir alguns elements animats mitjançant transicions i animacions aplicades al CSS: siguin imatges, enllaços, textos o qualsevol altre recurs. Sigueu creatius!
Les pràctiques entregades han de complir amb les pautes AA de WCAG 2.0 (http://www.sidar.org/traducciones/wcag20/es/#guidelineLinks to an external site.Links to an external site.). En particular, dins dels objectius d'aquesta activitat, això inclou (però no es limita a):
- oferir alternatives al contingut no textual,
- no utilitzar només el color per comunicar informació,
- assegurar el contrast mínim de color,
- proporcionar enllaços "saltar navegació" i equivalents on hi hagi blocs de contingut repetits entre pàgines,
- utilitzar correctament el títol de pàgina, encapçalaments, i donar textos adequats als enllaços seguint les bones pràctiques especificades als recursos d'aprenentatge,
- especificar correctament l'idioma del contingut de cada pàgina, i dels fragments de contingut en altres idiomes que pugui haver-hi,
- si hi ha formularis i/o taules, s'han d'ajustar a les bones pràctiques especificades als recursos d'aprenentatge,
- les pàgines han de ser vàlides
Heu de llegir totes les pautes AA i assegurar-vos que el vostre lliurament les compleix.

Portada

En aquesta pàgina ha d'haver-hi almenys un recurs gràfic fet amb SVG. Aquest SVG ha de tenir una petita animació mitjançant CSS.
Ha d'haver-hi almenys un recurs gràfic editat amb clip-path. Sigues creatiu! Talla alguna imatge i crea alguna forma relativament complexa que quedi ben integrada a la pàgina.

Pàgina de detall

La imatge destacada ha d'incloure gestió de la direcció d'art.
A més d'aquests requisits mínims, pots ampliar el teu projecte com ho creguis oportú. Per exemple: saps què és un Favicon i com s’afegeix a un projecte web?

Com sempre, la web ha d'estar publicada i ser accessible des d'internet.