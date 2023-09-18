"use client"
import useFormTool from "@/hooks/useFormTool"

function StepThree() {

    const { handleStep, onlineServices, largerStorage, custProfile, handleOnlineServicesCheckbox, handleLargerStorageCheckbox, handleCustProfileCheckbox } = useFormTool()
    return (
        <div className="container">
            <div>
                <h1>Pick Add-ons</h1>
                <p className="text-cool_gray mt-2">Add-ons help enhance your gaming experience.</p>
            </div>

            <div className="grid grid-rows-3 gap-5">
                <div className="flex flex-row justify-between items-center plan-box ">
                    <div className="flex flex-row">
                        <input className="w-5 mr-5" type="checkbox"
                            onClick={handleOnlineServicesCheckbox}
                            checked={onlineServices}
                        />
                        <div>
                            <p className="text-marine_blue font-bold">Online Services</p>
                            <p className="text-cool_gray font-light text-sm">Access to multiplayer games</p>
                        </div>
                    </div>
                    <p className="text-purplish_blue font-medium text-sm">+10$/yr</p>
                </div>

                <div className="flex flex-row justify-between items-center plan-box">
                    <div className="flex flex-row">
                        <input className="w-5 mr-5" type="checkbox"
                            onClick={handleLargerStorageCheckbox}
                            checked={largerStorage}
                        />
                        <div>
                            <p className="text-marine_blue font-bold">Larger storage</p>
                            <p className="text-cool_gray font-light text-sm">Access to multiplayer games</p>
                        </div>
                    </div>
                    <p className="text-purplish_blue font-medium text-sm">+20$/yr</p>
                </div>

                <div className="flex flex-row justify-between items-center plan-box">
                    <div className="flex flex-row">
                        <input className="w-5 mr-5" type="checkbox"
                            onClick={handleCustProfileCheckbox}
                            checked={custProfile}
                        />
                        <div>
                            <p className="text-marine_blue font-bold">Customizable profile</p>
                            <p className="text-cool_gray font-light text-sm">Access to multiplayer games</p>
                        </div>
                    </div>
                    <p className="text-purplish_blue font-medium text-sm">+20$/yr</p>
                </div>
            </div>

            <div className="flex flex-row justify-between">
                <button
                    onClick={() => handleStep("/select-a-plan")}
                    className="text-cool_gray hover:text-marine_blue"
                >
                    Go Back
                </button>

                <button
                    onClick={() => handleStep("/summary")}
                    type="button"
                >
                    Next Step
                </button>
            </div>
        </div>
    )
}

export default StepThree