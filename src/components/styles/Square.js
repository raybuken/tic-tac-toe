
import styled from 'styled-components'

const BorderSquare = styled.div `
    border-color: white;
    border-top: ${props => props.top ? '3px' : 0};
    border-bottom: ${props => props.bottom ? '3px' : 0};
    border-left: ${props => props.left ? '3px' : 0};
    border-right: ${props => props.right ? '3px' : 0};
    height: 200px;
    width: 200px;
    border-style: solid;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10rem;
    cursor: pointer;
`

export default BorderSquare