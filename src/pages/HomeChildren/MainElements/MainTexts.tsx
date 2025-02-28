import useMaps from "../../../features/NaverMaps/useMaps";

const MainTexts = () => {
    const { setIsMapOpen } = useMaps();

    return (
        <>
            <span className="hidden text-sm c_md:text-lg c_sm:block text-black dark:text-white p-2">WELCOME TO THE WORD CHURCH!</span>
            <span className="block text-sm c_md:text-lg c_sm:hidden text-black dark:text-white p-2">WELCOME TO WORD CHURCH!</span>
            <p className="text-black dark:text-white p-2 text-4xl twc_main_text_md:text-5xl twc_main_text_xl:text-6xl font-semibold transition-all duration-500 ease-in-out hover:scale-105">The Word Church</p>
            <p className="text-black dark:text-white p-2 text-2xl c_md:text-4xl pt-0">더워드교회</p>
            <p className="text-black dark:text-white p-2 text-sm c_md:text-lg">에베소서 2장 20절</p>
            <div>
                <button onClick={() => setIsMapOpen(true)}>
                    <p className="dark:text-white p-2 text-sm c_md:text-xl dark:hover:bg-gray-500 hover:bg-gray-200 hover:scale-105 rounded-lg transition-all duration-500 ease-in-out">찾아오시는 길</p>
                </button>
            </div>
        </>
    )
}

export default MainTexts;