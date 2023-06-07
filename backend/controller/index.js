const { dummy } = require("../repo/dummy");
const dummyData = dummy;


const postController = {

    getAll:(req, res) => {
      res.status(200).json(dummyData);
    },

    findById:(req, res) => {
      dummyData.filter(data => {
        if (data.id === req.params) {
          return res.status(200).json(data);
        } else {
          return res.status(404).json({message: 'Not Found'})
        }
      })
    },

    updateById:(req, res) => {
      
    },

    deleteById:(req, res) => {

    },
}


const newpostController = {
  create: (req, res) => {

  }
}

module.exports = {
  postController,
  newpostController,
};