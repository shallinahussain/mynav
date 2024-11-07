'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";
function UpcomingWebinars() {

const featuredWebinars = [

    {
        title: 'Mastering Javascript for Web Development',
        discription:
        'Explore advanced JavaScript concepts to level up your Web Development Skills.',
        slug:'Mastering JavaScript-for-Web Development',
        isFeatured:true,
    },
    {
        title: 'Building Scalable Web Apps with Next.js',
        discription:
        'Learn how to build and Scale Web applications using Next.js.',
        slug:'Building Scalable-Web Apps with-Next.js',
        isFeatured:true,
    },
    {
        title: 'CSS Grid and Flexbox for Responsive Design',
        discription:
        'Master the art of responsive Web design using CSS Grid and Flexbox.',
        slug:'CSS Grid and Flexbox-for-Responsive Design',
        isFeatured:true,
    },
    {
        title: 'Becoming a Full-Stack App Developer',
        discription:
        'Gain experties in building full-stack application for Web and Mobile Platforms.',
        slug:'Becoming a Full-Stack-App-Developer',
        isFeatured:true,
    },
    {
        title: 'Deploying Full-Stack Applications with Docker',
        discription:
        'Learn how to containerize and deploy full-stack applications using Docker.',
        slug:'Deploying Full-Stack Applications-with-Docker',
        isFeatured:true,
    },
    {
        title: 'Unlocking the Power of Tailwind',
        discription:
        'Discover how to efficiently style your Website using Tailwind CSS.',
        slug:'Unlocking-the Power of-Tailwind',
        isFeatured:true,
    },
    {
        title: 'Generative AI for Frontend Development',
        discription:
        'Leverage generative AI tools to automate frontend UI/UX design.',
        slug:'Generative AI-for-Frontend Development',
        isFeatured:true,
    },
    {
        title: 'Generative AI in Backend Automation',
        discription:
        'Learn how AI can automate backend processes and enhance Scalibility.',
        slug:'Generative AI-in-Backend Automation',
        isFeatured:true,
    },
    {
        title: 'AI-Driven Full-Stack Development',
        discription:
        'Integrate AI across both frontend and backend to build intelligent full-stack apps.',
        slug:'AI-Driven Full-Stack Development',
        isFeatured:true,
    }
]


  return (
    <div className="p-12 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-pink-200 sm:text-4xl">Enhance Your Coding Journey</p>
        </div>
        <div className="mt-10">
            <HoverEffect
            items={featuredWebinars.map(webinar=>({
             title:webinar.title,
             description: webinar.discription,
             link:'/'

            }))}
            
            />
        </div>
        <div className="mt-10 text-center">
         <Link href={"/"}
         className="px-4 py-2 rounded border
         border-pink-300 text-blue-900 bg-red-300
         hover:bg-gray-100 transition duration-200"
         >
         View All Webinars
         </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars
