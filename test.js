import test from 'ava';
import m from './';

const fixtures = [
		'rG2ZJRab3EGBmpoxUyiF2guB3GoQTwMGEC',
		'rfBKzgkPt9EvSJmk1uhoWTauaFCaRh4jMp',
		'rPDXxSZcuVL3ZWoyU82bcde3zwvmShkRyF',
		'r9Gps6fB9YLuZ87rWx7M9TgLAGK2zsz5s6',
		'rJHygWcTLVpSXkowott6kzgZU6viQSVYM1'
];

const fixturesNot = [
		'16rCmCmbuWDhPjWTrpQGaU3EPdZF7MTdUk',
		'DDTtqnuZ5kfRT5qh2c7sNtqrJmV3iXYdGG',
		'LQL9pVH1LsMfKwt82Y2wGhNGkrjF8vwUst',
		'0xsfdlffsjksldfj[IPv6:2001:db8::2]',
		'XekiLaxnqpFb2m4NQAEcsKutZcZgcyfo6W',
		'nikolaskam{at}gmail{dot}com'
];

test('Exact XRP addresses', t => {
	for (const x of fixtures) {
		t.true(m({exact: true}).test(x));
	}
});

test('Non-exact XRP addresses', t => {
	for (const x of fixtures) {
		t.is((m().exec(`foo ${x} bar`) || [])[0], x);
	}
	t.is(m().exec('ripple:rG2ZJRab3EGBmpoxUyiF2guB3GoQTwMGEC')[0], 'rG2ZJRab3EGBmpoxUyiF2guB3GoQTwMGEC');
});

test('Non-XRP addresses', t => {
	for (const x of fixturesNot) {
		t.false(m({exact: true}).test(x));
	}
});