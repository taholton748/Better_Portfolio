import React from "react";
import coverImage from "../../assets/cover/Hawaii.jpg";
import headShot from "../../assets/about/Me.jpg";

function About() {
  return (
    <section className="mb-5">
  <h1 id="about">Who am I?</h1>
  <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
  <div class="flex">
  <img src={headShot} className="my-2" style={{ width: "15%" }} alt="headshot" />
  <p className='px-2'>I'm Tyler. I'm an aspiring web developer based in Colorado, but originally from the great state of North Carolina. I'm developing my skills in the programming industry with hopes of making a career for myself while seeing the world. Currently I work in the service and hospitality industry as a server in a restaurant, but I can't wait for the day I can say I can work effectively from anywhere in the world, as long as I have my laptop and a power outlet (Wi-fi wouldn't hurt). I love to travel and am excited to start a career in which that may be more realistic. Being able to pursue your career no matter where you are on this planet is a possibility I am eager to experience. So much to code. So many places to go.</p>
  </div>
</section>
  );
}

export default About;
