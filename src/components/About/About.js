import React from 'react'
import about_img from '../../assets/images/image 9.png'

const About = () => {
  return (
    <>
      <div id="about_wrapper">
        <div id="text_img_wrapper">
          <div id="about_text">
            <h1>LOREM IPSUM</h1>
            <h1>DOLOR SLIT</h1>
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos nam eveniet enim placeat sit molestias explicabo iste deserunt, repellendus qui!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat quos culpa eligendi eaque in quibusdam similique dolor!
            <br /><br /><br />
            <button id="sign_up_btn">SIGN UP</button>
          </div>

          <div id="photo_container">
            <img src={about_img} alt="" />
          </div>
        </div>

      </div>
    </>
  )
}

export default About
