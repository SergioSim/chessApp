#include "Knight.h"
#include <iostream>
#include <cmath>
#include "ChessEnum.h"

using namespace std;
Knight::Knight(int pieceColor, int x, int y, ChessBoard& cb) : ChessPiece(pieceColor,x,y, cb)
{
    _pieceName = chessEnum::knight;
}

Knight::~Knight(){}

void goKnight(std::vector<std::vector<int> >& pieceMove, std::vector<std::vector<int> >& pieceAttack, ChessBoard& cb, int _pieceColor ,int _x, int _y, int goRight, int goUp){
    if(ChessPiece::isOnBoard(_x,_y)){
        int diff = (_pieceColor == chessEnum::black ? -1 : 1);
        if(ChessPiece::isOnBoard(_x+goRight,_y+goUp))
        {
            pieceAttack.push_back({_x+goRight,_y+goUp});
            if(cb.read(_x+goRight, _y+goUp).getPieceColor() == _pieceColor + diff){
                    pieceMove.push_back({_x+goRight,_y+goUp});
            }else if(cb.read(_x+goRight, _y+goUp).getPiece() == nullptr){
                    pieceMove.push_back({_x+goRight,_y+goUp});
            }
        }
    }
}

void Knight::computeMove(){
    if(_isDead){return;}
    ChessPiece::computeMove();
    goKnight(_pieceMovePositions, _pieceAttackPositions, _chessboard, _pieceColor, _x, _y, -1, 2);
    goKnight(_pieceMovePositions, _pieceAttackPositions, _chessboard, _pieceColor, _x, _y, -1, -2);
    goKnight(_pieceMovePositions, _pieceAttackPositions, _chessboard, _pieceColor, _x, _y, -2, 1);
    goKnight(_pieceMovePositions, _pieceAttackPositions, _chessboard, _pieceColor, _x, _y, -2, -1);
    goKnight(_pieceMovePositions, _pieceAttackPositions, _chessboard, _pieceColor, _x, _y, 1, 2);
    goKnight(_pieceMovePositions, _pieceAttackPositions, _chessboard, _pieceColor, _x, _y, 1, -2);
    goKnight(_pieceMovePositions, _pieceAttackPositions, _chessboard, _pieceColor, _x, _y, 2, 1);
    goKnight(_pieceMovePositions, _pieceAttackPositions, _chessboard, _pieceColor, _x, _y, 2, -1);
    _chessboard.addAttacks(*this);
}
