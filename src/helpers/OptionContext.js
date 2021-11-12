import { useContext, createContext } from "react"

const OptionContext = createContext()

export function useOptionContext(){
    return useContext(OptionContext)
}


export default OptionContext

