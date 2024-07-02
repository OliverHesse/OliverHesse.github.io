import logo from './logo.svg';

import cliTextEditorGif from './projectgif/CLITextEditorGif.gif';
import basicInterpreterGif from './projectgif/BasicInterpreterGif.gif';
import curve from "./projectgif/CurveGif.gif"
import financeApp from "./projectgif/ChildFinanceAppGif.gif"
import './App.css';
import React , { useState }from 'react';
import ReactDOM from 'react-dom/client';
import { AnimatePresence, motion } from "framer-motion"


function ProjectCard({orientation,size,project,classes,clickHandler}){
 
  return (<motion.div className={'ProjectCard ' +classes} 
    onClick={()=>clickHandler(orientation)}
  
    >
       <img src={project["Image"]}className='projectImage'></img>
       <p className='projectTitle'>{project["name"]}</p>

    </motion.div>);
}
function FocusedProjectCard({project,clickHandler}){

  return(
    <motion.div 
      className={"ProjectCard center"}
      whileHover={{scale:1.2}}
      >
        <a href={project["link"]}>
          <img src={project["Image"]}className='projectImage'></img>
          <p className='projectTitle'>{project["name"]}</p>
        </a>
     

    </motion.div>
  )
}
function ProjectView(){
  const [focused,setFocused] = useState(0);
  const [leftAnim, setLeftAnim] = useState('');
  const [centerAnim, setCenterAnim] = useState('');
  const [rightAnim, setRightAnim] = useState('');
  const [reset, setReset] = useState(false);
  let Projects = [
    {"name":"CLI Text Editor","Image":cliTextEditorGif,"link":"https://github.com/OliverHesse/CLI-Text-Editor"},
    {"name":"Basic Interpreter","Image":basicInterpreterGif,"link":"https://github.com/OliverHesse/CustomInterpreter"},
    {"name":"Bézier curve","Image":curve,"link":"https://github.com/OliverHesse/B-zier-curve"},
    {"name":"Child Finance App","Image":financeApp,"link":"https://github.com/OliverHesse/Child-Finance-App"},
    {"name":"Project 5","Image":"fake"},
    {"name":"Project 6","Image":"fake"}
  ]
  let size = 6;
  let resetAnimations = false;
  const clickHandler =  (cardOrientation) =>{
    setReset(false);
    if(cardOrientation =="left"){
      let result = (focused - 1 + size) % size;
      setLeftAnim("left")
      setCenterAnim("left")
      setRightAnim("center")
      
      setFocused(result);
    }else if(cardOrientation == "right"){
      let result = (focused + 1 + size) % size;
      setLeftAnim("center")
      setCenterAnim("right")
      setRightAnim("right")
      setFocused(result);

    }
  };

  let left = (focused - 1 + size) % size;
  let right = (focused + 1 + size) % size;
  return(<div className='ProjectDisplay'>
    
      <ProjectCard orientation={"left"} size={size} project = {Projects[left]} classes={"left"} clickHandler={clickHandler} />
      <FocusedProjectCard project = {Projects[focused] } animateDirection={centerAnim}  />
      <ProjectCard orientation={"right"} size={size} project = {Projects[right]} classes={"right"}  clickHandler={clickHandler} />
      
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className= "App-header">
        <h2>Hi, I'm Oliver</h2>
        <h6>Wales, He/Him, 18</h6>
        <p className = "paragraph">I enjoy programming lots of things. right now im trying out minecraft plugins because... it is fun!</p>
        <p className = "paragraph">I am primarily a Python developer. However, I also have experience in JavaScript, Rust and Java.</p>
        <ProjectView />
      </header>
      
    </div>
  );
}

export default App;
