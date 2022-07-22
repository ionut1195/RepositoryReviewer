import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function  Footer() {
  return (
    <section title='footer' className=''>

      <div className=" bg-[#003440] w-full py-4  bottom-0 flex">
        <div className="container flex justify-center mx-auto gap-x-8">
          <a href="https://github.com/ionut1195" rel="noreferrer" target={'_blank'}>
            <FaGithub size={26} className='fill-white' />
          </a>
          <a href="https://www.linkedin.com/in/ionut-tomescu-03b83bb1/" rel="noreferrer" target={'_blank'}>
            <FaLinkedin size={26} className='fill-white' />
          </a>
        </div>
      </div>
    </section>
  )
}

