import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Main } from "./pages/auth/main";
import { Mypage } from "./pages/auth/mypage";
import Portfolio from "./pages/auth/portfolio";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Main />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
