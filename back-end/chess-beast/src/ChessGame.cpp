#include "ChessGame.h"
#include <iostream>

using namespace std;
ChessGame::ChessGame()
{
    //ctor
}

ChessGame::~ChessGame()
{
    //dtor
}

bool ChessGame::movePiece(char color, int positionsArray[4]){
    return true;
}

ostream& operator<<(ostream& os, const ChessGame& cg)
{
    os << "ChessGame" << endl;
    return os;
}

