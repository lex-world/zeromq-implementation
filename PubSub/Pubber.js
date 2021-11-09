/**
 * @dev Publisher
 */
var zmq = require("zeromq"),
  sock = zmq.socket("pub");

sock.bindSync("tcp://127.0.0.1:3000");
console.log("Publisher bound to port 3000");

var love = 1;

/**
 * @dev the interval just sends message to channel {deekshya} i love you and it increases
 * every 2000ms i.e. 2sec
 */
setInterval(() => {
  console.log("sending a multipart message envelope");
  /**
   * @dev First param of tuple below is kind of channel name to be subscribed of
   * to get message
   */
  sock.send(["deekshya", `I love you ${love}...`]);
  love++;
}, 2000);
