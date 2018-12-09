#ifndef CHESSBOARD_H
#define CHESSBOARD_H
#include <ostream>
#include <vector>
class ChessBoardCase;
#include "ChessBoardCase.h"

class ChessBoard
{
    friend std::ostream& operator<<(std::ostream& os, const ChessBoard& cb);
    public:
        ChessBoard();
        const ChessBoardCase& read(int x, int y) const;
        ChessBoardCase& modify(int x, int y);
        void write(ChessPiece& cp);
        void delPiece(ChessPiece& cp);
        void addAttacks(ChessPiece& cp);
        void delAttacks(ChessPiece& cp);
        virtual ~ChessBoard();

    protected:

    private:
        std::vector<std::vector<ChessBoardCase> > _board;
};

std::ostream& operator<< (std::ostream& os, const ChessBoard& cb);

#endif // CHESSBOARD_H
