export default (app, model, path) => {
  return {
    get: function (req, res) {
      return model.get(req.query)
      .then((element) => {
        res.json(element);
      })
      .catch(error => res.json({error}, 405));
    },

    save: (req, res) => {
      const element = req.body;
      return model.save(element)
      .then((createdElement) => {
        res.json(createdElement);
      })
      .catch(error => res.json({error}, 500));
    },

    setup: function (operations) {
      if (operations.get) {
        app.get('/api/' + path, this.get);
      }

      if (operations.save) {
        app.post('/api/' + path, this.save);
      }

      if (operations.delete) {
        app.post('/api/' + path, this.delete);
      }
    }
  };
};
