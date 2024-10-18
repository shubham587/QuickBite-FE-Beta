import { Avatar } from '@/components/ui/avatar'
import { AvatarImage } from '@radix-ui/react-avatar'
import logo from "../../../assets/logo/QuickBite-logo.png"
import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '@/components/shadComponent/SearchBar'
import {faSn} from 'react-icons/fa'
const NAV_MEMBER = [
    {
        id: 1,
        catName : "Home",
        catLink : "/snacks"
    },
    {
        id: 2,
        catName : "Catalogue",
        catLink : "/catalogue"
    },
    {
        id: 3,
        catName : "Cart",
        catLink : "/cart"
    },
    {
        id: 4,
        catName : "Account",
        catLink : "/account"
    },
]

const Header = () => {
    return (
        <>
            <div className='navbar border flex align-middle items-center'>
                <div className="logo flex items-center align-middle m-auto">
                    <Link to="/home">
                        <img className='h-20 rounded-full' src={logo} alt="QuickBite Logo" />
                    </Link>
                </div>
                <div className="searchbar w-96">
                    <SearchBar type="text" placeholder="Search food ..."/>
                </div>
                <div className="category">

                </div>
            </div>
        </>
    )
}

export default Header