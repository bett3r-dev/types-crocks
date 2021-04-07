import Either from '../Either';
import { UnaryFunction } from '../internal/index';
import Async from './Async';

/**
 * eitherToAsync :: Either b a -> Async b a
 * eitherToAsync :: (a -> Either c b) -> a -> Async c b
 */
declare function eitherToAsync<L,R>(val: Either<L,R>): Async<L,R>;
//TODO: Test this function
declare function eitherToAsync<L,R>(fn: UnaryFunction<Either<L,R>>): UnaryFunction<Async<L,R>>;

export default eitherToAsync;
