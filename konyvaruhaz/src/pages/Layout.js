import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Publikus könyváruház</Link>
          </li>
          <li>
            <Link to="/admin">Admin felület</Link>
          </li>
        </ul>
      </nav>
    <article>
        <Outlet />
    </article>
      
    </>
  )
};

export default Layout;