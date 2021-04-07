import { UnaryFunction } from '../internal/index';
import Async from './Async';

/**
 * asyncToPromise :: Async e a -> Promise a e
 * asyncToPromise :: (a -> Async e b) -> a -> Promise b e
 */
declare function asyncToPromise<T>(val: Async<any, T>): Promise<T>;
//TODO: Test asyncToPromise
declare function asyncToPromise<T>(fn: UnaryFunction<T, Async<any, T>>): UnaryFunction<Promise<T>>;

export default asyncToPromise;
