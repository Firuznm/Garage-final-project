import { createContext, useEffect, useState } from "react";

export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
    const [selectValue, setSelectValue] = useState(localStorage.getItem("siteColor") || "black");

    const onChangeColor = (e) => {
        localStorage.setItem("siteColor", e.target.value);
        setSelectValue(e.target.value);
    };

    useEffect(() => {
        document.documentElement.setAttribute('theme', selectValue);
    }, [selectValue]);

    return <ColorContext.Provider value={{ onChangeColor, selectValue }}>{children}</ColorContext.Provider>;
};
