const {
  connect,
  consume,
  createChannel,
  assertExchange,
  assertQueue,
  bindQueue,  
} = require('../amqp');

const onMessage = (msg) => {
  if(msg.content) {
    console.log(" [x] %s", msg.content.toString());
  }
};

const init = async () => {
  const connection = await connect();
  const channel = await createChannel(connection);
  await assertExchange(channel);
  const queueObj = await assertQueue(channel);
  const { queue } = queueObj; 
  await bindQueue(channel, queue);
  await consume(channel, queue, onMessage);
  return { channel, connection, queue };
}

init().catch(console.warn);