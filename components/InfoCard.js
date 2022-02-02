import { StarIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/outline";
import Image from "next/image";

 

const InfoCard = ({img,description,location,title,total,star,price}) => {
    // console.log(img)
  return <div className="flex flex-grow py-5 px-2 cursor-pointer hover:opacity-80 border-b 
            first:border-t hover:shadow-md transition duration-100 ease-out">
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 ">
                <Image
                    src={img}
                    layout='fill'
                    objectFit='cover'
                    alt=''
                    className='rounded-lg'
                />
            </div>
            <div className='flex flex-col pl-6 pr-2 flex-grow'>
                <div className='flex justify-between'>
                    <p>{location}</p>
                    <HeartIcon className="h-6"/>
                </div>
                
                <h2 className='text-xl font-semibold'>{title}</h2>
                <div className='border-b w-12 py-2'/>
                <p className="text-gray-400 flex-grow text-sm">
                    {description}
                </p>
                <div className='flex justify-between'>
                    <div className='flex items-end'>
                        <StarIcon className="h-6 text-red-400"/>
                        <p>{star}</p>
                    </div>
                    <div>
                        <p className="font-semibold text-lg lg:text-2xl pb-2">{price}</p>
                        <p className="text-right text-gray-400 font-extralight">{total}</p>
                    </div>
                </div>
            </div>
  </div>;
};

export default InfoCard;
