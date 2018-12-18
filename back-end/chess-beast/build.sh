g++ -Wall -fexceptions -Weffc++ -Wextra -Wall -g -std=c++11 -Isrc -Iinclude -Ilib -c /home/pi/Desktop/chessApp/back-end/chess-beast/main.cpp -o obj/Debug/main.o
g++ -Wall -fexceptions -Weffc++ -Wextra -Wall -g -std=c++11 -Isrc -Iinclude -Ilib  -c /home/pi/Desktop/chessApp/back-end/chess-beast/src/ChessBoard.cpp -o obj/Debug/src/ChessBoard.o
g++ -Wall -fexceptions -Weffc++ -Wextra -Wall -g -std=c++11 -Isrc -Iinclude -Ilib -c /home/pi/Desktop/chessApp/back-end/chess-beast/src/ChessBoardCase.cpp -o obj/Debug/src/ChessBoardCase.o
g++ -Wall -fexceptions -Weffc++ -Wextra -Wall -g -std=c++11 -Isrc -Iinclude -Ilib -c /home/pi/Desktop/chessApp/back-end/chess-beast/src/ChessGame.cpp -o obj/Debug/src/ChessGame.o
g++ -Wall -fexceptions -Weffc++ -Wextra -Wall -g -std=c++11 -Isrc -Iinclude -Ilib -c /home/pi/Desktop/chessApp/back-end/chess-beast/src/ChessPiece.cpp -o obj/Debug/src/ChessPiece.o
g++ -Wall -fexceptions -Weffc++ -Wextra -Wall -g -std=c++11 -Isrc -Iinclude -Ilib -c /home/pi/Desktop/chessApp/back-end/chess-beast/src/ChessPlayer.cpp -o obj/Debug/src/ChessPlayer.o
g++ -Wall -fexceptions -Weffc++ -Wextra -Wall -g -std=c++11 -Isrc -Iinclude -Ilib -c /home/pi/Desktop/chessApp/back-end/chess-beast/src/Pawn.cpp -o obj/Debug/src/Pawn.o
g++ -Wall -fexceptions -Weffc++ -Wextra -Wall -g -std=c++11 -Isrc -Iinclude -Ilib -c /home/pi/Desktop/chessApp/back-end/chess-beast/src/King.cpp -o obj/Debug/src/King.o
g++ -Wall -fexceptions -Weffc++ -Wextra -Wall -g -std=c++11 -Isrc -Iinclude -Ilib -c /home/pi/Desktop/chessApp/back-end/chess-beast/src/Rock.cpp -o obj/Debug/src/Rock.o
g++ -Wall -fexceptions -Weffc++ -Wextra -Wall -g -std=c++11 -Isrc -Iinclude -Ilib -c /home/pi/Desktop/chessApp/back-end/chess-beast/src/Queen.cpp -o obj/Debug/src/Queen.o
g++ -Wall -fexceptions -Weffc++ -Wextra -Wall -g -std=c++11 -Isrc -Iinclude -Ilib -c /home/pi/Desktop/chessApp/back-end/chess-beast/src/Knight.cpp -o obj/Debug/src/Knight.o
g++ -Wall -fexceptions -Weffc++ -Wextra -Wall -g -std=c++11 -Isrc -Iinclude -Ilib -c /home/pi/Desktop/chessApp/back-end/chess-beast/src/Bishop.cpp -o obj/Debug/src/Bishop.o

g++ -o bin/Debug/chess-beast obj/Debug/main.o obj/Debug/src/ChessBoard.o obj/Debug/src/ChessBoardCase.o obj/Debug/src/ChessGame.o obj/Debug/src/ChessPiece.o obj/Debug/src/Bishop.o obj/Debug/src/Knight.o obj/Debug/src/Queen.o obj/Debug/src/Rock.o obj/Debug/src/King.o obj/Debug/src/ChessPlayer.o obj/Debug/src/Pawn.o  -lboost_system -lpthread  

