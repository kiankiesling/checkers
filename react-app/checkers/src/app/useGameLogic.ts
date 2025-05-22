import { useCallback } from "react";
import { arrayEquals } from "./utils/utils";

export default function useGameLogic() {
  function isMoveLegal(rows, startIndex, endIndex, playerWhiteTurn) {
    const yDif = endIndex[0] - startIndex[0];
    const xDif = endIndex[1] - startIndex[1];

    const jumpMoves = checkForJumpMoves(startIndex, playerWhiteTurn, rows);
    if (jumpMoves.length > 0) {
      for (let jumpMove of jumpMoves) {
        if (
          arrayEquals(startIndex, jumpMove[0]) &&
          arrayEquals(endIndex, jumpMove[1])
        ) {
          return true;
        }
      }
      return false;
    }

    //standard move

    if (
      rows[startIndex[0]][startIndex[1]].hasPiece &&
      !rows[endIndex[0]][endIndex[1]].hasPiece &&
      isYDifLegal(yDif, playerWhiteTurn) &&
      isXDifLegal(xDif)
    ) {
      return true;
    }

    //jump move weiß
    else if (
      playerWhiteTurn &&
      rows[startIndex[0]][startIndex[1]].hasPiece &&
      !rows[endIndex[0]][endIndex[1]].hasPiece &&
      isYJumpDifLegal(yDif, playerWhiteTurn) &&
      isXJumpDifLegal(xDif)
    ) {
      if (
        xDif == 2 &&
        rows[startIndex[0] + 1][startIndex[1] + 1].hasPiece &&
        !rows[startIndex[0] + 1][startIndex[1] + 1].piece.isWhite
      )
        return true;
      if (
        xDif == -2 &&
        rows[startIndex[0] + 1][startIndex[1] - 1].hasPiece &&
        !rows[startIndex[0] + 1][startIndex[1] - 1].piece.isWhite
      ) {
        return true;
      }
    }
    //jump move schwarz
    else if (
      !playerWhiteTurn &&
      rows[startIndex[0]][startIndex[1]].hasPiece &&
      !rows[endIndex[0]][endIndex[1]].hasPiece &&
      isYJumpDifLegal(yDif, playerWhiteTurn) &&
      isXJumpDifLegal(xDif)
    ) {
      if (
        xDif == 2 &&
        rows[startIndex[0] - 1][startIndex[1] + 1].hasPiece &&
        rows[startIndex[0] - 1][startIndex[1] + 1].piece.isWhite
      )
        return true;
      if (
        xDif == -2 &&
        rows[startIndex[0] - 1][startIndex[1] - 1].hasPiece &&
        rows[startIndex[0] - 1][startIndex[1] - 1].piece.isWhite
      ) {
        return true;
      }
    }

    return false;
  }

  const checkForJumpMoves = useCallback(function (
    startIndex,
    playerWhiteTurn,
    rows
  ) {
    const jumpMoves = [];
    const playerPieceCoords = getPlayerPieceCoords(playerWhiteTurn, rows);
    for (let coords of playerPieceCoords) {
      const jumpMoveEndIndices = checkForJumpMove(
        coords,
        playerWhiteTurn,
        rows
      );
      if (jumpMoveEndIndices != null) {
        for (let endIndex of jumpMoveEndIndices) {
          jumpMoves.push([coords, endIndex]);
        }
      }
    }
    return jumpMoves;
  },
  []);

  const checkForJumpMove = useCallback(function (
    startIndex,
    playerWhiteTurn,
    rows
  ) {
    const jumpMoveEndIndices = [];
    let yAxis = playerWhiteTurn ? 1 : -1;
    if (
      isTileIndexInBounds(startIndex[0] + 2 * yAxis, startIndex[1] + 2) &&
      !rows[startIndex[0] + 2 * yAxis][startIndex[1] + 2].hasPiece &&
      rows[startIndex[0] + 1 * yAxis][startIndex[1] + 1].hasPiece &&
      rows[startIndex[0] + 1 * yAxis][startIndex[1] + 1].piece.isWhite !=
        playerWhiteTurn
    ) {
      jumpMoveEndIndices.push([startIndex[0] + 2 * yAxis, startIndex[1] + 2]);
    }
    if (
      isTileIndexInBounds(startIndex[0] + 2 * yAxis, startIndex[1] - 2) &&
      !rows[startIndex[0] + 2 * yAxis][startIndex[1] - 2].hasPiece &&
      rows[startIndex[0] + 1 * yAxis][startIndex[1] - 1].hasPiece &&
      rows[startIndex[0] + 1 * yAxis][startIndex[1] - 1].piece.isWhite !=
        playerWhiteTurn
    ) {
      jumpMoveEndIndices.push([startIndex[0] + 2 * yAxis, startIndex[1] - 2]);
    }
    // if (!playerWhiteTurn) {
    //   if (
    //     isTileIndexInBounds(startIndex[0] - 2, startIndex[1] + 2) &&
    //     !rows[startIndex[0] - 2][startIndex[1] + 2].hasPiece &&
    //     rows[startIndex[0] - 1][startIndex[1] + 1].hasPiece &&
    //     rows[startIndex[0] - 1][startIndex[1] + 1].piece.isWhite
    //   ) {
    //     rows[startIndex[0] - 2][startIndex[1] + 2].isHighlighted = true;
    //     jumpMoveAvailable = true;
    //   } else if (
    //     isTileIndexInBounds(startIndex[0] - 2, startIndex[1] - 2) &&
    //     !rows[startIndex[0] - 2][startIndex[1] - 2].hasPiece &&
    //     rows[startIndex[0] - 1][startIndex[1] - 1].hasPiece &&
    //     rows[startIndex[0] - 1][startIndex[1] - 1].piece.isWhite
    //   ) {
    //     rows[startIndex[0] - 2][startIndex[1] - 2].isHighlighted = true;
    //     jumpMoveAvailable = true;
    //   }
    // }
    return jumpMoveEndIndices;
  },
  []);

  //TODO: checkForMoves nach checkForJumpMoves Vorbild, nur Jump Moves Highlighten
  //   function highlightPossibleMoves(startIndex, playerWhiteTurn, rows) {
  //     const jumpMoves = checkForJumpMoves(startIndex, playerWhiteTurn, rows);
  //     if (jumpMoves != null) {
  //       for (let jumpMove of jumpMoves) {
  //         if (jumpMove[0].equals(startIndex)) {
  //           //TODO
  //           highlightTile(jumpMove[1]);
  //         }
  //       }
  //     }
  //     //weiß
  //     if (playerWhiteTurn) {
  //       if (
  //         isTileIndexInBounds(startIndex[0] + 1, startIndex[1] + 1) &&
  //         !rows[startIndex[0] + 1][startIndex[1] + 1].hasPiece
  //       ) {
  //         rows[startIndex[0] + 1][startIndex[1] + 1].isHighlighted = true;
  //       }

  //       if (
  //         isTileIndexInBounds(startIndex[0] + 1, startIndex[1] - 1) &&
  //         !rows[startIndex[0] + 1][startIndex[1] - 1].hasPiece
  //       ) {
  //         rows[startIndex[0] + 1][startIndex[1] - 1].isHighlighted = true;
  //       }
  //     }
  //     //schwarz
  //     if (!playerWhiteTurn) {
  //       if (
  //         isTileIndexInBounds(startIndex[0] - 1, startIndex[1] + 1) &&
  //         !rows[startIndex[0] - 1][startIndex[1] + 1].hasPiece
  //       ) {
  //         rows[startIndex[0] - 1][startIndex[1] + 1].isHighlighted = true;
  //       }

  //       if (
  //         isTileIndexInBounds(startIndex[0] - 1, startIndex[1] - 1) &&
  //         !rows[startIndex[0] - 1][startIndex[1] - 1].hasPiece
  //       ) {
  //         rows[startIndex[0] - 1][startIndex[1] - 1].isHighlighted = true;
  //       }
  //     }
  //   }

  const getPlayerPieceCoords = useCallback(function (playerWhiteTurn, rows) {
    const boardCoords = [];
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        boardCoords.push([i, j]);
      }
    }
    const playerPiecesCoords = boardCoords.filter(
      (coords) =>
        rows[coords[0]][coords[1]].hasPiece == true &&
        rows[coords[0]][coords[1]].piece.isWhite == playerWhiteTurn
    );

    return playerPiecesCoords;
  }, []);

  function isYDifLegal(yDif, playerWhiteTurn) {
    if (playerWhiteTurn && yDif == 1) {
      return true;
    }
    if (!playerWhiteTurn && yDif == -1) {
      return true;
    }
  }
  function isYJumpDifLegal(yDif, playerWhiteTurn) {
    if (playerWhiteTurn && yDif == 2) {
      return true;
    }
    if (!playerWhiteTurn && yDif == -2) {
      return true;
    }
  }
  function isXDifLegal(xDif) {
    if (xDif == 1 || xDif == -1) {
      return true;
    }
  }
  function isXJumpDifLegal(xDif) {
    if (xDif == 2 || xDif == -2) {
      return true;
    }
  }

  function isTileIndexInBounds(rowIndex, tileIndex) {
    return rowIndex < 8 && tileIndex < 8 && rowIndex >= 0 && tileIndex >= 0;
  }

  return {
    isMoveLegal,
    checkForJumpMoves,
    isTileIndexInBounds,
  };
}
