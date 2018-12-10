#include "ChessPlayer.h"
#include "Pawn.h"
#include "Rock.h"
#include <iostream>
#include <algorithm>

using namespace std;

//string chessEnumString[] = {"white", "black", "pawn", "rock", "knight", "bishop", "queen", "king"};

ChessPlayer::ChessPlayer(int playerColor, ChessBoard& theChessBoard, vector<string>& history) : _playerColor(playerColor),
    _myChessBoard(theChessBoard), _myPieces(), _history(history), _isCheck(false)
{
    _myPieces.resize(10);
    int pawnY = (playerColor == 1) ? 7:2;
    for(int i = 0 ; i < 8 ; i++){
        _myPieces[i] = new Pawn(playerColor, i + 1, pawnY, theChessBoard);
        _myPieces[i]->computeMove();
    }
    int rockY = (playerColor == 1) ? 8:1;
    _myPieces[8] = new Rock(playerColor, 1, rockY, theChessBoard);
    _myPieces[9] = new Rock(playerColor, 8, rockY, theChessBoard);
}

ChessPlayer::~ChessPlayer() {
    for(unsigned int i = 0 ; i < _myPieces.size() ; i++){
        delete _myPieces[i];
    }
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
                string str = cp->getPieceColorString() + "," + cp->getPieceNameString() + "," + to_string(xf) + "," + to_string(yf) + "," + to_string(xs) + "," + to_string(ys);
                _history.push_back(str);
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
