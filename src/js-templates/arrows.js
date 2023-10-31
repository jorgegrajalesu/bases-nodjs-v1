
// array users
const users = [
    {
        id: 1,
        name: 'Jorge',
    },
    {
        id: 2,
        name: 'Martha',
    },
    
];

// function traditional
const  getUser = (id, callback) => {
    const user = users.find((user) => user.id == id  );

    if(!user){
        return callback(`Usuario no encontrado ${id}`);
    }

    return callback(null, user);
        
    
    // console.log({user});
}

module.exports ={
    getUser,
}