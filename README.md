# random-gap
random number functions that are missing or lacking from the standard javascript library


## choose from array

randomly choose an item from an array, without modifying the source array

```javascript
const choices = [ 'hammer', 'wrench' 'drill' ]
const tool = choose(choices, removeChoice=false)
// e.g., tool === 'wrench',  choices === [ 'hammer', 'wrench', 'drill' ]
```


you can also modify the array to actually remove the selected choice from it:

```javascript
const removeChoice = true
const choices = [ 'hammer', 'wrench' 'drill' ]
const tool = choose(choices, removeChoice)

// e.g., tool === 'wrench',  choices === [ 'hammer', 'drill' ]
```


# float 

choose a float within a range (bounds inclusive)

```javascript
const v = randomFloat(-0.5, 2.3)  // returns a value anywhere between -0.5 and 2.3
```


# int 

choose an integer within a range (bounds inclusive)

```javascript
const v = randomInt(-7, 19)  // returns a value anywhere between -7 and 19
```


# uint32

choose an integer with the range of 0 to the maximum unsigned int representable with 32 bits

```javascript
const v = randomUint32()
```

