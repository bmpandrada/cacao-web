import React from 'react'
import { toursTitle, toudData } from '../../data/data'

const Tours = () => {
  return (
        <section className="section-tours">
        <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
            {toursTitle}
            </h2>
            </div>
            <div className="row">
                {toudData.map((toudDatas, index)=>{
                   return <div className="col-1-of-3" key={toudDatas.id}>
                <div className="card"  id={`card-${toudDatas.id}`}>
                    <div className="card__side card__side--front">
                        <div className={`card__picture card__picture--${index +1}`}>
                           
                        </div>
                        <h4 className="card__heading">
                            <span className={`card__heading-span card__heading-span--${index +1}`}>
                            {toudDatas.title}
                            </span>
                        </h4>
                        <div className="card__details">
                               <ul>
                                <li>input details.. here</li>
                                <li>input details.. here</li>
                                <li>input details.. here</li>
                                <li>input details.. here</li>
                                <li>input details.. here</li>
                               </ul>
                            </div>
                    </div>
                    <div className={`card__side card__side--back card__side--back-${index +1}`}>
                        <div className="card__cta">
                            <div className="card__price-box">
                                <p className="card__price-only">only</p>
                                <p className="card__price-value"> <span className='card__price-value card__price-value--pesos'>&#8369;</span>{toudDatas.price}</p>
                            </div>
                            <a href="#" className="btn btn--white">Order  now!</a>
                        </div>
                    </div>
                </div>
            </div>
                })}
            
           
            </div>
            
            <div className="u-center-text u-margin-top-huge">
                <a href="#" className="btn btn--green">Discover more</a>
            </div>

        </section>
  )
}

export default Tours