import { useState } from 'react'
import Chess from 'chess.js'

let chess = new Chess()

export const useChessGame = () => {
  const [validMoves, setValidMoves] = useState()
  const [position, setPosition] = useState()
  
  const onPiecePick = from => {
    const moves = chess.moves({ square: from, verbose: true })
    let movesArray = []
    
    moves.map(move => {
      movesArray.push(move.to)
    })

    setValidMoves(movesArray)
  }

  const onMove = move => {
    chess.move({ from: move.from, to: move.to, promotion: 'q' })
    setValidMoves([])
    setPosition(chess.fen())
  }

  return ({ validMoves: validMoves, position: position, onMove: onMove, onPiecePick: onPiecePick })
}