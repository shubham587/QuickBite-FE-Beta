import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import React, { useState } from 'react'

// const dropList = [
//     {
//         "label": "labelname",
//         checked: "redux state or local",
//         onCheckedChange: "onChange function",
//         disabled: "true or false"
//     }
// ]

const Dropdown = ({ dropList, label, checkChangeHandler }) => {
    // const [showStatusBar, setShowStatusBar] = useState(true)
    return (
        <div className="dropdown-menu">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <button className="dropdown-menu-button">Location</button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {label && <>
                        <DropdownMenuLabel>{label}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                    </>
                    }
                    {
                        dropList.map((item, ind) => (
                            <DropdownMenuCheckboxItem key={ind} checked={item.checked} onCheckedChange={checkChangeHandler}>
                                <span>{item.label}</span>
                            </DropdownMenuCheckboxItem>
                        ))
                    }
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default Dropdown