#include "ChessPiece.h"
#include <iostream>
#include <vector>

using namespace std;

//std::string chessColorsString[] = {"white", "black"};
std::string chessEnumString[] = {"white", "black", "pawn", "rock", "knight", "bishop", "queen", "king"};

ChessPiece::~ChessPiece() {}
ChessPiece::ChessPiece(int pieceColor, int x, int y, ChessBoard& cb)
  : _x(x), _y(y), _isDead(false), _isFirstMove(true),
  _pieceColor(pieceColor), _pieceName(), _chessboard(cb), _pieceAttackPositions(), _pieceMovePositions()
{
    _chessboard.write(*this);
}

ChessPiece::ChessPiece(const ChessPiece& cp)
    : _x(cp._x), _y(cp._y), _isDead(cp._isDead), _isFirstMove(cp._isFirstMove),
    _pieceColor(cp._pieceColor), _pieceName(cp._pieceName), _chessboard(cp._chessboard), _pieceAttackPositions(cp._pieceAttackPositions),
    _pieceMovePositions(cp._pieceMovePositions)
{
    cout << "ChessPiece Copied!!!";
}



  void ChessPiece::computeMove(){
      _pieceMovePositions.clear();
      _pieceAttackPositions.clear();
      _chessboard.delAttacks(*this);
  }

  int ChessPiece::getPieceName() const{
      return _pieceName;
  }

  int ChessPiece::getPieceColor() const{
      return _pieceColor;
  }

  void ChessPiece::setPiecePosition(int x, int y){
      _chessboard.delAttacks(*this);
      _chessboard.delPiece(*this);
      _x = x;
      _y = y;
      _isFirstMove = false;
      _chessboard.write(*this);
  }

 vector<vector<int> >& ChessPiece::getPieceAttackPositions(){
      return _pieceAttackPositions;
  }
 const vector<vector<int> >& ChessPiece::readPieceAttackPositions() const{
     return _pieceAttackPositions;
  }

  vector<vector<int> >& ChessPiece::getPieceMovePositions(){
      return _pieceMovePositions;
  }

 const vector<vector<int> >& ChessPiece::readPieceMovePositions() const{
     return _pieceMovePositions;
  }

  void ChessPiece::kill(){
      _isDead = true;
      _chessboard.delAttacks(*this);
      _chessboard.delPiece(*this);
      _pieceMovePositions.clear();
      _pieceAttackPositions.clear();
  }

  int ChessPiece::getX() const{
      return _x;
  }

  int ChessPiece::getY() const{
      return _y;
  }

ChessPiece& ChessPiece::operator=(const ChessPiece& cp)
{
    cout << "Chess piece assignment called!";
    return *this;
}

ostream& operator<< (std::ostream& os, const ChessPiece& cp){
    os << " ChessPiece " << chessEnumString[cp._pieceName];
    os << " color = " << cp._pieceColor;
    os << " isDead = "  <<cp._isDead;
    os << " (x,y) = [" << cp._x << "|" << cp._y << "]";
    for(unsigned int i = 0; i < cp.readPieceMovePositions().size() ; i++){
        os << " move = [" << cp.readPieceMovePositions()[i][0] << "|" << cp.readPieceMovePositions()[i][1] << "]";
    }
    for(unsigned int i = 0; i < cp.readPieceAttackPositions().size() ; i++){
        os << " attack = [" << cp.readPieceAttackPositions()[i][0] << "|" << cp.readPieceAttackPositions()[i][1] << "]";
    }
    os << endl;
    return os;
 }
