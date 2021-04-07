import List from '../List';
import Pair from '../Pair';

/**
 * fromPairs :: Foldable f => f (Pair String a) -> Object
 */
declare function fromPairs<F,S=F>(val: Array<Pair<F,S>> | List): object;

export default fromPairs;
