import { useRecoilCallback, RecoilState, SetterOrUpdater, useSetRecoilState } from 'recoil';

const useCallback = <T extends any>(state: RecoilState<T>): [() => Promise<T>, SetterOrUpdater<T>] => {
    const setCount = useSetRecoilState(state);
    const count = useRecoilCallback(({ snapshot }) => () => snapshot.getPromise(state));

    return [count, setCount];
}

export default useCallback;