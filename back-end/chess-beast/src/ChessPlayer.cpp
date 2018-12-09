#include "ChessPlayer.h"
#include <Pawn.h>
#include <iostream>
#include <algorithm>

using namespace std;

ChessPlayer::ChessPlayer(int playerColor, ChessBoard& theChessBoard) : _playerColor(playerColor),
    _myChessBoard(theChessBoard), _myPieces(), _isCheck(false)
{
    _myPieces.resize(8);
    int pawnY = (playerColor == 1) ? 7:2;
    for(int i = 0 ; i < 8 ; i++){
        _myPieces[i] = new Pawn(playerColor, i + 1, pawnY, theChessBoard);
        _myPieces[i]->computeMove();
    }
}

ChessPlayer::~ChessPlayer() {
    //dtor
}

ChessBoard ChessPlayer::getChessBoard() const{
    return _myChessBoard;
}

bool ChessPlayer::movePiece(int xf, int yf, int xs, int ys){
    ChessBoardCase cbc = _myChessBoard.read(xf,yf);
    const ChessPiece* cp = cbc.getPiece();
    if(cp != nullptr){
        if(cbc.getPieceColor() == _playerColor){
            vector<vector<int> > legalMoves = cp->readPieceMovePositions();
            vector<int> pos = {xs,ys};
            if(std::find(legalMoves.begin(), legalMoves.end(), pos) != legalMoves.end()){
                if(_myChessBoard.read(xs,ys).getPiece() != nullptr){
                    _myChessBoard.modify(xs,ys).modifyPiece()->kill();
                }
                _myChessBoard.modify(xf, yf).modifyPiece()->setPiecePosition(xs,ys);
                _myChessBoard.modify(xs, ys).modifyPiece()->computeMove();
                return true;
            }
        }else{
            cout << "wrong piece color at chessplayer " << _playerColor << endl;
        }
    }else{
        cout << "trying to access inexistend chesspiece at chessplayer " << _playerColor << endl;
    }
    return false;
}

void ChessPlayer::computeMove(){
    for(unsigned int i = 0 ; i < _myPieces.size() ; i++){
        _myPieces[i]->computeMove();
    }
}

//void ChessPlayer::isCheckFunct(){
//    int king = 8;
//    int x = myPieces[king]->getPiecePositionX();
//    int y = myPieces[king]->getPiecePositionY();
//    vector<ChessPiece*> attacks = myChessBoard->readAttacks(x,y);
//    if(attacks.size() == 0){
//        isCheck = false;
//        return;
//    }
//    for(unsigned int i = 0 ; i < attacks.size(); i++){
//        if(attacks[i]->getPieceColor() != playerColor){
//                isCheck = true;
//                cout << "!!! Check "<< playerColor << " player !!!" << endl;
//                return;
//        }
//    }
//    isCheck = false;
//}

std::ostream& operator<< (std::ostream& os, const ChessPlayer& cp){
    os << " Player " << cp._playerColor;
    os << " myPieces = " << endl;
    for(unsigned int i = 0; i< cp._myPieces.size(); i++){
        os << *cp._myPieces[i];
    }
    return os;
}
