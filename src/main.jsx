import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import "./resetAllCss/style.css"
import { GlobalProvider } from './Contexts/GlobalContext.jsx'
import { BasketProvider } from './Contexts/BasketContext.jsx'
import { WishListProvider } from './Contexts/WishList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BasketProvider>
   <WishListProvider>
  <GlobalProvider>
    <App />
 </GlobalProvider>
 </WishListProvider> 
 </BasketProvider>
)
