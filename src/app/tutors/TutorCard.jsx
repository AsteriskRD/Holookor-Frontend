// import Button from "@/components/Button"
import Button from "@/components/ui/Button";
import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TutorCard = ({ tutor, id }) => {
    return (
        <div className="flex flex-col bg-white gap-6 max-w-[340px] sm:max-w-[420px] xl:min-w-[450px] sm:pl-6 items-start border border-[#f3f4f6] rounded-xl p-3 transition-shadow hover:shadow-md">
            <div className="mt-4 md:mt-2 flex w-full px-3 items-center gap-2 md:gap-4 py-2">
                <Image
                    src={tutor.tutorImg}
                    className="w-12 h-12 md:w-[56px] md:h-[56px] rounded-full border border-black"
                    width={64}
                    height={64}
                    alt="Tutor profile image"
                />
                <div className="flex flex-col items-center gap-2">
                    <div className="flex gap-4 w-full">
                        <h2 className="text-[16px] md:text-[18px] capitalize font-bold tracking-wider whitespace-nowrap">
                            {tutor.tutorNames}
                        </h2>
                        <div className="flex gap-2 items-center text-[#43b75d]">
                            <Image
                                src={"/verified.png"}
                                alt="Verified icon"
                                width={12}
                                height={8}
                                className="w-4 h-4 md:w-5 md:h-5"
                            />
                            <p className="text-[12px] md:text-[14px]">
                                {tutor.isVerified ? "Verified" : "N/A"}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <h2 className="bg-[#131927] text-white tracking-wider capitalize text-sm md:text-[16px] py-1 px-2 rounded-sm">
                            {tutor.field}
                        </h2>
                        <div className="flex items-center gap-2 ml-2 whitespace-nowrap">
                            <Image
                                src={"/star.png"}
                                alt="Star"
                                width={8}
                                height={8}
                                className="w-3 h-3 md:w-6 md:h-6"
                            />
                            <p className="text-[14px] md:text-[16px]">
                                {tutor.rating} ({tutor.voteCount})
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center w-full justify-center flex-wrap gap-6">
                {tutor.courses.map((course, index) => (
                    <h3
                        className="text-[#030213] text-[12px] md:text-[14px] capitalize bg-[#f3f4f6] p-2 rounded-sm"
                        key={index}
                    >
                        {course}
                    </h3>
                ))}
            </div>
            <p className="text-[#6d717f] sm:max-w-[420px] md:max-w-[320px] pl-4 text-sm tracking-wide">
                {tutor.experience?.split("").length > 70
                    ? `${tutor.experience.slice(0, 70)}...`
                    : tutor.experience}
            </p>
            <div className="flex gap-6 text-[14px] flex-col w-full pr-4">
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

            <div className="flex w-full px-2.5 flex-col gap-2 md:gap-8 md:flex-row items-center pb-2">
                <Link href={`/tutors/${id}`} className="w-full">
                    <Button className="flex text-sm w-full items-center gap-2 bg-white text-[#16a34a] border-2 border-[#16a34a] py-2 px-1 rounded-lg hover:bg-green-700 hover:text-white transition-colors"
                        size="bmd"
                        variant=""
                    >
                        <span>View Profile</span>
                    </Button>
                </Link>
                <Link href={"/"} className="w-full">
                    <Button className="flex text-sm w-full items-center gap-2 bg-[var(--color-primary-600)] text-white py-2 px-1 rounded-lg hover:bg-green-700 transition-colors border-2 border-[#16a34a]"
                        size="bmd"
                    >
                        <span>Book Session</span>
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default TutorCard;