import Image from "next/image"

const SmallCard = ({image,location,distance}) => {
    return (
        <div className="flex space-x-4 m-2 mt-4 items-center cursor-pointer
                 hover:bg-gray-100 rounded-lg hover:scale-105 transition duration-200 ease-out">
            <div className="relative h-16 w-16">
                <Image
                    src={image}
                    layout='fill'
                    objectFit='contain'
                    className='rounded-lg'
                />
            </div>
            <div>
                <h2 className='font-semibold'>{location}</h2>
                <h3 className='text-gray-500'>{distance}</h3>
            </div>
            
        </div>
    )
}

export default SmallCard
