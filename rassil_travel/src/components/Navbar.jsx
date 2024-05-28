import React, { useState, useContext } from 'react';
import { LanguageContext } from '../LanguageContext'; 

const Navbar = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = {
    fr: { offers: 'Offres', about: 'À propos', contact: 'Contact' },
    en: { offers: 'Offers', about: 'About', contact: 'Contact' },
  };

  return (
    <nav className="fixed left-0 top-0 w-full bg-[#171212] text-white p-3 flex justify-between items-center z-10">
      <div className="text-2xl font-bold">Rassil Travel</div>
      <div className="hidden md:flex space-x-32">
        <a href="#offres" className="hover:text-[#f44c5c]">{navItems[language].offers}</a>
        <a href="#a-propos" className="hover:text-[#f44c5c]">{navItems[language].about}</a>
        <a href="#contact" className="hover:text-[#f44c5c]">{navItems[language].contact}</a>
      </div>
      <div className="flex items-center space-x-2">
        <img
          src={language === 'fr' ? './src/img/united-kingdom-great-britain-round-flag-11640077300zzzlrysxoc.png' : './src/img/FrenchFlag.png'}
          alt={language === 'fr' ? 'French' : 'English'}
          className="w-6 h-4 cursor-pointer"
          onClick={toggleLanguage}
        />
        <span>{language === 'fr' ? 'FR' : 'EN'}</span>
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#171212] text-white flex flex-col items-center md:hidden">
          <a href="#offers" className="py-2 hover:text-[#f44c5c]" onClick={() => setIsOpen(false)}>{navItems[language].offers}</a>
          <a href="#about" className="py-2 hover:text-[#f44c5c]" onClick={() => setIsOpen(false)}>{navItems[language].about}</a>
          <a href="#contact" className="py-2 hover:text-[#f44c5c]" onClick={() => setIsOpen(false)}>{navItems[language].contact}</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
