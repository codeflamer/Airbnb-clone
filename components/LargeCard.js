/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";



const LargeCard = ({img,title,description,buttonText}) => {
  return <div className='relative py-16 cursor-pointer'>
            <div className='relative h-96 min-w-[200px]'>
                <Image 
                    src={img}
                    layout='fill'
                    objectFit='cover'
                    className='rounded-xl'
                    />
            </div>
            <div className=' top-32 left-12 absolute'>
                <h3 className='text-4xl mb-3 w-64'>{title}</h3>
                <p>{description}</p>
                <button className='bg-gray-900 text-white px-4 py-2 text-sm rounded-lg mt-5'>{buttonText}</button>
            </div>
        </div>;
};

export default LargeCard;
