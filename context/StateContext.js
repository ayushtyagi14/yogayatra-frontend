import React, { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <Context.Provider
            value={{
                isSidebarOpen,
                setIsSidebarOpen
            }}
        >
            {children}
        </Context.Provider>
    );
};

export const useStateContext = () => useContext(Context);
