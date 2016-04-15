'use strict'

// Lag en liste som inneholder tallene 1,6,3,2,10,5,12,15,6,9,17,14,7

var liste = [1, 6, 3, 2, 10, 5, 12, 15, 6, 9, 17, 14, 7]
var listeLengde = liste.length
var totalSum = 0

// Skriv ut alle tallene i lista
console.log('Skriv ut alle tallene i lista')
var alleTallContainerInnhold = ''
var alleTallContainer = document.getElementById('alleTall')

for (var i = 0; i < listeLengde; i++) {
  alleTallContainerInnhold = alleTallContainerInnhold + liste[i] + ', '
}

alleTallContainer.innerHTML = alleTallContainerInnhold



// Skriv ut alle tallene i lista motsatt
console.log('Skriv ut alle tallene i lista motsatt')
var alleTallContainerInnholdMotsatt = ''
var alleTallContainerMotsatt = document.getElementById('alleTallMotsatt')

liste.reverse()

for (var i = 0; i < listeLengde; i++) {
  alleTallContainerInnholdMotsatt = alleTallContainerInnholdMotsatt + liste[i] + ', '
}

alleTallContainerMotsatt.innerHTML = alleTallContainerInnholdMotsatt



// Skriv ut alle tall som er større enn 10
console.log('Skriv ut alle tall som er større enn 10')

for (var i = 0; i < listeLengde; i++) {
  if (liste[i] > 10) {
    console.log(liste[i])
  }
}

// Skriv ut alle tall som er delelig med 2
console.log('Skriv ut alle tall som er delelig med 2')

for (var i = 0; i < listeLengde; i++) {
  if (liste[i] % 2 === 0) {
    console.log(liste[i])
  }
}

// Skriv ut tallene i omvendt rekkefølge
console.log('Skriv ut tallene i omvendt rekkefølge')

liste.reverse()

for (var i = 0; i < listeLengde; i++) {
  console.log(liste[i])
}

// Skriv ut summen av tallene i lista
console.log('Skriv ut summen av tallene i lista')

for (var i = 0; i < listeLengde; i++) {
  totalSum += liste[i]
}

console.log(totalSum)

// Skriv ut gjennomsnittsverdien av tallene i lista
console.log('Skriv ut gjennomsnittsverdien av tallene i lista')

console.log(totalSum/listeLengde)