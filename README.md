# Teknisk dokumentation for Tema 8 gruppeprojekt

Når man er flere der bidrager til en kodebase, lærer man hurtigt, at ens sædvanlige måder at gøre tingene på ikke nødvendigvis er logisk for alle.

Skriv derfor jeres fælles retningslinjer for punkterne herunder(tilføj gerne flere selv), sådan som det giver bedst mening for jer som gruppe. Dokumentationen sikre, at jeres fælles kodebase forbliver overskuelig, er let at arbejde med og til at forstå for alle, og at I undgå konflikter, og har nemmere ved at hjælpe hinanden undervejs.

## Projektstruktur:

Beslut, hvordan I vil organisere jeres projekt – struktur for mapper og filer.

- Hvordan organiserer I billeder, fonte og andre ressourcer?
  Vi har en mappe, som kun er til billeder, samt en mappe der er til vores fonte.

- Hvor placerer I boilerplate?(fx CSS- og JavaScript-filer, der bruges på tværs af projektet) Hvor placerer I HTML, CSS- og JavaScript-filer til fx detaljevisning og listevisning?
  Vi har lavet både css og javascript mapper, hvor henholdsvis css eller javascript filer bliver lagt i. På denne måde bevarer vi overblikket bedre. Der er lavet en css fil, som passer til hver enkelt af vores html filer. Derudover har vi en custom css, hvor vi har alle vores fonte.

## Navngivning:

Beslutte hvordan i vil navngive filer og mapper for at sikre en ensartet struktur og undgå forvirring.

- Hvordan navngiver I filnavne? (fx små bogstaver, ingen mellemrum, brug af - eller \_)
  Alle filer er med små bogstaver og indeholder et enkelt ord udover .css/html.

- Hvordan sikre I at det er til at forstå hvilke HTML-, CSS- og JavaScript-filer der høre sammen?
  Vi kalder dem det samme, så der ikke bliver rodet rundt i det.

## Link til scripts:

- Hvor placerer I script referencer i HTML'en? (fx i <head> med defer attribute, eller sidst i <body>)

## Git branches:

- Hvordan navngiver I branches, så alle kan forstår hvem der arbejder i branchen og på hvad?(fx feature-lotte-formular)
  vi kalder dem det vi arbejder med fx footer, header, kurv osv.

## Arbejdsflow:

- Hvordan fordeler I arbejdet, så I undgår at flere arbejder i de samme filer samtidigt?
  Vi aftaler hvem der laver hvad, så vi er sikre på, at der ikke er nogle der er i de samme filer på samme tid. Derudover siger vi til, når vi er færdige på en fil, så andre kan have mulighed for at komme ind og tilføje det de skal.

- Hvordan sikrer I, at commit-beskeder er beskrivende?
  Vi beskriver kort det arbejde der er lavet, så alle forstår hvad der er sket i den specifikke branch.

- Hvordan kommunikerer i om ændringer i main branchen når feature merges?
  Vi snakker altid sammen, om det er fysisk, over messenger eller teams, så vi undgår konfliker ved merge.

## Kode:

<!-- - Hvordan skriver i funktioner i JavaScript?(fx med function keyword eller som arrow functions) -->

Vi benytter function i Javascript koden.

<!-- - Beslut hvilken CSS selector i benyttes til referener i henholdsvis CSS og JavaScript(fx. id'er til JavaScript og Classes til CSS)
- Skal filer have korte forklaringer som kommentarer? -->

Der er skrevet korte kommentarer i css koden, så det er overskueligt at finde hvad der bliver stylet hvor.

<!-- # Funktionalitet

Dette afsnit skal forklare hvad I konkret har arbejde med, for at udvikle websitet. Tænk over hvilke interaktioner brugeren kan foretage på sitet? Eller hvordan websitet håndterer og præsenterer data? Eksempler på funktionalitet, der kan beskrives:

- Hentning af produkter fra API.
- Filtrering af produkter baseret på brugerens valg.
- Dynamisk visning af produkter i HTML.

Brug korte beskrivelser, som i eksemplerne herover -->

Der er arbejdet med en lineær html struktur, som gør sitet simpelt at navigere rundt i.

Der hentes data fra DummyJSON API, i kategorierne "Home-decoration", "furniture" og "Kitchen-accessories".

Den dynamiske visning af produkter på sitet, forløber fra menu (hvor der vælges kategori), til visning af produkter i den valgte kategori, og derefter kan man gå til en mere detaljeret side om det enkelte produkt.

Der er kun benyttet lukket kortsortering på sitet.

<!-- # API endpoints

Dette afsnit skal liste de endpoints fra API'et i har benyttet:

- (fx. https://dummyjson.com/products)

# Dokumentation af Funktion

Dette afsnit skal beskrive en funktion I selv har udviklet. Det kunne eksempelvis være en funktion der generere en listen over fx. produkter:

- Beskrivelse: Hvad gør funktionen? Hvordan spiller den sammen med resten af koden?
- Parametre: Hvilke input forventes (fx en værdi fra en dropdown eller URL'en)?
- Returnerer: Beskriv, om funktionen returnerer en værdi eller blot manipulerer DOM’en.
- Eksempel på brug: Indsæt funktions-koden herunder(der hvor koden er i eksemplet) og vis, hvordan funktionen kaldes: -->

Funktionen på kategori.js viser produkterne og henter data fra API'en.
Den retunere både værdier, data og thumbnail.

function showProducts(productsArr) { <!--Her er funktionen-->
productContainer.innerHTML = "";
productsArr.forEach((product) => {
console.log("product.data", product.data);

<!--Her henter funktionen data fra API'en. Det indsættes de respektive steder, altså de steder hvor data, skal fremgå på sitet-->

    productContainer.innerHTML += `        <div class="cardSoldout">
          <span class="badge">-${product.discountPercentage}%</span>
          <a href="produkt.html?id=${product.id}"
            ><img
              src="${product.thumbnail}"
              alt="${product.title}"
          /></a>
          <p class="productid">${product.id}</p>
          <p class="productcategory">${product.category}</p>
          <p>Produktnavn: ${product.title}</p>
          <p>Førpris:</p>
          <span class="oldprice">${Math.round(product.price / (1 - product.discountPercentage / 100))},- DKK</span><br />
          <span class="newprice">Nypris: ${product.price},- DKK</span>
          <button class="buybutton">Læg i kurv</button>
        </div>`;

});
}

```javascript
//funktionens kode:
function voresFunktion(sprog) {
  console.log(`${sprog} syntax highlighting`);
}
//hvordan funktionen kaldes:
voresFunktion("JavaScript");
```
