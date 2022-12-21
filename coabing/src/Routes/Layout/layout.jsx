import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Jackets">Jackets</Link>
          </li>
          <li>
            <Link to="/Mens">Mens </Link>
          </li>
          <li>
            <Link to="/Womens">Womens </Link>
          </li>
          <li>
            <Link to="/SignUp">SIGN UP </Link>
          </li>
          <li>
            <Link to="/SignIn">Sign in </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;