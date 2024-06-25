import logo from './logo.svg';
import './App.css';
import React , { useState }from 'react';
import ReactDOM from 'react-dom/client';



function ProjectCard({orientation,size,project,changeFocused,focused,animClass,clickHandler}){
 
  return (<div className={'ProjectCard ' + orientation + " "+ animClass} onClick={()=>clickHandler(orientation)}>
        <p>Test</p>
        <p className='paragraph'>{project["name"]}</p>
        <p className='paragraph'>{project["Image"]}</p>

    </div>);
}

function ProjectView(){
  const [focused,setFocused] = useState(0);
  const [leftAnim, setLeftAnim] = useState('');
  const [centerAnim, setCenterAnim] = useState('');
  const [rightAnim, setRightAnim] = useState('');
  let Projects = [
    {"name":"Project 1","Image":"fake"},
    {"name":"Project 2","Image":"fake"},
    {"name":"Project 3","Image":"fake"},
    {"name":"Project 4","Image":"fake"},
    {"name":"Project 5","Image":"fake"},
    {"name":"Project 6","Image":"fake"}
  ]
  let size = 6;
  const clickHandler =  (cardOrientation) =>{
    if(cardOrientation =="left"){
      let result = (focused - 1 + size) % size;
      setLeftAnim("leftLeaveFrame")
      setCenterAnim("centerShuffleLeft")
      setRightAnim("rightShuffleCenter")
      
      setFocused(result);
    }else if(cardOrientation == "right"){
      let result = (focused + 1 + size) % size;
      setLeftAnim("leftShuffleCenter")
      setCenterAnim("centerShuffleRight")
      setRightAnim("rightLeaveFrame")
      setFocused(result);
    }
  };


  let left = (focused - 1 + size) % size;
  let right = (focused + 1 + size) % size;
  return(<div className='ProjectDisplay'>
      <ProjectCard orientation={"left"} size={size} project = {Projects[left]} changeFocused ={setFocused} focused={focused} clickHandler={clickHandler} animClass={leftAnim}/>
      <ProjectCard orientation={"center"} size={size} project = {Projects[focused]} changeFocused ={setFocused}focused={focused} clickHandler={clickHandler}animClass={centerAnim}/>
      <ProjectCard orientation={"right"} size={size} project = {Projects[right]}changeFocused ={setFocused}focused={focused} clickHandler={clickHandler}animClass={rightAnim}/>
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
