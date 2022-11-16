import Header from "./components/Header/Header";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";

function App() {
  return (

    // Fragment 
   <>

      <BrowserRouter>
        <Header />
        <Switch>

          {/* exact - buscando exatamente o valor da barra invertida / */}
          <Route exact path="/">
              <Home/>
          </Route>
          <Route path="/sobre">
              <Sobre />
          </Route>
        </Switch>
      
      </BrowserRouter>
   </>
  );
}

export default App;
