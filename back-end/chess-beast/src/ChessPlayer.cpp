#include "ChessPlayer.h"
#include "Pawn.h"
#include "Rock.h"
#include "Knight.h"
#include "Bishop.h"
#include "Queen.h"
#include "King.h"
#include <iostream>
#include <algorithm>

using namespace std;

ChessPlayer::ChessPlayer(int playerColor, ChessBoard& theChessBoard, vector<string>& history) : _playerColor(playerColor),
    _myChessBoard(theChessBoard), _myPieces(), _history(history), _isCheck(false)
{
    _myPieces.resize(16);
    int pawnY = (playerColor == 1) ? 7:2;
    for(int i = 0 ; i < 8 ; i++){
        _myPieces[i] = new Pawn(playerColor, i + 1, pawnY, theChessBoard);
        _myPieces[i]->computeMove();
    }
    int rockY = (playerColor == 1) ? 8:1;
    _myPieces[8] = new Rock(playerColor, 1, rockY, theChessBoard);
    _myPieces[9] = new Rock(playerColor, 8, rockY, theChessBoard);
    _myPieces[10] = new Knight(playerColor, 2, rockY, theChessBoard);
    _myPieces[11] = new Knight(playerColor, 7, rockY, theChessBoard);
    _myPieces[12] = new Bishop(playerColor, 3, rockY, theChessBoard);
    _myPieces[13] = new Bishop(playerColor, 6, rockY, theChessBoard);
    _myPieces[14] = new Queen(playerColor, 5, rockY, theChessBoard);
    _myPieces[15] = new King(playerColor, 4, rockY, theChessBoard);
    _myPieces[10]->computeMove();
    _myPieces[11]->computeMove();
    _myPieces[12]->computeMove();
    _myPieces[13]->computeMove();
    _myPieces[14]->computeMove();
    _myPieces[15]->computeMove();
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

void ChessPlayer::computeMove()
{
    for(unsigned int i = 0 ; i < _myPieces.size() ; i++)
    {
        _myPieces[i]->computeMove();
    }
}

void ChessPlayer::isCheckFunct()
{
    int king = 15;
    int x = _myPieces[king]->getX();
    int y = _myPieces[king]->getY();
    int diff = (_playerColor == chessEnum::black ? -1 : 1);
    const std::vector<ChessPiece*> attacks = _myChessBoard.read(x,y).getAttacks();
    if(attacks.size() == 0)
    {
        _isCheck = false;
        return;
    }
    for(unsigned int i = 0 ; i < attacks.size(); i++)
    {
        if(attacks[i]->getPieceColor() == _playerColor + diff)
        {
            _isCheck = true;
            cout << "!!! Check "<< _playerColor << " player !!!" << endl;
            return;
        }
    }
    _isCheck = false;
}

void ChessPlayer::computeKing()
{
    _myPieces[15]->computeMove();
}

std::ostream& operator<< (std::ostream& os, const ChessPlayer& cp){
    os << " Player " << cp._playerColor;
    os << " myPieces = " << endl;
    for(unsigned int i = 0; i< cp._myPieces.size(); i++){
        os << *cp._myPieces[i];
    }
    return os;
}
