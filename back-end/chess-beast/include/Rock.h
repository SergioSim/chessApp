#ifndef ROCK_H
#define ROCK_H
#include <ostream>
#include "ChessPiece.h"

class Rock : public ChessPiece
{
    public:
        Rock(int pieceColor, int x, int y, ChessBoard& cb);
        void computeMove();
        virtual ~Rock();
};

#endif // ROCK_H
