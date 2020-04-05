const { QUEUE_NAME, NO_ACK } = require('../constants');
/**
 * async
 * @param {Object} channel
 * @returns {Object} queue
 */
const assertQueue = async (channel) => {
  const options = {
    // persistent queues on rabbitMQ restart. Make sure it has not been previously created without this parameter
    durable: true,
  };
  const result = await channel.assertQueue(QUEUE_NAME, options);
  console.debug('Assert Queue Result:', result);
  return result;
};

/**
 * async
 * @param {String} msg Message to be sent
 */
const sendToQueue = async (msg) => {
  const options = { persistent: true };
  const sent = await channel.sendToQueue(QUEUE_NAME, Buffer.from(msg), options);
  console.log(" [x] Sent '%s'", msg);
  return sent;
};

const consume = async (channel, queue, onMessage) => {
  const options = {
    // noAck: true  -> the task is cleaned from the queue in the moment is received. Error if we call chanhel.ack
    // noAck: false -> the task is not cleaned until we call channel.ack(). Therefore if the worker is stopped before finishing it, it will take it again
    noAck: NO_ACK, // https://www.rabbitmq.com/confirms.html
  }
  const result = await channel.consume(queue, onMessage, options);
  console.log('channel consume result', result);
};

module.exports = {
  assertQueue,
  sendToQueue,
  consume,
};
