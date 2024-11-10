"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {
  const featuredWebinars = [
    {
      title: 'Mastering JavaScript for Web Development',
      description: 'Explore advanced JavaScript concepts to level up your Web Development Skills.',
      slug: 'mastering-javascript-for-web-development',
      isFeatured: true,
    },
    {
      title: 'Building Scalable Web Apps with Next.js',
      description: 'Learn how to build and scale web applications using Next.js.',
      slug: 'building-scalable-web-apps-with-nextjs',
      isFeatured: true,
    },
    {
      title: 'CSS Grid and Flexbox for Responsive Design',
      description: 'Master the art of responsive web design using CSS Grid and Flexbox.',
      slug: 'css-grid-and-flexbox-for-responsive-design',
      isFeatured: true,
    },
    {
      title: 'Becoming a Full-Stack App Developer',
      description: 'Gain expertise in building full-stack applications for web and mobile platforms.',
      slug: 'becoming-a-full-stack-app-developer',
      isFeatured: true,
    },
    {
      title: 'Deploying Full-Stack Applications with Docker',
      description: 'Learn how to containerize and deploy full-stack applications using Docker.',
      slug: 'deploying-full-stack-applications-with-docker',
      isFeatured: true,
    },
    {
      title: 'Unlocking the Power of Tailwind',
      description: 'Discover how to efficiently style your website using Tailwind CSS.',
      slug: 'unlocking-the-power-of-tailwind',
      isFeatured: true,
    },
    {
      title: 'Generative AI for Frontend Development',
      description: 'Leverage generative AI tools to automate frontend UI/UX design.',
      slug: 'generative-ai-for-frontend-development',
      isFeatured: true,
    },
    {
      title: 'Generative AI in Backend Automation',
      description: 'Learn how AI can automate backend processes and enhance scalability.',
      slug: 'generative-ai-in-backend-automation',
      isFeatured: true,
    },
    {
      title: 'AI-Driven Full-Stack Development',
      description: 'Integrate AI across both frontend and backend to build intelligent full-stack apps.',
      slug: 'ai-driven-full-stack-development',
      isFeatured: true,
    }
  ];

  return (
    <div className="p-12 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-pink-200 sm:text-4xl">
            Enhance Your Coding Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: `/${webinar.slug}`, // Updated to use the dynamic slug for links
            }))}
          />
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/"
            className="px-4 py-2 rounded border border-pink-300 text-blue-900 bg-red-300 hover:bg-gray-100 transition duration-200"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
