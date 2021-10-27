import DraggablePiece from '../DraggablePiece'

export const Pieces = React.memo(({ position, theme }) => (
  position.map(({ piece, notation, coordinates }) => (
    <DraggablePiece
      key={notation}
      type={piece.type}
      color={piece.color}
      square={notation}
      image={theme[piece.type]}
      coordinates={coordinates}
    />
  ))
))