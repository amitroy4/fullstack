import React from 'react';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Registration from './pages/Registration';
import OtpPage from './pages/OtpPage';
import Login from './pages/Login';

function App() {

  return (

    <>
      <RouterProvider router={router} />
    </>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={<Registration />}
      >
      </Route>
      <Route
        path="/otp/:email"
        element={<OtpPage />}
      >
      </Route>
      <Route
        path="/login"
        element={<Login />}
      >
      </Route>
    </Route>

  )
);

export default App
