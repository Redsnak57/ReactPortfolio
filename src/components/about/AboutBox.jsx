import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className='about__icon icon-fire'></i> 

            <div>
                <h3 className="about__title">3</h3>
                <span className="about__subtitle">Projet complétés</span> 
            </div>
        </div>

        <div className="about__box">
            <i className='about__icon icon-cup'></i> 

            <div>
                <h3 className="about__title">5216 </h3>
                <span className="about__subtitle"> Tasses de café</span> 
            </div>
        </div>

        <div className="about__box">
            <i className='about__icon icon-people'></i> 

            <div>
                <h3 className="about__title"> 3</h3>
                <span className="about__subtitle"> clients satisfait</span> 
            </div>
        </div>
    </div>
  )
}

export default AboutBox