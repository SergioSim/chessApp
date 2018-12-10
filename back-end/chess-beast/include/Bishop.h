#ifndef BISHOP_H
#define BISHOP_H
#include <ostream>
#include "ChessPiece.h"


class Bishop : public ChessPiece
{
    public:
        Bishop(int pieceColor, int x, int y, ChessBoard& cb);
        void computeMove();
        virtual ~Bishop();
};

#endif // BISHOP_H
