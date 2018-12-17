#ifndef CHESSGAME_H
#define CHESSGAME_H

#include <ostream>
#include "ChessBoard.h"
#include "ChessPlayer.h"

class ChessGame
{
    friend std::ostream& operator<<(std::ostream& os, const ChessGame& cb);
    public:
        ChessGame();
        virtual ~ChessGame();
        std::string getWinner() const;
        char whoMoves() const;
        bool movePiece(char color, int x1, int y1, int x2, int y2);
        void computeMoves();
        void validateMoves();

    protected:

    private:
        ChessBoard _theChessBoard;
        std::vector<std::string> _history;
        ChessPlayer _Wplayer;
        ChessPlayer _Bplayer;
        bool _isBlacksTurn;
        std::string _winner;
        std::vector<std::vector<int> > _validMoves;
};

std::ostream& operator<< (std::ostream& os, const ChessGame& cb);

#endif // CHESSGAME_H
