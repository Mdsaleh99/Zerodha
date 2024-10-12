

export default function HeroSection() {
  return (
    <>
      <div className="container p-5 mb-5">
        <div className="row text-center">
          <img
            src="assets/images/homeHero.png"
            alt="Hero Image"
            className="mb-5"
          />
          <h1 className="mt-5">Invest in Everything</h1>
          <p>Online Platform to invest in Stocks</p>
          <button type="button" style={{width:"20%", margin:"0 auto"}} className="btn btn-primary p-2 fs-5 mb-5">Signup Now</button>
        </div>
      </div>
    </>
  );

}
