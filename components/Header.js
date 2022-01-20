import Image from 'next/image'
import { SearchIcon,
        GlobeAltIcon,
        MenuIcon,
        UserCircleIcon,
        UsersIcon    
    } from '@heroicons/react/solid'

const Header = () => {
    return (
        <div className="sticky top-0 bg-white p-5 md:px-10 z-50 grid grid-cols-3
                        shadow-md">
            {/* left */}
            <div className="relative flex h-10 items-center cursor-pointer justify-center">
                <Image src='https://links.papareact.com/qd3'
                        layout='fill'
                        objectFit='contain'
                        objectPosition='left'
                        />
            </div>

            {/* middle    */}
            <div className="flex md:border items-center rounded-full">
                <input placeholder='Start your search' className="bg-transparent ml-3 flex-grow outline-none text-gray-600 placeholder-gray-400"/>
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 mx-2 cursor-pointer"/>
            </div>

            {/* right    */}
            <div className='flex space-x-4 items-center justify-end text-gray-500'>
                <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
                <GlobeAltIcon className='h-6 cursor-pointer'/>
                <div className='flex space-x-2 border-2 items-center p-2 rounded-full'>
                    <MenuIcon className='h-6'/>
                    <UserCircleIcon className='h-6'/>
                </div>    
            </div>   
        </div>
    )
}

export default Header
