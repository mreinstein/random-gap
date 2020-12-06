# random-gap
random number functions that are missing or lacking from the standard javascript library


## choose from array

randomly choose an item from an array, without modifying the source array

```javascript
const choices = [ 'hammer', 'wrench' 'drill' ]
const tool = choose(choices, removeChoice=false)
// e.g., tool === 'wrench',  choices === [ 'hammer', 'wrench', 'drill' ]
```


you can modify the array to actually remove the selected choice from it:

```javascript
const removeChoice = true
const choices = [ 'hammer', 'wrench' 'drill' ]
const tool = choose(choices, removeChoice)

// e.g., tool === 'wrench',  choices === [ 'hammer', 'drill' ]
```


You can provide a function that provides the source of random numbers.
Any function that returns a float between [0..1] is acceptable:

```javascript
import Alea from 'alea'


const rngFn = new Alea()
const removeChoice = true
const choices = [ 'hammer', 'wrench' 'drill' ]
const tool = choose(choices, removeChoice, rngFn)

```


# float

choose a float within a range (bounds inclusive)

```javascript
const v = randomFloat(-0.5, 2.3)  // returns a value anywhere between -0.5 and 2.3
```

You may provide an optional random number source function:
```javascript
const v = randomFloat(-0.5, 2.3, rngFn)
```


# int

choose an integer within a range (bounds inclusive)

```javascript
const v = randomInt(-7, 19)  // returns a value anywhere between -7 and 19
```

You may provide an optional random number source function:
```javascript
const v = randomInt(-7, 19, rngFn)
```


# uint32

choose an integer with the range of 0 to the maximum unsigned int representable with 32 bits

```javascript
const v = randomUint32()
```

You may provide an optional random number source function:
```javascript
const v = randomUint32(rngFn)
```
