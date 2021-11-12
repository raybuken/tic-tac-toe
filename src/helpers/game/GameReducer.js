



const getEmptyArray = () => {
    let board = new Array(3)
board[0] = new Array(3)
board[1] = new Array(3)
board[2] = new Array(3)
        return board
}

export const initialState = {
    playingNow: 'O',
    board: getEmptyArray(),
    result: ''
}

export const GameReducer = (state, action) => {
    const { type, pos, col } = action
    const newState = { ...state }
    switch (type) {
        case 'X':
            newState.board[pos][col] = 'X'
            newState.playingNow = 'O'
            return newState;
        case 'O': {
            newState.board[pos][col] = 'O'
            newState.playingNow = 'X'
            return newState
        }
        case 'draw':
            if (!newState.result) {
                let acum = 0
                for (let i = 0; i < newState.board.length; i++) {
                    acum += newState.board[i].includes() ? 0 : 1
                }
                if (acum === 3) {
                    newState.result = 'Empate'
                }
            }
            return newState
        case 'win':
            newState.result = 'Ganador'
            return newState
        case 'reset':
            return {board:getEmptyArray(), playingNow: 'O', result: ''}
        default:
            throw Error()
    }
}