import {expectType} from 'tsd';
import rippleRegex = require('.');

expectType<RegExp>(rippleRegex());
expectType<RegExp>(rippleRegex({exact: true}));
