# Reflektioner

## Kapitel 2 Namngivning

| Namn | Förklaring | Reflektion och regler från Clean Code |
| ---- | ---------- | ------------------------------------- |
| countDays | Metodnamn på en metod som räknar dagar som passerat sedan ett datum. Om datumet är i framtiden räknar den dagar som är kvar. | **Use Intention-Revealing Names:** countDays beskriver vad metoden gör, men det kanske blir tydligare om det var två separata metoder som heter `getDaysUntil` och `getDaysSince`. **Method Names:** Utan `get` som preposition är det inte självklart att metoden returnerar något. |
| getDaysBetween | Metoden räknar hur många dagar som är mellan två datum. | **Method Names:** `get` används som preposition så det är tydligt att något returneras. |
| date1, date2 | Namn på argumenten i `getDaysBetween`. | **Make Meaningful Distinctions:** Att sätta siffror i slutet av namnen hjälper inte att beskriva vad de är till för. `startDate` och `endDate` är mer beskrivande namn. Men `date2` måste inte vara senare än `date1` för att metoden ska fungera. (Om `date2` är tidigare än `date1` returneras ett negativt nummer.) Med `startDate` och `endDate` låter det som att det första datum argumentet måste vara tidigare, men så är inte fallet. En lösning är att ändra till `startDate` och `endDate` och uppdatera `jsdoc` beskrivningen för att tydliggöra att `endDate` kan vara ett tidigare datum än `startDate`. |
| getOrdinalDate | Metoden returnerar ett nummer för dagen på året. | **Use Problem Domain Names:** Det är inte säkert att den som ska använda modulen vet vad `OrdinalDate` är. `getDayOfYear` är kanske lättare att förstå. |
| `case 0: // Sunday` | Magiskt nummer i en switch. [Länk till kodrad](../src/Week.js#L81) | **Use Intention-Revealing Names:** Istället för att använda variabel namn har jag använt kommentarer för att visa vad som menas med `0`. Det hade varit bättre med variabler tex. `const sunday = 0` eller att mappa nummer till veckodagsnamnen. |

## Kapitel 3 Funktioner

| Metodnamn | Länk eller kod | Antal rader | Reflektion |
| --------- | -------------- | ----------- | ---------- |
| getWeekNumber | [Länk](../src/Week.js#L32) | 15 | **Small:** Det går att bryta ut några mindre funktioner ur metoden. **One Level of Abstraction per Function:** `const dayOfTheWeek = this.#getDayOfTheWeek(this.#date)` har högre abstraktionsnivå än tex. `const week = Math.trunc((10 + (this.#day.getDayOfYear() - dayOfTheWeek)) / 7)`. Algoritmen blir lättare att förstå om hela `getWeekNumber` använde en hög abstraktionsnivå. **Do One Thing:** Det krävs många steg för att räkna ut veckonumret. Kanske veckonumret bör räknas ut när `Week` objektet skapas? Då behöver `getWeekNumber` bara hämta veckonumret. |
| getDays | [Länk](../src/Day.js#L31) | 13 | **Use Descriptive Names:** Metoden räknar ut dagar som passerat eller dagar som är kvar till ett visst datum. Mer beskrivande namn hade varit `getDaysSince` och `getDaysUntil`. Beräkningen av dagar behövs bara flyttas till en privat metod. |
| getStartOfWeek / getEndOfWeek | [Länk](../src/Week.js#L77) | 27 | **Don’t Repeat Yourself:** Funktionerna är nästan likadana, de har bara olika nummer. Det ska gå att slå ihop till en funktion, men har inte hunnit komma på en bra lösning för det. |
| getDatesBetween | [Länk](../src/TimeInterval.js#L30) | 18 | **Do One Thing:** Jag kunde ha använt en separat metod för att kopiera och sätta `Date` objekten till midnatt. Tex. har jag [getMidnightTimestamp](../src/Day.js#L57) i `Day` klassen. |
| has53weeks | [Länk](../src/Year.js#L61) | 8 | **Small:** Det är möjligt att skriva hela jämförelsen på en rad, men jag sparade strängjämförelserna i variabler för att det skulle bli mer läsbart. Jag kan skriva hjälpfunktioner för onsdag, torsdag, och fredag, men jag får fundera mer på det så att det inte blir många funktioner som upprepar samma sak. |

## Kodkvalitet

Något jag märkt att jag använder så kallade `Magic Numbers` flitigt. Jag visste sedan tidigare att det är bra att undvika att använda magic numbers, men det finns vissa välkända nummer som jag inte tycker ska bytas ut, till exempel 7 för antalet dagar i en vecka, eller 52 och 53 för max veckorna i ett år. Däremot finns det getDay() metoden för Date objektet som returnerar ett nummer som representerar veckodagen. Veckodagsnumren behövs i många av beräkningarna och när de används ser de ut som Magic Numbers. Jag försökte lösa detta på olika sätt, till exempel en metod som mappar numren till strängar, eller att använda variabler med veckodagsnamn.

Jag tycker att kodkvaliteten är något som förbättras desto längre tid jag lägger på koden. Funktionerna som jag skrev tidigt har genomgått flera förändringar än de som jag lade till senast. Detta betyder inte att jag är nöjd med alla de äldsta metoderna. `getWeekNumber()` var en av de första metoderna jag lade till och den kan fortfarande förbättras genom att använda fler hjälper-funktioner.

