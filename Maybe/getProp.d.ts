import Maybe from './Maybe';

/**
 * getProp :: (String | Integer) -> a -> Maybe b
 */
declare function getProp<T>(prop: string | number, val: T[]|Record<string, T>): Maybe<T>;
declare function getProp<T>(prop: string | number): (val: T[]|Record<string, T>) => Maybe<T>;

export default getProp;
