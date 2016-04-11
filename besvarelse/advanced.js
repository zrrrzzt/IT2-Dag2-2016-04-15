'use strict'

// Lag en liste som inneholder tallene 1,6,3,2,10,5,12,15,6,9,17,14,7

var liste = [1, 6, 3, 2, 10, 5, 12, 15, 6, 9, 17, 14, 7]
var listeLengde = liste.length
var totalSum = 0

// Skriv ut alle tallene i lista
console.log('Skriv ut alle tallene i lista')
console.log(liste.join(', '))

// Skriv ut alle tall som er større enn 10
console.log('Skriv ut alle tall som er større enn 10')

function isBiggerThan10 (tall) {
  return tall > 10
}

console.log(liste.filter(isBiggerThan10).join(', '))

// Skriv ut alle tall som er delelig med 2
console.log('Skriv ut alle tall som er delelig med 2')

function erDeleligMed2 (tall) {
  return tall % 2 === 0
}

console.log(liste.filter(erDeleligMed2).join(', '))

// Skriv ut tallene i omvendt rekkefølge
console.log('Skriv ut tallene i omvendt rekkefølge')

liste.reverse()

console.log(liste.join(', '))

// Skriv ut summen av tallene i lista
console.log('Skriv ut summen av tallene i lista')

totalSum = liste.reduce(function (forrigeTall, detteTall) {
  return forrigeTall + detteTall
})

console.log(totalSum)

// Skriv ut gjennomsnittsverdien av tallene i lista
console.log('Skriv ut gjennomsnittsverdien av tallene i lista')

console.log(totalSum/listeLengde)
