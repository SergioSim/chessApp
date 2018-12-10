#ifndef KNIGHT_H
#define KNIGHT_H
#include <ostream>
#include "ChessPiece.h"

class Knight : public ChessPiece
{
    public:
        Knight(int pieceColor, int x, int y, ChessBoard& cb);
        void computeMove();
        virtual ~Knight();
};

#endif // KNIGHT_H
