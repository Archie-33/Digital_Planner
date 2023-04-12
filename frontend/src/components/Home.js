import React from 'react';
import "./Home.css"

const Home = () => {
  
  return (
    <section>
    <div className='main'>
      <div className='card1'>
        <div className='row'>
      <img src='https://png.pngtree.com/thumb_back/fh260/background/20220215/pngtree-dreamy-blue-purple-watercolor-aesthetic-background-image_924911.jpg'></img>
      </div>     
      <div className='card1-text'>
          <h1>WELCOME TO THE DIGITAL PLANNER!!</h1>
          <p>Let's make planning your goals fun.</p>
          <button className="btn btn-outline-white w-50 mt-2">
                {" "}
                <a class="text-reset me-3" href="login">
                <i></i> Start Planning
                </a>
              </button>
      </div>
      </div>
      <div className='products'>
        <h1>PRODUCTS DESIGNED BY US</h1>
        <p>These are the other products we have designed and provide our customers.</p>
        <div className='first-prod'>
          <h2>NOTEBOOKS</h2>
        </div>
        <div className='prod-des'>
          <p>Introducing our personalized notebooks that are designed to fit your unique style and aesthetic! Choose from a variety of cover designs, colors, and materials to create a notebook that not only looks great but also feels great in your hands. Whether you prefer a sleek and modern look or something more traditional, we have options to suit every taste. Our notebooks are made with high-quality materials and are designed to withstand the rigors of daily use. The paper is thick and durable, making it perfect for writing, drawing, or even watercolor painting.
            So if you're looking for a notebook that perfectly fits your aesthetic and reflects your unique style, look no further than our personalized notebook service. Order yours today and start creating your own masterpiece!</p>
        </div>
      </div>
    </div>
    </section>

  )
}

export default Home;