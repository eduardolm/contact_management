import * as mongoose from 'mongoose';

class DataBase {

    private dbUrl = 'mongodb://127.0.0.1/node_crush';
    private dbConnection;

    constructor() {
    }

    createConnection() {
        mongoose.connect(this.dbUrl);
        this.logger(this.dbUrl);
    }

    logger(uri) {
        this.dbConnection = mongoose.connection;
        this.dbConnection.on('connected', () => console.log('Mongoose está conectado!'));
        this.dbConnection.on('error', (error) => console.error.bind(console, 'Erro na conexão: ', error));
    }
}

export default DataBase;