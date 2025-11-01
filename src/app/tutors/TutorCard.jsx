// import Button from "@/components/Button"

import Button from "@/components/ui/Button";
import { Clock } from "lucide-react";
import Image from "next/image";

const TutorCard = ({ tutor }) => {
  return (
    <div className="w-full flex flex-col bg-white gap-4 items-stretch border border-[#f3f4f6] rounded-xl p-3 sm:p-4">
      <div className="flex w-full items-start md:items-center gap-4">
        <Image
          src={tutor.tutorImg}
          className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full border border-black object-cover"
          width={72}
          height={72}
          alt="Tutor profile image"
        />
        <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="min-w-0">
            <h2 className="text-base md:text-2xl capitalize font-bold tracking-wider truncate">
              {tutor.tutorNames}
            </h2>
            <p className="text-sm text-[var(--color-muted-foreground)] mt-1">
              {tutor.field}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex gap-2 items-center text-[#43b75d]">
              <Image
                src={"/verified.png"}
                alt="Verified icon"
                width={18}
                height={8}
                className="w-5 h-5 md:w-6 md:h-6"
              />
              <p className="text-sm md:text-base">
                {tutor.isVerified ? "Verified" : "N/A"}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={"/star.png"}
                alt="Star"
                width={16}
                height={16}
                className="w-5 h-5 md:w-6 md:h-6"
              />
              <p className="text-sm md:text-base">
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
      <p className="text-[#6d717f] text-sm tracking-wide">
        {tutor.experience?.length > 120
          ? `${tutor.experience.slice(0, 120)}...`
          : tutor.experience}
      </p>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex items-center gap-4 text-[var(--color-muted-foreground)]">
          <Clock className="w-5 md:w-6 h-5 md:h-6" />
          <p className="text-sm md:text-base">
            {tutor.availability}, {tutor.timeHr}
          </p>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <h2 className="text-[#329321] mr-4">${tutor.rate}/hr</h2>
          <Button className="flex-1 md:flex-none w-full md:w-auto bg-white text-gray-600 border-2 border-[#16a34a] px-4 py-2 rounded-lg hover:bg-green-700 hover:text-white transition-colors">
            <span>View Profile</span>
          </Button>
          <Button className="flex-1 md:flex-none w-full md:w-auto bg-[var(--color-primary-600)] text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors border-2 border-[#16a34a]">
            <span>Book Session</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;

// primary: 'bg-[var(--color-primary-600)] text-white border-2 border-[#16a34a] hover:bg-[var(--color-primary-700)] active:bg-[var(--color-primary-800)] focus:ring-[var(--color-primary-500)]',
//     secondary: 'bg-white text-[#16a34a] border-2 border-[#16a34a] hover:bg-[var(--color-neutral-200)] active:bg-[var(--color-neutral-300)] focus:ring-[var(--color-neutral-400)] hover:text-white',
//     variant = "secondary"
