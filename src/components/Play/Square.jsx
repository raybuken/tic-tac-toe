import { useGameContext } from "../../helpers/game/GameContext"
import BorderSquare from "../styles/Square"
import Line from "../styles/Line"
import { useEffect } from "react"

export default function Square({ children, top, bottom, left, right, position, hLine, vLine, dLineL, dLineR }) {
    const { gameState, gameDispatch } = useGameContext()


    useEffect(() => {
        
    })

    const handleSquare = (position) => {
        if (!gameState.result) {
            if (!children) {
                const { row, col } = position
                gameDispatch({ type: gameState.playingNow, pos: row, col })

                //draw
                gameDispatch({ type: 'draw' })
            }
        }
    }

    return (
        <BorderSquare top={top} bottom={bottom} left={left} right={right} onClick={() => handleSquare(position)} >
            {children}
            <Line hLine={hLine} vLine={vLine} dLineL={dLineL} dLineR={dLineR} />
        </BorderSquare>
    )

}