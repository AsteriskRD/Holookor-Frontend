import Image from "next/image"
import Button from "../ui/Button"

const TutorHeader = ({
    title,
    info,
    option
}) => {
    return (
        <div className="flex items-center w-full lg:h-[86px] flex-col lg:flex-row justify-between m-8 ml-0 mt-1">
            <div className="space-y-2">
                <div className="flex items-center gap-4">
                    <Image
                        src={'/arrow-left.png'}
                        width={15}
                        height={6}
                        className="w-4 h-4 cursor-pointer"
                        alt="Left arrow"
                    />
                    <h2 className="text-[#394050] text-[18px] md:text-2xl font-semibold capitalize">{title}</h2>
                </div>
                <p
                    className="text-[#6D717F] text-[12px] md:text-[14px]"
                >{info}</p>
            </div>

            <form
                className=" md:h-full flex md:flex-row flex-col gap-2 bg-none md:gap-4 items-center md:bg-[#FFFFFF] md:w-fit rounded-lg p-6 md:pr-2 md:py-9"
            >
                <div className="flex items-center gap-4 bg-white border border-[#E5E7EA]  focus-within:ring-2 focus-within:ring-[#43b75d] transition-shadow duration-200 py-3 px-2 w-96 lg:w-fit xl:w-96 rounded-lg hover:shadow-sm hover:shadow-[#43b75d]">
                    <Image
                        src={'/search.svg'}
                        alt="Search Icon"
                        className="w-5 h-5 cursor-pointer"
                        width={4}
                        height={4}
                    />
                    <label
                        htmlFor="search"
                        className="sr-only"
                    >Search for Tutors
                    </label>
                    <input
                        type="text"
                        id="search"
                        placeholder="Search..."
                        aria-label="Search for anything"
                        className="outline-none w-full text-[#131927]"
                    />
                </div>

                <div className="flex w-full items-center gap-2 md:gap-4 md:w-fit">

                    <label htmlFor="course"></label>

                    {
                        option &&
                        <select
                            name="course"
                            id="course"
                            className="rounded-lg py-3 px-3 w-full lg:w-32 focus:outline-[#43b75d] focus:ring-2 focus:ring-[#43b75d] cursor-pointer bg-[#f3f4f6] text-[14px]"
                        >
                            <option value="">All Levels</option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advance</option>
                        </select>
                    }

                    <div className="w-full md:w-fit">
                        {/* <Button text={'Search'} isPrimary={true} width={true} /> */}
                        <Button
                            className="flex items-center w-full gap-2 bg-[var(--color-primary-600)] text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition-colors"
                            type="submit"
                        >
                            <span>Search</span>
                        </Button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default TutorHeader
