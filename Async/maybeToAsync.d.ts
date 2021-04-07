import { UnaryFunction } from '../internal/index';
import Maybe from '../Maybe';
import Async from './Async';

/**
 * maybeToAsync :: e -> Maybe a -> Async e a
 * maybeToAsync :: e -> (a -> Maybe b) -> a -> Async e b
 */
declare function maybeToAsync<L,R>(errVal: L): (maybe: Maybe<R>) => Async<L,R>;
declare function maybeToAsync<L,R>(errVal: L, maybe: Maybe<R>): Async<L,R>;
//TODO: Test this function
declare function maybeToAsync<L,R>(fn: UnaryFunction<Maybe<R>>): (maybe: Maybe<R>) => UnaryFunction<Async<L,R>>;
//TODO: Test this function
declare function maybeToAsync<L,R>(fn: UnaryFunction<Maybe<R>>, maybe: Maybe<R>): UnaryFunction<Async<L,R>>;

export default maybeToAsync;
