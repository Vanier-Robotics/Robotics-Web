import React from 'react'
import wooden_c2 from '../images/wooden_c2.jpg'
import F32 from '../images/F32.png'
import E23 from '../images/E23.png'
import crc1 from '../images/crc1.png'

const FirstPage = () => (
  <div id="main1">
      <div id="bg"></div>
    <div id="cubes">
  <div id="strip1">
          <div id="fr" class="block">
             <a class="tooltip" href="/fr/home">
                      <img src={F32} alt="French box selector" class="image"></img>
                      <p class="landing-text" id="fr-text">Français</p>
                      </a>
                
          </div>
          <div id="en" class="block">
                <a class="tooltip" href="/en/home">
                          <img src={E23} alt="English box selector" class="image" id="red"></img>
                              <p class="landing-text" id="en-text">English</p></a>
     
              </div>
  </div>
  <div id="strip2">
  <div id="wood" class="block">
              <img src={wooden_c2} alt="Welcome to Vanier Robotics 2020" class="image" id="image"></img> 
          </div></div></div>
   <footer>
   <a href="https://robo-crc.ca" target="_blank" data-toggle="tooltip" data-placement="top" title="Visit CRC's website for more information!">
       <img src={crc1} alt="CRC" id="CRC">
       </img>
   </a>
</footer>
</div>
)

export default FirstPage
