import model from './model';

class Controller {

    constructor() {
    }

    getContacts() {
        return model.find({});
    }

    select(req, res){
        this.getContacts()
            .then(crushes => res.status(200).json({result: crushes}))
            .catch(err => res.status(400).json({result: err}));
    }

    getContactsById(id) {
        return model.findById(id);
    }

    selectOne(req, res){
        const id = {_id: req.params.id};
        this.getContactsById(id)
            .then(crushes => res.status(200).json({result: crushes}))
            .catch(err => res.status(400).json({result: err}));
    }

    deleteById(id) {
        return model.findOneAndDelete(id);
    }

    delete(req, res){
        const id = {_id: req.params.id};
        this.deleteById(id)
            .then(crushes => res.status(200).json({result: crushes}))
            .catch(err => res.status(400).json({result: err}));
    }

    updateContact(id, data) {
        return model.findOneAndUpdate(id, data);
    }

    update(req, res){
        const id = {_id: req.params.id};
        const crush = req.body;

        this.updateContact(id, crush)
            .then(crushes => res.status(200).json({result: crushes}))
            .catch(err => res.status(400).json({result: err}));
    }

    createContact(data) {
        return model.create(data);
    }

    create(req, res){
        const crush = req.body;

        this.createContact(crush)
            .then(crushes => res.status(200).json({result: crushes}))
            .catch(err => res.status(400).json({result: err}));
    }

}

export default Controller;