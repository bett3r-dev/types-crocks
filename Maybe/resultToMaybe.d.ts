import { UnaryFunction } from '../internal/index';
import Result from '../Result';
import Maybe from './Maybe';

/**
 * resultToMaybe :: Result e a -> Maybe a
 * resultToMaybe :: (a -> Result e b) -> a -> Maybe b
 */
declare function resultToMaybe<T>(val: Result): Maybe<T>;
declare function resultToMaybe<T>(fn: UnaryFunction<Result>): UnaryFunction<Maybe<T>>;

export default resultToMaybe;
