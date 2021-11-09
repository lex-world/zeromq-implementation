/**
 * @dev Producer Code
 */
const zmq = require("zeromq"),
  /**
   * * NOTE: Producer is differentiated using zmq.socket("push")
   */
  sock = zmq.socket("push");

  /**
   * * NOTE: Protocol is not HTTP it's TCP(Transmission Control Protocol)
   */
sock.bindSync("tcp://127.0.0.1:3000");
console.log("Producer bound to port 3000");

/**
 * * NOTE: On bitcoin network the interval is of 10 mins
 */
setInterval(() => {
  console.log("\nSending Work...");
  sock.send("Calculate Hash");
}, 1000);
