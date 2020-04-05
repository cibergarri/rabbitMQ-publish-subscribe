module.exports = {
  QUEUE_URL    : 'amqp://localhost' || process.env.QUEUE_URL,
  EXCHANGE_NAME: 'logs' || process.env.EXCHANGE_NAME,
  QUEUE_NAME   : '' || process.env.QUEUE_NAME, // Empty Queue: No sending message to specific queue
  // QUEUE_PREFECH: 1 || process.env.QUEUE_PREFECH, // Number ot tasks a worker will handle at the same time
  NO_ACK       : true,
};
