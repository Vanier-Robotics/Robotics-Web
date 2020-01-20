import React from 'react'
import { Link } from 'gatsby'
import thincc from '../../images/thincc.png' 

const SecondPage = () => (
  <div id="movingbox">
    <h1>R for Robot</h1>
    <div id="head">
      <head>
        <meta name="viewport" content="width = device-width, initial-scale = 1.0"></meta>
        <link rel="stylesheet" type="text/css" href="../components/rForRobotCoreCSS.css"></link>
      </head>
    </div>
    <div id="content">
      <body><wrapper>
      <div class="infoBox" id="firstInfoBox">{/*This first box was meant as a title. Put R for Robot or somesuch in it with a nice bigg and thicc font--->*/}
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu bibendum turpis. Vivamus tempor elit ut nulla finibus ornare. Aenean eget arcu pharetra, sollicitudin lacus a, porttitor nisl. Sed non tempus augue. Nullam placerat lacus non ligula sodales condimentum. Phasellus eget convallis augue. Nullam metus diam, vehicula eget sapien eget, tempor commodo lectus. Sed faucibus, tortor placerat scelerisque ullamcorper, ante massa congue nulla, eget aliquet sem arcu a nibh.</p>
		</div>
		<img class="infoImage" src={thincc} alt="A description of the image"></img>{/*Placeholder*/}
		<div class="infoBox">
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu bibendum turpis. Vivamus tempor elit ut nulla finibus ornare. Aenean eget arcu pharetra, sollicitudin lacus a, porttitor nisl. Sed non tempus augue. Nullam placerat lacus non ligula sodales condimentum. Phasellus eget convallis augue. Nullam metus diam, vehicula eget sapien eget, tempor commodo lectus. Sed faucibus, tortor placerat scelerisque ullamcorper, ante massa congue nulla, eget aliquet sem arcu a nibh.</p>
		</div>
		<img class="infoImage" src={thincc} alt="A description of the image"></img>{/*Placeholder*/}
		<div class="infoBox">
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu bibendum turpis. Vivamus tempor elit ut nulla finibus ornare. Aenean eget arcu pharetra, sollicitudin lacus a, porttitor nisl. Sed non tempus augue. Nullam placerat lacus non ligula sodales condimentum. Phasellus eget convallis augue. Nullam metus diam, vehicula eget sapien eget, tempor commodo lectus. Sed faucibus, tortor placerat scelerisque ullamcorper, ante massa congue nulla, eget aliquet sem arcu a nibh.</p>
		</div>
		<img class="infoImage" src={thincc} alt="A description of the image"></img>{/*Placeholder*/}
		<div class="infoBox">
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu bibendum turpis. Vivamus tempor elit ut nulla finibus ornare. Aenean eget arcu pharetra, sollicitudin lacus a, porttitor nisl. Sed non tempus augue. Nullam placerat lacus non ligula sodales condimentum. Phasellus eget convallis augue. Nullam metus diam, vehicula eget sapien eget, tempor commodo lectus. Sed faucibus, tortor placerat scelerisque ullamcorper, ante massa congue nulla, eget aliquet sem arcu a nibh.</p>
		</div>
		<div class="infoBox" id="lastInfoBox">
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu bibendum turpis. Vivamus tempor elit ut nulla finibus ornare. Aenean eget arcu pharetra, sollicitudin lacus a, porttitor nisl. Sed non tempus augue. Nullam placerat lacus non ligula sodales condimentum. Phasellus eget convallis augue. Nullam metus diam, vehicula eget sapien eget, tempor commodo lectus. Sed faucibus, tortor placerat scelerisque ullamcorper, ante massa congue nulla, eget aliquet sem arcu a nibh.</p>
		</div>
        </wrapper></body>
    </div>
  </div>
)

export default SecondPage
