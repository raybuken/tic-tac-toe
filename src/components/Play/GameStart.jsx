import FlexColumn from "../styles/FlexColumn"
import FlexBox from "../styles/FlexBox"
import Button from '../styles/Button'
import Board from "./Board"
import GameContext from '../../helpers/game/GameContext'
import { useReducer } from "react"
import { GameReducer, initialState } from "../../helpers/game/GameReducer"

export default function GameStart() {
    const [gameState, gameDispatch] = useReducer(GameReducer, initialState)
    const {result, playingNow} = gameState

    return (
        <GameContext.Provider value={{gameState, gameDispatch}}>
            <FlexBox content='flex-start'>
                <FlexColumn>
                    {!result ?
                        <span>Turno: jugador {gameState.playingNow}</span>
                        :
                        <div>
                            <Button onClick={() => gameDispatch({type: 'reset'})}>Volver a jugar</Button>
                            <Button onClick={() => window.location.reload()}>Volver al Menú</Button>
                        </div>
                    }
                </FlexColumn>
            </FlexBox>
            <Board />
            <div>
                {
                    result &&
                    <div>
                        <p>{result ==='Ganador' && `${result}: ${playingNow === 'O' ? 'X' : 'O'}`}</p>
                        <p>{result === 'Empate' && result}</p>
                    </div>
                }
            </div>
        </GameContext.Provider>
    )
}