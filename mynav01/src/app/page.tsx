import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Instructors from "@/components/Instructors";
import CodingschoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
   <main className="min-h-screen bg-blue/[0.96] antialiased bg-grid-pink/[0.02]">
     
     <Herosection />
     <FeaturedCourses/>
     <WhyChooseUs />
     <CodingschoolTestimonials />
     <UpcomingWebinars />
     <Instructors/>
     <Footer />
    
     
    
     
   </main>
  );
}