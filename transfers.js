function getPayload(message){
    return JSON.parse(message.content.toString())
}
function checkTransfer(message, channel){
     const {transfer} = getPayload(message)

     const action = getAction(transfer.type)
     
     if(!action){
         console.error('action not found')
         return
     }

    action(transfer)    
    channel.ack(message)
}

function getAction(action){
    const actions =  {
        'pix' : makePix,
        'p2p' : makeP2P,
        'ted' : makeTed,
    }    
    return actions[action]
}


function makePix(){
    console.debug('making pix')
    console.debug('pix status')
    console.debug('pix done')
}
function makeP2P(){
    console.debug('making p2p')
    console.debug('p2p status')
    console.debug('p2p done')
}
function makeTed(){
    console.debug('making ted')
    console.debug('ted status')
    console.debug('ted done')
}


exports.checkTransfer = checkTransfer