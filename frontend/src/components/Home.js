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
        <div className='prod-des'>
          <h2>NOTEBOOKS</h2>
          <p>Introducing our personalized notebooks that are designed to fit your unique style and aesthetic! Choose from a variety of cover designs, colors, and materials to create a notebook that not only looks great but also feels great in your hands. Whether you prefer a sleek and modern look or something more traditional, we have options to suit every taste. Our notebooks are made with high-quality materials and are designed to withstand the rigors of daily use. The paper is thick and durable, making it perfect for writing, drawing, or even watercolor painting.
            So if you're looking for a notebook that perfectly fits your aesthetic and reflects your unique style, look no further than our personalized notebook service. Order yours today and start creating your own masterpiece!</p>
        </div>
        <div className='prod-img'>
          <img alt='img' src='ntb1.jpg'></img>
          <img alt='img1' src='ntbAll.jpg'></img>
        </div>
      </div>
      <div className='second-prod'>
        <div className='prod-img'>
          <img alt='img' src='Planner_highlighter.jpg'></img>
          <img alt='img1' src='plpic.jpg'></img>
        </div>
        <div className='prod-des'>
          <h2>DAILY PLANNERS</h2>
          <p>Introducing our new line of daily planners designed for two different lifestyles - the Lifestyle Planner and the Student Planner. Both planners are undated, which means you can start using them at any time of the year. The Lifestyle Planner is designed to help individuals improve their productivity and achieve their personal goals. It features daily, weekly, and monthly goal-setting sections, habit trackers, and reflection pages to help you stay on track with your progress. The Student Planner, on the other hand, is specifically designed for students to help them stay organized and focused throughout the academic year. It includes sections for class schedules, project planning, and exam preparation, along with space for notes and to-do lists. Both planners are built to enhance productivity and help you achieve your goals, no matter what your lifestyle may be. With these planners, you can plan out your days, weeks, and months with ease, and stay on top of your tasks and priorities. Get ready to take control of your life and achieve your dreams with our new daily planners!</p>
        </div>
      </div>
      <div className='third-prod'>
        <div className='prod-des'>
          <h2>BOOKMARKS</h2>
          <p>Introducing our new line of bookmarks designed to add an air of mystery to your reading journeys. These bookmarks are crafted with a unique and enigmatic design that is sure to capture your imagination. With their intricate patterns and dark color schemes, these bookmarks are as captivating as the books they hold your place in. Whether you're reading a thrilling mystery novel or diving into an epic fantasy, our bookmarks will perfectly complement the mood and tone of your reading experience. Made with high-quality materials, these bookmarks are durable and long-lasting, so you can use them again and again. They're also lightweight and easy to carry, making them the perfect companions for any bookworm on the go. So, if you're looking to add a touch of intrigue to your reading journeys, look no further than our mysterious bookmarks. Get ready to lose yourself in the pages of your favorite books, and let our bookmarks guide you on your literary adventures.</p>
        </div>
        <div className='prod-img'>
          <img alt='img' src='bm1.jpg'></img>
          <img alt='img1' src='bm2.jpg'></img>
        </div>
      </div>
      </div>
    </div>
    </section>

  )
}

export default Home;