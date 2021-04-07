import { UnaryFunction } from '../internal/index';
import Pred from '../Pred';
import Maybe from './Maybe';

/**
 * safe :: ((b -> Boolean) | Pred) -> b -> Maybe a
 */
//TODO: Test this function
declare function safe<T>(pred: UnaryFunction<boolean> | Pred, val: T): Maybe<T>;
declare function safe<T>(pred: UnaryFunction<boolean> | Pred): (val: T) => Maybe<T>;

export default safe;
