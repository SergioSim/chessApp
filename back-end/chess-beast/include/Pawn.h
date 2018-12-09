#ifndef PAWN_H
#define PAWN_H
#include <ostream>
#include "ChessPiece.h"


class Pawn : public ChessPiece
{
    public:
        Pawn(int pieceColor, int x, int y, ChessBoard& cb);
        void computeMove();
        virtual ~Pawn();
};

#endif // PAWN_H
