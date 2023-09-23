"use client";
import { createContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation";
// helpers
import { ValidateString, ValidateEmail, ValidatePhoneNumber } from "../../helpers/validateFields"

const FormContext = createContext()
function FormProvider({ children }) {
    const router = useRouter()

    const [name, setName] = useState("")
    const [isFieldNameValid, setIsFieldNameValid] = useState(true)

    const [email, setEmail] = useState("")
    const [isFieldEmailValid, setIsFieldEmailValid] = useState(true)

    const [phoneNumber, setPhoneNumber] = useState("")
    const [isFieldPhoneNumberValid, setIsFieldPhoneNumberValid] = useState(true)

    const [toggleState, setToggleState] = useState(false)
    const [subscriptionValue, setSubscriptionValue] = useState("yearly")

    const [planChecked, setPlanChecked] = useState([false, false, false])

    const [onlineServices, setOnlineServices] = useState(false)
    const [largerStorage, setLargerStorage] = useState(false)
    const [custProfile, setCustProfile] = useState(false)

    const [cart, setCart] = useState({planName: "", planPrice: 0, subscription: "Monthly"})

    const handleStep = (path) => {
        router.push(path)
    }

    const handleInputChange = (inputValue) => {
        setName(inputValue)
        setIsFieldNameValid(ValidateString(inputValue, /^ *[A-Za-z]+( [A-Za-z]+)* *$/))
    }

    const handleInputEmailChange = (inputValue) => {
        const emailRegex = /^(?!.*\s)([a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,})$/;
        setEmail(inputValue)
        setIsFieldEmailValid(ValidateEmail(inputValue, emailRegex))
    }

    const handleInputPhoneNumberChange = (inputValue) => {
        setPhoneNumber(inputValue)
        setIsFieldPhoneNumberValid(ValidatePhoneNumber(inputValue, /^\+?\d+$/))
    }

    const toggleStateHandler = () => {
        setToggleState(!toggleState)
        if (toggleState) {
            setCart({ ...cart, subscription: "Monthly" })
        }
        else {
            setCart({ ...cart, subscription: "Yearly" })
        }
    }

    const planHandler = (planPosition, planName, planPrice) => {
        setCart({ ...cart, planName: planName, planPrice: planPrice })
        const newPlan = planChecked.map((value, index) => index === planPosition ? !value : false)
        setPlanChecked(newPlan)
    }

    const handleOnlineServicesCheckbox = () => {
        setOnlineServices(!onlineServices)

    }

    const handleLargerStorageCheckbox = () => {
        setLargerStorage(!largerStorage)
    }

    const handleCustProfileCheckbox = () => {
        setCustProfile(!custProfile)
    }


    return (
        <FormContext.Provider value={{
            handleStep,
            handleInputChange,
            handleInputEmailChange,
            handleInputPhoneNumberChange,
            toggleStateHandler,
            planHandler,
            handleOnlineServicesCheckbox,
            handleLargerStorageCheckbox,
            handleCustProfileCheckbox,
            name,
            isFieldNameValid,
            email,
            isFieldEmailValid,
            phoneNumber,
            isFieldPhoneNumberValid,
            toggleState,
            subscriptionValue,
            onlineServices,
            largerStorage,
            custProfile,
            planChecked,
            cart,
        }}>
            {children}
        </FormContext.Provider>
    )
}

export {
    FormProvider
}

export default FormContext