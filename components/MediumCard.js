import Image from "next/image"

const MediumCard = ({image, title}) => {
    return (
        <div>
            <div className="relative h-80 w-80 mb-2 hover:scale-105 
                    transition cursor-pointer duration-300 ease-out">
                <Image
                src={image}
                layout='fill'
                className='rounded-xl'
                />
            </div>
            <p className="font-semibold text-xl md:2xl">
                {title}
            </p>
        </div>
    )
}

export default MediumCard
