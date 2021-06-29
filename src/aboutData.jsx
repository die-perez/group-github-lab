
import ryan from './image/ryan.jpeg'
import jackie from './image/jackie.jpg'
import mv from './image/matt.jpg'
import andie from './image/andie.jpeg'

const aboutData = [  { 

  name: 'ryan kim',
  blurb: 'i am ryan',
  img: 
  <img className="portImage" id='ryan' src={ryan} alt='ryan'
  />
},
  
{
  name: 'Jackie Dinh',
  blurb: 'My name is Jackie Dinh. I enjoy snowboarding and paddle boarding',
  img: 
  <img className="portImage" src={jackie} alt='jackie'
   />
},
  
{ 
  name: 'andie perez',
  blurb: 'lover of all things dark & moody',
  img: 
  <img className="portImage" src={andie} alt='andrea perez'
  />
},
  
{
  name: "Matthew Velasco",
  blurb: "looking to create new worlds with code",
  img: 
  <img className="portImage" id="matt" src={mv} alt="Matthew" 
  />
},
]

export default aboutData
