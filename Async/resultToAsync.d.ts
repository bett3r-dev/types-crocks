import { UnaryFunction } from '../internal/index';
import Result from '../Result';
import Async from './Async';

/**
 * resultToAsync :: Result b a -> Async b a
 * resultToAsync :: (a -> Result c b) -> a -> Async c b
 */
declare function resultToAsync<L,R=L>(val: Result): Async<L,R>;
declare function resultToAsync<L,R=L>(fn: UnaryFunction<Result>): UnaryFunction<Async<L,R>>;

export default resultToAsync;
