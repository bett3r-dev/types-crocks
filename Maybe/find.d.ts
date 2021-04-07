import { UnaryFunction } from '../internal/index';
import Pred from '../Pred';
import Maybe from './Maybe';

/**
 * find :: Foldable f => ((a -> Boolean) | Pred) -> f a -> Maybe a
 */
declare function find<T>(pred: UnaryFunction<boolean> | Pred, val: any[]): Maybe<T>;
//TODO: Test this function
declare function find<T>(pred: UnaryFunction<boolean> | Pred): (val: any[]) => Maybe<T>;

export default find;
