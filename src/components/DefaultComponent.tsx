import Search from './Search'
import { FaGithub } from 'react-icons/fa'
import Typewriter from 'typewriter-effect'

import About from './About'
import Footer from './Footer'



export default function DefaultComponent({getData, handleSetUserName}:any) {
  return (
      <div className='bg-center min-h-[100vh] bg-[#171427] bg-cover '>
        <div className="container mx-auto">
          <div className="flex">
            <div className="flex mx-auto">
              <FaGithub className="w-10 h-auto fill-white md:w-16 justify-self-center"  />
              <h1 className="pl-3 my-5 text-3xl text-white md:my-10 font-Roboto md:text-4xl">Repository Reviewer</h1>
            </div>
          </div>
        </div>
        <div className='max-w-[1080px] mx-3 sm:mx-auto my-4'>
          <Search getLazyData={getData} handleSetUserName={handleSetUserName} />
        </div>
        <section title='hero'>
        <div className='bg-[#040116]'>
          <div className="flex relative justify-center mx-auto overflow-hidden lg:container h-[60vh]">
            <img className='object-cover w-full h-auto mx-auto shadow-2xl' src={require('../assets/hero.jpg')} alt="" />
            <div className="absolute text-2xl text-blue-400 md:text-3xl lg:text-4xl top-24">
              <Typewriter 
              onInit={typewriter => {
                typewriter.typeString('<span style="color:#FFF">Search user</span>')
                .pauseFor(1000)
                .deleteAll()
                .typeString('<span style="color:#FFF">Review code</span>')
                .pauseFor(1000)
                .deleteAll()
                .typeString('<span style="color:#5c8694">Comment!</span>')
                .pauseFor(2000)
                .start()
              }}
              options={{
                loop: true
              }} />
            </div>
          </div>
        </div>
        </section>
        <About />
        <Footer />
      </div>
  )
}
