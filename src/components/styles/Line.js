
import styled from 'styled-components'

const Line = styled.div `
    border-bottom: 10px;
    border-bottom-style: ${props => props.hLine || props.vLine || props.dLineL || props.dLineR ? 'solid' : 'none'};
    border-bottom-color: red;
    width: ${props => {
        if(props.hLine) return '230px'
        if(props.vLine) return '230px'
        if(props.dLineL || props.dLineR) return '284px'
    }};
    position: absolute;
    margin: 0;
    padding: 0;
    border-radius: 3px;
    transform: ${props => props.hLine && 'translateY(100%)'}; //horizontal
    transform: ${props => props.vLine && 'rotate(90deg)'}; //vertical
    //diagonal
    transform: ${props => props.dLineL && 'rotate(45deg)'}; 
    transform: ${props => props.dLineR && 'rotate(-45deg)'}; 
`

Line.defaultProps = {
    hLine: false,
    vLine: false,
    dLineL: false,
    dLineR: false
}

export default Line