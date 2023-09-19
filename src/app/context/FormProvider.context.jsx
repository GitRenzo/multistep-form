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

    const [arcade, setArcade] = useState(false)
    const [advanced, setAdvanced] = useState(false)
    const [pro, setPro] = useState(false)
    const [plan, setPlan] = useState({})

    const [onlineServices, setOnlineServices] = useState(false)
    const [largerStorage, setLargerStorage] = useState(false)
    const [custProfile, setCustProfile] = useState(false)

    const [cart, setCart] = useState({})

    useEffect(() => {
        if (arcade) {
            setCart({ planName: "Arcade", planPrice: "9" })
        }
        else if (advanced) {
            setCart({ planName: "Advanced", planPrice: "12" })
        }
        else if (pro) {
            setCart({ planName: "Pro", planPrice: "9" })
        }
        else {
            setCart({ PlanName: "", planPrice: "0" })
        }
    }, [arcade, advanced, pro])

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
            setSubscriptionValue("yearly")
        }
        else {
            setSubscriptionValue("monthly")
        }
    }

    const arcadeHandler = () => {
        setArcade(!arcade)
        setAdvanced(false)
        setPro(false)
    }

    const advancedHandler = () => {
        setArcade(false)
        setAdvanced(!advanced)
        setPro(false)
    }
    const proHandler = () => {
        setArcade(false)
        setAdvanced(false)
        setPro(!pro)
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
            arcadeHandler,
            advancedHandler,
            proHandler,
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
            arcade,
            advanced,
            pro,
            onlineServices,
            largerStorage,
            custProfile,
        }}>
            {children}
        </FormContext.Provider>
    )
}

export {
    FormProvider
}

export default FormContext