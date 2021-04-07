import Pair from './Pair';

/**
 * branch :: a -> Pair a a
 */
declare function branch<T>(val: T): Pair<T,T>;

export default branch;
