import React from 'react'

const FeedbackSection = () => {
    return (
        <>
            <div class="containerr">
                <header>J L U G</header>
                <div class="subheading">
                    Empowering the next generation of technologists
                    <br />
                    through comprehensive learning experiences.
                </div>



                <section class="feedback-wrapper">
                    <div class="feedback-box">
                        <div class="rate">
                            <h2>RATE&nbsp;&nbsp;YOUR&nbsp;&nbsp;EXPERIENCE</h2>
                            <p>Help us to improve by sharing your feedback</p>

                            <div class="card-box">
                                <div class="slider">
                                    <div class="card">“I love your workshop...”<div class="photo"><img src="pfp.jpg" alt="image" />  </div><div class="name">Aman Kaur</div><div class="time">2 min ago</div></div>
                                    <div class="card">“The hands-on sessions...”<div class="photo"><img src="link here" alt="image" />  </div><div class="name">Rahul Verma</div><div class="time">5 min ago</div></div>
                                    <div class="card">“Amazing mentors...”<div class="photo"><img src="link here" alt="image" /></div>  <div class="name">Priya Singh</div><div class="time">10 min ago</div></div>
                                </div>
                            </div>
                            <button class="add-btn">Add Yours</button>

                        </div>
                    </div>
                </section>

                <footer>

                    <nav>
                        <a href="#">Home</a> |
                        <a href="#">About</a> |
                        <a href="#">Program</a> |
                        <a href="#">Workshops</a>
                    </nav>

                    <p>©️ 2025 JLUG Summer School Program. All rights reserved</p>

                </footer>
            </div>

            <style jsx>{`@import url('https://fonts.googleapis.com/css2?family=League+Gothic&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');


.summer_school_experience_body {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  font-family: "Open Sans", sans-serif;
  background: radial-gradient(circle, rgba(34, 34, 34, 1) 0%, rgba(0, 0, 0, 1) 100%);
  color: white;
  overflow-x: hidden;
  position: relative;
}

.summer_school_experience_body::before {
  content: "";
  position: absolute;
  top: -50px;
  left: -100px;
  width: 400px;
  height: 300px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  transform: rotate(-30deg);
  z-index: 0;
}

.summer_school_experience_body::after {
  content: "";
  position: absolute;
  bottom: -80px;
  right: -50px;
  width: 350px;
  height: 250px;
  background: rgba(255, 255, 255, 0.03);
  transform: rotate(20deg);
  clip-path: polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%);
  z-index: 0;
}


.summer_school_experience_body::before,
.summer_school_experience_body::after {
  pointer-events: none;
}


.summer_school_experience_body::after {
  box-shadow:
    0 0 0 0 rgba(0, 0, 0, 0),
    200px 100px 0 0 rgba(255, 255, 255, 0.02),
    -300px 400px 0 0 rgba(255, 255, 255, 0.025),
    100px -200px 0 0 rgba(255, 255, 255, 0.015);
}

.summer_school_experience_body::before {
  box-shadow:
    0 0 0 0 rgba(0, 0, 0, 0),
    -150px 300px 0 0 rgba(255, 255, 255, 0.03),
    250px 500px 0 0 rgba(255, 255, 255, 0.02),
    -100px -300px 0 0 rgba(255, 255, 255, 0.015);
}


.containerr {
  flex: 1;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1rem;
  height: auto;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}


header {
  text-align: center;
  font-family: 'League Gothic', sans-serif;
  font-size: 6rem;
  font-weight: bold;
  letter-spacing: 0.5rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(90deg, #ff6b6b, #f0e130, #3fc1c9, #845ec2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}


.subheading {
  text-align: center;
  font-size: 1rem;
  color: #ccc;
  margin-bottom: 2rem;
}


.feedback-wrapper {
  display: flex;
  justify-content: center;
}


.feedback-box {
  border: 0.1px #919191 solid;
  border-radius: 16px;
  box-shadow: #888;
  padding: 1.5rem;
  width: 125%;
  background-color: #111;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: 600px;
  box-sizing: border-box;
  gap: 1rem;
}


.card-box {
  box-shadow: #888;
  padding: 1.5rem;
  width: 100%;
  background-color: #111;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: 200px;
  box-sizing: border-box;
  gap: 1rem;
}



.rate {
  text-align: center;
  font-size: 8px;
}


.rate h2 {
  font-size: 12px;
  letter-spacing: 0.1rem;
  margin: 0;
}


.rate p {
  font-size: 9px;
  letter-spacing: 1px;
  color: #aaa;
  margin-top: 0.3rem;
}


.slider {
  position: relative;
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}


.card {
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 110%;
  font-size: 1rem;
  font-style: italic;
  background: #e6d8bf;
  padding: 1rem;
  color: #1c1b1a;
  border-radius: 8px;
  opacity: 0;
  transform: translateY(20px);
  animation: slideCard 15s infinite;
}


.card:nth-child(2) {
  animation-delay: 5s;
}

.card:nth-child(3) {
  animation-delay: 10s;
}


@keyframes slideCard {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  5% {
    opacity: 1;
    transform: translateY(0);
  }

  30% {
    opacity: 1;
    transform: translateY(0);
  }

  35% {
    opacity: 0;
    transform: translateY(-20px);
  }

  100% {
    opacity: 0;
    transform: translateY(-20px);
  }
}



.add-btn {
  height: 32px;
  padding: 0 1rem;
  border: 1px solid #919191;
  background: #919191;
  color: white;
  cursor: pointer;
  font-size: clamp(0.8rem, 3.2vw, 1rem);
  letter-spacing: 1px;
  border-radius: 6px;
  margin-top: 0.5rem;
  align-self: center;
}



.name {
  font-weight: bold;
  margin-top: 0.5rem;
  color: #5e3f41;
}


.time {
  font-size: 0.8rem;
  color: #938b86;
  margin-top: 0.2rem;
}


.photo {
  border: 4px #000 solid;
  border-radius: 50px;
  height: 1px;
  width: 1px;
  scale: 0.05;
}


footer {
  text-align: center;
  margin: 5rem 0 0;
  font-size: 0.85rem;
  color: #888;
}


footer nav {
  margin-top: 1rem;
}


footer nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #00bfff;
  font-weight: 500;
}



@media (max-width: 600px) {
  .feedback-box {
    height: auto;
  }


  .slider {
    position: relative;
    min-height: 65px;
  }


  .card {
    font-size: 0.9rem;
  }


  .add-btn {
    width: 55%;
    margin-top: 1rem;
  }
}

footer nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #00bfff;
  font-weight: 500;
  display: inline-block;
  transition: transform 0.2s ease, color 0.2s ease;
}

footer nav a:hover {
  transform: scale(1.1);
  color: #66d9ff;
}`}</style>

        </>
    )
}

export default FeedbackSection