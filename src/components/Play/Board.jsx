import Square from './Square'
import FlexBox from '../styles/FlexBox'
import { useGameContext } from '../../helpers/game/GameContext'
import { useEffect, useState, useCallback, useMemo } from "react"

export default function Board() {
    const [hLine, setHLine] = useState({ 1: false, 2: false, 3: false })
    const [vLine, setVLine] = useState({ 1: false, 2: false, 3: false })
    const [dLineLeft, setDLineLeft] = useState(false)
    const [dLineRight, setDLineRight] = useState(false)
    const { gameState, gameDispatch } = useGameContext()

    const isHorizontalAlignned = useMemo(() => Object.values(hLine).some(el => el === true), [hLine])
    const isVerticalAlignned = useMemo(() => Object.values(vLine).some(el => el === true), [vLine])
    
    //Win 
    const getWinner = useCallback(() => {
        if (dLineLeft || dLineRight || isHorizontalAlignned || isVerticalAlignned) {
            gameDispatch({ type: 'win' })
        }
    }, [gameDispatch, dLineLeft, dLineRight, isHorizontalAlignned, isVerticalAlignned])

    useEffect(() => {
        getWinner()
    }, [getWinner])

    //horizontal
    useEffect(() => {
        const { board } = gameState
        const result = board.some((el, i) => {
            let isValid;
            if (el[0] && el[1] && el[2]) {
                if (el[0] === el[1] && el[1] === el[2]) {
                    isValid = true;
                }else{
                    isValid = false
                }
            }
            setHLine(prevState => {
                return { ...prevState, [i + 1]: isValid }
            })
            return isValid
        })
        return result
    }, [gameState])

    //Vertical
    useEffect(() => {
        const { board } = gameState
        for (let i = 0; i < board.length; i++) {
            if (board[0][i] && board[1][i] && board[2][i]) {
                if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
                    setVLine(prevState => {
                        return { ...prevState, [i + 1]: true }
                    })
                    break;
                }
            }
            setVLine({ 1: false, 2: false, 3: false })
        }

    }, [gameState])

    //diagonal
    useEffect(() => {
        const { board } = gameState
        if (board[0][0] && board[1][1] && board[2][2]) {
            if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
                setDLineLeft(true)
            }
        }else{
            setDLineLeft(false)
        }
        if (board[0][2] && board[1][1] && board[2][0]) {
            if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
                setDLineRight(true)
            }
        }else{
            setDLineRight(false)
        }
    }, [gameState])

    //draw
    return (
        <FlexBox content='center' width='board'>
            <Square bottom right position={{ row: 0, col: 0 }} hLine={hLine['1']} vLine={vLine['1']} dLineL={dLineLeft}>{gameState.board[0][0]}</Square>
            <Square bottom right left position={{ row: 0, col: 1 }} hLine={hLine['1']} vLine={vLine['2']}>{gameState.board[0][1]}</Square>
            <Square bottom left position={{ row: 0, col: 2 }} hLine={hLine['1']} vLine={vLine['3']} dLineR={dLineRight}>{gameState.board[0][2]}</Square>

            <Square bottom right top position={{ row: 1, col: 0 }} hLine={hLine['2']} vLine={vLine['1']}>{gameState.board[1][0]}</Square>
            <Square bottom right left top position={{ row: 1, col: 1 }} hLine={hLine['2']} vLine={vLine['2']} dLineL={dLineLeft} dLineR={dLineRight}>{gameState.board[1][1]}</Square>
            <Square bottom top left position={{ row: 1, col: 2 }} hLine={hLine['2']} vLine={vLine['3']}>{gameState.board[1][2]}</Square>

            <Square top right position={{ row: 2, col: 0 }} hLine={hLine['3']} vLine={vLine['1']} dLineR={dLineRight}>{gameState.board[2][0]}</Square>
            <Square left top right position={{ row: 2, col: 1 }} hLine={hLine['3']} vLine={vLine['2']}>{gameState.board[2][1]}</Square>
            <Square left top position={{ row: 2, col: 2 }} hLine={hLine['3']} vLine={vLine['3']} dLineL={dLineLeft}>{gameState.board[2][2]}</Square>
        </FlexBox>

    )
}