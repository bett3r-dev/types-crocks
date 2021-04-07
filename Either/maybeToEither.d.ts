import { UnaryFunction } from '../internal/index';
import Maybe from '../Maybe';
import Either from './Either';

/**
 * maybeToEither :: c -> Maybe a -> Either c a
 * maybeToEither :: c -> (a -> Maybe b) -> a -> Either c a
 */
 declare function maybeToEither<L,R>(errVal: L): (maybe: Maybe<R>) => Either<L, R>;
 declare function maybeToEither<L,R>(errVal: L, maybe: Maybe<R>): Either<L, R>;
 //TODO: Test this function
 declare function maybeToEither<L,R>(fn: UnaryFunction<Maybe<R>>): (maybe: Maybe<R>) => UnaryFunction<Either<L,R>>;
 //TODO: Test this function
 declare function maybeToEither<L,R>(fn: UnaryFunction<Maybe<R>>, maybe: Maybe<R>): UnaryFunction<Either<L,R>>;

export default maybeToEither;
