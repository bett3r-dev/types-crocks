import type { PredicateFunction } from '../internal/index';
import Pred from '../Pred';

/**
 * ifElse :: ((a -> Boolean) | Pred a) -> (a -> b) -> (a -> b) -> a -> b
 */
declare function ifElse<A, B=A, C=B>(p: PredicateFunction<A> | Pred, f: (x: A) => B, g: (x: A) => C): (x: A) => B | C;
declare function ifElse<A, B=A, C=B>(p: PredicateFunction<A> | Pred, f: (x: A) => B): (g: (x: A) => C) => (x: A) => B | C;
declare function ifElse<A, B=A, C=B>(p: PredicateFunction<A> | Pred): (f: (x: A) => B) => (g: (x: A) => C) => (x: A) => B | C;

export default ifElse;
