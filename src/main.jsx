import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import './index.css'
import "./resetAllCss/style.css";
import { GlobalProvider } from "./Contexts/GlobalContext.jsx";
import { BasketProvider } from "./Contexts/BasketContext.jsx";
import { WishListProvider } from "./Contexts/WishList.jsx";
import { LanguageProvider } from "./Contexts/LanguageContext.jsx";
import AuthContext from "./Contexts/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthContext>
        <LanguageProvider>
            <BasketProvider>
                <WishListProvider>
                    <GlobalProvider>
                        <App />
                    </GlobalProvider>
                </WishListProvider>
            </BasketProvider>
        </LanguageProvider>
    </AuthContext>
);
