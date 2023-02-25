import React from 'react'
import { featurebox } from '../../../components/data/data'

const Features = () => {
  return (
    <section className="section-features">
        <div className="row">

        {featurebox.map(({id,classicon, title, details})=>{ 
             return<div className="col-1-of-4" key={id}>
               <div className="feature-box">
                    <i className={classicon}></i>
                    <h3 className="heading-heading-tertiary u-margin-bottom-small">{title}</h3>
                    <p className="feature-box__text">
                        {details}
                    </p>
                    </div> 
                    </div>
                })}
        </div>
    </section>
   )
}

export default Features