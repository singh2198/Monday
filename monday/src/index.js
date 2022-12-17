import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import ContextProvider from "./ContextApi/Context"
import { ColorModeScript } from '@chakra-ui/react';
// import Login from './Pages/Login';
// import  LoginContext  from './ContextApi/Context';
import theme from './Theme/Theme';
import { ChakraProvider } from '@chakra-ui/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<ContextProvider>
  <BrowserRouter>
  {/* <ChakraProvider theme={theme}> */}
  {/* <ColorModeScript initialColorMode={theme.config.initialColorMode}> */}
      <App />

  {/* </ColorModeScript> */}
  {/* </ChakraProvider> */}
  </BrowserRouter>
</ContextProvider>

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
