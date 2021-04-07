import { UnaryFunction } from '../internal/index';
import Last from '../Last';
import Maybe from './Maybe';

/**
 * lastToMaybe :: Last a -> Maybe a
 * lastToMaybe :: (a -> Last b) -> a -> Maybe b
 */
declare function lastToMaybe<T>(val: Last): Maybe<T>;
//TODO: Test this function
declare function lastToMaybe<T>(fn: UnaryFunction<Last>): UnaryFunction<Maybe<T>>;

export default lastToMaybe;
