import react from 'react'

const Footer = () => {
  return(
    <footer className='bg-black text-gray-400 py-12 bottom-0 left-0 w-full'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8'>
      <div>
        <h3 className='text-lg font-bold text-white mb-4'>About us</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus obcaecati</p>
      </div>
      <div>
        <h3 className='text-lg font-bold text-white mb-4'> links</h3>
        <ul>
          <li><a href="/" className='hover:text-slate-300'>home</a></li>
          <li><a href="/courses" className='hover:text-slate-300'>courses</a></li>
          <li><a href="/about" className='hover:text-slate-300' >about</a></li>
          <li><a href="/contact" className='hover:text-slate-300' >contact</a></li>
        </ul>
      </div>
      <div>
        <ul>
        <h3 className='text-lg font-bold text-white mb-4'>Follow Us</h3>
        <li><a href="/" className='hover:text-slate-300'>Facebook</a></li>
          <li><a href="/courses" className='hover:text-slate-300'>Tiktok</a></li>
          
          </ul>
      </div>
      <div>
      <h3 className='text-lg font-bold text-white mb-4'>contact us</h3>
      <p>Email:<a href="/.mail@gmail.com"><span className='hover-text-white'>shallinahussain@gmail.com</span>shallinahussain@gmail.com</a></p>
      <p>phone:<span className='hover-text-white'>03356383421</span></p>
      
      </div>
      </div>
      <p className='flex justify-center p-2'>© 2024 C2tec - Master the Craft of Coding.</p>
    </footer>
  )
}
export default Footer