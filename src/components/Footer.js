import React from 'react'
import Link from 'next/link'
import Layout from './Layout'
import {DotCon, GitSq, LinkSq, NewMail, } from './Icons'
import {motion} from 'framer-motion'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light '>
      <Layout className='py-8 flex items-center justify-between left-0'>
        
        <div>
          Built With <span className='text-primary'> &#9825;</span> by Harshith
        </div>

        <div>
          <span>&copy; {new Date().getFullYear()}  All Rights Reserved.</span>
        </div>
        
        <div >
          <nav className='flex flex-wrap gap-5 mb-50'>
            
            
            <motion.a href="mailto:harshithkvanam@gmail.com" alt="Email" target="_blank" whileHover={{y:-5}}>
              <NewMail className="dark:fill-light" style={{z:1}}/>
            </motion.a>
            
            <a href="https://github.com/hkv232"  alt="GitHub" target="_blank">
              <GitSq className="dark:fill-light"/>
            </a>
            <a href="https://www.linkedin.com/in/harshith-vanam/"  alt="LinkedIn" target="_blank">
              <LinkSq className="dark:fill-light" />
            </a>
          </nav>

        </div>
        
      </Layout>
    </footer>
  )
}

export default Footer
