
const TutorBox = ({ children }) => {
    return (
        <section className="bg-[#f3fff1]">
            <div className="flex flex-col space-y-8 container max-w-fit items-center justify-center mx-auto">
                {children}
            </div>
        </section>
    )
}

export default TutorBox
