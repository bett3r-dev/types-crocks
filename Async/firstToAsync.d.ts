import First from '../First';
import { UnaryFunction } from '../internal/index';
import Async from './Async';

/**
 * firstToAsync :: e -> First a -> Async e a
 * firstToAsync :: e -> (a -> First b) -> a -> Async e b
 */
declare function firstToAsync<T>(val: First): Async<any, T>;
declare function firstToAsync<T>(fn: UnaryFunction<First>): UnaryFunction<Async<any,T>>;

export default firstToAsync;
