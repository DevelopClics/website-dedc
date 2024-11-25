import { BrowserRouter } from "react-router-dom";
import ThemeContextProvider from "./context/ThemeContext";
import "./App.css";
import "./fonts/Mulish-Black.ttf";
import "./fonts/Mulish-Regular.ttf";
import "./fonts/Mulish-Light.ttf";

import Navigation from "./components/elements/Navigation/Navigation";
import Body from "./components/pages/Body";
import Footer from "./components/elements/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ThemeContextProvider>
          <Navigation />
          <Body />
          <Footer />
        </ThemeContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
