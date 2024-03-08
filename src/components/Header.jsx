import {React,useState, useContext} from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import {Button} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SearchIcon from '@mui/icons-material/Search';
import PublicIcon from '@mui/icons-material/Public';
import logo from '../images/logo.png';
import {BaseContext} from '../App';
import { useNavigate } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const handleOpen = () =>{
    setIsOpen(true);
  }

  const handleClose = () => {
    setIsOpen(false);
  }

  const handleCompanyOpen = () =>{
    setIsCompanyOpen(true);
  }

  const handleCompanyClose = () => {
    setIsCompanyOpen(false);
  }

  const handleFeaturesOpen = () =>{
    setIsFeaturesOpen(true);
  }

  const handleFeaturesClose = () => {
    setIsFeaturesOpen(false);
  }

  const handleResourcesOpen = () =>{
    setIsResourcesOpen(true);
  }

  const handleResourcesClose = () => {
    setIsResourcesOpen(false);
  }
  const basename = useContext(BaseContext);
  const navigate = useNavigate();

  return (
    <div className='fixed top-0'>
        <div className='bg-white h-10 w-[100vw]'>
            <div className='flex justify-between mr-[5vw] ml-[5vw]'>
                <div className='flex'>
                    <Button style={{color:'black'}} startIcon={<PhoneIcon style={{color:'black',borderColor:'black',borderStyle:'solid',borderWidth:'2px',borderRadius:'50px',padding:'1px'}}/>}>Toll-Free-1800 102 9944</Button>
                    <Button style={{color:'black'}} startIcon={<WhatsAppIcon style={{backgroundColor:'green',color:'white'}}/>}>+91 7305654908</Button>
                    <Button style={{color:'black'}}>Contact Us</Button>
                </div>
                <div className='flex justify-center text-center items-center'>
                    <button><SearchIcon/></button>
                    <div className='flex items-center'>
                        <div onMouseEnter={handleCompanyOpen} onMouseLeave={handleCompanyClose} className='flex'>
                            <p>Company</p>
                            <ExpandMoreIcon/>
                        </div>
                        <div className={`border-white bg-black text-white p-2 rounded-lg ${isCompanyOpen ? 'flex flex-col' : 'hidden'} absolute top-[25%] z-10`}>
                            <ul>
                                <li>Our Story</li>
                                <li>Partnership</li>
                                <li>Privacy Policy</li>
                                <li>Terms</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex items-center cursor-pointer'>
                        <div onMouseEnter={handleOpen} onMouseLeave={handleClose} className='flex'>
                            <PublicIcon className='mr-2'/>
                            <p>English</p>
                            <ExpandMoreIcon/>
                        </div>
                        <div className={`border-white bg-black text-white p-2 rounded-lg ${isOpen ? 'flex flex-col' : 'hidden'} absolute right-[10%] top-[25%] z-10`}>
                            <button>Tamil</button>
                            <button>Hindi</button>
                        </div>
                    </div>
                    <Button style={{color:'black'}}>Login</Button>
                </div>
            </div>
        </div>
        <div className='bg-[#1a1a1aff] flex justify-between'>
            <div className='p-2'>
                <button><img src={logo} alt="Logo" /></button>
            </div>
            <div className='flex justify-center text-white '>
                <div className='flex justify-center items-center'>
                    <div className='flex' onMouseEnter={handleFeaturesOpen} onMouseLeave={handleFeaturesClose}>
                        <p>Features</p>
                        <ExpandMoreIcon/>
                    </div>
                    <div className={`border-white bg-black text-white p-2 rounded-lg ${isFeaturesOpen ? 'flex flex-col' : 'hidden'} absolute top-[80%] z-auto`}>
                        <ul>
                            <li>Inventory Management</li>
                            <li>Sales Management</li>
                            <li>Payment Management</li>
                            <li>Customer Management</li>
                            <li>Multi-outlet Management</li>
                            <li>Online Store</li>
                            <li>Retail Analytics</li>
                            <li>Store Hardware</li>
                            <li className='text-[#e67627ff]'>See all Features</li>
                        </ul>
                    </div>
                </div>
                <button className='m-2' onClick={() => navigate('/pricing')}>Pricing</button>
                <button className='m-2'>Customers</button>
                <div className='flex justify-center items-center'>
                    <div className='flex' onMouseEnter={handleResourcesOpen} onMouseLeave={handleResourcesClose}>
                        <p>Resources</p>
                        <ExpandMoreIcon/>
                    </div>
                    <div className={`border-white bg-black text-white p-2 rounded-lg ${isResourcesOpen ? 'flex flex-col' : 'hidden'} absolute top-[80%] z-auto`}>
                        <ul>
                            <li>Getting Started</li>
                            <li>Glossary</li>
                            <li>Help Documents</li>
                            <li>Blog</li>
                            <li>FAQs</li>
                            <li>Webinars</li>
                            <li>What's new</li>
                            <li className='text-[#e67627ff]'>All Resources</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex items-center'>
                <Button variant='outlined' style={{color:'white',borderColor:'rgb(209,109,38)',borderRadius:'50px',marginRight:'10px'}}>Get a Demo</Button>
                <Button variant='contained' style={{backgroundColor:'rgb(230, 118, 39)',borderRadius:'50px',marginRight:'10px'}}>Sign Up Now</Button>
            </div>
        </div>
    </div>
  )
}

export default Header;