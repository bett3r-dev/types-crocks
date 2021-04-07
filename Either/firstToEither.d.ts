import First from '../First';
import { UnaryFunction } from '../internal/index';
import Either from './Either';

/**
 * firstToEither :: c -> First a -> Either c a
 * firstToEither :: c -> (a -> First b) -> a -> Either c a
 */
declare function firstToEither<T>(val: First): Either<any, T>;
//TODO: Test this function
declare function firstToEither<T>(fn: UnaryFunction<First>): UnaryFunction<Either<any, T>>;

export default firstToEither;
