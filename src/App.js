import "./App.css";
import { FaBars } from "react-icons/fa";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Features />
    </div>
  );
}

function Nav() {
  return (
    <nav className='container flex items-center sm:mt-2'>
      <div className='py1'>
        <img src='./random.png' alt='logo' width={200} />
      </div>
      <ul className='hidden sm:flex flex-1 justify-end items-center gap-12 text-purple-450 uppercase text-base'>
        <li className='cursor-pointer'>Features</li>
        <li className='cursor-pointer'>Pricing</li>
        <li className='cursor-pointer'>Contact</li>
        <button
          type='button'
          className='bg-primary text-white rounded-md px-7 p-2 uppercase'
        >
          Login
        </button>
      </ul>
      <div className='flex sm:hidden flex-1 justify-end'>
        <FaBars className='text-purple-450 text-4xl cursor-pointer' />
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className='relative'>
      <div className='container flex flex-col-reverse lg:flex-row item-center gap-12 mt-14 lg:mt-28'>
        <div className='flex flex-1 flex-col items-center lg:item-start'>
          <h2 className='text-bookmark-purple text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6'>
            Review feedback manager
          </h2>
          <p className='text-bookmark-grey text-lg text-center lg:text-left mb-6'>
            Simple way to organize your prjoects, manage team members and
            communicate with them.
          </p>
          <div className='flex justify-center felx-wrap gap-6'>
            <button
              type='button'
              className='btn btn-blue hover:bg-white hover:text-black'
            >
              Get it now
            </button>
            <button
              type='button'
              className='btn btn-white hover:bg-purple-450 hover:text-white'
            >
              Contact us
            </button>
          </div>
        </div>
        <div className='flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10'>
          <img
            className='w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full'
            src='./hero-bg.png'
            alt='hero'
          />
        </div>
        <div className='hidden md:block overflow-hidden bg-purple-450 rounded-l-full absolute h-80 w-2/4 top-32 right-0 lg: -bottom-28 lg:-right-36'></div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className='bg-blue-50 py-20 mt-20 lg:mt-60'>
      <div className='sm:w-3/4 lg:w-5/12 mx-auto px-2'>
        <h1 className='text-3xl text-center'>Features</h1>
        <p className='text-center text-blue-500 mt-4'>
          Our aim is to make quick and easy for you to manage projects and
          review feedback.
        </p>
      </div>
    </section>
  );
}
export default App;
