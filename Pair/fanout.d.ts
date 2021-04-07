import Arrow from '../Arrow';
import { UnaryFunction } from '../internal/index';
import Star from '../Star';
import Pair from './Pair';

/**
 * fanout :: (a -> b) -> (a -> c) -> (a -> Pair b c)
 * fanout :: Arrow a b -> Arrow a c -> Arrow a (Pair b c)
 * fanout :: Monad m => Star a (m b) -> Star a (m c) -> Star a (m (Pair b c))
 */
declare function fanout<F,S>(fn1: UnaryFunction<F>, fn2: UnaryFunction<S>): (val: S) => Pair<F,S>;
declare function fanout<F,S>(fn1: UnaryFunction): (fn2: UnaryFunction) => (val: S) => Pair<F,S>;
declare function fanout<F,S=F>(fn1: Arrow, fn2: Arrow): Pair<F,S>;
declare function fanout<F,S=F>(fn1: Arrow): (fn2: Arrow) => Pair<F,S>;
declare function fanout<F,S=F>(fn1: Star, fn2: Star): Pair<F,S>;
declare function fanout<F,S=F>(fn1: Star): (fn2: Star) => Pair<F,S>;

export default fanout;
