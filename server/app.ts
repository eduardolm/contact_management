import * as express from 'express';
import database from './db';
import controller from './controller';
import * as bodyParser from 'body-parser';

class App {
    public app: express.Application;
    private database: database;
    private controller: controller;

    constructor() {
        this.app = express();
        this.middleware();
        this.database = new database();
        this.database.createConnection();
        this.controller = new controller();
        this.routes();
    }

    middleware() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
    }

    routes() {
        this.app.route('/')
            .get((req, res) => res.status(200)
                .json({result: "Hello World!"}));

        this.app.route('/api/contacts')
            .get((req, res) => this.controller.select(req, res));

        this.app.route('/api/contacts/:id')
            .get((req, res) => this.controller.selectOne(req, res));

        this.app.route('/api/contacts/')
            .post((req, res) => this.controller.create(req, res));

        this.app.route('/api/contacts/:id')
            .put((req, res) => this.controller.update(req, res));

        this.app.route('/api/contacts/:id')
            .delete((req, res) => this.controller.delete(req, res));
    }
}

export default new App();