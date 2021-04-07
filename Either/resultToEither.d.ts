import { UnaryFunction } from '../internal/index';
import Result from '../Result';
import Either from './Either';

/**
 * resultToEither :: Result e a -> Either e a
 * resultToEither :: (a -> Result e b) -> a -> Either e a
 */
declare function resultToEither<L, R=L>(val: Result): Either<L,R>;
//TODO: Test this function
declare function resultToEither<L, R=L>(fn: UnaryFunction<Result>): UnaryFunction<Either<L,R>>;

export default resultToEither;
