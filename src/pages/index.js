import React from 'react'
import wooden_c2 from '../images/wooden_c2.jpg'
import F32 from '../images/F32.png'
import E23 from '../images/E23.png'
import crc1 from '../images/crc1.png'

const FirstPage = () => (
  <div id="base">
          <div id="fr" class="block">
             <a class="tooltip" href="/fr">
                      <img src={F32} alt="French box selector" class="image"></img>
                      <span id="fr-text">Français</span>
                      </a>
                
          </div>
          <div id="wood" class="block">
              <img src={wooden_c2} alt="Welcome to Vanier Robotics 2020" class="image"></img> 
          </div>
          <div id="en" class="block">
                <a class="tooltip" href="/en">
                          <img src={E23} alt="English box selector" class="image"></img>
                              <span id="en-text">English</span></a>
     
              </div>


      <footer>
          <a href="https://robo-crc.ca" target="_blank" data-toggle="tooltip" data-placement="top" title="Visit CRC's website for more information!">
              <img src={crc1} alt="CRC">
              </img>
          </a>
      </footer>
      <script>
      </script>
  
  </div>
)

export default FirstPage
