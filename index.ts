import dotenv from "dotenv";
dotenv.config();
import expressApp from './src/app';
import { initDb } from "./db/mongo";

const DB_URI = process.env.DB_URI || "mongodb://localhost:27017/development"
const PORT = process.env.PORT || 3000;

async function main(){    
    try{
        console.log("Starting Db...");
        await initDb(DB_URI);
        console.log("Starting web server...");
        await expressApp.listen(PORT)
        console.log(`listening on http://localhost:${PORT}`);            
        
    }catch(error: any){
        throw new Error(error.message);
    }    
}

// initDb(DB_URI)
//     .then(()=>{
//         app.listen(PORT, () => {
//             console.log(`listening on http://localhost:${PORT}`);
//         });
//     })
//     .catch(error => process.exit(1))

main().catch((error) => {
    console.error(error);
    process.exit(1);
})