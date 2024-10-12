


export default function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-5 p-5">
            <img src={imageURL} alt="" />
            
          </div>
          <div className="col-1"></div>
          <div className="col-6  mt-5">
            <h1>{productName}</h1>
            <p>{productDescription}</p>
            <div>
              <a href={tryDemo}>Try Demo </a>
              <a href={learnMore} style={{marginLeft: "50px"}}>Learn More </a>
            </div>
            <div className="mt-3">
              <a href={googlePlay}><img src="assets/images/googlePlayBadge.svg" alt="" /></a>
              <a href={appStore}  style={{marginLeft: "50px"}}><img src="assets/images/appstoreBadge.svg" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
