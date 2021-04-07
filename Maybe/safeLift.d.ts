import { UnaryFunction } from '../internal/index';
import Pred from '../Pred';
import Maybe from './Maybe';

/**
 * safeLift :: ((c -> Boolean) | Pred) -> (a -> b) -> c -> Maybe b
 */
declare function safeLift<T>(pred: UnaryFunction<boolean> | Pred, fn: UnaryFunction, val: T): Maybe<T>;
declare function safeLift<T>(pred: UnaryFunction<boolean> | Pred, fn: UnaryFunction): (val: T) => Maybe<T>;
declare function safeLift<T>(pred: UnaryFunction<boolean> | Pred): (fn: UnaryFunction) => (val: T) => Maybe<T>;

export default safeLift;
