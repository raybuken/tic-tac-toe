import styled from 'styled-components'

const FlexBox = styled.div `
    display: flex;
    justify-content: ${props => props.content};
    padding: 8px;
    margin: 3px;
    flex-wrap: wrap;
    width: ${props => props.width === 'board' && '800px'};
`


export default FlexBox