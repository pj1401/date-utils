# Reflektioner

## Kapitel 2 Namngivning

| Namn | Förklaring | Reflektion och regler från Clean Code |
| ---- | ---------- | ------------------------------------- |
| countDays | Metodnamn på en metod som räknar dagar som passerat sedan ett datum. Om datumet är i framtiden räknar den dagar som är kvar. | **Use Intention-Revealing Names:** countDays beskriver vad metoden gör, men det kanske blir tydligare om det var två separata metoder som heter `getDaysUntil` och `getDaysSince`. **Method Names:** Utan `get` som preposition är det inte självklart att metoden returnerar något. |
| getDaysBetween | Metoden räknar hur många dagar som är mellan två datum. | **Method Names:** `get` används som preposition så det är tydligt att något returneras. |
| getOrdinalDate | Metoden returnerar ett nummer för dagen på året. | **Use Problem Domain Names:** Det är inte säkert att den som ska använda modulen vet vad `OrdinalDate` är. `getDayOfYear` är kanske lättare att förstå. |

## Kapitel 3 Funktioner

| Metodnamn | Länk eller kod | Antal rader | Reflektion |
| --------- | -------------- | ----------- | ---------- |
| getWeekNumber | [Länk](src/Week.js#L31) | 15 | **Small:** Det går att bryta ut några mindre funktioner ur metoden. **One Level of Abstraction per Function:** Kanske den nestade if-satsen kan vara en `getLastWeek` funktion eller liknande. **Do One Thing:** Det krävs många steg för att räkna ut veckonumret. Kanske veckonumret bör räknas ut när `Week` objektet skapas? Då behöver `getWeekNumber` bara hämta veckonumret. |
| getDays | [Länk](src/Day.js#L31) | 13 | **Use Descriptive Names:** Metoden räknar ut dagar som passerat eller dagar som är kvar till ett visst datum. |
