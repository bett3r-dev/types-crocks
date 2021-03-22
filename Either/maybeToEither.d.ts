import { UnaryFunction } from '../internal/index';
import Maybe from '../Maybe';
import Either from './Either';

/**
 * maybeToEither :: c -> Maybe a -> Either c a
 * maybeToEither :: c -> (a -> Maybe b) -> a -> Either c a
 */
 declare function maybeToEither(errVal: any): (maybe: Maybe) => Either;
 declare function maybeToEither(errVal: any, maybe: Maybe): Either;
 declare function maybeToEither(fn: UnaryFunction<Maybe>): (maybe: Maybe) => UnaryFunction<Either>;
 declare function maybeToEither(fn: UnaryFunction<Maybe>, maybe: Maybe): UnaryFunction<Either>;

export default maybeToEither;
