#ifndef QUEEN_H
#define QUEEN_H
#include <ostream>
#include "ChessPiece.h"


class Queen : public ChessPiece
{
    public:
        Queen(int pieceColor, int x, int y, ChessBoard& cb);
        void computeMove();
        virtual ~Queen();
};

#endif // QUEEN_H
