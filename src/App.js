import {BrowserRouter , Routes , Route}from "react-router-dom"

import Home from './pages/home/home';
import Login from "./pages/login/login";
import New from "./pages/new/New";
import List from "./pages/list/list";
import Single from "./pages/single/single";

import { useTranslation } from 'react-i18next';


import "./dark.css"


import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {

  const {darkMode} = useContext(DarkModeContext)


  const {t, i18n} =useTranslation();
  return (
    <div className={darkMode?"App dark" :"App"} style={{direction:t('dir')}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" >
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/> }/>
            
            <Route path="users">
              <Route index element={ <List/> }/>
              <Route path=":userId" element={ <Single/> }/>
              <Route path="new" element={ <New/> }/>
            </Route>

            <Route path="product">
              <Route index element={ <List/> }/>
              <Route path=":productId" element={ <Single/> }/>
              <Route path="new" element={ <New/> }/>
            </Route>
        
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
