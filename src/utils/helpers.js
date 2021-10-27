export const initChessboard = (orientation) => {
  let chessboard = new Map()
  let files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
  let ranks = [1, 2, 3, 4, 5, 6, 7, 8]

  if (orientation === 'black') {
    files = files.reverse()
    ranks = ranks.reverse()
  } 

  for (let rank of ranks) {
    for (let file of files) {
      const notation = file + (ranks.length + 1 - rank)
      const coordinates = { file: files.indexOf(file), rank: ranks.indexOf(rank) }

      chessboard.set(notation, coordinates)
    }
  }

  return chessboard
}

export const findSquareByNotation = (notation, squares) => squares.find(square => square.notation === notation)

export const addPieceInfo = (square, position) => {
  if (!square || !position) return null

  const singlePosition = findSquareByNotation(square.notation, position)

  return ({ ...square, piece: singlePosition?.piece })
}

const trimGameInformation = fen => {
  const removeAfer = fen.indexOf(' ')

  if (removeAfer > 0) return fen.substring(0, removeAfer)

  return fen
}

export const generatePiecesPosition = (fen, chessboard, orientation) => {
  const squares = [...chessboard.keys()]

  let trimmedFen = trimGameInformation(fen)
  trimmedFen = trimmedFen.replace(/[/]/g, '').split('')

  if (orientation === 'black') trimmedFen = trimmedFen.reverse()

  let pieces = []
  let index = 0

  trimmedFen.map(symbol => {
    const number = parseInt(symbol, 10)
    
    if (isNaN(number)) {
      const color = symbol === symbol.toLowerCase() ? 'black' : 'white'

      pieces.push({
        notation: squares[index],
        coordinates: chessboard.get(squares[index]),
        piece: {
          type: symbol,
          color: color
        }
      })
    
      return index ++
    } else {
      return index += number
    }
  })

  return pieces
}

export const hasBoardBelow = event => !!document.elementsFromPoint(event.clientX, event.clientY).find(element => element.localName === 'board')

export const getCoordinatesFromEvent = event => {
  const board = document.getElementById('chessboard')

  return ({
    file: Math.floor((event.clientX - board.getBoundingClientRect().left) / (board.offsetWidth / 8)),
    rank: Math.floor((event.clientY - board.getBoundingClientRect().top) / (board.offsetWidth / 8))
  })
}

export const getSquare = (chessboard, coordinates) => {
  for (let [key, value] of chessboard.entries()) {
    if (value.file === coordinates.file && value.rank === coordinates.rank) return key
  }
}

export const getTransformValues = coordinates => `translate(${coordinates.file * 100}%, ${coordinates.rank * 100}%)`

export const getSquareData = (event, chessboard) => {
  const coordinates = getCoordinatesFromEvent(event)
  const notation = getSquare(chessboard, coordinates)

  return ({ coordinates, notation })
}