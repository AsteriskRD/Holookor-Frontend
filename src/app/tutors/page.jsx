import TutorCard from "./TutorCard";
import { mockTutors } from "@/data/tutorMockData";
import TutorHeader from "@/components/tutor-page/TutorHeader";
import TutorBox from "@/components/tutor-page/TutorBox";
import TutorContent from "@/components/tutor-page/TutorContent";

const Tutor = () => {
    return (
        <>
            <TutorBox>

                {/* Top Div */}
                <TutorHeader
                    title={"Find your perfect tutor"}
                    info={"Browse verified educators and book your next session."}
                    option={true}
                />

                {/* Results Div */}
                <TutorContent>

                    <h2 className="text-[##394050] text-lg md:text-xl font-semibold">
                        Results (23)
                    </h2>

                    <div className="flex items-center justify-center">

                        <div className="grid grid-cols-1 w-full justify-items-center md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12">
                            {mockTutors?.map((tutor, index) => (
                                <TutorCard tutor={tutor} key={index} id={index} />
                            ))}
                        </div>
                    </div>
                </TutorContent>
            </TutorBox>
        </>
    );
};

export default Tutor;
