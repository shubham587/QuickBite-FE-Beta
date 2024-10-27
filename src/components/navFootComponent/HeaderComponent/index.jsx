import { Avatar } from '@/components/ui/avatar'
import { AvatarImage } from '@radix-ui/react-avatar'
import logo from "../../../assets/logo/QuickBite-logo.png"
import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '@/components/shadComponent/SearchBar'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { FaSearch, FaHome, FaFax } from 'react-icons/fa'
import { FaCartShopping } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";

const NAV_MEMBER = [
    {
        id: 1,
        catName: `Home`,
        catLink: "/",
        catIcon: <FaHome />
    },
    {
        id: 2,
        catName: "Catalogue",
        catLink: "/catalogue",
        catIcon: <FaFax />
    },
    {
        id: 3,
        catName: "Cart",
        catLink: "/cart",
        catIcon: <FaCartShopping />
    },
    {
        id: 4,
        catName: "Account",
        catLink: "/account",
        catIcon: <MdAccountCircle />
    },
]

const Header = () => {
    return (
        <>
            <div className='top-0 left-0 sticky navbar z-50 bg-white border-b-2 '>
                <div className='flex align-middle items-center justify-evenly'>
                    <div className="logo  flex flex-none items-center align-middle ">
                        <Link to="/">
                            <img className='h-20 rounded-full' src={logo} alt="QuickBite Logo" />
                        </Link>
                    </div>
                    <div className="searchbar  w-96 ">
                        <SearchBar ipClass="border-0" className="h-12  border-2  rounded-full p-2" type="text" placeholder="Search food ..." />
                    </div>
                    <div className="category border-0 ">
                        <NavigationMenu>
                            <NavigationMenuList className="flex ">
                                {NAV_MEMBER.map((item, index) => (
                                    <NavigationMenuItem key={index} className="text-black">
                                        <Link to={item.catLink}>
                                            <div className="flex m-2 font-normal text-lg align-middle items-center">
                                                <div className="icon m-2">{item.catIcon}</div>
                                                <div className="text-black"> {item.catName}</div>
                                            </div>
                                        </Link>
                                    </NavigationMenuItem>))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header