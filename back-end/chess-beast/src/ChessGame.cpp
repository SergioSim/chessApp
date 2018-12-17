#include "ChessGame.h"
#include "ChessEnum.h"
#include <iostream>
#include <algorithm>

using namespace std;

ChessGame::ChessGame()
    : _theChessBoard(), _history(), _Wplayer(chessEnum::white, _theChessBoard, _history), _Bplayer(chessEnum::black, _theChessBoard, _history),
    _isBlacksTurn(false), _winner( "game not finished"), _validMoves()
{
    computeMoves();
    validateMoves();
}

ChessGame::~ChessGame()
{
}

string ChessGame::getWinner() const{
    return _winner;
}

char ChessGame::whoMoves() const{
    return _isBlacksTurn ? 'B':'W';
}

void ChessGame::computeMoves(){
    _Bplayer.computeMove();
    _Wplayer.computeMove();
    _Bplayer.computeKing();
    _Bplayer.isCheckFunct();
    _Wplayer.isCheckFunct();
}

bool ChessGame::movePiece(char color, int x1, int y1, int x2, int y2){
    if(color == whoMoves())
    {
        bool response = false;
        vector<int> pos = {x1,y1,x2,y2};
        if(std::find(_validMoves.begin(), _validMoves.end(), pos) != _validMoves.end())
        {
            if(_isBlacksTurn){response = _Bplayer.movePiece(x1, y1, x2, y2);}
            else{response = _Wplayer.movePiece(x1, y1, x2, y2);}
            if(response)
            {
                computeMoves();
                validateMoves();
                _isBlacksTurn = !_isBlacksTurn;
                return true;
            }
        }
    }
    return false;
}

void ChessGame::validateMoves()
{
    cout << "validating moves.."<<endl;
    _validMoves.clear();
    std::vector<ChessPiece*> wPieces(_Wplayer.getMyPieces());
    for(unsigned int i = 0 ; i < wPieces.size() ; i++)
    {
        vector<vector<int> > theMoves = wPieces[i]->getPieceMovePositions();
        vector<vector<int> > copyOfTheMoves(theMoves.size());
        copy ( theMoves.begin(), theMoves.end(), copyOfTheMoves.begin());
        int xf = wPieces[i]->getX();
        int yf = wPieces[i]->getY();
        for(unsigned int j = 0; j<copyOfTheMoves.size(); j++){
            int xs = copyOfTheMoves[j][0];
            int ys = copyOfTheMoves[j][1];
            bool doReincarnate = false;
            ChessPiece* theCp = _theChessBoard.modify(xf, yf).modifyPiece();
            ChessPiece* otherCp = _theChessBoard.modify(xs,ys).modifyPiece();
            bool isFirstMove = theCp->getIsFirstMove();
            if(otherCp != nullptr){
                    doReincarnate = true;
                    otherCp->kill();
            }
            theCp->setPiecePosition(xs,ys);
            computeMoves();
            if(!_Wplayer.getIsCheck())
            {
                _validMoves.push_back({xf,yf,xs,ys});
            }
            theCp->setPiecePosition(xf,yf);
            theCp->setIsFirstMove(isFirstMove);
            if(doReincarnate){
                otherCp->reincarnate();
                otherCp->setPiecePosition(xs,ys);
            }
            computeMoves();
        }
    }

    std::vector<ChessPiece*> bPieces(_Bplayer.getMyPieces());
    for(unsigned int i = 0 ; i < bPieces.size() ; i++)
    {
        vector<vector<int> > theMoves = bPieces[i]->getPieceMovePositions();
        vector<vector<int> > copyOfTheMoves(theMoves.size());
        copy ( theMoves.begin(), theMoves.end(), copyOfTheMoves.begin());
        int xf = bPieces[i]->getX();
        int yf = bPieces[i]->getY();
        for(unsigned int j = 0; j<copyOfTheMoves.size(); j++){
            int xs = copyOfTheMoves[j][0];
            int ys = copyOfTheMoves[j][1];
            bool doReincarnate = false;
            ChessPiece* theCp = _theChessBoard.modify(xf, yf).modifyPiece();
            ChessPiece* otherCp = _theChessBoard.modify(xs,ys).modifyPiece();
            bool isFirstMove = theCp->getIsFirstMove();
            if(otherCp != nullptr){
                    doReincarnate = true;
                    otherCp->kill();
            }
            theCp->setPiecePosition(xs,ys);
            computeMoves();
            if(!_Bplayer.getIsCheck())
            {
                _validMoves.push_back({xf,yf,xs,ys});
            }
            theCp->setPiecePosition(xf,yf);
            theCp->setIsFirstMove(isFirstMove);
            if(doReincarnate){
                otherCp->reincarnate();
                otherCp->setPiecePosition(xs,ys);
            }
            computeMoves();
        }
    }
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
    os << " Valid moves : " << endl;
    for(unsigned int i = 0; i< cg._validMoves.size(); i++){
        for(unsigned int j = 0; j<4 ; j++){
            os << cg._validMoves[i][j] << ",";
        }
        os << endl;
    }
    return os;
}

