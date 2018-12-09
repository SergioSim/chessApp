#ifndef CHESSBOARDCASE_H
#define CHESSBOARDCASE_H
#include <vector>
#include <ostream>
class ChessPiece;
#include "ChessPiece.h"

class ChessBoardCase
{
    friend std::ostream& operator<<(std::ostream& os, const ChessBoardCase& cb);
    public:
        ChessBoardCase();
        ChessBoardCase(const ChessBoardCase& cbc);
        const ChessPiece* getPiece() const;
        ChessPiece* modifyPiece();
        int getPieceColor() const;
        const std::vector<ChessPiece*> getAttacks() const;
        void setPiece(ChessPiece& cp);
        void addAttack(ChessPiece& cp);
        void delAttack(ChessPiece& cp);
        void delPiece();
        virtual ~ChessBoardCase();
        ChessBoardCase& operator=(const ChessBoardCase&);

    protected:

    private:
        ChessPiece* _piece;
        std::vector<ChessPiece*> _attacks;
};

std::ostream& operator<< (std::ostream& os, const ChessBoardCase& cb);

#endif // CHESSBOARDCASE_H
