import { UnaryFunction } from '../internal/index';
import Maybe from './Maybe';

/**
 * maybeToArray :: Maybe a -> [ a ]
 * maybeToArray :: (a -> Maybe b) -> a -> [ b ]
 */
declare function maybeToArray<T>(val: Maybe<T>): T[];
//TODO: Test this function
declare function maybeToArray<T>(fn: UnaryFunction<Maybe<T>>): UnaryFunction<T[]>;

export default maybeToArray;
