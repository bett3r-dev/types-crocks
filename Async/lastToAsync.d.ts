import { UnaryFunction } from '../internal/index';
import Last from '../Last';
import Async from './Async';

/**
 * lastToAsync :: e -> Last a -> Async e a
 * lastToAsync :: e -> (a -> Last b) -> a -> Async e b
 */
declare function lastToAsync<T>(val: Last): Async<any, T>;
declare function lastToAsync<T>(fn: UnaryFunction<Last>): UnaryFunction<Async<any, T>>;

export default lastToAsync;
