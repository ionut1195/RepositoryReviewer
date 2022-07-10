import React from 'react'
import Typewriter from 'typewriter-effect'

export default function About() {
  return (
    <section title='about-section'>
      <div className='flex flex-col mt-6 pb-36'>
        <div className="container mx-auto ">
        <h2 className='my-6 pb-5 border-b-2 text-4xl md:text-[3rem] text-center text-[#416b78]'>About Project</h2>
        </div>
        <div className="container flex flex-col py-3 mx-auto md:flex-row md:justify-around">
          <div className="flex flex-col items-center justify-center mx-auto md:m-0">
            <div className='pt-10 text-white md:text-xl lg:text-2xl'><span className='font-bold text-lg md:text-2xl lg:text-3xl text-[#5c8694]'>GitHub RepositoryReviewer</span>
              <div><br /> Is a web tool that allows You</div>
              <div>
                <ul className='list-disc marker:text-[#003440]'>
                  <li>See one's public repositories</li>
                  <li>Have quick access to the source code</li>
                  <li>See information about the repositories</li>
                  <li>Add comments to any of the repositories</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mx-auto md:m-0">
            <h3 className='my-6 text-2xl md:text-4xl text-[#5c8694]'>Tools Used</h3>
            <div className='text-white'>
              <ul className='list-disc md:text-xl lg:text-2xl marker:text-[#003440]'>
              <li><div className="flex">
                <div className='px-3'>Fetching data from GitHub</div>
                <Typewriter
                  onInit={typewriter => {
                    typewriter.typeString('<span style="color:#5c8694">GraphQl</span>')
                    .pauseFor(3000)
                    .deleteAll()
                    .start()
                  }}
                  options={{
                    loop: true
                  }}
                />
              </div></li>
              <li><div className="flex">
                <div className='px-3'>Written in</div>
                <Typewriter
                  onInit={typewriter => {
                    typewriter.typeString('<span style="color:#5c8694">TypeScript</span>')
                    .typeString('<span style="color:#FFF"> and </span>')
                    .typeString('<span style="color:#5c8694">React</span>')
                    .pauseFor(3000)
                    .deleteAll()
                    .start()
                  }}
                  options={{
                    loop: true
                  }}
                />
              </div></li>
              <li>
                <div className="flex">
                <div className='px-3'>Comments storage</div>
                <Typewriter
                  onInit={typewriter => {
                    typewriter.typeString('<span style="color:#5c8694">MongoDb</span>')
                    .pauseFor(3000)
                    .deleteAll()
                    .start()
                  }}
                  options={{
                    loop: true
                  }}
                />
              </div>
              </li>
              <li>
                <div className="flex">
                  <div className='px-3'>Styling</div>
                  <Typewriter
                    onInit={typewriter => {
                      typewriter.typeString('<span style="color:#5c8694">TailwindCss</span>')
                      .pauseFor(3000)
                      .deleteAll()
                      .start()
                    }}
                    options={{
                      loop: true
                    }}
                  />
                </div>
              </li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
