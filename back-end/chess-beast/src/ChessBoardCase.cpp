#include <iostream>
#include "ChessBoardCase.h"
#include <algorithm>


using namespace std;

ChessBoardCase::ChessBoardCase() :_piece(nullptr), _attacks()
{

}

ChessBoardCase::ChessBoardCase(const ChessBoardCase& cbc) : _piece(cbc._piece), _attacks(cbc._attacks){}

void ChessBoardCase::setPiece(ChessPiece& cp)
{
    _piece = &cp;
}

void ChessBoardCase::addAttack(ChessPiece& cp)
{
    _attacks.push_back(&cp);
}

void ChessBoardCase::delAttack(ChessPiece& cp)
{
    _attacks.erase(remove(_attacks.begin(), _attacks.end(), &cp), _attacks.end());
}

void ChessBoardCase::delPiece()
{
    _piece = nullptr;
}

const ChessPiece* ChessBoardCase::getPiece() const{
    return _piece;
}

ChessPiece* ChessBoardCase::modifyPiece(){
    return _piece;
}

const std::vector<ChessPiece*> ChessBoardCase::getAttacks() const{
    return _attacks;
}

int ChessBoardCase::getPieceColor() const
{
    if(_piece == nullptr){
        return -1;
    }else{
        return _piece->getPieceColor();
    }
}

ChessBoardCase& ChessBoardCase::operator=(const ChessBoardCase& other) // copy assignment
{
    if (this != &other) { // self-assignment check expected
        _piece = other._piece;
        _attacks.reserve(other._attacks.size());
        copy(other._attacks.begin(),other._attacks.end(),back_inserter(_attacks));
    }
    return *this;
}

ostream& operator<< (ostream& os, const ChessBoardCase& cbc){
    if(cbc._piece == nullptr){
        os << "_,_";
    }else{
        os << cbc._piece->getPieceName() << "," << cbc._piece->getPieceColor();
    }
    return os;
}

ChessBoardCase::~ChessBoardCase()
{
    //dtor
}
