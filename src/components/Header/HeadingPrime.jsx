import React from 'react'
import { textdetails } from '../data/data';
import { Link } from 'react-router-dom';

const Heading = () => {
  return (
    <div className='header__text-box'>
        {textdetails.map((content)=>{
        const {title, subtitle, id} = content
   return(<h1 className='heading-primary' key={id}>   
     <span className='heading-primary--main'>{title}</span>
     <span className='heading-primary--sub'>{subtitle}</span>
     <Link className='btn btn--white btn--animated'>Discover</Link>
    </h1>)})}
  </div>
  )
}

export default Heading;