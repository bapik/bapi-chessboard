export const transformPiece = event => {
  const board = document.getElementById('chessboard')
  const pieceHalfWidth = board.offsetWidth / 16
  const x = event.clientX - board.getBoundingClientRect().left - board.offsetLeft - pieceHalfWidth
  const y = event.clientY - board.getBoundingClientRect().top - board.offsetTop - pieceHalfWidth

  return `translate(${x}px, ${y}px)`
}