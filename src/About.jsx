// import React from 'react'
import { Image } from 'react-bootstrap'
import aboutImage from './assets/about.jpg'

const About = () => {
  return (
    <>
        <div id='About' className='container-fluid my-5 d-flex flex-column justify-content-center'>
            <hr className='mx-auto border border-danger w-75'/>
            <h1 className="display-1 text-center text-danger fw-bolder"> ABOUT US.</h1>
            <hr className='mx-auto border border-danger w-75'/>
            <Image className='w-100 mt-5' src={aboutImage} fluid />
            <p className='text-danger fw-bold w-50 text-center mx-auto mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur at similique minus molestiae corrupti ad saepe distinctio expedita omnis repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis autem neque velit corrupti eligendi minus iusto vel fuga enim laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veniam aperiam sunt error explicabo suscipit eveniet perferendis et ea blanditiis.</p>
        </div>
    </>
  )
}

export default About