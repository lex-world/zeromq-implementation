/**
 * @dev Subscriber
 */
var zmq = require("zeromq"),
  sock = zmq.socket("sub");

  /**
   * * @dev Make sure you're connected to right tcp address
   */
sock.connect("tcp://127.0.0.1:3000");
/**
 * @dev
 * * make sure the channel to subscribe matches with first param of sock.send
 * ! NOTE sock.send(["deekshya", `I love you ${love}...`])
 */
sock.subscribe("deekshya");
console.log("Subscriber connected to port 3000");

sock.on("message", (topic, message) => {
  /**
   * @dev the topic and message is strigified since TCP transfers buffers i.e. either 0 or 1
   */
  console.log(`Channel: ${topic.toString()}\n Messsage: ${message.toString()}`);
});
