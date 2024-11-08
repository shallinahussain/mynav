import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";
 
 function Herosection() {
  return (
    <div
    className="h-auto md:h-[40rem] w-full rounded-md flex flexx-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
        <div className="p-4 relative z-10 w-full text-center"
        >
             <Spotlight
        className="-top-40 left-0 md:left-80 md:-top-20"
        fill=" white"
      />
            <h1
            className="mt-20 md:mt-0 text-4xl md:text-7xl
            font-bold bg-clip-text text-transparent
            bg-gradient-to-b from-pink-50 to-purple-800"
            >Master the art of coding</h1>
            <p
            className="mt-4 font-normal text-base md:text-lg
            text-pink-500 max-w-lg mx-auto"
            >Dive into our comprehensive coding courses and transform your development journey today. Whether you are a beginner or looking to refine your programming skills, join us to unlock your true coding potential.</p>
            <div className="mt-4">
                <Link href={"/courses"}>
                <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-black
                text-black dark:text-white
                border-yellow-200 dark:border-pink-800"
                >
                Explore courses
                </Button>
                </Link>

            </div>
        </div>
         </div>
  )
}

export default Herosection
