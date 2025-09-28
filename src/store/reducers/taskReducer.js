const initState = {
    tasks: [],
    loading: false,
    error: null,
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_TASKS": {
            return { ...state, tasks: action.payload };
        }
        case "ADD_TASK": {
            return { ...state, tasks: [action.payload, ...state.tasks] };
        }
        case "UPDATE_TASK": {
            const updatedTasks = state.tasks.map((task) => {
                if (task.id === action.payload.id) {
                    return { ...task, title: action.payload.title };
                }
                return task;
            });

            return { ...state, tasks: updatedTasks };
        }
        case "DELETE_TASK": {
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            };
        }
        // Loading
        case "SET_LOADING": {
            return {
                ...state,
                loading: true,
            };
        }
        case "REMOVE_LOADING": {
            return {
                ...state,
                loading: false,
            };
        }
        // Error
        case "SET_ERROR": {
            return {
                ...state,
                error: action.payload,
            };
        }
        case "DELETE_ERROR": {
            return {
                ...state,
                error: null,
            };
        }
        default: {
            return state;
        }
    }
};

export default reducer;
