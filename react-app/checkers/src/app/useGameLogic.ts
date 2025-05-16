import { useCallback } from "react";


export default function useGameLogic() {

    function isMoveLegal(rows, startIndex, endIndex, playerWhiteTurn) {
        const yDif = endIndex[0] - startIndex[0];
        const xDif = endIndex[1] - startIndex[1];


        //standard move

        if (
            rows[startIndex[0]][startIndex[1]].hasPiece &&
            !rows[endIndex[0]][endIndex[1]].hasPiece &&
            isYDifLegal(yDif, playerWhiteTurn) &&
            isXDifLegal(xDif)) {
            return true;
        }

        //jump move weiß
        else if (playerWhiteTurn && rows[startIndex[0]][startIndex[1]].hasPiece &&
            !rows[endIndex[0]][endIndex[1]].hasPiece && isYJumpDifLegal(yDif, playerWhiteTurn) && isXJumpDifLegal(xDif)) {
            if (xDif == 2 && rows[startIndex[0] + 1][startIndex[1] + 1].hasPiece && !rows[startIndex[0] + 1][startIndex[1] + 1].piece.isWhite)
                return true
            if (xDif == -2 && rows[startIndex[0] + 1][startIndex[1] - 1].hasPiece && !rows[startIndex[0] + 1][startIndex[1] - 1].piece.isWhite) {
                return true
            }
        }
        //jump move schwarz
        else if (!playerWhiteTurn && rows[startIndex[0]][startIndex[1]].hasPiece &&
            !rows[endIndex[0]][endIndex[1]].hasPiece && isYJumpDifLegal(yDif, playerWhiteTurn) && isXJumpDifLegal(xDif)) {
            if (xDif == 2 && rows[startIndex[0] - 1][startIndex[1] + 1].hasPiece && rows[startIndex[0] - 1][startIndex[1] + 1].piece.isWhite)
                return true
            if (xDif == -2 && rows[startIndex[0] - 1][startIndex[1] - 1].hasPiece && rows[startIndex[0] - 1][startIndex[1] - 1].piece.isWhite) {
                return true
            }
        }

        return false;
    }

    const checkForJumpMoves = useCallback(
        function (startIndex, playerWhiteTurn, rows) {
            let jumpMoveAvailable = false
            if (playerWhiteTurn) {
                if (isTileIndexInBounds(startIndex[0] + 2, startIndex[1] + 2) && !rows[startIndex[0] + 2][startIndex[1] + 2].hasPiece && rows[startIndex[0] + 1][startIndex[1] + 1].hasPiece &&
                    !rows[startIndex[0] + 1][startIndex[1] + 1].piece.isWhite) {
                    rows[startIndex[0] + 2][
                        startIndex[1] + 2
                    ].isHighlighted = true;
                    jumpMoveAvailable = true
                }
                if (isTileIndexInBounds(startIndex[0] + 2, startIndex[1] - 2) && !rows[startIndex[0] + 2][startIndex[1] - 2].hasPiece && rows[startIndex[0] + 1][startIndex[1] - 1].hasPiece &&
                    !rows[startIndex[0] + 1][startIndex[1] - 1].piece.isWhite) {
                    rows[startIndex[0] + 2][
                        startIndex[1] - 2
                    ].isHighlighted = true;
                    jumpMoveAvailable = true
                }
            }
            if (!playerWhiteTurn) {
                if (isTileIndexInBounds(startIndex[0] - 2, startIndex[1] + 2) && !rows[startIndex[0] - 2][startIndex[1] + 2].hasPiece && rows[startIndex[0] - 1][startIndex[1] + 1].hasPiece &&
                    rows[startIndex[0] - 1][startIndex[1] + 1].piece.isWhite) {
                    rows[startIndex[0] - 2][
                        startIndex[1] + 2
                    ].isHighlighted = true;
                    jumpMoveAvailable = true
                }
                else if (isTileIndexInBounds(startIndex[0] - 2, startIndex[1] - 2) && !rows[startIndex[0] - 2][startIndex[1] - 2].hasPiece && rows[startIndex[0] - 1][startIndex[1] - 1].hasPiece &&
                    rows[startIndex[0] - 1][startIndex[1] - 1].piece.isWhite) {
                    rows[startIndex[0] - 2][
                        startIndex[1] - 2
                    ].isHighlighted = true;
                    jumpMoveAvailable = true
                }
            }
            return jumpMoveAvailable
        }, []
    )

    function highlightPossibleMoves(startIndex, playerWhiteTurn, rows) {
        const jumpMoveAvailable = checkForJumpMoves(startIndex, playerWhiteTurn, rows)
        if (jumpMoveAvailable) {
            return
        }
        //weiß
        if (playerWhiteTurn) {
            if (isTileIndexInBounds(startIndex[0] + 1, startIndex[1] + 1) && !rows[startIndex[0] + 1][startIndex[1] + 1].hasPiece) {
                rows[startIndex[0] + 1][
                    startIndex[1] + 1
                ].isHighlighted = true;
            }
            // else if (isTileIndexInBounds(startIndex[0] + 2, startIndex[1] + 2) && !rows[startIndex[0] + 2][startIndex[1] + 2].hasPiece &&
            //     !rows[startIndex[0] + 1][startIndex[1] + 1].piece.isWhite) {
            //     rows[startIndex[0] + 2][
            //         startIndex[1] + 2
            //     ].isHighlighted = true;
            // }
            if (isTileIndexInBounds(startIndex[0] + 1, startIndex[1] - 1) && !rows[startIndex[0] + 1][startIndex[1] - 1].hasPiece) {
                rows[startIndex[0] + 1][
                    startIndex[1] - 1
                ].isHighlighted = true;
            }
            // else if (isTileIndexInBounds(startIndex[0] + 2, startIndex[1] - 2) && !rows[startIndex[0] + 2][startIndex[1] - 2].hasPiece &&
            //     !rows[startIndex[0] + 1][startIndex[1] - 1].piece.isWhite) {
            //     rows[startIndex[0] + 2][
            //         startIndex[1] - 2
            //     ].isHighlighted = true;
            // }
        }
        //schwarz
        if (!playerWhiteTurn) {
            if (isTileIndexInBounds(startIndex[0] - 1, startIndex[1] + 1) && !rows[startIndex[0] - 1][startIndex[1] + 1].hasPiece) {
                rows[startIndex[0] - 1][
                    startIndex[1] + 1
                ].isHighlighted = true;
            }
            // else if (isTileIndexInBounds(startIndex[0] - 2, startIndex[1] + 2) && !rows[startIndex[0] - 2][startIndex[1] + 2].hasPiece &&
            //     rows[startIndex[0] - 1][startIndex[1] + 1].piece.isWhite) {
            //     rows[startIndex[0] - 2][
            //         startIndex[1] + 2
            //     ].isHighlighted = true;
            // }
            if (isTileIndexInBounds(startIndex[0] - 1, startIndex[1] - 1) && !rows[startIndex[0] - 1][startIndex[1] - 1].hasPiece) {
                rows[startIndex[0] - 1][
                    startIndex[1] - 1
                ].isHighlighted = true;
            }
            // else if (isTileIndexInBounds(startIndex[0] - 2, startIndex[1] - 2) && !rows[startIndex[0] - 2][startIndex[1] - 2].hasPiece &&
            //     rows[startIndex[0] - 1][startIndex[1] - 1].piece.isWhite) {
            //     rows[startIndex[0] - 2][
            //         startIndex[1] - 2
            //     ].isHighlighted = true;
            // }
        }

    }


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
        return (rowIndex < 8 && tileIndex < 8 && rowIndex >= 0 && tileIndex >= 0);
    }

    return {
        isMoveLegal,
        highlightPossibleMoves
    }
}