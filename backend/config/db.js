const mongoose = require("mongoose");
const colors = require("colors");


const connectDB =  async ()=>{

    try{
        const conn = await mongoose.connect('mongodb+srv://Subhash:subhash@cluster0.8qxgsa6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
            //must add in order to not get any error masseges:
            useUnifiedTopology:true,
            useNewUrlParser: true,
          
        });
        console.log(`mongo database is connected!!! ${conn.connection.host} `)
    }catch(error){
        console.error(`Error: ${error} `)
        process.exit(1) //passing 1 - will exit the proccess with error
    }

};

module.exports = connectDB;