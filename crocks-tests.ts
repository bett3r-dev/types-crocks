import Async from './Async';
import race from './Async/race';
import Either from './Either';

const noop = () => {};

const asyncValue1 = Async(() => 1);
const asyncValue2 = Async(() => 2);
const raceValue = race(asyncValue1, asyncValue2);

raceValue
    .map(x=>y=>x+y)
        .ap(Async.of(4))
    .fork(noop, noop);

const eitherLeft = Either.Left(1);
const eitherRight = Either.Right(2);

eitherLeft.equals(eitherRight);
