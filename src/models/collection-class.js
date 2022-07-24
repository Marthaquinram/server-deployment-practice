//routing and crud functionality in this file.
'use strict';

class Collection {
    constructor(name, model) {
        this.model = model;
        this.name = name;
    }

    read(id, options = {}) {
        let modelParams = { ...options };
        if (id) {
            modelParams.where = { id: id };
            return this.model.findOne(modelParams);
        } else {
            return this.model.findAll(modelParams);
        }
    }
    create(json) {
        return this.model.create(json)
    }

    async update(id, json) {
        let row = await this.model.findOne({ where: { id: id, } });
        let updatedRow = await row.update(json);
        return updatedRow;
    }
    delete(id) {
        return this.model.destroy({ where: { id: id } });
    }

}

//async/await is gonna be for update
// .update
//.destroy





//routes
//CRUD soccer
// app.post('/soccer', createPlayer);
// app.get('/soccer', allPlayers);
// app.get('/soccer/:id', getPlayer);
// app.put('/soccer/:id', updatePlayer);
// app.delete('/soccer/:id', deletePlayer);

// //CRUD bands
// app.post('/bands', createBand);
// app.get('/bands', allBands);
// app.get('/bands/:id', getBand);
// app.put('/bands/:id', updateBand);
// app.delete('/bands/:id', deleteBand);

module.exports = Collection;
