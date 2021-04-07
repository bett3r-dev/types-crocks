import Writer from '../Writer';
import Pair from './Pair';

/**
 * writerToPair :: Monoid m => Writer m a -> Pair m a
 * writerToPair :: Monoid m => (a -> Writer m b) -> a -> Pair m b
 */

declare function writerToPair<S>(val: Writer): Pair<any,S>;
//TODO: Probar esta funcion
declare function writerToPair<S>(fn: (val: S) => Writer): (val: S) => Pair<any, S>;
export default writerToPair;
