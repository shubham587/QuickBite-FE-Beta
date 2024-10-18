import { Input } from '@/components/ui/input'
import classNames from 'classnames'
import { Icon } from 'lucide-react'
import { FaSearch } from "react-icons/fa"
import React from 'react'

const SearchBar = ({icon:Icon=FaSearch, type, placeholder, className,  children, ...props}) => {
    let searchClass = classNames('search-bar flex flex-grow', className)
  return (
    <div className={searchClass}>
        <FaSearch fontSize={16} className='m-auto mr-2'/>
        <Input type={type} placeholder={placeholder} {...props}/>
    </div>
  )
}



export default SearchBar