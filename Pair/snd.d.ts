import Pair from './Pair';

/**
 * snd :: Pair a b -> b
 */
declare function snd<S>(val: Pair<any, S>): S;

export default snd;
