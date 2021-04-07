import { UnaryFunction } from '../internal/index';
import Last from '../Last';
import Either from './Either';

/**
 * lastToEither :: c -> Last a -> Either c a
 * lastToEither :: c -> (a -> Last b) -> a -> Either c a
 */
declare function lastToEither<T>(val: Last): Either<any, T>;
//TODO: Test this function
declare function lastToEither<T>(fn: UnaryFunction<Last>): UnaryFunction<Either<any, T>>;

export default lastToEither;
