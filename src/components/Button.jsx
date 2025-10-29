
const Button = ({ text, isPrimary, width }) => {
    return (
        <button
            type="submit"
            aria-label="Search for Tutors"
            className={`${!isPrimary ? 'bg-white text-[#329321]' : 'bg-[#329321] text-white'} rounded-lg py-2 px-6 text-[16px] border border-[#329321] ${width && 'w-full md:w-fit'}`}
        >
            {text}
        </button>
    )
}

export default Button
