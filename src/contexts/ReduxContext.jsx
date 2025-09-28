import { createContext } from "react";

const Context = createContext();

const Provider = ({ children, store }) => {
    return <Context.Provider value={store}>{children}</Context.Provider>;
};

export { Context, Provider };
