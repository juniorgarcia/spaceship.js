# What is it for?

Useful for sorting strings in JavaScript using the new `sort` function and to
use in some `switch` statements making the code cleaner.

It acts like PHP's spaceship (`<=>`) operator.

## How does it work?

- The `spaceship` function takes two arguments;
- If the left hand side argument is _LESS THAN_ the right side argument, the function returns _-1_;
- If the left hand side argument is _EQUAL_ the right side argument, the function returns _0_;
- If the left hand side argument is _GREATER THAN_ the right side argument, the function returns _1_;

## Usage

### Importing / requiring the function

You just need to require the module like this:

```javascript
const spaceship = require("spaceship").default;
```

Or like this:

```javascript
import spaceship from "spaceship";
```

Then use it:

```javascript
spaceship(10, 5); //  1
spaceship(10, 10); //  0
spaceship(10, 20); // -1
```

That's all.
