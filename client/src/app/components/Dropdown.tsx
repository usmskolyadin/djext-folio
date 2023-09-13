'use client'
import {useState, useEffect} from 'react'

const Dropdown = () => {
    const [open, setOpen] = useState(false)


    return (
        <div className="">
            <button data-collapse-toggle="mega-menu-full" onClick={() => {setOpen(!open)}} type="button" className="items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div className={`bg-gray-900 ${open? '': 'hidden'}`}>
                <ul>
                    <li>Home</li>
                    <li>My projects</li>
                    <li>More..</li>
                </ul>
            </div>
        </div>
    )
}

export default Dropdown