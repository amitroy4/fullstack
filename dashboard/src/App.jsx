import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Registration from "./pages/Registration";
import OtpPage from "./pages/OtpPage";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ChangePassword from "./pages/ChangePassword";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import ViewCategory from "./pages/ViewCategory";
import AddCategory from "./pages/AddCategory";
import AddSubCategory from "./pages/AddSubCategory";
import ViewSubCategory from "./pages/ViewSubCategory";
import AddProduct from "./pages/AddProduct";
import AddStore from "./pages/AddStore";
import AddVarient from "./pages/AddVarient";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Registration />}></Route>
      <Route path="/otp/:email" element={<OtpPage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
      <Route path="/changepassword/:email" element={<ChangePassword />}></Route>
      <Route path="/home" element={<Home />}>
        <Route path="userlist" element={<UserList />}></Route>
        <Route path="viewcategory" element={<ViewCategory />}></Route>
        <Route path="addcategory" element={<AddCategory />}></Route>
        <Route path="addsubcategory" element={<AddSubCategory />}></Route>
        <Route path="viewsubcategory" element={<ViewSubCategory />}></Route>
        <Route path="addproduct" element={<AddProduct />}></Route>
        <Route path="addstore" element={<AddStore />}></Route>
        <Route path="addvarient" element={<AddVarient />}></Route>
      </Route>
    </Route>
  )
);

export default App;
