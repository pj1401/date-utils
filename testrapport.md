# Testrapport

Testning sker med automatiska enhetstester.

```bash
npm run test // kör alla tester

npm run test:only // kör specifika tester

// exempel:
npm run test:only "getWeekNumber End of the year"
```

## 09-29

| Vad som testats | Hur det testats | Testresultat |
| --------------- | --------------- | ------------ |
| countDays       | Kontrollera att ett visst antal dagar har passerat sedan ett visst datum. | 1/1 |
| countDays       | Räkna antalet dagar till ett visst datum. | 1/1 |
| getWeekNumber       | Kontrollera att rätt veckonummer returneras. | 1/1 |
| getWeekNumber       | Kontrollera att rätt veckonummer i början av året returneras. | 9/9 |
| getWeekNumber       | Kontrollera att rätt veckonummer i slutet av året returneras. | 11/11 |
| getDaysBetween       | Kontrollera att rätt antal dagar har räknats. | 4/4 |
| addDays       | Kontrollera att det förväntade datumet returneras. | 2/2 |
| removeDays       | Inte implementerad. | 0 |

![Screenshot from running the tests](/docs/date-utils-test-09-29.png)
