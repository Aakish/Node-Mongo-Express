const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

connect.then((db)=>{
    console.log('Connected to the server');

     Dishes.create({
        name:'Paneer',
        description:'test'
    })
        .then((dish)=>{
            console.log(dish);

            return Dishes.findByIdAndUpdate(dish._id,{
                $set : { description:'Updated test'}
            },{
                new :true
            }).exec();
        })

        .then((dishes) =>{
            console.log(dishes);

            dish.comments.push({
                rating: 5,
                comment: 'I\'m gettng a sinking feeling',
                author: 'GANESH JI'
            });

        })
        .then(()=>{
                console.log(dish);

            return Dishes.remove({});

        })
        .then(()=>{
            return mongoose.conection.close()
        })
        .catch((err)=>{
            console.log(err);
        });
});