#include "Rock.h"

Rock::Rock(int pieceColor, int x, int y, ChessBoard& cb) : ChessPiece(pieceColor,x,y, cb)
{
    _pieceName = chessEnum::rock;
}

Rock::~Rock(){}

void go(std::vector<std::vector<int> >& pieceMove, std::vector<std::vector<int> >& pieceAttack, ChessBoard& cb, int _pieceColor ,int _x, int _y, int goRight, int goUp)
{
    int diff = (_pieceColor == chessEnum::black ? -1 : 1);
    int i = 1;
    while(_x+i*goRight <=8 && _x+i*goRight >=1 && _y+i*goUp <=8 && _y+i*goUp >=1 )
    {
        pieceAttack.push_back({_x+i*goRight,_y+i*goUp});
        if(cb.read(_x+i*goRight, _y+i*goUp).getPiece() != nullptr){
             if(cb.read(_x+i*goRight, _y+i*goUp).getPieceColor() == _pieceColor + diff){
                pieceMove.push_back({_x+i*goRight,_y+i*goUp});
             }
             break;
        }
        pieceMove.push_back({_x+i*goRight,_y+i*goUp});
        i++;
    }
}

void Rock::computeMove(){
    if(_isDead){return;}
    ChessPiece::computeMove();
    go(_pieceMovePositions, _pieceAttackPositions, _chessboard, _pieceColor, _x, _y, 1, 0);
    go(_pieceMovePositions, _pieceAttackPositions, _chessboard, _pieceColor, _x, _y, -1, 0);
    go(_pieceMovePositions, _pieceAttackPositions, _chessboard, _pieceColor, _x, _y, 0, 1);
    go(_pieceMovePositions, _pieceAttackPositions, _chessboard, _pieceColor, _x, _y, 0, -1);

}
