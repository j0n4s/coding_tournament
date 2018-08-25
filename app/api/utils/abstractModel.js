export default (MongooseModel) => {
  return {
    save: (data) => {
      if (Array.isArray(data)) {
        let promises = data.map((entry) => {
          if (entry._id) {
            return MongooseModel.findOneAndUpdate({_id: entry._id}, entry, {new: true, lean: true});
          }
          return MongooseModel.create(entry).then(saved => saved.toObject());
        });
        return Promise.all(promises);
      }

      if (data._id) {
        return MongooseModel.findOneAndUpdate({_id: data._id}, data, {new: true, lean: true});
      }
      return MongooseModel.create(data).then(saved => saved.toObject());
    },

    get: (query, select = '', pagination = {}) => {
      return MongooseModel.find(query, select, Object.assign({lean: true}, pagination));
    },

    count: (condition) => {
      return MongooseModel.count(condition);
    },

    getById: (id) => {
      return MongooseModel.findById(id, {}, {lean: true});
    }
  };
};
