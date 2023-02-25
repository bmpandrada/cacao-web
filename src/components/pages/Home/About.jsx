import React from 'react'
import { aboutData, aboutTitle, dataAbout } from '../../data/data'


const About = () => {
  return (<section className="section-about">
            <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
            {aboutTitle}
            </h2>
            </div>
            <div className="row">
            <div className="col-1-of-2">
        {aboutData.map(({id, heading,paragraph})=>{
  return <React.Fragment  key={id}>
            <h3 className='heading-tertiary u-margin-bottom-small'>
            {heading}
            </h3>
            <p className="paragraph u-margin-bottom-small">
                {paragraph}
            </p>
            </React.Fragment>
             })}
            <a href="#" className="btn-text">Know more &rarr;</a>
             </div>
                <div className="col-1-of-2">
                 <div className="composition">
                  {dataAbout.map(({id, srcImg, classImg, photoN})=>{
                    return<img key={id} src={srcImg} alt={photoN} className={classImg} />
                  })}
                 </div>
            </div>
            </div>  
        </section>  
  )
}

export default About