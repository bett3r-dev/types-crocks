import {UnaryFunction} from '../internal/index'
/**
 * either :: (a -> c) -> (b -> c) -> m a b -> c
 */
declare function either<L,R>(a: UnaryFunction<L>, b: UnaryFunction<R>): any;
declare function either<L,R>(a: UnaryFunction<L>): (b: UnaryFunction<R>) => any;

export default either;
