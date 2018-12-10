#ifndef KING_H
#define KING_H
#include <ostream>
#include "ChessPiece.h"

class King : public ChessPiece
{
    public:
        King(int pieceColor, int x, int y, ChessBoard& cb);
        void computeMove();
        virtual ~King();
};

#endif // KING_H
