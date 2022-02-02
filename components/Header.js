/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import { SearchIcon,
        GlobeAltIcon,
        MenuIcon,
        UserCircleIcon,
        UsersIcon,    
        UserIcon
    } from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router'

const Header = ({placeholder}) => {

    const [searchInput,setSearchInput] = useState('');
    const [startDate,setStartDate] = useState(new Date());
    const [endDate,setEndDate] = useState(new Date());
    const [noOfGuests,setNoofGuests] = useState(1);
    const router = useRouter()

    const selectDates = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    const handleChange = (ranges)=>{
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const handleCancel  = () =>{
        setSearchInput('');   
    }

    return (
        <div className="sticky top-0 bg-white p-5 md:px-10 z-50 grid grid-cols-3
                        shadow-md">
            {/* left */}
            <div className="relative flex h-10 items-center cursor-pointer justify-center">
                <Image src='https://links.papareact.com/qd3'
                        layout='fill'
                        objectFit='contain'
                        objectPosition='left'
                        onClick={()=> router.push('/')}
                        />
            </div>

            {/* middle    */}
            <div className="flex md:border items-center rounded-full text-gray-200">
                <input value={placeholder || searchInput} onChange={(e)=>setSearchInput(e.target.value)} placeholder='Start your search' className="bg-transparent ml-3 flex-grow outline-none text-gray-600 placeholder-gray-400"/>
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
            {searchInput &&
                (
                    <div className='mt-4 col-span-3 mx-auto'>
                       
                        <DateRangePicker
                        ranges={[selectDates]}
                        onChange={handleChange}
                        rangeColors={['#FD5B61']}
                        minDate={new Date()}
                        calendarFocus="backwards"
                        />
                        
                        <div className='mt-2 flex flex-row items-center border-b mb-4'>
                            <h2 className='flex-grow font-semibold text-2xl'>Number of Guests</h2>
                            <div className='flex items-center'>
                                <UsersIcon className='h-5 cursor-pointer'/>
                                <input
                                    value={noOfGuests}
                                    onChange={e=>setNoofGuests(e.target.value)}
                                    type='number'
                                    className='w-12 outline-none text-lg text-red-400 pl-2'
                                    min='1'
                                />
                            </div>
                        </div>
                        <div className='flex mt-2'>
                            <button
                             onClick={handleCancel}
                             className='flex-grow hover:bg-gray-200 rounded-sm py-1'>Cancel</button>
                            <button 
                                onClick={()=> router.push({
                                    pathname:'/search',
                                    query:{
                                        location:searchInput,
                                        noOfGuests,
                                        startDate: startDate.toISOString(),
                                        endDate: endDate.toISOString()
                                    }
                                })}
                                className='hover:bg-red-400 hover:text-white rounded-sm py-1 text-red-400 flex-grow transition duration-150'>Search</button>
                        </div>
                    </div>
                )
            }
            

        </div>
    )
}

export default Header
