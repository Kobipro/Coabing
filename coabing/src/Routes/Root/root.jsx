import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout/layout";
import Home from "../Home/home.component";
import Jackets from "../Jackets/jackets.component";
import Mens from "../Mens/mens.component";
import Womens from "../Womens/womens.component";
import SignIn from "../Sign-in/sign-in.component";
import SignUp from "../Sign-up/sign-up.component";
import NoPage from "../NoPage/nopage.component";

export default function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Jackets" element={<Jackets />} />
          <Route path="Mens" element={<Mens />} />
          <Route path="Womens" element={<Womens />} />
          <Route path="SignIn" element={<SignIn />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);