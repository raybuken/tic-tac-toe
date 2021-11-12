import OptionButton from "./OptionButton";
import FlexBox from '../styles/FlexBox'

export default function Options() {
    return (
        <FlexBox content='center'>
            <div>
                <h1>Tic Tae Toe</h1>
                <OptionButton value='Jugar' name='play' type={'play'} />
                <br />
                <OptionButton value='About' name='about' type={'about'} />
            </div>
        </FlexBox>
    )
}