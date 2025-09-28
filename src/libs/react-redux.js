import { useContext, useEffect, useState } from "react";
import { Context } from "../contexts/ReduxContext";

const useStore = () => {
    const store = useContext(Context);
    return store;
};

const useSelector = (selector) => {
    const store = useContext(Context);

    const [state, setState] = useState(() => {
        return selector(store.getState());
    });

    useEffect(() => {
        const unSubscribe = store.subscribe(() => {
            const nextState = selector(store.getState());
            if (state !== nextState) setState(nextState);
        });

        return unSubscribe;
    }, [selector, state, store]);

    return state;
};

const useDispatch = () => {
    const store = useContext(Context);

    return store.dispatch;
};

export { useStore, useSelector, useDispatch };
