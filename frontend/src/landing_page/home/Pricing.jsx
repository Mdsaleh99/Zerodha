import { GoArrowRight } from "react-icons/go";

export default function Pricing() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h1 className="mb-4 fs-2">Unbeatable pricing</h1>
            <p className="mb-3">
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>
            <a href="#" style={{ textDecoration: "none" }}>
              See pricing <GoArrowRight />{" "}
            </a>
          </div>
          <div className="col-2"></div>
          <div className="col-6">
            <div className="row text-center">
              <div className="col p-3 border">
                <h1 className="mb-3">&#x20B9;0</h1>
                <p>
                  Free equity delivery and <br /> direct mutual funds
                </p>
              </div>
              <div className="col p-3 border">
                <h1 className="mb-3">&#x20B9;20</h1>
                <p>Intraday and F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
