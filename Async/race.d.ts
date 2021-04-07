import Async from './Async';

/**
 * race :: Async e a -> Async e a -> Async e a
 */
declare function race<L,R>(val1: Async<L,R>, val2: Async<L,R>): Async<L,R>;
declare function race<L,R>(val1: Async<L,R>): (val2: Async<L,R>) => Async<L,R>;

export default race;
