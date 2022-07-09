import {connect, connection} from 'mongoose'

// listen for mongodb connection errors once it has been stablished
connection.on("error", error => console.log("no connection to db:", error.message))
// close connection if we CTRL+C the server
process.on('SIGINT', () => {
    connection.close( () => {
        console.log('SIGINT Signal: Mongoose disconnected');
        process.exit(0);
    })
})

/**
 * Starts a connection with mongoDb using mongoose
 */
export async function initDb(DB_URI: string) {
    try{        
        await connect(DB_URI,{serverSelectionTimeoutMS:1000});
        console.log("Connected to DB");
    }catch(error: any){
        throw new Error(`failed to connect db: ${error.message}`);
    }    
}