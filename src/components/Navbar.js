import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { useRouter } from 'next/router'
import useThemeSwitcher from './hooks/useThemeSwitcher'
import { MoonIcon, SunIcon } from './Icons'

const CustomLink = ({href, title, className = ""}) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      {/* underline element for links */}
      <span className={`
      
      h-[1px] inline-block bg-dark absolute left-0 bottom-2 group-hover:w-full transition-[width] ease duration-300
      
      ${router.asPath === href ? 'w-full' : 'w-0'}
      dark:bg-light
      
      `}>&nbsp;</span>
    
    </Link>
  )
}

const Navbar = () => {

  const [mode, setMode] = useThemeSwitcher();


  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light'>

      <div className=' left top-2 translate-x-[-50%]'>
        <Logo />
      </div>
      <nav className='flex justify-between'>
        <CustomLink href="/" title="Home" className='mr-4 top-1'/>
        <CustomLink href="/about" title="About" className='mx-4 top-1'/>
        <CustomLink href="/projects" title="Projects" className='mx-4 top-1'/>
        <CustomLink href="/articles" title="Articles" className='mx-4 top-1'/>
      
      <button className={`ml-6 flex items-center justify-center rounded-full p-1 ${mode === 'light' ? "bg-dark text-light" : 'bg-light text-dark'}`} onClick={() => setMode(mode === "light" ? "dark" : 'light')}>
        {
          mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={'fill-light'} />
        }

      </button>
      
      
      </nav>



      
    </header>
  )
}

export default Navbar
