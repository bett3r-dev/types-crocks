import Async from './Async';
import race from './Async/race';
import Either from './Either';

const noop = () => {};

const asyncValue1 = Async(() => 1);
const asyncValue2 = Async(() => 2);
const raceValue = race(asyncValue1, asyncValue2);

type applicative = (y:string) => (z:boolean) => (a:number) => number

asyncValue1
    .map(x=> x+1)
    .map<applicative>((x:number) => (y:string) => (z:boolean) => (a:number) => 2)
        .ap(Async.of('asdf'))
        .ap(Async.of(true))
        .ap(Async.of(34))
    .chain(x => Async.of('ásdf'))
    .map(x => x)
    .fork(noop, noop);

const eitherLeft = Either.Left(1);
const eitherRight = Either.Right(2);

eitherLeft.equals(eitherRight);
