# Medium

## Emner
- functions
- forEach

## Functions

Funksjoner er en måte å pakke inn funksjonalitet (ba-da-bish) på så du kan gjenbruke den senere.

For å lage en funksjon starter du med nøkkelordet ```function```og deretter navnet på funksjonen.

Så følger et par parenteser hvor du kan sende med parametere og så et par curlybraces som pakker inn selve innholdet.

```
function sayHello () {
  console.log('Hello')
}
```

For å ta i bruk funksjonen senere kaller du funksjonen. Det vil si at du skriver funksjonsnavnet og har med parenteser.

```
sayHello()

//=> 'hello'
```

En funksjon bør helst behandles som en isolert verden. Det vil si at eneste måte å få noe inn på er vha parametere og eneste vei ut er via retur.

Retur foregår ved at du bruker nøkkelordet ```return```, etterfulgt av det du ønsker å returnere.

```
function sayHelloToAnything (anything) {
    return 'Hello! ' + anything
}

var result = sayHelloToAnything('Mr Robot')

console.log(result)

//=> 'Hello! Mr Robot'
```

[Les mer om functions på MDN](https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/JavaScript_basics#Functions)

[Løsningsforslag](../besvarelser/medium.js)

Kjør løsningsforslag ```$ npm run medium```