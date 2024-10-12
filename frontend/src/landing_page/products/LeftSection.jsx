


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
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img src={imageURL} alt="" />
            
          </div>
          <div className="col-6">
            <h1>{productName}</h1>
          </div>
        </div>
      </div>
    </>
  )
}
