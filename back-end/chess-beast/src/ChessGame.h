#ifndef CHESSGAME_H
#define CHESSGAME_H

#include <ostream>

class ChessGame
{
    public:
        ChessGame();
        virtual ~ChessGame();
        bool movePiece(char color, int positionsArray[4]);

    protected:

    private:
};

std::ostream& operator<< (std::ostream& os, const ChessGame& cb);

#endif // CHESSGAME_H
