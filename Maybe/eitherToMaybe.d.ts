import { UnaryFunction } from '../internal/index';
import Either from '../Either';
import Maybe from './Maybe';

/**
 * eitherToMaybe :: Either b a -> Maybe a
 * eitherToMaybe :: (a -> Either c b) -> a -> Maybe b
 */
declare function eitherToMaybe<L,R>(val: Either<L,R>): Maybe<R>;
//TODO: Test this function
declare function eitherToMaybe<L,R>(fn: UnaryFunction<Either<L,R>>): UnaryFunction<Maybe<R>>;

export default eitherToMaybe;
