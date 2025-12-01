import { CircleSmall, Star } from "lucide-react"
import Button from "../ui/Button"


const TutorCard = ({ tutor }) => {
    return (
        <div
            className="p-4 md:w-[420px] lg:w-[540px] sm:w-fit sm:p-6 rounded-lg mb-4 sm:mb-8 border transition-shadow hover:shadow-md space-y-4"
            style={{ borderColor: "#e5e7ea", backgroundColor: "#ffffff" }}
        >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
                {/* Avatar - Smaller on mobile, larger on desktop */}
                <div
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl flex-shrink-0"
                    style={{ backgroundColor: "#394050" }}
                >
                    {tutor.initials}
                </div>

                {/* Info - Center aligned on mobile, left aligned on desktop */}
                <div className="flex-1 w-full text-center sm:text-left">
                    <div className="flex items-center justify-center md:justify-between sm:items-center gap-4 mb-2">
                        <h3 className="text-base lg:text-lg font-semibold" style={{ color: "#394050" }}>
                            {tutor.tutorName}
                        </h3>
                        <div className="flex items-center gap-1 pr-4">
                            <Star size={24} style={{ color: "#fdc700", fill: "#fdc700" }} />
                            <span className="text-sm sm:text-lg font-semibold" style={{ color: "#394050" }}>
                                {tutor.rating}
                            </span>
                            <span className="text-sm sm:text-lg text-[#394050]">
                                ({tutor.voteCount})
                            </span>
                        </div>

                    </div>

                    {/* Tags and Rating - Stack on mobile, inline on desktop */}
                    <div className="flex justify-center gap-6 md:justify-between items-center md:gap-2">

                        <div className="flex items-center gap-1">
                            <CircleSmall
                                size={22}
                                style={{ color: `${tutor.isAvailable ? "#3da755" : "#dbdad9"}`, fill: `${tutor.isAvailable ? "#3da755" : "#dbdad9"}` }}
                            />
                            <span className={`text-[16px] font-medium ${tutor.isAvailable ? "#" : "line-through italic"}`} style={{ color: "#4A5565" }}>
                                Available
                            </span>
                        </div>
                        <span className="text-[#22c55e] font-semibold text-base md:text-lg sm:mr-3">
                            ${tutor.rate}/hr
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between mb-1 mx-1 sm:max-w-[492px]">
                {tutor.courses.map((course, index) => (
                    <span
                        key={index}
                        className="bg-[#f3f4f6] text-center whitespace-nowrap w-[87.5px] text-[#394050] text-sm sm:text-base px-2 py-1 rounded-sm border border-[#e5e7ea]"
                    >
                        {course}
                    </span>
                ))}
            </div>
            <div className="flex sm:max-w-[492px] md:flex-col lg:flex-row sm:items-center sm:justify-between gap-2 lg:gap-6 pt-2">
                {/* <Button className="w-full border border-[#16a34a] text-[#329321] bg-white hover:bg-[#167406] hover:text-[#fff]  font-semibold px-4 py-2 rounded-lg transition duration-300" size="sm">
                    View Profile
                </Button> */}
                <button className="w-full border border-[#16a34a] text-[#329321] bg-white hover:bg-[#0b7030] hover:text-[#fff]  font-semibold px-4 py-2 rounded-lg transition duration-300">View Profile</button>
                {/* <Button className="w-full border border-[#16a34a] bg-[#22c55e] hover:bg-[#156407] text-white font-semibold px-4 py-2 rounded-lg transition duration-300" size="sm">
                    Book Session
                </Button> */}
                <button className="w-full border border-[#16a34a] bg-[#0b7030] hover:bg-[#105305] text-white font-semibold px-4 py-2 rounded-lg transition duration-300">Book Session</button>
            </div>
        </div>
    )
}

export default TutorCard
