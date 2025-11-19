// export * from "./SqliteDataSource";
// export * from "./repository/MessageRepository";

// import { MessageEntity } from "src/modules/message";
import { SqliteAccountRawRepository } from "./repository/AccountRawRepository";
import { SqliteMessageRepository } from "./repository/MessageRepository";
import { SqliteConversationRepository } from "./repository/ConversationRepository";
// import { initializeDatabase }  from "./SqliteDataSource";
import { initializeDatabase }  from "./SqliteDataSource";
import { SqliteAutoreplyRecordRepository } from "./repository/AutoreplyRecordRepository";
import { SqliteLiveRecordsRepository } from "./repository/LiveRecordsRepository";
import { SqliteInquiryRepository } from "./repository/InquiryRepository";


export class SqlRepository {

    public sqliteMessageRepository:SqliteMessageRepository;
    public sqliteAccountRawRepository:SqliteAccountRawRepository;
    public sqliteConversationRepository:SqliteConversationRepository;
    public sqliteLiveRecordsRepository:SqliteLiveRecordsRepository;
    sqliteAutoreplyRecordRepository: SqliteAutoreplyRecordRepository;
    sqliteInquiryRepository: SqliteInquiryRepository;
    
    constructor( 
    ){
        const _this = this;
        _this.initializeDatabase();
    }

    async initializeDatabase(){
        const connectDB = await initializeDatabase();
        this.sqliteMessageRepository = connectDB.getCustomRepository(SqliteMessageRepository);
        this.sqliteAccountRawRepository = connectDB.getCustomRepository(SqliteAccountRawRepository);
        this.sqliteConversationRepository = connectDB.getCustomRepository(SqliteConversationRepository);
        this.sqliteAutoreplyRecordRepository = connectDB.getCustomRepository(SqliteAutoreplyRecordRepository);
        this.sqliteLiveRecordsRepository = connectDB.getCustomRepository(SqliteLiveRecordsRepository);
        this.sqliteInquiryRepository = connectDB.getCustomRepository(SqliteInquiryRepository);
    }
    
}