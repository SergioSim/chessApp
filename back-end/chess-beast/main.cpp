#include <boost/beast/core.hpp>
#include <boost/beast/websocket.hpp>
#include <boost/asio/ip/tcp.hpp>
#include <boost/algorithm/string.hpp>
#include <cstdlib>
#include <functional>
#include <iostream>
#include <string>
#include <thread>
#include <vector>
#include "ChessGame.h"
#include "ChessBoard.h"
#include "ChessEnum.h"
#include "ChessBoardCase.h"
#include "Pawn.h"

using tcp = boost::asio::ip::tcp;
namespace websocket = boost::beast::websocket;
using namespace std;

std::string messageListener(ChessGame& cg, std::string s)
{
    std::vector<std::string> results;
    boost::split(results, s, [](char c){return c == ',';});
    if(results.size() == 5){
        std::string::size_type sz;
        bool b = cg.movePiece(results[0][0], std::stoi(results[1],&sz),std::stoi(results[2],&sz),std::stoi(results[3],&sz),std::stoi(results[4],&sz));
        std::cout << cg << std::endl;
        return b ? "1":"0";
    }else{
        std::cout << cg << std::endl;
        return s;
    }
}

void do_session(tcp::socket& socket)
{
    try
    {
        // Construct the stream by moving in the socket
        websocket::stream<tcp::socket> ws{std::move(socket)};
        ws.accept();
        ChessGame cg = ChessGame();
        for(;;)
        {
            // This buffer will hold the incoming message
            boost::beast::multi_buffer buffer;
            // Read a message
            ws.read(buffer);
            ostringstream os;
            os << boost::beast::buffers(buffer.data());
            string s = os.str();
            cout << "Got " << s << endl;
            s = messageListener(cg,s);
            // Echo the message back
            ws.text(ws.got_text());
            buffer.consume(buffer.size());
            size_t n = buffer_copy(buffer.prepare(s.size()), boost::asio::buffer(s));
            buffer.commit(n);
            ws.write(buffer.data());
        }
    }
    catch(boost::system::system_error const& se)
    {
        // This indicates that the session was closed
        if(se.code() != websocket::error::closed)
        {
            cerr << "Error: " << se.code().message() << endl;
        }
    }
    catch(exception const& e)
    {
        cerr << "Error: " << e.what() << endl;
    }
}

int startServer()
{
    try
    {
        auto const address = boost::asio::ip::make_address("192.168.0.30");
        auto const port = static_cast<unsigned short>(atoi("8082"));

        // The io_context is required for all I/O
        boost::asio::io_context ioc{1};

        // The acceptor receives incoming connections
        tcp::acceptor acceptor{ioc, {address, port}};
        for(;;)
        {
            // This will receive the new connection
            tcp::socket socket{ioc};
            // Block until we get a connection
            acceptor.accept(socket);
            cout << "New Client" << endl;
            // Launch the session, transferring ownership of the socket
            thread{std::bind(&do_session,move(socket))}.detach();
        }
    }
    catch (const std::exception& e)
    {
        std::cerr << "Error: " << e.what() << std::endl;
        return EXIT_FAILURE;
    }
}

int main()
{
    startServer();
//    ChessGame cg = ChessGame();
//    cout << cg << endl;
//    cout << cg.movePiece('W', 5 ,2 , 5, 3)<< endl;
//    cout << cg << endl;
    return 0;
}
