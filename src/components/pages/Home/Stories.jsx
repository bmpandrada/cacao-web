import React from 'react'
import { storiesReview } from '../../data/data'

const Stories = () => {
  return (
    <section className="section-stories">
      <div className="bg-video">
        <video className='bg-video__content' autoPlay muted loop>
          <source src='/img/cacao2.mp4' type='video/mp4' />
          Your browser is not supported!
        </video>
      </div>
         <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
                We make the best cacao bar
            </h2>
            </div>

            <div className="row">
              {storiesReview.map((data, index)=>{
                const {id, name, img, highlight, comment} = data;
                return<div className={`story story__space--${index + 1}`} key={id}>
                  <figure  className='story__shape'>
                      <img className='story__img' src={img} alt='person' />
                      <figcaption className="story__caption">
                       {name}
                      </figcaption>
                  </figure>
                  <div className="story__text">
                    <h3 className='heading-tertiary u-margin-bottom-small'>
                      {highlight}.
                    </h3>
                    <p>
                      {comment}
                    </p>
                  </div>
                </div>
              })}
                
            </div>
{/* 
            <div className="row">
                <div className="story">
                  <figure  className='story__shape'>
                      <img className='story__img' src='/img/me.jpg' alt='person' />
                      <figcaption className="story__caption">
                        Michael Andrada
                      </figcaption>
                  </figure>
                  <div className="story__text">
                    <h3 className='heading-tertiary u-margin-bottom-small'>
                      Its the best among the rest.
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, 
                      adipisicing elit. Aliquam, dolore?Lorem ipsum dolor sit amet consectetur, 
                      adipisicing elit. Aliquam, dolore? Lorem ipsum dolor sit amet consectetur, 
                      adipisicing elit. Aliquam, dolore?Lorem ipsum dolor sit amet consectetur, 
                      adipisicing elit. Aliquam, dolore?
                    </p>
                  </div>
                </div>
            </div> */}
            <div className="u-center-text u-margin-top-huge">
                <a href="#" className="btn-text">Read all stories &rarr;</a>
            </div>
    </section>
  )
}

export default Stories