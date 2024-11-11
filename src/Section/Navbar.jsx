import React, { useState } from 'react'
import GenixAIsymbol from "../assets/brainwave-symbol.svg"
import { Link } from 'react-scroll';
import ResuableButton from "../Components/ResuableButton"
import ButtonGradient from "../assets/svg/ButtonGradient"
import {HambugerMenu} from "../design/design/Header"
import MenuSvg from '../assets/svg/MenuSvg';

const Navbar = () => {

    const [openNavigation, setOpenNavigation] = useState(false);

    const toggleNavigation = () => {
        if(openNavigation){
            setOpenNavigation(false);
        }
        else{
            setOpenNavigation(true);
        }
    }

    const handleClick = () => {
        setOpenNavigation(false);
    }

  return (
    <div>
        <div className='flex items-center justify-between lg:justify-evenly py-6 max-xl:px-6'>
            <a className='flex items-center gap-2 lg:mr-20' href='#GenixAI'>
                <img src={GenixAIsymbol} alt='Genix-Symbol' />
                <h1 className='h4'>GenixAI</h1>
            </a>

            <nav className={`${openNavigation ? 'flex':'hidden'} hidden lg:block`}>
                <ul className='flex items-center gap-28'>
                    <li>
                        <Link to="about" spy={true} smooth={true} offset={-70} duration={500} 
                        className='button text-n-3 hover:text-n-1 cursor-pointer'>
                            Features
                        </Link>
                    </li>
                    <li>
                        <Link to="about" spy={true} smooth={true} offset={-70} duration={500} 
                        className='button text-n-3 hover:text-n-1 cursor-pointer'>
                            Pricing
                        </Link>
                    </li>
                    <li>
                        <Link to="about" spy={true} smooth={true} offset={-70} duration={500} 
                        className='button text-n-3 hover:text-n-1 cursor-pointer'>
                            How to use
                        </Link>
                    </li>
                    <li>
                        <Link to="about" spy={true} smooth={true} offset={-70} duration={500} 
                        className='button text-n-3 hover:text-n-1 cursor-pointer'>
                            Roadmap
                        </Link>
                    </li>
                </ul>
                <HambugerMenu/>
            </nav>

            <div>
                <div className='flex items-center gap-8 ml-20'>
                    <a href="#signin" className='button text-n-3 hover:text-n-1 hidden lg:flex'>
                        New Account
                    </a>
                    <ResuableButton className='hidden lg:flex' href='#signin'>
                        Sign in
                    </ResuableButton>

                    <ResuableButton className='ml-auto lg:hidden' px='px-3' onClick={toggleNavigation}>
                        <MenuSvg openNavigation={openNavigation} />
                    </ResuableButton>
                    <ButtonGradient/>
                </div>
            </div>
        </div>
        
        <div className='w-full h-[0.25px] bg-n-4'></div>
    </div>
  )
}

export default Navbar;
