import React, { createContext, useState, ReactNode } from 'react';

interface HeaderContextType {
    open: boolean;
    toggleMenu: () => void;
}

export const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export const HeaderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [open, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    return (
        <HeaderContext.Provider value={{ open, toggleMenu }}>
            {children}
        </HeaderContext.Provider>
    );
};
