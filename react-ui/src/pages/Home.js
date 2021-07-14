import React from 'react';
import { Link } from 'react-router-dom';
import 'react-bootstrap'
import { FaHandHoldingHeart , FaAngellist, FaGlobeAmericas } from 'react-icons/fa';

const Home = () =>{
  
  
  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }

    return( <>
    <main >
       <div className="parallax">
        <div className="titleText">
            <button className="border" onClick={handleScroll}>
         welcome!
            </button>
    </div>
    </div>
    <div className="container-home">

     
<section id="best-features" className="text-center">


  <h2 className="mb-5 font-weight-bold"> Welcome to my CV website !</h2>


  <div className="row d-flex justify-content-center mb-4">

   
    <div className="col-md-8">

     
      <p className="grey-text"> Here you can see my projects,
       take a closer look at my CV and get to know me a little better in the 'about' page. 
          Hopefully you will find me the right man for the job 🤩</p>
         </div>
  </div>

{/* <div className="row justify-content-center"> 
    <Link to='/Recipe' className='btn btn-primary'>
      For the cake
      </Link></div> */}
  <div className="row mt-5">

    <div className="col-md-4 mb-5">
    <FaHandHoldingHeart className='sociali'/>
      <h4 className="my-4 font-weight-bold">Motivation</h4>
      <p className="grey-text">Junior Full-Stack Developer with excellent interpersonal skills.
Team player, Self-learner.
Always looking to learn more and improve my skills.
</p>
    </div>
  

    <div className="col-md-4 mb-1">
    <FaAngellist className='sociali'/>
      <h4 className="my-4 font-weight-bold">Skills</h4>
      <p className="grey-text">
      HTML & HTML5,  CSS &  CSS3 & SASS,  Bootstrap,  Javascript,
      <br></br>
      OOP with TypeScript,  React.js,  Angular,  PHP Basic,
      <br></br>
      MySQL,  MongoDB,  Node.JS,  Socket.io 
</p>
    </div>
   

   
    <div className="col-md-4 mb-1">
     <FaGlobeAmericas className='sociali'/>
      <h4 className="my-4 font-weight-bold">Hobbies</h4>
      <p className="grey-text">Love to travel, sports, have a strong passion 
       for technology and solving problems.
      </p>
    </div>
  </div>
</section>
</div>

   </main>
    </> 
    )}
    export default Home;