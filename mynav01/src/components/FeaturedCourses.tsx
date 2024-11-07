'use client'
import Link from "next/link";
import courseData from "@/data/code_courses.json";
import { BackgroundGradient } from "@/components/ui/background-gradient"
import React from "react";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}
function FeaturedCourses() {
  const featuredCourses =courseData.courses.filter((Course:Course) => Course.isFeatured)


return (
  <div  className="py-12 bg-pink-300">
      <div>
          <div className="text-center">
            <h2 className="text-base text-teal-600
            font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
            <p className="mt-2 text-3xl leading-8
            font-extrabold tracking-tight text-white
            sm:text-4xl">Learn With the Best</p>
              
          </div>
      </div>
      <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2
          lg:grid-cols-3 gap-8 justify-center">
              {featuredCourses.map((course)=> (
                  <div  key={course.id}> 
                   <BackgroundGradient 
                    className="flex flex-col rounded-
                    [22px] bg-gray-900 dark:bg-zinc-900
                    overflow-hidden h-full max-w-sm ">
                      <div className="p-4 sm:p-6 flex
                      flex-col items-center text-center
                      flex-grow">
                        
                        <p className="text-lg sm:text-xl text-black mt-4 mb-2
                        dark:text-neutral-200"> key={course.title}</p>
                        <p className="text-5m text-neutral-600
                        dark:text-neutral-400
                        flex-grow">key={course.description}</p>
                        <Link href={'/courses/${course.slug}'} className="text-blue-300">
                        Learn More
                        </Link>
                      </div>
                    </BackgroundGradient>
                    </div>
                ))}
            </div>
        </div>
        <div className="mt-20 text-center">
        <Link href={"/Courses"}
        className="px-4 py-2 rounded-full border
        border-blue-900 text-neutral-700 bg-white
        hover:bg-gray-100 transition duration-200"
        
        >
        View All Courses
         </Link>
        </div>
        
    </div>
  )
}

export default FeaturedCourses
