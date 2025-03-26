import Hamburger from 'hamburger-react';
import {useState} from 'react';
import {Link} from 'react-router-dom';


export default function HamburgerMenu() {
    const [open, setOpen]  = useState(false);
    return (
        <nav className='font-[Poppins] w-screen text-white p-3'>
            <div className="flex justify-center items-center content-cente">

 
                <h1 className="p-4 absolute top-0 left-0 md:flex hover:text-[#FFD700] text-2xl font-bold  "><Link to="/">Troy Nelson</Link></h1>


                <ul className="pt-4 content-center hidden md:flex items-center
                gap-12 font-semibold">
                    <li className="pr-4 hover:text-[#FFD700]"><Link to="/about">About</Link></li>
                    <li className='pr-4 hover:text-[#FFD700]'><Link to="/projects">Projects</Link></li>
                    <li className=' pr-4 hover:text-[#FFD700]'><Link to="/contact">Contact</Link></li>
                </ul>

 


                <div className="md:hidden absolute top-0 right-0">
                    <Hamburger toggled={open} toggle={setOpen}/>
                </div>


 

                {open && 
                <div className="flex items-center justify-center md:hidden w-full h-screen">
                    <ul className="space-x-4 flex flex-col items-center justify-center">
                        <li className="hover:text-[#FFD700]"><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
                        <li className="hover:text-[#FFD700]"><Link to="/projects" onClick={() => setOpen(false)}>Projects</Link></li>
                        <li className="hover:text-[#FFD700]"><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
                    </ul>
                </div>
                }
            </div> 
   
        </nav>
    )
}