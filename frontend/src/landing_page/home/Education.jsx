import { GoArrowRight } from "react-icons/go";

export default function Education() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <img src="assets/images/education.svg" alt="edu_img" style={{width:"80%"}} />
          </div>

          <div className="col-6 mt-5">
            <h1 className="mb-4 fs-2">Free and open market education</h1>
            <p className="mb-2">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a href="#" className="" style={{ textDecoration: "none" }}>
              Varsity <GoArrowRight />
            </a>
            <p className="mb-2 mt-5">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a href="#" style={{ textDecoration: "none" }}>
              TradingQ&A <GoArrowRight />{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
