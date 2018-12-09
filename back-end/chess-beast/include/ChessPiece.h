#ifndef CHESSPIECE_H
#define CHESSPIECE_H
#include <ostream>
#include <vector>
#include <string>
#include "ChessEnum.h"
class ChessBoard;
#include "ChessBoard.h"

class ChessPiece
{
    friend std::ostream& operator<< (std::ostream& os, const ChessPiece& cp);
    public:
        ChessPiece(int pieceColor,int x, int y, ChessBoard& cb);
        ChessPiece(const ChessPiece&);
        virtual void computeMove();
        int getPieceName() const;
        int getPieceColor() const;
        int getX() const;
        int getY() const;
        void setPiecePosition(int x, int y);
        std::vector<std::vector<int> >& getPieceAttackPositions();
        const std::vector<std::vector<int> >& readPieceAttackPositions() const;
        std::vector<std::vector<int> >& getPieceMovePositions();
        const std::vector<std::vector<int> >& readPieceMovePositions() const;
        virtual void kill();
        virtual ~ChessPiece();
        ChessPiece& operator=(const ChessPiece&);

    protected:
        int _x;
        int _y;
        bool _isDead;
        bool _isFirstMove;
        int _pieceColor;
        int _pieceName;
        ChessBoard& _chessboard;
        std::vector<std::vector<int> > _pieceAttackPositions;
        std::vector<std::vector<int> > _pieceMovePositions;
};

std::ostream& operator<< (std::ostream& os, const ChessPiece& cp);

#endif // CHESSPIECE_H
