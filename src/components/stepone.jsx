"use client"
import Link from "next/link"
import useFormTool from "@/hooks/useFormTool"
function StepOnePage() {
    const {
        name, email, phoneNumber,
        handleInputChange, handleInputEmailChange, handleInputPhoneNumberChange,
        isFieldNameValid, isFieldEmailValid, isFieldPhoneNumberValid,
        handleStep,
    } = useFormTool()

    return (
        <div className="container">
            <Link href="/thanks">thanks</Link>

            <div>
                <h1>Personal info</h1>
                <p className="text-cool_gray mt-2">Please provide your name, email address, and phone number.</p>

                <div className="mt-7">
                    <form
                        autoComplete="off"
                        action="">
                        <ul>
                            <li className="flex flex-col">
                                <div className="flex justify-between">
                                    <label htmlFor="name" className="text-sm">Name</label>
                                    <p className={`${!isFieldNameValid ? "text-strawberr_red font-bold" : "hidden"} text-sm`}>This field is required</p>
                                </div>

                                <input
                                    className={`${!isFieldNameValid ? "border-2 border-strawberr_red focus:border-strawberr_red focus:outline-none" : ""}`}
                                    value={name} onChange={(e) => handleInputChange(e.target.value)} type="text" id="name" placeholder="e.g. Jane Doe" />
                            </li>
                            <li className="flex flex-col">
                                <div className="flex justify-between">
                                    <label htmlFor="email" className="text-sm">Email Address</label>
                                    <p className={`${!isFieldEmailValid ? "text-strawberr_red font-bold" : "hidden"} text-sm`}>This field is required</p>
                                </div>

                                <input
                                    className={`${!isFieldEmailValid ? "border-2 border-strawberr_red focus:border-strawberr_red focus:outline-none" : ""}`}
                                    type="email" id="email" placeholder="e.g. JaneDoe@domain.com"
                                    value={email} onChange={(e) => handleInputEmailChange(e.target.value)}
                                />
                            </li>

                            <li className="flex flex-col">
                                <div className="flex justify-between">
                                    <label htmlFor="phone" className="text-sm">Phone Number</label>
                                    <p className={`${!isFieldPhoneNumberValid ? "text-strawberr_red font-bold" : "hidden"} text-sm`}>This field is required</p>
                                </div>

                                <input
                                    className={`${!isFieldPhoneNumberValid ? "border-2 border-strawberr_red focus:border-strawberr_red focus:outline-none" : ""}`}
                                    type="text" id="phone" placeholder="e.g. +1 234 567 890"
                                    value={phoneNumber} onChange={(e) => handleInputPhoneNumberChange(e.target.value)}
                                    required={true}
                                />
                            </li>
                        </ul>
                    </form>
                </div>

            </div>



            <div className="fixed bottom-0 right-0 left-0 bg-white py-5 z-10 p-5 md:p-0 w-full md:static flex flex-col items-end">
                <button
                    type="button"
                    disabled={(isFieldEmailValid && isFieldNameValid && isFieldPhoneNumberValid && name.length != 0 && email.length != 0 && phoneNumber != 0) ? false : true}
                    onClick={(e) => handleStep(e, "/select-a-plan")}
                >
                    Next Step
                </button>
            </div>



        </div>
    )
}

export default StepOnePage