const {
  connect,
  createChannel,
  assertExchange,
  publishMessage,
} = require('../amqp');

const msg = process.argv.slice(2).join(' ') || 'Hello World!';

const emit = async () => {
  const connection = await connect();
  const channel = await createChannel(connection);
  await assertExchange(channel);
  await publishMessage(channel, msg);

  setTimeout(() => { 
    connection.close(); 
    process.exit(0); 
  }, 500);
};

emit();