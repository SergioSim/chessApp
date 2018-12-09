#include "Pawn.h"
#include <iostream>
#include <cmath>
#include "ChessEnum.h"

using namespace std;

Pawn::Pawn(int pieceColor, int x, int y, ChessBoard& cb) : ChessPiece(pieceColor,x,y, cb)
{
    _pieceName = chessEnum::pawn;
}

Pawn::~Pawn(){}

void Pawn::computeMove(){
    if(_isDead){return;}
    ChessPiece::computeMove();
    int diff = (_pieceColor == chessEnum::black ? -1 : 1);
    if(_y>=2 && _y <= 7)
    {
        if(_chessboard.read(_x,_y+diff).getPiece() == nullptr)
        {
            _pieceMovePositions.push_back({_x,_y+diff});
        }
        if(_isFirstMove && _chessboard.read(_x,_y+diff*2).getPiece() == nullptr)
        {
            _pieceMovePositions.push_back({_x,_y+diff*2});
        }
        if(_x != 8){
                _pieceAttackPositions.push_back({_x+1,_y+diff});
                if(_chessboard.read(_x+1, _y+diff).getPieceColor() == _pieceColor + diff){
                    _pieceMovePositions.push_back({_x+1,_y+diff});
                }
        }
        if(_x != 1){
            _pieceAttackPositions.push_back({_x-1,_y+diff});
            if(_chessboard.read(_x-1,_y+diff).getPieceColor() == _pieceColor + diff){
                _pieceMovePositions.push_back({_x-1,_y+diff});
            }
        }
    }
}
