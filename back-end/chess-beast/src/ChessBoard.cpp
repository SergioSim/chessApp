#include <iostream>
#include "ChessBoard.h"

using namespace std;

ChessBoard::ChessBoard() : _board()
{
    vector<ChessBoardCase> v;
    v.resize(8);
    for(int z = 0 ; z < 8 ; z++){
        for(int i = 0 ; i < 8 ; i++){
            v[i] = ChessBoardCase();
        }
        _board.push_back(v);
    }
}

const ChessBoardCase& ChessBoard::read(int x, int y) const
{
    if(x>=1 && x <=8 && y>=1 && y <=8){
        return _board[x-1][y-1];
    }else{
        cout << "ChessBoard read out of border!" << endl;
        throw;
    }
}

ChessBoardCase& ChessBoard::modify(int x, int y)
{
    if(x>=1 && x <=8 && y>=1 && y <=8){
        return _board[x-1][y-1];
    }else{
        cout << "ChessBoard modify out of border!" << endl;
        throw;
    }
}

void ChessBoard::write(ChessPiece& cp)
{
    int x = cp.getX();
    int y = cp.getY();
    if(x>=1 && x <=8 && y>=1 && y <=8){
        _board[x-1][y-1].setPiece(cp);
    }else{
        cout << "ChessBoard write out of border!" << endl;
        throw;
    }
}
void ChessBoard::addAttacks(ChessPiece& cp)
{
    vector<vector<int> > cpv = cp.readPieceAttackPositions();
    int x,y;
    for(unsigned int i = 0 ; i< cpv.size() ; i++){
            x = cpv[i][0]; y = cpv[i][1];
            _board[x-1][y-1].addAttack(cp);
    }
}
void ChessBoard::delAttacks(ChessPiece& cp)
{
    vector<vector<int> > cpv = cp.readPieceAttackPositions();
    int x,y;
    for(unsigned int i = 0 ; i< cpv.size() ; i++){
            x = cpv[i][0]; y = cpv[i][1];
            _board[x-1][y-1].delAttack(cp);
    }
}

void ChessBoard::delPiece(ChessPiece& cp)
{
    _board[cp.getX() - 1][cp.getY() - 1].delPiece();
}

ostream& operator<< (ostream& os, const ChessBoard& cb){
    os << " ChessBoard board =" << endl;
    for(int y = 0; y < 8 ; y++){
        for(int x = 0; x < 8 ; x++){
            os << " [" << cb._board[x][y]<< "]";
        }
        os << endl;
    }
    os << endl;
    for(int y = 0; y < 8 ; y++){
        for(int x = 0; x < 8 ; x++){
            os << " [ " << (x+1) << "|" << (y+1) << " ] ";
            for(unsigned int z = 0; z < cb._board[x][y].getAttacks().size(); z++ ){
                os << cb._board[x][y].getAttacks()[z]->getPieceNameString();
                os << "("<< (cb._board[x][y].getAttacks()[z]->getX()) << "|";
                os << cb._board[x][y].getAttacks()[z]->getX() << ")";
            }
            os << endl;
        }
        os << endl;
    }
    return os;
}

ChessBoard::~ChessBoard()
{
    //dtor
}
