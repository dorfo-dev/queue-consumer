const { ConsumerQueue }  = require('./consumer')
const { checkTransfer }  = require('./transfers')

ConsumerQueue.consumeQueue(checkTransfer)
.then(() => {})
.catch(console.error)


