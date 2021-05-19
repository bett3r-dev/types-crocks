import {
    UnaryFunction,
} from '../internal/index';
/**
 * bimap :: (a -> c) -> (b -> d) -> m a b -> m c d
 */
declare function bimap<L,R, T>(fn1: UnaryFunction<L>, fn2: UnaryFunction<R>, adt: T): T;
declare function bimap<L,R, T>(fn1: UnaryFunction<L>, fn2: UnaryFunction<R>): (adt: T) => T;

export default bimap;
