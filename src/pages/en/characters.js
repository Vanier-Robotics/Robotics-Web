import React from 'react'
import { Link } from 'gatsby'
import Example from './members/example'
const SecondPage = () => (
  <div class="movingbox" id="characters-box">
    <ul class="selection">
    <div class="team" id="bg-ch"></div>
      <li class="team-options" id="build-option">
        <img class="team-image" id="build-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA"></img>
      <p class="team-name">BUILD</p>
      <div class="team" id="build">
      <p id="hovertext">HOVER OVER A PROFILE TO STOP IT</p>
        <div class="strip">
        <div class="person"><Example></Example></div>
        <div class="person"><Example></Example></div>
        <div class="person"><Example></Example></div>
        <div class="person"><Example></Example></div>
        </div> </div>
      </li>
      <li class="team-options" id="kiosk-option">
      <img class="team-image" id="kiosk-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA"></img>
      <p class="team-name">KIOSK</p>
      <div class="team" id="kiosk">
      <p id="hovertext">HOVER OVER A PROFILE TO STOP IT</p>
        <div class="strip">
        <div class="person"><Example></Example></div>
        <div class="person"><Example></Example></div>
        <div class="person"><Example></Example></div>
        <div class="person"><Example></Example></div>
        </div></div>
      </li>
      <li class="team-options" id="programming-option">
      <img class="team-image" id="programming-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA"></img>
      <p class="team-name">PROGRAMMING</p>
      <div class="team" id="programming">
        <p id="hovertext">HOVER OVER A PROFILE TO STOP IT</p>
        <div class="strip">
        <div class="person"><Example></Example></div>
        <div class="person"><Example></Example></div>
        <div class="person"><Example></Example></div>
        <div class="person"><Example></Example></div>
        </div></div>
      </li>

      <li class="team-options" id="journalism-option">
      <img class="team-image" id="journalism-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA"></img>
      <p class="team-name">JOURNALISM</p>
     <div class="team" id="journalism">
       <p id="hovertext">HOVER OVER A PROFILE TO STOP IT</p>
        <div class="strip">
        <div class="person"><Example></Example></div>
        <div class="person"><Example></Example></div>
        <div class="person"><Example></Example></div>
        <div class="person"><Example></Example></div>
        </div></div>
      </li>

      <li class="team-options" id="video-option">
      <img class="team-image" id="video-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA"></img>
      <p class="team-name">VIDEO</p>
      <div class="team" id="video">
        <p id="hovertext">HOVER OVER A PROFILE TO STOP IT</p>
        <div class="strip">
        <div class="person"><Example></Example></div>
        <div class="person"><Example></Example></div>
        <div class="person"><Example></Example></div>
        <div class="person"><Example></Example></div>
        </div></div>
      </li>

      <li class="team-options" id="web-option">
      <img class="team-image" id="web-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA"></img>
      <p class="team-name">WEB</p>
      <div class="team" id="web">
        <p id="hovertext">HOVER OVER A PROFILE TO STOP IT</p>
        <div class="strip">
        <div class="person"><Example></Example></div>
        <div class="person"><Example></Example></div>
        <div class="person"><Example></Example></div>
        <div class="person"><Example></Example></div>
        </div></div>
      </li>
    </ul>

  </div>
)

export default SecondPage
