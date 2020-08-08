declare namespace rippleRegex {
	interface Options {
		/**
		Only match an exact string. By default, it matches any XRP addresses in a string. Useful with `RegExp#test()` to check if a string is an XRP address.
		@default false
		*/
		readonly exact?: boolean;
	}
}

/**
Returns a regex for matching XRP addresses.
@example
```
import rippleRegex = require('ripple-regex')
rippleRegex().test('nodejsrocks rG2ZJRab3EGBmpoxUyiF2guB3GoQTwMGEC');
//=> true
```
*/
declare function rippleRegex(options?: rippleRegex.Options): RegExp;

export = rippleRegex;
