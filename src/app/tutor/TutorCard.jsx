// import Button from "@/components/Button"
import Image from "next/image"

const TutorCard = ({ user }) => {
    return (
        <div className="flex flex-col bg-white gap-6 items-center border border-[#f3f4f6] rounded-xl py-4">
            <div className="flex items-center justify-start gap-4 w-5/6 py-2">
                <Image
                    src={'/tutor.svg'}
                    className="w-18 h-18 rounded-full border border-black"
                    width={16}
                    height={8}
                    alt="Tutor profile image"
                />
                <div className="flex flex-col items-center gap-2">
                    <div className="flex gap-4 w-full">
                        <h2 className="text-2xl font-bold tracking-wider lead">Angela Olsen</h2>
                        <div className="flex gap-2 items-center text-[#43b75d]">
                            <Image
                                src={'/verified.png'}
                                alt="Verified icon"
                                width={18}
                                height={8}
                                className="w-7 h-7"
                            />
                            <p className="text-xl">Verified</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <h2 className="bg-[#131927] text-white text-xl py-1 px-2 rounded-lg tracking-wider">
                            Mathematics
                        </h2>
                        <div className="flex items-center gap-2 ml-2 flex-wrap">
                            <Image
                                src={'/star.png'}
                                alt="Star"
                                width={18}
                                height={8}
                                className="w-7 h-7"
                            />
                            <p className="text-xl">4.9 (156)</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="flex items-center gap-8">
                <h3 className="text-[#030213] text-xl bg-[#f3f4f6] p-2 capitalize rounded-lg">calculus</h3>
                <h3 className="text-[#030213] text-xl bg-[#f3f4f6] p-2 capitalize rounded-lg">yoruba</h3>
                <h3 className="text-[#030213] text-xl bg-[#f3f4f6] p-2 capitalize rounded-lg">spanish</h3>
                <h3 className="text-[#030213] text-xl bg-[#f3f4f6] p-2 capitalize rounded-lg">albania</h3>
            </div>
            <p
                className="text-[#6d717f] text-xl max-w-5/6 tracking-wide"
            >
                PhD in Mathematics with extensive teaching experience in calculus, algebra, and statistics.
            </p>
            <div className="flex gap-6 flex-col w-5/6 pr-4">

                <div className="flex items-center justify-between ">

                    <div className="flex items-center">
                        <Image
                            src={'/clock.png'}
                            alt="clock"
                            className="w-6 h-6 pr-1"
                            width={16}
                            height={10}
                        />

                        <p className="text-[#4a5565] text-xl tracking-wide">Mon-Fri, 2-6 PM</p>
                    </div>

                    <h2 className="text-[#329321] text-xl">$45/hr</h2>
                </div>

                <div className="flex flex-col gap-2 md:flex-row items-center justify-between pb-2">
                    <button
                        type="submit"
                        aria-label="Search for Tutors"
                        className={`bg-white font-black w-full text-[#329321] rounded-lg py-2 px-10 text-[16px] border-2 border-[#329321]`}
                    >
                        View Profile
                    </button>
                    <button
                        type="submit"
                        aria-label="Search for Tutors"
                        className={`bg-[#329321] font-black w-full text-[#fff] rounded-lg py-2 px-10 text-[16px] border-2 border-[#329321]`}
                    >
                        Book Session
                    </button>
                    {/* <Button text={'View Profile'} isPrimary={false} /> */}
                    {/* <Button text={'Book Session'} isPrimary={true} /> */}
                </div>
            </div>
        </div>
    )
}

export default TutorCard
