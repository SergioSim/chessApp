#include "ChessGame.h"
#include <iostream>
#include "ChessEnum.h"

using namespace std;

ChessGame::ChessGame()
    : _theChessBoard(), _history(), _Wplayer(chessEnum::white, _theChessBoard, _history), _Bplayer(chessEnum::black, _theChessBoard, _history),
    _isBlacksTurn(false), _winner( "game not finished")
{}

ChessGame::~ChessGame()
{
}

string ChessGame::getWinner() const{
    return _winner;
}

char ChessGame::whoMoves() const{
    return _isBlacksTurn ? 'B':'W';
}

bool ChessGame::movePiece(char color, int x1, int y1, int x2, int y2){
    if(color == whoMoves())
    {
        bool response = false;
        if(_isBlacksTurn){response = _Bplayer.movePiece(x1, y1, x2, y2);}
        else{response = _Wplayer.movePiece(x1, y1, x2, y2);}
        if(response)
        {
            _Bplayer.computeMove();
            _Wplayer.computeMove();
            _Bplayer.computeKing();
            //_Bplayer.isCheckFunct();
            //_Wplayer.isCheckFunct();
            _isBlacksTurn = !_isBlacksTurn;
            return true;
        }
    }
    return false;
}

ostream& operator<<(ostream& os, const ChessGame& cg)
{
    os << "ChessGame" << endl << " winner = " << cg._winner << endl;
    os << " whoMoves = " << cg.whoMoves() << endl;
    os << cg._theChessBoard << endl;
    os << cg._Bplayer << endl;
    os << cg._Wplayer << endl;
    for(unsigned int i = 0; i < cg._history.size(); i++){
        os << cg._history[i] << " -> ";
    }
    os << endl;
    return os;
}

