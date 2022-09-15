import "assets/css/app.css";
import Cart from "pages/cart";
import Details from "pages/details";
import Homepage from "pages/homepages";
import Notfound from "pages/notfound";
import Success from "pages/success";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Provider from "helpers/hooks/useGlobalContext";

function App() {
  return (
    <Provider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          {/* :idc for make query params */}
          <Route exact path="/categories/:idc" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
