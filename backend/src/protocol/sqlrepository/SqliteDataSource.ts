import { MessageEntity } from "./entity/Message";
import { SqliteMessageRepository } from "./repository/MessageRepository";
import { createConnection, Connection } from "typeorm";
import { AccountRawEntity } from "./entity/account_raw.entitysqlite";
import { SqliteAccountRawRepository } from "./repository/AccountRawRepository";
import { ConversationEntity } from "./entity/conversation.entitysqlite";
import { SqliteConversationRepository } from "./repository/ConversationRepository";
import { AutoreplyRecordEntity } from "./entity/autoreply_record.entitysqlite";
import { SqliteAutoreplyRecordRepository } from "./repository/AutoreplyRecordRepository";
import { LiveRecordsEntity } from "./entity/liverecords.entitysqlite";
import { SqliteLiveRecordsRepository } from "./repository/LiveRecordsRepository";
import { SqliteInquiryRepository } from "./repository/InquiryRepository";
import { InquiryEntity } from "./entity/inquiry.entitysqlite";

// Function to create and return the connection
let initializeConnection:Connection;

let databasepath = "d:/xtt/sqlitedb_dy_v1.db";
try {
    const { app } = require('electron');
    databasepath = app.getPath('documents')+"/sqlitedb_dy_v1.db";
} catch (error) {}

try {
    createConnection({
        name:"default",
        // type: "postgres",
        // host: "localhost",
        // port: 5432,
        // username: "root",
        // password: "admin",
        // database: "test",
        type: "sqlite",
        database: databasepath,
        entities: [
            MessageEntity, 
            SqliteMessageRepository,
            AccountRawEntity, 
            SqliteAccountRawRepository,
            ConversationEntity, 
            SqliteConversationRepository,
            AutoreplyRecordEntity, 
            SqliteAutoreplyRecordRepository,
            LiveRecordsEntity, 
            SqliteLiveRecordsRepository,
            InquiryEntity, 
            SqliteInquiryRepository
        ],
        synchronize: true,
        logging: true,
    }).then(connection=>{
        console.log("Database has been connected successfully.");
        initializeConnection = connection;
    });

} catch (error) {
    console.error("Error connecting to the database:", error);
    throw error; // Re-throw the error to handle it in the calling code
}

async function initializeDatabase():Promise<any> {
    return new Promise((resolve, reject) => {
        let cinterval = setInterval(function(){
            if(initializeConnection){
                clearInterval(cinterval);
                resolve(initializeConnection);
            }
        },100);
    });
}

export { initializeDatabase };



// async function initializeDatabase(): Promise<Connection> {
//     try {
//         const connection = await createConnection({
//             name:"sqlite3",
//             // type: "postgres",
//             // host: "localhost",
//             // port: 5432,
//             // username: "root",
//             // password: "admin",
//             // database: "test",
//             type: "sqlite",
//             database: "./sqlitedb_tt.db",
//             entities: [
//                 MessageEntity, 
//                 SqliteMessageRepository,
//                 AccountRawEntity, 
//                 SqliteAccountRawRepository,
//             ],
//             synchronize: false,
//             logging: true,
//         });

//         console.log("Database has been connected successfully.");
//         return connection;
//     } catch (error) {
//         console.error("Error connecting to the database:", error);
//         throw error; // Re-throw the error to handle it in the calling code
//     }
// }

// export { initializeDatabase };




// import { DataSource } from "./typeorm_3"
// export const SqliteDataSource = new DataSource({
//     // type: "postgres",
//     // host: "localhost",
//     // port: 5432,
//     // username: "root",
//     // password: "admin",
//     // database: "test",

//     type: "sqlite",
//     database: "./sqlitedb_tt.db",
//     entities: [
//         MessageEntity,
//         SqliteMessageRepository
//     ],
//     synchronize: false,
//     logging: true,
// })

// // to initialize initial connection with the database, register all entities
// // and "synchronize" database schema, call "initialize()" method of a newly created database
// // once in your application bootstrap
// SqliteDataSource.initialize()
//     .then(() => {
//         // here you can start to work with your database
//         console.log("Database has been connected successfully.")
//     })
//     .catch((error) => console.log(error))