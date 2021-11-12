import { useOptionContext } from "../../helpers/OptionContext";
import Button from '../styles/Button'


export default function OptionButton({ value, name, type }) {
    const { optionDispatch } = useOptionContext()
    const handleButton = (type) => {
        optionDispatch({ type })
    }
    return (
        <Button name={name} as='button' onClick={() => handleButton(type)}>{value}</Button>
    )
}