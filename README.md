# common-js-utility-functions-lodash
miscreant-duker

---
https://github.com/smithrm941/common-js-utility-functions-lodash
authors:
- Rhonda Smith, Aisha Ortiz
license: MIT
team_size: 2
goal_id: 37
title: Common JS Utility Functions [Lodash]
created_at: '2017-03-27'
---

For this project, we reverse engineered a selection of functions from the Lodash library to show what is happening "under the hood" when one of these functions is executed.

For example, take the Lodash function _.drop, which takes as arguments an array from which elements will be dropped and a number which tells the function how many elements to drop from the beginning of the array. Using the Lodash function _.drop on an array [1, 2, 3] to drop the first two elements looks like this:

```
_.drop([1, 2, 3], 2)
```

and returns this:

```
[3]
```

In our project, we recreated this function using this code:

```
const drop = (dropArray, n) => {
  if(n === undefined || n === 0){
    dropArray.shift();
    return dropArray;
  } else if (n > 0){
    while(n > 0){
      dropArray.shift();
      n--;
    }
    return dropArray;
  }
}
```

With this code and our example array, invoking drop([1, 2, 3], 2) will return [3] just as the corresponding Lodash function did.

In addition to _.drop, we reproduced underlying code for an additional 26 Lodash functions (27 functions in total).


## Specifications

- [X] Tests and correct implementations exist for **27/64** (not all) utility functions from the Lodash library.

Our 64 functions:

Array
- [ ] chunk
- [ ] compact
- [ ] concat
- [ ] difference
- [X] drop
- [X] dropRight
- [ ] fill
- [ ] findIndex
- [ ] findLastIndex
- [X] head
- [X] indexOf

Collection
- [ ] every
- [ ] forEach
- [ ] includes
- [ ] invokeMap
- [ ] sortBy

Function
- [ ] defer
- [ ] flip

Lang
- [X] castArray
- [ ] clone
- [X] eq
- [X] gt
- [X] gte
- [X] isArray
- [X] isBoolean
- [X] isEmpty
- [X] isNan
- [ ] isRegExp
- [ ] isSet
- [X] isString
- [X] lt
- [ ] toFinite

Math
- [X] add
- [X] ceil
- [X] divide
- [X] floor
- [X] max
- [X] mean
- [X] min
- [X] multiply
- [ ] round
- [X] subtract
- [X] sum
- [ ] sumBy

Number
- [ ] clamp
- [X] inRange
- [ ] random

Object
- [ ] findKey
- [ ] findLastKey
- [ ] forIn
- [ ] get
- [ ] has
- [ ] keys
- [ ] omit
- [ ] pick

String
- [ ] camelCase
- [X] endsWith
- [ ] parseInt
- [X] toUpper
- [ ] trim
- [ ] words

Util
- [ ] itaratee
- [ ] matches
- [ ] property

### Other Specs

- [X] Functions are organized into files with the same names as the function groups from Lodash (e.g. "Array", "Collection", "Lang").
- [X] All code is written with ES2015.
- [X] Includes a README that describes each method and provides an example of use.
- [X] The artifact produced is properly licensed, preferably with the [MIT license](https://opensource.org/licenses/MIT).

### Stretch

- [ ] An additional **32** utility functions have tests and correct implementations.
- [ ] Package is published to [NPM][npm].
- [ ] All source code has inline documentation using [JSDoc][jsdoc] format.
- [ ] Documentation is published a simple [GitHub Pages][github-pages] site (hint: use a builder like the [documentation package][npm-documentation]).

---

## Quality Rubric

**Well formatted code**
- [X] Code uses a linter, which can be invoked with a command (e.g. `npm run lint`). [50 points]
- [X] Running the linter on all source code files generates no linting errors. [50 points]

**Clear and useful README**
- [X] Repository includes a README file with installation and setup instructions. [25 points]
- [X] Repository includes a README file with usage instructions and at least one example use case. [25 points]

**Proper dependency management**
- [X] There is a command to install dependencies (e.g. `npm install`) and it is specified in the installation and setup instructions of the README. [50 points]

**Good project management**
- [X] Commit messages are concise and descriptive. [25 points]
- [X] All features are added via pull requests. [25 points]
- [X] Every pull request has a description summarizing the changes made. [25 points]
- [X] Every pull request has been reviewed by at least one other person. [25 points]

## Resources

- [Lodash site][lodash]
- [JS Doc][jsdoc]
- [Documentation generator][npm-documentation]

[lodash]: https://lodash.com/
[lodash-docs]: https://lodash.com/docs/4.17.4
[github-pages]: https://pages.github.com/
[jsdoc]: http://usejsdoc.org/
[npm]: https://www.npmjs.com/
[npm-documentation]: https://www.npmjs.com/package/documentation
