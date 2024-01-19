import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/landing/LandingPage";
import { Login } from "./pages/login/Login";
import { Home } from "./pages/dashboard/home/Home";
import { ProductManagement } from "./pages/dashboard/product/ProductManagement";
import { CategoryManagement } from "./pages/dashboard/category/CategoryManagement";
import { StoreManagement } from "./pages/dashboard/store/StoreManagement";
import { ColorProvider } from "./context/StyleContext";
import { AddProduct } from "./pages/dashboard/product/addproduct/AddProduct";
import { Register } from "./pages/register/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <ColorProvider>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/dashboard" element={<Home />}></Route>
            <Route
              path="/dashboard/product"
              element={<ProductManagement />}
            ></Route>
            <Route
              path="/dashboard/product/add"
              element={<AddProduct />}
            ></Route>
            <Route
              path="/dashboard/store"
              element={<StoreManagement />}
            ></Route>
            <Route
              path="/dashboard/category"
              element={<CategoryManagement />}
            ></Route>
          </Routes>
        </ColorProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
