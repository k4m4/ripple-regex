# ripple-regex [![Build Status](https://travis-ci.org/k4m4/ripple-regex.svg?branch=master)](https://travis-ci.org/k4m4/ripple-regex) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

> Regular expression for matching Ripple (XRP) addresses


## Install

```
~ ❯❯❯ npm install ripple-regex
```


## Usage

```js
const rippleRegex = require('ripple-regex');

rippleRegex().test('nodejsrocks rG2ZJRab3EGBmpoxUyiF2guB3GoQTwMGEC');
//=> true

rippleRegex({exact: true}).test('nodejsrocks rG2ZJRab3EGBmpoxUyiF2guB3GoQTwMGEC foo');
//=> false

rippleRegex({exact: true}).test('rG2ZJRab3EGBmpoxUyiF2guB3GoQTwMGEC');
//=> true

'nodejsrocks rG2ZJRab3EGBmpoxUyiF2guB3GoQTwMGEC unicorn rfBKzgkPt9EvSJmk1uhoWTauaFCaRh4jMp rainbow'.match(rippleRegex());
//=> ['rG2ZJRab3EGBmpoxUyiF2guB3GoQTwMGEC', 'rfBKzgkPt9EvSJmk1uhoWTauaFCaRh4jMp']
```


## API

### rippleRegex([options])

Returns a regex for matching XRP addresses.

#### options.exact

Type: `boolean`<br>
Default: `false` *(Matches any XRP address in a string)*

Only match an exact string. Useful with `RegExp#test()` to check if a string is an XRP address.


## Related

- [ethereum-regex](https://github.com/k4m4/ethereum-regex) - Regular expression for matching Ethereum (ETH) addresses.
- [litecoin-regex](https://github.com/k4m4/litecoin-regex) - Regular expression for matching Litecoin (LTC) addresses.
- [monero-regex](https://github.com/k4m4/monero-regex) - Regular expression for matching Monero (XMR) addresses.
- [bitcoincash-regex](https://github.com/k4m4/bitcoincash-regex) - Regular expression for matching Bitcoin Cash (BCH) addresses.
- [neo-regex](https://github.com/k4m4/neo-regex) - Regular expression for matching NEO addresses.
- [dash-regex](https://github.com/k4m4/dash-regex) - Regular expression for matching Dash addresses.
- [dogecoin-regex](https://github.com/k4m4/dogecoin-regex) - Regular expression for matching Dogecoin (DOGE) addresses.


## License

MIT © [Nikolaos Kamarinakis](https://nikolaskama.me)