import { VariadicFunction } from '../internal/VariadicFunction';
import Result from '../Result';

/**
 * tryCatch :: ((*) -> b) -> (*) -> Result e b
 */
declare function tryCatch<T>(fn: VariadicFunction<T>): VariadicFunction<Result<Error, T>>;

export default tryCatch;
