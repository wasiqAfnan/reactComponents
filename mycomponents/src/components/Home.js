import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Wasiq's Component</h1>
      <h1>Click below links to go to that components</h1>
      <div style={style.container}>
      <Link to="/feedbackform"><button className='btn btn-lg btn-outline-secondary'>FeedbackFormStar</button></Link>
      <Link to="/cards"><button className='btn btn-lg btn-outline-danger'>Card</button></Link>
      <Link to="/form"><button className='btn btn-lg btn-outline-secondary'>Form</button></Link>
      
      </div>
    </div>
  )
}

const style = {
  container:{
    width:"30vw",
    margin:"auto",
    border:"1px solid red",
    borderRadius:"10px",
    marginTop:"50px",
    display:"flex",
    flexDirection:"column",
    gap:"1rem",
    padding:"15px"
  },
}

