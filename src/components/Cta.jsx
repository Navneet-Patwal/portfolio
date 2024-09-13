import React from 'react'
import { Link } from 'react-router-dom'

const Cta = () => {
  return (
    <section className='cta'>
        <p className='cta-text'> Have a idea in mind? <br className='sm:block hidden'/>
        Let's build something together !</p>
        <Link to="/contact" className="btn font-bold">Contact</Link>
    </section>
  )
}

export default Cta
