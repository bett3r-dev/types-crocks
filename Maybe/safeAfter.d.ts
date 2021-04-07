import { UnaryFunction } from '../internal/index';
import Pred from '../Pred';
import Maybe from './Maybe';

/**
 * safeAfter :: ((b -> Boolean) | Pred) -> (a -> b) -> a -> Maybe b
 */
declare function safeAfter<T>(pred: UnaryFunction<boolean> | Pred, fn: UnaryFunction, val: T): Maybe<T>;
declare function safeAfter<T>(pred: UnaryFunction<boolean> | Pred, fn: UnaryFunction): (val: T) => Maybe<T>;
declare function safeAfter<T>(pred: UnaryFunction<boolean> | Pred): (fn: UnaryFunction) => (val: T) => Maybe<T>;

export default safeAfter;
