import { VariadicFunction } from '../internal/VariadicFunction';
import Result from '../Result';

/**
 * tryCatch :: ((*) -> b) -> (*) -> Result e b
 */
declare function tryCatch<T>(fn: VariadicFunction<T>): VariadicFunction<Result<T>>;

export default tryCatch;
