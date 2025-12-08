// import Button from "@/components/Button"

import Button from "@/components/ui/Button";
import { Clock } from "lucide-react";
import Image from "next/image";

const TutorCard = ({ tutor }) => {
  return (
    <div className="w-full bg-white border border-[#e5e7ea] rounded-xl shadow-sm p-5 flex flex-col gap-3 transition hover:shadow-md">
      <div className="flex items-center md:gap-6 mb-2">
        <Image
          src={tutor.tutorImg}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#d1d5db] object-cover bg-gray-100"
          width={40}
          height={40}
          alt="Tutor profile image"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold text-[#222] truncate">
              {tutor.tutorNames}
            </h2>
            {tutor.isVerified && (
              <span className="flex items-center gap-1 text-green-600 text-xs font-medium">
                <Image
                  src="/verified.png"
                  alt="Verified"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
                Verified
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className="bg-[#131927] text-white text-xs px-2 py-1 rounded font-medium">
              {tutor.field}
            </span>
            <span className="flex items-center gap-1 text-yellow-600 text-xs font-medium">
              <Image
                src="/star.png"
                alt="Star"
                width={14}
                height={14}
                className="w-4 h-4"
              />
              {tutor.rating}{" "}
              <span className="text-[#6d717f]">({tutor.voteCount})</span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-1">
        {tutor.courses.map((course, index) => (
          <span
            key={index}
            className="bg-[#f3f4f6] text-[#222] text-xs px-2 py-1 rounded-lg border border-[#e5e7ea]"
          >
            {course}
          </span>
        ))}
      </div>
      {/* <p className="text-[#6d717f] text-xs mb-2 min-h-[40px]">
        {tutor.experience?.length > 120
          ? `${tutor.experience.slice(0, 120)}...`
          : tutor.experience}
      </p> */}
      <div className="flex items-center gap-2 text-xs text-[#6d717f] mb-2">
        <Clock className="w-4 h-4 mr-1" />
        <span>
          {tutor.availability}, {tutor.timeHr}
        </span>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2">
        <span className="text-[#22c55e] font-bold text-base sm:mr-3">
          ${tutor.rate}/hr
        </span>
        <Button className="w-full sm:w-auto border border-[#16a34a] !text-black bg-white hover:bg-[#22c55e] hover:text-white font-semibold px-4 py-2 rounded-lg transition">
          View Profile
        </Button>
        <Button className="w-full sm:w-auto bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold px-4 py-2 rounded-lg transition">
          Book Session
        </Button>
      </div>
    </div>
  );
};

export default TutorCard;


