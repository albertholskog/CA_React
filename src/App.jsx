import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Home from "./pages/Home";
import ShardLayout from "./pages/ShardLayout";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<ShardLayout />}>
          <Route index element={<Home />} />
          <Route path="products/:productId"element={<SingleProduct />}  />
          <Route path="checkoutsuccess" element={<CheckoutSuccess />} />
          <Route path="contact" element={<Contact />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<Error />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
