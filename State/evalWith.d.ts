import State from './State';

// evalWith :: s -> State s a -> a
declare function evalWith<STATE,VALUE>(val: VALUE, state: State<STATE,VALUE>): VALUE;
declare function evalWith<STATE,VALUE>(val: VALUE): (state: State<STATE,VALUE>) => VALUE;

export default evalWith;
