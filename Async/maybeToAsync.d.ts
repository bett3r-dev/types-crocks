import { UnaryFunction } from '../internal/index';
import Maybe from '../Maybe';
import Async from './Async';

/**
 * maybeToAsync :: e -> Maybe a -> Async e a
 * maybeToAsync :: e -> (a -> Maybe b) -> a -> Async e b
 */
declare function maybeToAsync(errVal: any): (maybe: Maybe) => Async;
declare function maybeToAsync(errVal: any, maybe: Maybe): Async;
declare function maybeToAsync(fn: UnaryFunction<Maybe>): (maybe: Maybe) => UnaryFunction<Async>;
declare function maybeToAsync(fn: UnaryFunction<Maybe>, maybe: Maybe): UnaryFunction<Async>;

export default maybeToAsync;
