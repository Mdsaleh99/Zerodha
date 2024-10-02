import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-white border-bottom">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>
            <img
              style={{ width: "25%" }}
              src="assets/images/logo.svg"
              alt="logo"
            />
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <ul className="navbar-nav  mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={"/signup"}
                  >
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to={"/about"}>
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to={"/product"}>
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to={"/pricing"}>
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to={'/support'}>
                    Support
                  </Link>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
