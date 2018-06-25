# \<blox-random\>

Generates a random string or number of a specified length

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and npm (packaged with [Node.js](https://nodejs.org)) installed. Run `npm install` to install your element's dependencies, then run `polymer serve` to serve your element locally.

## Install blox-randomt

```
$ npm install blox-random
```

## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

## Import

```
$ import 'blox-random';
```

## Basic Use

```html
<blox-random
    length="20"
    type="number"
    result="{{result}}">
</blox-random>
```

## Javascript Generate Number

```html
<blox-random id="bloxRandom"></blox-random>
<script>
    this.$.bloxRandom.generateNumber(10)
    .then((num) => {
        // Do Something
    })
    .catch((err) => {
        // Do Something
    })
</script>
```

## Javascript Generate String

```html
<blox-random id="bloxRandom"></blox-random>
<script>
    this.$.bloxRandom.generateString(10)
    .then((str) => {
        // Do Something
    })
    .catch((err) => {
        // Do Something
    })
</script>
```