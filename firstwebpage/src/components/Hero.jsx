const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="heroContent">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondry-btn">Category</button>
        </div>
        <div className="shopping">Also Available On</div>
        <div className="brandicon">
            <img src="/images/amazon.png" alt="amazon-logo" />
            <img src="/images/flipkart.png" alt="amazon-logo" />
        </div>
      </div>
      <div className="heroImage">
          <img src="/images/shoe_image.png" alt="shoe-pic" />
      </div>
    </main>
  );
};
export default HeroSection;
