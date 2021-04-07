import Pair from './Pair';

/**
 * fst :: Pair a b -> a
 */
declare function fst<F, S=F>(val: Pair<F,S>): F;

export default fst;
