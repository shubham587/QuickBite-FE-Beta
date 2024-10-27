import React from 'react'
import logo from "../../../assets/logo/QuickBite-logo.png"
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'
import { MdOutlineArrowForwardIos } from "react-icons/md";
const FOOT_MEMBER = {
  "menu1": {
    "name": "Menu",
    "items": [
      { "name": "Burger", "link": "/burger" },
      { "name": "Pizza", "link": "/pizza" },
      { "name": "Salad", "link": "/salad" },
      { "name": "Desserts", "link": "/desserts" },
    ],
  },
  "menu2": {
    "name": "Menu",
    "items": [
      { "name": "Appetiaizer", "link": "/Appetiaizer" },
      { "name": "Main Course", "link": "/pizza" },
      { "name": "Breakfast", "link": "/salad" },
      { "name": "Slides", "link": "/desserts" },
    ]
  },
  "others": {
    "name": "Others",
    "items": [
      { "name": "About Us", "link": "/about" },
      { "name": "Contact Us", "link": "/contact" },
      { "name": "FAQ", "link": "/faq" },
      { "name": "Terms & Conditions", "link": "/terms" },
    ]
  },
  "contacts": {
    "name": "Contact Us",
    "items": [
      { "name": "Instagram", "link": "/instagram", "icon": <FaInstagram /> },
      {
        "name": "Facebook", "link": "/facebook", "icon": <FaFacebook />
      },
      {
        "name": "Twitter", "link": "/twitter", "icon": <FaTwitter />
      },
      { "name": "TikTok", "link": "/tiktok", "icon": <FaTiktok /> },
    ]
  }
}


const Footer = () => {



  return (
    <div className='max-w-full h-[320px] bg-black text-white flex flex-row '>
      <div className="com-info flex flex-col w-1/4 h-full m-auto justify-evenly align-middle items-center max-w-md">
        <div className="logo w-36 ">
          <img className='w-full h-fit rounded-full' src={logo} alt='logo' />
        </div>
        <div className="com-add text-wrap text-lg text-center">
          <p>Address: 123, Main St, Anytown, USA</p>
          <p>Phone: 123-456-7890</p>
          <p>Email: <a href="mailto:info@quickbite.com">info@quick
            bite.com</a></p>
        </div>
      </div>
      <div className="menu-info flex align-middle items-center justify-evenly  flex-auto">
        {
          Object.keys(FOOT_MEMBER).map((key, ind) => (
            <div key={ind} className='flex flex-col text-lg  text-white-400'>
              <h1 className='flex-none'>{FOOT_MEMBER[key].name}</h1>
              <div className="menu-list flex flex-col align-middle mt-4">
                {
                  FOOT_MEMBER[key].items.map((item, index) => (
                    <div key={index} className="menu-item mt-2 align-middle items-center flex flex-row">
                      {item.icon ? item.icon : <MdOutlineArrowForwardIos />}
                      <a className='ml-2' href={item.link}>{item.name}</a>
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Footer