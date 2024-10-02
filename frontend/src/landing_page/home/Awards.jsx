

export default function Awards() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src="assets/images/largestBroker.svg" alt="award img" />
        </div>
        <div className="col-6 ">
          <h1>Largest Stock Broker in India</h1>
          <p>
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row ">
            <div className="col-6 p-5">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6 p-5">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct Mutual Funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
            <img
              src="assets/images/pressLogos.png"
              style={{ width: "90%" }}
              alt="press img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
