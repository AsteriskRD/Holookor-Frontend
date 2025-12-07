import Image from "next/image";
import TutorCard from "./TutorCard";
import NavBar from "@/components/navigation/NavBar";
import { mockStore } from "@/data/dashboardMockData";
import { mockTutors } from "@/data/tutorMockData";
import Button from "@/components/ui/button";

const dashboardData = {
    user: mockStore.user,
    notifications: mockStore.notifications,
};

const { user, notifications } = dashboardData;

const Tutor = () => {
  return (
    <>
      <NavBar user={user} notificationCount={notifications.unreadCount} />
      <main className="min-h-screen bg-[#ffff] py-8 px-2 sm:px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header and Search Bar */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3 mb-1">
                <Image
                  src="/arrow-left.png"
                  width={18}
                  height={18}
                  className="w-5 h-5 cursor-pointer"
                  alt="Left arrow"
                />
                <h2 className="text-[#394050] text-2xl font-semibold">
                  Find Your Perfect Tutor
                </h2>
              </div>
              <p className="text-[#6D717F] text-sm">
                Browse verified educators and book your next session.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center w-full md:w-auto bg-white rounded-lg p-3 shadow border border-[#f3f4f6]">
              <div className="flex items-center gap-2 bg-white border border-[#E5E7EA] focus-within:border-[#43b75d] focus-within:shadow-sm focus-within:shadow-[#43b75d] transition-shadow duration-200 px-3 py-2 rounded-lg w-full sm:w-72">
                <Image
                  src="/search.svg"
                  alt="Search Icon"
                  className="w-5 h-5"
                  width={20}
                  height={20}
                />
                <input
                  type="text"
                  id="search"
                  placeholder="Search"
                  aria-label="Search for Tutors"
                  className="outline-none w-full text-[#131927] bg-transparent"
                />
              </div>
              <select
                name="course"
                id="course"
                className="rounded-lg px-3 py-2 w-full sm:w-32 focus:outline-[#43b75d] focus:ring-2 focus:ring-[#43b75d] cursor-pointer bg-[#f3f4f6] text-sm"
              >
                <option value="">All Levels</option>
                <option value="">Beginner</option>
                <option value="">Intermediate</option>
                <option value="">Advanced</option>
              </select>
              <Button className="w-full sm:w-auto bg-[#22c55e] hover:bg-[#16a34a] text-white px-6 py-2.5 rounded-lg font-semibold shadow-none">
                Search
              </Button>
            </form>
          </div>

          {/* Results Section */}
          <div className="bg-white border border-[#f3f4f6] rounded-2xl p-6">
            <h2 className="text-[#394050] text-lg md:text-xl font-semibold mb-4">
              Results ({mockTutors?.length ?? 0})
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockTutors?.map((tutor, index) => (
                <TutorCard tutor={tutor} key={index} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Tutor;
