import React from 'react'
import Link from 'next/link'
import Layout from './Layout'
import { GithubIcon, LinkedInIcon, Mail, GitSq, LinkSq, MailSq, NewMail, InboxMail, LastMail } from './Icons'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
      <Layout className='py-8 flex items-center justify-between left-0'>
        
        <div>
          Built With <span className='text-primary'> &#9825;</span> by Harshith
        </div>

        <div>
          <span>&copy; {new Date().getFullYear()}  All Rights Reserved.</span>
        </div>
        
        <div >
          <nav className='flex flex-column gap-5'>
            
            
            <a href="mailto:harshithkvanam@gmail.com" alt="Email" target="_blank" >
              <NewMail />
            </a>
            
            <a href="https://github.com/hkv232"  alt="GitHub" target="_blank">
              <GitSq />
            </a>
            <a href="https://www.linkedin.com/in/harshith-vanam/"  alt="LinkedIn" target="_blank">
              <LinkSq />
            </a>
          </nav>

        </div>
        
      </Layout>
    </footer>
  )
}

export default Footer
