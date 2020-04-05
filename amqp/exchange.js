const { EXCHANGE_NAME, QUEUE_NAME } = require('../constants');

/**
 * async
 * @param {Object} channel
 * @param {String} type Exchange Type
 */
const assertExchange = async (channel, type = 'fanout') => {
  const options = { durable: false };
  const result = await channel.assertExchange(EXCHANGE_NAME, type, options);
  console.debug('Assert Exchange Result:', result);
};

/**
 * async
 * @param {Object} channel 
 * @param {String} msg 
 */
const publishMessage = async (channel, msg) => {
  const published = await channel.publish(EXCHANGE_NAME, QUEUE_NAME, Buffer.from(msg));
  console.log(" [x] Published '%s'", msg);
  return published;
};

const bindQueue = async (channel, queue) => channel.bindQueue(queue, EXCHANGE_NAME, QUEUE_NAME);

module.exports =  {
  assertExchange,
  bindQueue,
  publishMessage,
};
