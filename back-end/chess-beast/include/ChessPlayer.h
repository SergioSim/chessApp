#ifndef CHESSPLAYER_H
#define CHESSPLAYER_H
#include <string>
#include <ostream>
#include <vector>
#include "ChessBoard.h"

class ChessPlayer
{
    friend std::ostream& operator<<(std::ostream &os, const ChessPlayer &cp);
    public:
        ChessPlayer(int playerColor, ChessBoard& theChessBoard, std::vector<std::string>& history);
        bool movePiece(int x1, int y1, int x2, int y2);
        void isCheckFunct();
        void computeMove();
        void computeKing();
        virtual ~ChessPlayer();
        ChessBoard getChessBoard() const;

    private:
        int _playerColor;
        ChessBoard& _myChessBoard;
        std::vector<ChessPiece*> _myPieces;
        std::vector<std::string>& _history;
        bool _isCheck;
};

std::ostream &operator<< (std::ostream &os, const ChessPlayer &cp);

#endif // CHESSPLAYER_H
