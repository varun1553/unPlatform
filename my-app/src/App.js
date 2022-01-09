import React,{useState,useEffect} from 'react';
import emp from './images/emp.jpg';
import ReactRoundedImage from "react-rounded-image";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './App.css';
import axios from 'axios';

const App = ()=> {
  const [likes,setLikes]=useState(0);
  const [comments,setComments]=useState(0);
  const [shares,setShares]=useState(0);
  const [viewcnt,setViews]=useState(0);

  const fnt=()=>{
    axios.post("http://localhost:3001/api/new",{
      likes:likes,
    })}
    useEffect(() => {
      const entries = performance.getEntriesByType("navigation");
      if(entries.map( nav => nav.type ) )
      {
        setViews(viewcnt+1);
      }
    },[]);
    

  return (
    <div className="App">
      
        <Container className="cnt">
          <div className="emp-logo">
        <ReactRoundedImage image={emp} roundedSize="0" imageWidth="100" imageHeight="100" alt="logo" />
        </div>
        <span className="name">
          <b>Horng H Chen.</b>
        </span>
        <p className="l1" >Alum | Finance,MBA | 2016 | Business Manager at CapGemini</p>
        <p className="l2" >1d | San Fransico </p>
        <p className="l3"> 
          The concept of Research : A cross-cultural study
        </p>
        <p>
          Oxford Nanopore has pulled in £100m from investors in the Asia-Pacific region, as it completes a <br />funding round that values fast-growing UK biotechnology company in £1.5bn.
        </p>
        <span className="l4">
         {viewcnt} Views | {likes} Likes | {comments} Comments | {shares} Shares
        </span>
        <br /><br />
        <Button variant="link" style={{textDecoration:'none',width:150}} onClick={()=>{setLikes(likes+1);fnt()}}>Like</Button>
        <Button variant="link" style={{textDecoration:'none',width:150}} onClick={()=>{setComments(comments+1)}}>Comment</Button>
        <Button variant="link" style={{textDecoration:'none',width:150}} onClick={()=>{setShares(shares+1)}}>Share</Button>
      </Container>
    </div>
  );
}

export default App;



