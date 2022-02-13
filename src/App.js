import "./App.css";
import { FaBars } from "react-icons/fa";

function App() {
  return (
    <div>
      <Nav />
    </div>
  );
}

function Nav() {
  return (
    <nav className='container flex items-center py-2 sm:mt-12'>
      <div className='py1'>
        <img src='./random.png' alt='logo' width={200} />
      </div>
      <ul className='hidden sm:flex flex-1 justify-end items-center gap-12 text-blue-450 uppercase text-base'>
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
        <FaBars className='text-blue-450 text-4xl cursor-pointer' />
      </div>
    </nav>
  );
}
export default App;
