import React, { useState } from 'react'

const Book = () => {
  const [ user, setUser ] = useState({name:'', email:''});
  const [person, setPerson] = useState([]);


  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if(!user){
      return;
    }
    setUser({...user,[name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = {...user, id:new Date().getTime().toString()};
    setPerson([...person, newPerson]);
    setUser({name:'', email:''})
    console.log(newPerson)
  }

  return (
    <section className='section-book'>
        <div className="row">
            <div className="book">
                <div className="book__form">
                  <form className='form' onSubmit={handleSubmit}>
                  
                    <div className="u-margin-bottom-medium">
                      <h2 className="heading-secondary">
                        Subscribe
                      </h2>
                    </div>

                    <div className="form__group">
                      <input type="text" className="form__input" value={user.name} onChange={handleChange}
                     name='name' id='name' placeholder='Full Name' required/>
                      <label className='form__label' htmlFor="name">Full Name</label>
                    </div>
                    <div className="form__group">
                      <input type="email" className="form__input" value={user.email} onChange={handleChange}
                      name='email' id='email' placeholder='Email Address' required/>
                      <label className='form__label' htmlFor="email">Email Address</label>
                    </div>
                    
                    <div className="form__group">
                    <button type='submit' className="btn btn--green">Submit &rarr;</button>
                    </div>
                  </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Book