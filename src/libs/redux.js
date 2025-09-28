const __DO_NOT_USE_ActionTypes = {
    type: "@@LeThanhDat-redux/INIT.a.b.c",
};

export function createStore(reducer, preloadedState) {
    let state = reducer(preloadedState, __DO_NOT_USE_ActionTypes);

    const listeners = [];

    return {
        getState() {
            return state;
        },
        dispatch(action) {
            state = reducer(state, action);

            listeners.forEach((listener) => listener());
        },
        subscribe(listener) {
            if (typeof listener === "function") {
                listeners.push(listener);
            }

            return () => {
                const index = listeners.indexOf(listener);
                listeners.splice(index, 1);
            };
        },
    };
}
