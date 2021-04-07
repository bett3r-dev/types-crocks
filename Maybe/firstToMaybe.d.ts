import { UnaryFunction } from '../internal/index';
import First from '../First';
import Maybe from './Maybe';

/**
 * firstToMaybe :: First a -> Maybe a
 * firstToMaybe :: (a -> First b) -> a -> Maybe b
 */
declare function firstToMaybe<T>(val: First): Maybe<T>;
declare function firstToMaybe<T>(fn: UnaryFunction<First>): UnaryFunction<Maybe<T>>;

export default firstToMaybe;
