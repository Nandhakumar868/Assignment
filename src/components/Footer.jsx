import {React, useState} from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {Button} from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import logo from '../images/logo.png';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PlayStore from '../images/playstore.png';
import AppleStore from '../images/apple.png';
import Windows from '../images/windows.png';
import X from '../images/x.png';
import Linkedin from '../images/linkedin.png';
import Instagram from '../images/instagram.jpg';
import Youtube from '../images/youtube.png';
import Facebook from '../images/facebook.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Footer = () => {
  const  appList = [
    {
        text : "GET IT ON",
        type : "Google Play",
        image : PlayStore,
    },
    {
        text : "DOWNLOAD ON THE",
        type : "Apple Store",
        image : AppleStore,
    },
    {
        text : "DOWNLOAD FOR",
        type : "Windows",
        image : Windows,
    },
  ]

  const connect = [{image:X,alt:"x"},{image:Linkedin,alt:"Linkedin"},{image:Instagram,alt:"Instagram"},{image:Youtube,alt:"Youtube"},{image:Facebook,alt:"facebook"}]
  return (
    <div className='bg-[#1a1a1aff] w-[100vw] p-5'>
        
        <div className='text-white text-center p-2'>
            <h1 className='font-bold text-3xl m-5'>Guarantee success for your business</h1>
            <h5 className='text-gray-400 m-2'>15-day free trial. No credit card. Instant product access</h5>
            <button className='bg-[#e67627ff] p-2 m-5 rounded-full font-bold'>GET STARTED HERE</button>

            <div className='flex justify-between m-2'>
                <div>
                    <MailOutlineIcon/>
                    <span className='text-[#e67627ff] pl-1'>support@zakya.com</span>
                </div>
                <div className='flex'>
                        <PublicIcon className='mr-2'/>
                        <p>English</p>
                        <ExpandMoreIcon/>
                </div>
            </div>

            <hr className='border-gray-800 m-4' />
        </div>

        <div className='p-2'>

            <div className='grid text-white grid-cols-4'>
                <div>
                    <button><img src={logo} alt="Logo" /></button>
                    <h2>Zakya is a division of Zoho Corporation, which has been in business for over 25 years in cloud software. Our customers have been the center of everything we do, and the idea for Zakya was born as an extension of that same principle.</h2>
                </div>

                <div className='p-3'>
                    <h1 className='text-[#849696ff] font-semibold'>QUICK LINKS</h1>
                    <ul className='py-3'>
                        <li className='py-1'>All Features</li>
                        <li className='py-1'>Inventory Management</li>
                        <li className='py-1'>Sales Management</li>
                        <li className='py-1'>Payment Management</li>
                        <li className='py-1'>Customer Management</li>
                        <li className='py-1'>Multi-outlet Management</li>
                        <li className='py-1'>Online Store</li>
                        <li className='py-1'>Retail Analytics</li>
                        <li className='py-1'>Store Hardware</li>
                        <li className='py-1'>Pricing</li>
                        <li className='py-1'>Features Comparison</li>
                        <li className='py-1'>Resources</li>
                    </ul>
                </div>

                <div className='py-3'>
                    <h1 className='text-[#849696ff] font-semibold'>GET STARTED NOW</h1>
                    <ul className='py-2'>
                        <li className='py-1'>Signup</li>
                        <li className='py-1'>Book a Demo</li>
                        <li className='py-1'>Request a Price Quote</li>
                    </ul>
                    <h1 className='text-[#849696ff] font-semibold mt-5'>COMPANY</h1>
                    <ul className='py-2'>
                        <li className='py-1'>Our Story</li>
                        <li className='py-1'>Customers</li>
                        <li className='py-1'>Blog</li>
                        <li className='py-1'>Online Store</li>
                        <li className='py-1'>What's new</li>
                        <li className='py-1'>Privacy Policy</li>
                        <li className='py-1'>Pricing</li>
                        <li className='py-1'>Partnership</li>
                        <li className='py-1'>Terms</li>
                    </ul>
                </div>
                
                <div className='flex flex-col items-start'>
                    <h1 className='text-[#849696ff] font-semibold'>PHONE</h1>
                    <Button style={{color:'white'}} startIcon={<PhoneIcon style={{color:'white',borderColor:'white',borderStyle:'solid',borderWidth:'2px',borderRadius:'50px',padding:'1px'}}/>}>1800 102 9944</Button>
                    <Button style={{color:'white'}} startIcon={<WhatsAppIcon style={{backgroundColor:'green',color:'white'}}/>}>+91 7305654908</Button>
                    <h1 className='text-[#849696ff] font-semibold mt-4'>APPS</h1>
                    {appList.map((list,index)=>(
                    <div key={index} className='border-white mb-2 border rounded-lg p-2 flex'>
                        <img src={list.image} alt={list.type} className='float-left w-[2vw]  object-fit mr-2' />
                        <p className='text-[#849696ff]' style={{fontSize:'10px'}}>{list.text}<span className='block text-white text-sm'>{list.type}</span></p>
                    </div>
                    ))}
                    <h1 className='text-[#849696ff] font-semibold mt-4'>CONNECT WITH US</h1>
                    <div className='flex mt-2'>
                    {connect.map((images,index)=>(
                    <img src={images.image} alt={images.alt} className=' w-[3vw] mr-2 object-fit' />))}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer