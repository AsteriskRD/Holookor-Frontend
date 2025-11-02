import TutorBox from '@/components/tutor-page/TutorBox';
import TutorContent from '@/components/tutor-page/TutorContent';
import TutorHeader from '@/components/tutor-page/TutorHeader';
import { mockTutors } from '@/data/tutorMockData';
import TutorCard from '../TutorCard';
// import TutorInfo from '@/components/tutor-page/TutorInfo';

const TutorProfile = async ({ params }) => {

    const tut = (await params).tutorId;

    return (
        <TutorBox>
            <TutorHeader title={"Tutor Profile"} info={"View your tutors profile."} />
            <TutorContent>

                <div className="flex flex-col gap-4">
                    Tutor {(tut)}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

                </div>
            </TutorContent>
        </TutorBox>
    )
}

export default TutorProfile
