"use client"
import useFormTool from "@/hooks/useFormTool"

function StepThree() {

    const { handleStep, toggleState, handleAddOns, addOns } = useFormTool()
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
                            onChange={(e) => handleAddOns(e.target.checked, 0, {name: "Online Services", price: {monthly: 1, yearly: 10}})}
                            checked={addOns[0]}
                        />
                        <div>
                            <p className="text-marine_blue font-bold">Online Services</p>
                            <p className="text-cool_gray font-light text-sm">Access to multiplayer games</p>
                        </div>
                    </div>
                    <p className="text-purplish_blue font-medium text-sm">{`${toggleState ? "10/yr": "1/mo"}`}</p>
                </div>

                <div className="flex flex-row justify-between items-center plan-box">
                    <div className="flex flex-row">
                        <input className="w-5 mr-5" type="checkbox"
                            onChange={(e) => handleAddOns(e.target.checked, 1, {name: "Larger Storage", price: {monthly: 2, yearly: 20}})}
                            checked={addOns[1]}
                        />
                        <div>
                            <p className="text-marine_blue font-bold">Larger storage</p>
                            <p className="text-cool_gray font-light text-sm">Access to multiplayer games</p>
                        </div>
                    </div>
                    <p className="text-purplish_blue font-medium text-sm">{`${toggleState ? "20/yr": "2/mo"}`}</p>
                </div>

                <div className="flex flex-row justify-between items-center plan-box">
                    <div className="flex flex-row">
                        <input className="w-5 mr-5" type="checkbox"
                            onChange={(e) => handleAddOns(e.target.checked, 2, {name: "Customizable Profile", price: {monthly: 2, yearly: 20}})}
                            checked={addOns[2]}
                        />
                        <div>
                            <p className="text-marine_blue font-bold">Customizable profile</p>
                            <p className="text-cool_gray font-light text-sm">Access to multiplayer games</p>
                        </div>
                    </div>
                    <p className="text-purplish_blue font-medium text-sm">{`${toggleState ? "10/yr": "1/mo"}`}</p>
                </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 w-full md:static bg-white py-5 px-5 md:py-0 md:px-0 flex flex-row justify-between">
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