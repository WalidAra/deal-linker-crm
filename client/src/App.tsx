import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import AuthLayout from "./components/layouts/AuthLayout";
import HomeLayout from "./components/layouts/HomeLayout";
import Register from "./components/pages/auth/register";
import Login from "./components/pages/auth/login";
import Home from "./components/pages/home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/auth"
          element={
            <AuthLayout>
              <Outlet />
            </AuthLayout>
          }
        >
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route
          path="/"
          element={
            <HomeLayout>
              <Outlet />
            </HomeLayout>
          }
        >
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
