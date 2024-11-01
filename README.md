# random-gap

Randomness functions that are missing or lacking from the standard javascript library


## choose from array

Randomly choose an item from an array, without modifying the source array

```javascript
import * as Random from '@footgun/random-gap'

const choices = [ 'hammer', 'wrench' 'drill' ]
const tool = Random.choose(choices, removeChoice=false)
// e.g., tool === 'wrench',  choices === [ 'hammer', 'wrench', 'drill' ]
```


You can modify the array to actually remove the selected choice from it:

```javascript
import * as Random from '@footgun/random-gap'

const removeChoice = true
const choices = [ 'hammer', 'wrench' 'drill' ]
const tool = Random.choose(choices, removeChoice)

// e.g., tool === 'wrench',  choices === [ 'hammer', 'drill' ]
```


You can provide a function that provides the source of random numbers.
Any function that returns a float between [0..1] is acceptable:

```javascript
import Alea        from 'alea'
import * as Random from '@footgun/random-gap'


const rngFn = new Alea()
const removeChoice = true
const choices = [ 'hammer', 'wrench' 'drill' ]
const tool = Random.choose(choices, removeChoice, rngFn)

```


# float

Choose a float within a range (bounds inclusive)

```javascript
import * as Random from '@footgun/random-gap'

const v = Random.float(-0.5, 2.3)  // returns a value anywhere between -0.5 and 2.3
```

You may provide an optional random number source function:
```javascript
import * as Random from '@footgun/random-gap'

const v = Random.float(-0.5, 2.3, rngFn)
```


# int

Choose an integer within a range (bounds inclusive)

```javascript
import * as Random from '@footgun/random-gap'

const v = Random.int(-7, 19)  // returns a value anywhere between -7 and 19
```

You may provide an optional random number source function:
```javascript
import * as Random from '@footgun/random-gap'

const v = Random.int(-7, 19, rngFn)
```


# uint32

Choose an integer with the range of 0 to the maximum unsigned int representable with 32 bits

```javascript
import * as Random from '@footgun/random-gap'

const v = Random.uint32()
```

You may provide an optional random number source function:
```javascript
const v = randomUint32(rngFn)
```


# point in 2D circle

Choose an 2D point within a circle

```javascript
import * as Random from '@footgun/random-gap'

const out = [ NaN, NaN ]
const center = [ 20, 20 ]
const radius = 10
Random.pointIn2DCircle(out, center, radius)

// out is randomly chosen within <radius> units of center. e.g.,  [ 21.273390945071625, 28.23801158583667 ]
console.log(out)
```


You may provide an optional random number source function:
```javascript
const v = randomUint32(rngFn)
```
