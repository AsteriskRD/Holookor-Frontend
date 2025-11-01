// import Button from "@/components/Button"
import Button from "@/components/ui/Button";
import { Clock } from "lucide-react";
import Image from "next/image";

const TutorCard = ({ tutor }) => {
    return (
        <div className="flex flex-col bg-white gap-6 items-center border border-[#f3f4f6] rounded-xl p-3">
            <div className="mt-4 md:mt-2 flex w-full px-6 ml-4 items-center justify-around gap-2 md:gap-4 py-2">
                <Image
                    src={tutor.tutorImg}
                    className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full border border-black"
                    width={36}
                    height={36}
                    alt="Tutor profile image"
                />
                <div className="flex flex-col items-center gap-2">
                    <div className="flex gap-4 w-full">
                        <h2 className="text-xl md:text-2xl capitalize font-bold tracking-wider whitespace-nowrap">
                            {tutor.tutorNames}
                        </h2>
                        <div className="flex gap-2 items-center text-[#43b75d]">
                            <Image
                                src={"/verified.png"}
                                alt="Verified icon"
                                width={18}
                                height={8}
                                className="w-5 h-5 md:w-7 md:h-7"
                            />
                            <p className="text-lg md:text-xl">
                                {tutor.isVerified ? "Verified" : "N/A"}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <h2 className="bg-[#131927] text-white tracking-wider capitalize text-lg md:text-xl py-1 px-2 rounded-lg ">
                            {tutor.field}
                        </h2>
                        <div className="flex items-center gap-2 ml-2 whitespace-nowrap">
                            <Image
                                src={"/star.png"}
                                alt="Star"
                                width={8}
                                height={8}
                                className="w-5 h-5 md:w-7 md:h-7"
                            />
                            <p className="text-xl md:text-2xl">
                                {tutor.rating} ({tutor.voteCount})
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center flex-wrap gap-2 md:gap-4">
                {tutor.courses.map((course, index) => (
                    <h3
                        className="text-[#030213] text-lg md:text-xl capitalize bg-[#f3f4f6] p-2 rounded-lg"
                        key={index}
                    >
                        {course}
                    </h3>
                ))}
            </div>
            <p className="text-[#6d717f] mx-2 sm:max-w-[420px] md:max-w-[480px] text-lg md:text-xl max-w-5/6 tracking-wide">
                {tutor.experience?.split("").length > 80
                    ? `${tutor.experience.slice(0, 80)}...`
                    : tutor.experience}
            </p>
            <div className="flex gap-6 text-lg md:text-xl flex-col w-full pr-4">
                <div className="flex items-center justify-between px-6">
                    <div className="flex gap-1 items-center text-[var(--color-muted-foreground)]">
                        <Clock className="w-5 md:w-6 h-5 md:h-6" />

                        <p className=" tracking-wide">
                            {tutor.availability}, {tutor.timeHr}
                        </p>
                    </div>

                    <h2 className="text-[#329321]">${tutor.rate}/hr</h2>
                </div>
            </div>

            <div className="flex w-full flex-col gap-2 md:gap-8 md:flex-row items-center pb-2">
                {/* <Button text={'View Profile'} isPrimary={false} />
                    <Button text={'Book Session'} isPrimary={true} /> */}
                <Button className="flex w-full items-center gap-2 bg-white text-gray-400 border-2 border-[#16a34a] px-6 py-2.5 rounded-lg hover:bg-green-700 hover:text-white transition-colors ">
                    <span>View Profile</span>
                </Button>
                <Button className="flex w-full items-center gap-2 bg-[var(--color-primary-600)] text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition-colors border-2 border-[#16a34a]">
                    <span>Book Session</span>
                </Button>
            </div>
        </div>
    );
};

export default TutorCard;

// primary: 'bg-[var(--color-primary-600)] text-white border-2 border-[#16a34a] hover:bg-[var(--color-primary-700)] active:bg-[var(--color-primary-800)] focus:ring-[var(--color-primary-500)]',
//     secondary: 'bg-white text-[#16a34a] border-2 border-[#16a34a] hover:bg-[var(--color-neutral-200)] active:bg-[var(--color-neutral-300)] focus:ring-[var(--color-neutral-400)] hover:text-white',
//     variant = "secondary"
