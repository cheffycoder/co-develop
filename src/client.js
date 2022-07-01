import { io } from "socket.io-client"; // Getting io function out of socket.io-client



// This function return an instance of the socket client. 
export const initSocket = async () => {
    const options = {
        'force new connection': true,
        reconnectionAttempt: 'Infinity',
        timeout: 10000,
        transports: ['websocket'],
    };
    return io(process.env.REACT_APP_BACKEND_URL, options);
}