import Image from "next/image";
import TutorCard from "./TutorCard";
import NavBar from "@/components/navigation/NavBar";
import { mockStore } from "@/data/dashboardMockData";
import Button from "./ui/button";
import { mockTutors } from "@/data/tutorMockData";

const dashboardData = {
  user: mockStore.user,
  notifications: mockStore.notifications,
};

const { user, notifications } = dashboardData;

const Tutor = () => {
  return (
    <>
      <NavBar user={user} notificationCount={notifications.unreadCount} />
      <section className="bg-[#f3fff1]">
        <div className="flex flex-col space-y-8 container mx-auto">
          {/* Top Div */}
          <div className="flex items-center flex-col md:flex-row justify-between m-8">
            <div className="">
              <div className="flex items-center gap-4">
                <Image
                  src={"/arrow-left.png"}
                  width={15}
                  height={6}
                  className="w-4 h-4 cursor-pointer"
                  alt="Left arrow"
                />
                <h2 className="text-[#394050] text-2xl font-semibold">
                  Find Your Perfect Tutor
                </h2>
              </div>
              <p className="text-[#6D717F] text-[14px]">
                Browse verified educators and book your next session.
              </p>
            </div>

            <form className=" md:h-12 flex md:flex-row flex-col gap-2 bg-none md:gap-4 items-center md:bg-[#FFFFFF] md:w-fit md:border md:border-[#F3F4F6] rounded-lg p-6 md:pr-2 md:py-9">
              <div className="flex items-center gap-4 bg-white border border-[#E5E7EA] focus-within:border-[#43b75d] focus-within:shadow-sm focus-within:shadow-[#43b75d] transition-shadow duration-200 p-2 w-96 lg:w-fit xl:w-96 rounded-lg">
                <Image
                  src={"/search.svg"}
                  alt="Search Icon"
                  className="w-5 h-5 cursor-pointer"
                  width={4}
                  height={4}
                />
                <label htmlFor="search" className="sr-only">
                  Search for Tutors
                </label>
                <input
                  type="text"
                  id="search"
                  placeholder="Search for anything"
                  aria-label="Search for anything"
                  className="outline-none w-full text-[#131927]"
                />
              </div>
              {/* <select name="" id=""></select> */}
              <div className="flex w-full items-center gap-2 md:gap-4 md:w-fit">
                <label htmlFor="course"></label>
                <select
                  name="course"
                  id="course"
                  className="rounded-lg p-2.5 w-full lg:w-28 focus:outline-[#43b75d] focus:ring-2 focus:ring-[#43b75d] cursor-pointer bg-[#f3f4f6]"
                >
                  <option value="" className="text-[12px]">
                    All Levels
                  </option>
                  <option value="" className="text-[12px]">
                    All Levels
                  </option>
                  <option value="" className="text-[12px]">
                    All Levels
                  </option>
                  <option value="" className="text-[12px]">
                    All Levels
                  </option>
                </select>
                <div className="w-full md:w-fit">
                  {/* <Button text={'Search'} isPrimary={true} width={true} /> */}
                  <Button className="flex items-center w-full gap-2 bg-[var(--color-primary-600)] text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition-colors">
                    <span>Search</span>
                  </Button>
                </div>
              </div>
            </form>
          </div>

          {/* Results Div */}
          <div className="flex flex-col justify-center gap-8 p-6 border border-[#f3f4f6] rounded-xl bg-[#fff] mx-auto">
            <h2 className="text-[##394050] text-lg md:text-xl font-semibold">
              Results (23)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
              {mockTutors?.map((tutor, index) => (
                <TutorCard tutor={tutor} key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tutor;
