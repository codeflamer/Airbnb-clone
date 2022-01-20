/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image"

const Banner = () => {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image 
                src='https://links.papareact.com/0fm'
                objectFit='cover'
                layout='fill'
            />
            <div className='absolute top-1/2 w-full text-center'>
                <p className='text-sm md:text-lg '>Not sure where to go? Perfect.</p>
                <button className='text-purple-500 
                    bg-white py-3 px-10 rounded-full mt-4
                    shadow-md font-bold hover:shadow-xl active:scale-90 
                    transition duration-150'>I am flexible</button>
            </div> 
        </div>
    )
}

export default Banner
