#include "King.h"
#include <iostream>
#include <cmath>
#include "ChessEnum.h"

using namespace std;

King::King(int pieceColor, int x, int y, ChessBoard& cb) : ChessPiece(pieceColor,x,y, cb)
{
    _pieceName = chessEnum::king;
}

King::~King(){}

void goKing(std::vector<std::vector<int> >& pieceMove, std::vector<std::vector<int> >& pieceAttack, ChessBoard& cb, int _pieceColor ,int _x, int _y, int goRight, int goUp)
{
    int diff = (_pieceColor == chessEnum::black ? -1 : 1);
    if(ChessPiece::isOnBoard(_x+goRight, _y+goUp))
    {
        pieceAttack.push_back({_x+goRight,_y+goUp});
        bool isUnderAtack = false;
        const std::vector<ChessPiece*> vec = cb.read(_x+goRight, _y+goUp).getAttacks();
        for(unsigned int i = 0; i<vec.size(); i++)
        {
            if(vec[i]->getPieceColor() == _pieceColor + diff){
                isUnderAtack = true;
                cout << "who attacks " << vec[i]->getPieceNameString();
            }
        }
        if(cb.read(_x+goRight, _y+goUp).getPiece() != nullptr)
        {
            if(cb.read(_x+goRight, _y+goUp).getPieceColor() == _pieceColor + diff && !isUnderAtack)
            {
                pieceMove.push_back({_x+goRight,_y+goUp});
            }
        }else if(!isUnderAtack){
            pieceMove.push_back({_x+goRight,_y+goUp});
        }
    }
}

void King::computeMove(){
    if(_isDead){return;}
    ChessPiece::computeMove();
    goKing(_pieceMovePositions, _pieceAttackPositions, _chessboard, _pieceColor, _x, _y, 1, 1);
    goKing(_pieceMovePositions, _pieceAttackPositions, _chessboard, _pieceColor, _x, _y, -1, -1);
    goKing(_pieceMovePositions, _pieceAttackPositions, _chessboard, _pieceColor, _x, _y, -1,  1);
    goKing(_pieceMovePositions, _pieceAttackPositions, _chessboard, _pieceColor, _x, _y, 1, -1);
    goKing(_pieceMovePositions, _pieceAttackPositions, _chessboard, _pieceColor, _x, _y, 1, 0);
    goKing(_pieceMovePositions, _pieceAttackPositions, _chessboard, _pieceColor, _x, _y, -1, 0);
    goKing(_pieceMovePositions, _pieceAttackPositions, _chessboard, _pieceColor, _x, _y, 0, 1);
    goKing(_pieceMovePositions, _pieceAttackPositions, _chessboard, _pieceColor, _x, _y, 0, -1);
    _chessboard.addAttacks(*this);
}
