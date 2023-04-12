import React from 'react';
import "./Home.css"

const Home = () => {
  
  return (
    <section>
    <div className='main'>
      <div className='card1'>
        <div className='row'>
      <img src='https://www.nikkisplate.com/wp-content/uploads/2022/10/Purple-Aesthetic-Wallpaper-Desktop-16.png'></img>
      </div>
      </div>
      <div className='card1-text'>
          <h1>WELCOME TO EUPHORIAQUE!!</h1>
          <p>This is our Digital Planner.</p>
          <button className="btn btn-outline-secondary w-50 mt-3">
                {" "}
                <a class="text-reset me-3" href="login">
                <i></i> Start Planning
                </a>
              </button>
      </div>
    </div>
    </section>

  )
}

export default Home;