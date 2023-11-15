import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GitSq } from '@/components/Icons'
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"






const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return (
        <article className='relative flex rounded-br-2xl rounded-2xl border border-solid border-dark bg-light shadow-2xl items-center p-10 dark:bg-dark dark:border-light'>

        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[104%] rounded-3xl rounded-br-3xl bg-dark dark:bg-light'  />

            <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-xl'>
                <Image src={img} alt={title} className='w-full h-auto' />
                
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 '>
                <span className='text-primary font-medium text-xl'>
                    {type}
                </span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light'>{title}</h2>
                
                </Link>
                <p className='dark:text-light my-2 font-medium text-dark'>{summary}</p>

                <div className='mt-2 flex items-center'>
                    <Link href={link} target='_blank' className='-mt-2 rounded-lg bg-dark text-light p-2 px-10 text-md border border-solid border-transparent font-semibold hover:bg-light hover:text-dark hover:border-dark
                    
                    dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                    '> View Project </Link>
                </div>
                
            </div>

        </article>

    )
}

const MajorProject = ({title, info, img, link, github}) => {
    return (
        <article className='w-full flex flex-col justify-center rounded-2xl border border-solid border-dark bg-light shadow-2xl items-center p-6 relative dark:bg-dark dark:border-light'>

        <div className='absolute top-0 -right-3 -z-10 w-[102.5%] h-[103%] rounded-3xl rounded-br-3xl bg-dark dark:bg-light dark:border-light' />

            <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className='w-full h-auto' />
                
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='dark:text-light my-2 w-full text-left text-2xl font-bold '>{title}</h2>
                
                </Link>


                <span className='dark:text-light/75 text-dark font-medium text-lg mb-4'>
                    {info}
                </span>

                <div className='mt-2 flex items-center'>
                    <Link href={link} target='_blank' className='-mt-2 rounded-lg bg-dark text-light p-2 px-6 text-md border border-solid border-transparent font-semibold hover:bg-light hover:text-dark hover:border-dark
                    
                    dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light'> View Project </Link>
                </div>
                
            </div>

        </article>
    )
}

const MiniProject = ({title, info, img, link, github}) => {
    return (
        <article className='w-full flex flex-col justify-center rounded-2xl border border-solid border-dark bg-light shadow-2xl items-center p-6 relative dark:bg-dark dark:border-light '>

        <div className='absolute top-0 -right-3 -z-10 w-[104%] h-[103%] rounded-3xl rounded-br-3xl bg-dark dark:bg-light dark:border-light' />            

            <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className='w-full h-auto' />
                
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='dark:text-light my-2 w-full text-left text-xl font-bold'>{title}</h2>
                
                </Link>

                <span className='dark:text-light/75 text-dark font-medium text-md mb-4'>
                    {info}
                </span>

                <div className='mt-2 flex items-center'>
                    <Link href={link} target='_blank' className='-mt-2 rounded-lg bg-dark text-light p-2 px-6 text-md border border-solid border-transparent font-semibold hover:bg-light hover:text-dark hover:border-dark
                    
                    dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light'> View Project </Link>
                </div>
                
            </div>

        </article>
    )
}

const projects = () => {
  return (
    <>
    
        <Head>
            {/* gives good SEO for portfolio */}
            <title>Projects | Harshith Vanam</title>
            <meta name='description' content='any description' />

        </Head>

        <main className='w-full mb-16 flex flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText className='mb-16' text="Imagination Trumps Knowledge!"/>


                <div className='grid grid-cols-12 gap-24'>
                    <div className='col-span-12 mb-40'>
                        <FeaturedProject 
                        
                        
                        title = "Crypto Screener Application"
                        summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency."
                        link="/portfolio/one"
                        type="Featured Project"
                        img={project1}
                        github="/"

                        
                        />
                    </div>
                    <div className='col-span-6'>
                    <MajorProject 
                        
                        
                        title = "Crypto Screener Application"
                        summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency."
                        link="/portfolio/two"
                        info="Featured Project"
                        img={project1}
                        github="/"

                        
                        />
                    </div>
                    <div className='col-span-6'>
                        <MajorProject 
                            
                            
                            title = "Crypto Screener Application"
                            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                            local currency."
                            link="/portfolio/three"
                            info="Featured Project"
                            img={project1}
                            github="/"

                            
                            />
                    </div>
                    <div className='col-span-4'>
                    <MiniProject 
                        
                        
                        title = "Crypto Screener Application"
                        summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency."
                        link="/portfolio/four"
                        info="Featured Project"
                        img={project1}
                        github="/"

                        
                        />
                    </div>
                    <div className='col-span-4'>
                    <MiniProject 
                        
                        
                        title = "Crypto Screener Application"
                        summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency."
                        link="/portfolio/five"
                        info="Featured Project"
                        img={project1}
                        github="/"

                        
                        />
                    </div>
                    <div className='col-span-4'>
                    <MiniProject 
                        
                        
                        title = "Crypto Screener Application"
                        summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency."
                        link="/portfolio/six"
                        info="Featured Project"
                        img={project1}
                         github="/"

                        
                        />
                    </div>


                </div>
            </Layout>
        </main>
    </>
  )
}

export default projects
