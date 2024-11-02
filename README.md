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


## float

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


## int

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


## uint32

Choose an integer with the range of 0 to the maximum unsigned int representable with 32 bits

```javascript
import * as Random from '@footgun/random-gap'

const v = Random.uint32()
```

You may provide an optional random number source function:
```javascript
const v = randomUint32(rngFn)
```


## point in 2D circle

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


## LootTable

A loot drop table implementation in JavaScript.

LootTable is used to make a random choice among a weighted list of alternatives for item drops,
map generation, and many other processes. There's a good overview of loot tables on
[Lost Garden](http://www.lostgarden.com/2014/12/loot-drop-tables.html).

```javascript
import { LootTable } from '@footgun/random-gap'


const lt = LootTable.create()
LootTable.add(lt, 'sword', 20)
LootTable.add(lt, 'shield', 5)
LootTable.add(lt, 'gold', 5)
LootTable.add(lt, null, 1)
const item = LootTable.choose(lt) // most likely a sword, sometimes null
```

Weights are arbitrary, not percentages, and don't need to add up to 100.
If one item has a weight of 2 and another has a weight of 1, the first item
is twice as likely to be chosen. If quantity is given, then calls to `choose()`
will only return that item while some are available. Each `choose()` that
selects that item will reduce its quantity by 1.

Items can be anything, not just strings. They can be arrays, numbers, JSON
data, null, functions... even another LootTable!

You may provide an optional random number source function:
```javascript
const v = randomUint32(rngFn)
```


## references
The loot table implementation is taken from https://github.com/jotson/LootTable.js
and modified slightly to be data oriented, pure esm, with no build step.
