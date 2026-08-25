import React, { useEffect, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const menus = {
  ai: {
    label: 'Enterprise AI',
    items: [
      ['AI Readiness & Strategy', '/services/ai-readiness'],
      ['Microsoft Copilot', '/services/microsoft-copilot'],
      ['AI Governance & Security', '/services/ai-governance'],
      ['AI Agents & Automation', '/services/ai-services'],
      ['Managed AI Services', '/services/managed-ai-services'],
    ],
  },
  technology: {
    label: 'Data & Technology',
    items: [
      ['Data Engineering', '/services/data-services'],
      ['Analytics & Power BI', '/products/analytics-tools'],
      ['Cloud & Infrastructure', '/services/infrastructure-services'],
      ['Business Applications', '/services/applications-services'],
      ['Systems Integration', '/services/platforms-services'],
    ],
  },
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 20); window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll); }, []);
  useEffect(() => { setMobileOpen(false); setOpenMenu(null); }, [location.pathname]);
  const active = (path) => location.pathname === path;
  const navClass = (path) => `text-sm font-medium transition-colors hover:text-[#7D582E] ${active(path) ? 'text-[#7D582E]' : 'text-gray-600'}`;

  return (
    <nav className={`fixed top-0 z-50 w-full border-b border-gray-100 bg-white ${scrolled ? 'shadow-lg' : 'shadow-sm'}`} aria-label='Primary navigation'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6'>
        <div className='flex h-16 items-center justify-between sm:h-20'>
          <Link to='/' className='flex items-center gap-2' aria-label='Zigo Business Solutions home'>
            <img src='/logo512.png' alt='' className='h-10 w-10 object-contain sm:h-12 sm:w-12' />
            <span className='text-xl font-light tracking-wide text-[#7D582E] sm:text-2xl'>ZIGO<span className='font-bold text-[#ECD5AB]'>BIZ</span><span className='ml-1 text-[10px] text-gray-400'>LTD</span></span>
          </Link>
          <div className='hidden items-center gap-5 lg:flex xl:gap-7'>
            <Link to='/' className={navClass('/')}>Home</Link>
            {Object.entries(menus).map(([key, menu]) => (
              <div key={key} className='relative' onMouseEnter={() => setOpenMenu(key)} onMouseLeave={() => setOpenMenu(null)}>
                <button type='button' onClick={() => setOpenMenu(openMenu === key ? null : key)} className='flex items-center gap-1 py-2 text-sm font-medium text-gray-600 hover:text-[#7D582E]' aria-expanded={openMenu === key}>
                  {menu.label}<ChevronDown className={`h-4 w-4 transition-transform ${openMenu === key ? 'rotate-180' : ''}`} />
                </button>
                {openMenu === key && <div className='absolute left-0 top-full w-64 rounded-xl border border-gray-100 bg-white py-2 shadow-xl'>{menu.items.map(([name, to]) => <Link key={to} to={to} className='block px-5 py-2.5 text-sm text-gray-600 hover:bg-[#ECD5AB]/10 hover:text-[#7D582E]'>{name}</Link>)}</div>}
              </div>
            ))}
            <Link to='/#industries' className={navClass('/industries')}>Industries</Link>
            <Link to='/partners' className={navClass('/partners')}>Partners</Link>
            <Link to='/about' className={navClass('/about')}>About</Link>
            <Link to='/contact' className={navClass('/contact')}>Contact</Link>
            <Link to='/contact' className='rounded-full bg-[#7D582E] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#6a4a26]'>Book an AI Readiness Call</Link>
          </div>
          <button type='button' onClick={() => setMobileOpen(!mobileOpen)} className='rounded-lg p-2 text-gray-600 lg:hidden' aria-expanded={mobileOpen} aria-label='Toggle navigation'>{mobileOpen ? <X /> : <Menu />}</button>
        </div>
        <div className={`overflow-hidden transition-all lg:hidden ${mobileOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className='max-h-[70vh] overflow-y-auto border-t border-gray-100 py-4'>
            <Link to='/' className='block px-4 py-3 font-medium text-gray-700'>Home</Link>
            {Object.entries(menus).map(([key, menu]) => <div key={key}><button type='button' onClick={() => setOpenMenu(openMenu === key ? null : key)} className='flex w-full items-center justify-between px-4 py-3 font-medium text-gray-700'>{menu.label}<ChevronDown className='h-4 w-4' /></button>{openMenu === key && <div className='pl-4'>{menu.items.map(([name, to]) => <Link key={to} to={to} className='block px-4 py-2.5 text-sm text-gray-500'>{name}</Link>)}</div>}</div>)}
            <Link to='/#industries' className='block px-4 py-3 font-medium text-gray-700'>Industries</Link>
            <Link to='/partners' className='block px-4 py-3 font-medium text-gray-700'>Partners</Link>
            <Link to='/about' className='block px-4 py-3 font-medium text-gray-700'>About</Link>
            <Link to='/contact' className='block px-4 py-3 font-medium text-gray-700'>Contact</Link>
            <Link to='/contact' className='mt-3 block rounded-full bg-[#7D582E] px-6 py-3 text-center text-sm font-medium text-white'>Book an AI Readiness Call</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
