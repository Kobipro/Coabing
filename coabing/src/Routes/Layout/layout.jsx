import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Context/user.context.component";
import { signOutUser } from "../../Firebase/firebase";
import "./layout.component.styles.css"

const Layout = () => {
const { currentUser } = useContext(UserContext);

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
          {currentUser ? (
            <Link className='nav-link' onClick={signOutUser}>
              Sign Out here
            </Link>
          ) : (
            <Link to="/SignIn" className='nav-link' >
              Sign in here
            </Link>
          )}
          </li>
          <li>
            <Link to="/SignUp">Sign Up here </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;