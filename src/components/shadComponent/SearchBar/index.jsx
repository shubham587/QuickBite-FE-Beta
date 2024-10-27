import { Input } from '@/components/ui/input'
import classNames from 'classnames'
import { Icon } from 'lucide-react'
import { FaSearch } from "react-icons/fa"
import React from 'react'

const SearchBar = ({icon:Icon=FaSearch, ipClass, type, placeholder, className,  children, ...props}) => {
    let searchClass = classNames('search-bar m-auto flex flex-grow', className)
    let inputClass = classNames("h-auto", ipClass)
  return (
    <div className={searchClass}>
        <FaSearch fontSize={16} className='m-auto mr-2'/>
        <Input className={inputClass} type={type} placeholder={placeholder} {...props}/>
    </div>
  )
}



export default SearchBar