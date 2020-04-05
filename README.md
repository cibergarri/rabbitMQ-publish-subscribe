
Sending messages for more than one queue using a exchange

start rabbitMQ in docker:
```
 docker run -d --name amqp.test -p 5672:5672 rabbitmq
```

Start one log receiver storing logs in file:
```
npm run receiver > logs_from_rabbit.log
```

Start another log receiver showing logs in bash:
```
npm run receiver
```

Send logs
```
npm run emit-log Hello World
```