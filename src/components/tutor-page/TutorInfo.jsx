import Image from "next/image"

const TutorInfo = ({ tutor }) => {
    return (
        <div className="mt-4 md:mt-2 flex w-full px-3 ml-4 items-center gap-2 md:gap-4 py-2">
            <Image
                src={tutor.tutorImg}
                className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full border border-black"
                width={36}
                height={36}
                alt="Tutor profile image"
            />
            <div className="flex flex-col items-center gap-2">
                <div className="flex gap-4 w-full">
                    <h2 className="text-xl md:text-2xl capitalize font-bold tracking-wider whitespace-nowrap">{tutor.tutorNames}</h2>
                    <div className="flex gap-2 items-center text-[#43b75d]">
                        <Image
                            src={'/verified.png'}
                            alt="Verified icon"
                            width={18}
                            height={8}
                            className="w-5 h-5 md:w-7 md:h-7"
                        />
                        <p className="text-lg md:text-xl">{tutor.isVerified ? 'Verified' : 'N/A'}</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <h2 className="bg-[#131927] text-white tracking-wider capitalize text-lg md:text-xl py-1 px-2 rounded-lg ">{tutor.field}</h2>
                    <div className="flex items-center gap-2 ml-2 whitespace-nowrap">
                        <Image
                            src={'/star.png'}
                            alt="Star"
                            width={8}
                            height={8}
                            className="w-5 h-5 md:w-7 md:h-7"
                        />
                        <p className="text-xl md:text-2xl">{tutor.rating} ({tutor.voteCount})</p>
                    </div>
                    <h2 className="">{"8+"} years</h2>
                </div>

            </div>
        </div>
    )
}

export default TutorInfo
