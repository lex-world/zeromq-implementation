/**
 * @dev Worker Code
 */
const zmq = require("zeromq"),
/**
 * @dev Worker is differentiated with zmq.socket("pull") instead of push for producer
 */
  sock = zmq.socket("pull");

sock.connect("tcp://127.0.0.1:3000");
console.log("Worker connected to port 3000");

/**
 * @dev socket.send(xyz) where xyz is message for worker i.e. msg in this case
 */
sock.on("message", (msg) => console.log(`Work: ${msg.toString()}`));
