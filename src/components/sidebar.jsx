"use client"
import useFormTool from "@/hooks/useFormTool"
import { usePathname } from "next/navigation"

function Sidebar() {
    const pathname = usePathname()
    const { handleStep } = useFormTool()
    return (
        <aside
            className="absolute -z-1 md:z-0 md:static flex flex-row md:flex-col justify-center md:justify-start items-start bg-sidebar-mobile md:bg-sidebar-desktop bg-repeat-y bg-cover h-1/4 md:h-full w-full md:w-2/6 py-10 object-fill md:rounded-xl top-0 right-0">

            {/* step 1 */}
            <div className="flex items-center md:py-5 px-2 md:px-5 md:mt-5 ml-2">
                <div
                    className={`flex justify-center items-center w-10 h-10 rounded-full border-2 ${pathname === "/" ? "border-light_blue bg-light_blue  text-marine_blue" : "border-white bg-transparent text-white"} hover:border-light_blue hover:bg-light_blue hover:text-marine_blue hover:cursor-pointer`}
                // onClick={() => handleStep("/")}
                >
                    <p className="uppercase font-bold">1</p>
                </div>
                <div className="hidden md:block ml-3">
                    <h3 className="uppercase font-light text-cool_gray">step 1</h3>
                    <h2 className="uppercase text-white font-bold">Your info</h2>
                </div>
            </div>
            {/* step 2 */}
            <div className="flex items-center md:py-5 px-2 md:px-5 ml-2">
                <div
                    className={`flex justify-center items-center w-10 h-10 rounded-full border-2 ${pathname === "/select-a-plan" ? "border-light_blue bg-light_blue  text-marine_blue" : "border-white bg-transparent text-white"} hover:border-light_blue hover:bg-light_blue hover:text-marine_blue hover:cursor-pointer`}
                // onClick={() => handleStep("/select-a-plan")}
                >
                    <p className="uppercase font-bold">2</p>
                </div>
                <div className="hidden md:block  ml-3">
                    <h3 className="uppercase font-light text-cool_gray">step 2</h3>
                    <h2 className="uppercase text-white font-bold">select plan</h2>
                </div>
            </div>
            {/* step 3*/}
            <div className="flex items-center md:py-5 px-2 md:px-5 ml-2">
                <div
                    className={`flex justify-center items-center w-10 h-10 rounded-full border-2 ${pathname === "/add-ons" ? "border-light_blue bg-light_blue  text-marine_blue" : "border-white bg-transparent text-white"} hover:border-light_blue hover:bg-light_blue hover:text-marine_blue hover:cursor-pointer`}
                // onClick={() => handleStep("/add-ons")}
                >
                    <p className="uppercase font-bold">3</p>
                </div>
                <div className="hidden md:block ml-3">
                    <h3 className="uppercase font-light text-cool_gray">step 3</h3>
                    <h2 className="uppercase text-white font-bold">add-ons</h2>
                </div>
            </div>
            {/* step 4 */}
            <div className="flex items-center md:py-5 px-2 md:px-5 ml-2">
                <div
                    className={`flex justify-center items-center w-10 h-10 rounded-full border-2 ${pathname === "/summary" ? "border-light_blue bg-light_blue  text-marine_blue" : "border-white bg-transparent text-white"} hover:border-light_blue hover:bg-light_blue hover:text-marine_blue hover:cursor-pointer`}
                // onClick={() => handleStep("/summary")}
                >
                    <p className="uppercase font-bold">4</p>
                </div>
                <div className="hidden md:block ml-3">
                    <h3 className="uppercase font-light text-cool_gray">step 4</h3>
                    <h2 className="uppercase text-white font-bold">Summary</h2>
                </div>
            </div>



        </aside>
    )
}

export default Sidebar