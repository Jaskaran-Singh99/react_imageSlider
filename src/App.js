import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './components/data';
import './components/index.css'

function App() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)
    
  const checkForlastSlide = (number)=>{
          if(number > people.length - 1){
            return 0
          }
          if(number < 0){
            return people.length -1
          }
          return number
  }
  const prevBtn = ()=>{
    setIndex(()=>{
      let newIndex = index + 1
      return  checkForlastSlide(newIndex)
    })
  }
  const nextBtn = ()=>{
    setIndex(()=>{
      let newIndex = index - 1
      return  checkForlastSlide(newIndex)
    })
  }
  // return checkForlastSlide(newIndex)

  return (
    <section className="section">
      <div className='title'>
        <h2>
         
          <span>Review</span>
        </h2>
      </div>
      <div className='section-center'>

        {people.map((person,personIndex)=>{
          const {id, name, image, title , quote} = person

        
          
          if(personIndex === index){
            return(
              <article key={id} className='active' >
        
                  <img src={image} className='person-img' ></img>
                  <h4>{name}</h4>
                  <p className='title'>{title}</p>
                  <p className='text'>{quote}</p>
                  <FaQuoteRight className='icon'/>
              </article>
              )
          }
          if(personIndex === index -1){
            return(
              <article key={id} className='nextSlide' >
        
                  <img src={image} className='person-img' ></img>
                  <h4>{name}</h4>
                  <p className='title'>{title}</p>
                  <p className='text'>{quote}</p>
                  <FaQuoteRight className='icon'/>
              </article>
              )
          }
          if(personIndex === index + 1){
            return(
              <article key={id} className='nextSlide' >
        
                  <img src={image} className='person-img' ></img>
                  <h4>{name}</h4>
                  <p className='title'>{title}</p>
                  <p className='text'>{quote}</p>
                  <FaQuoteRight className='icon'/>
              </article>
              )
          }
          console.log(personIndex === index +1)
          
          
           
          })}
         <button className='prev'>
            <FiChevronLeft onClick={prevBtn}></FiChevronLeft>
      </button>
      <button className='next'>
            <FiChevronRight onClick={nextBtn}></FiChevronRight>
      </button>
      </div>
     
      
    </section>
  );
}

export default App;
