var users = 0;
var points = 0;
const socketController = (socket,io)=>{
    //if(users>2)return console.log("Desconectando")

        users++;

        socket.on('disconnect',()=>{
            //console.log('User '+socket.id+' desconectado');
            users--;
            io.emit('usersCount',users)
            console.log('[USERS] : '+users)
        })

        socket.on('addPoint',()=>{
            points++;
            io.emit('update-points',points);
        })

        io.emit('usersCount',users);
        io.emit('update-points',points);
        console.log('[USERS] : '+users)
    
}

module.exports = {socketController}