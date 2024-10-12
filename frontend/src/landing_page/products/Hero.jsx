import { GoArrowRight } from 'react-icons/go';

export default function Hero() {
  return (
    <>
      <div className="container border-bottom mb-5">
        <div className="text-center mt-5 p-3">
          <h1>
            Zerodha Products  
          </h1>
          <h3 className="text-muted mt-4 fs-4">Sleek, modern, and intuitive trading platforms</h3>
          <p className="mt-4 ">Check out our investment offerings <GoArrowRight /></p>
        </div>
      </div>
    </>
  );
}
