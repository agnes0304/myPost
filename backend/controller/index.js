const { dummy } = require("../repo/dummy");
// const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');
const dummyData = dummy;


const postController = {

    getAll:(req, res) => {
      res.status(200).json(dummyData.dummy);
    },

    findById:(req, res) => {
      dummyData.dummy.filter(data => {
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
    // const newId = uuidv4();
    const newId = req.body.id;
    const newAuthor = req.body.author;
    const newBody = req.body.body;
    const newData = {
      id: newId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      author: newAuthor,
      body: newBody,
      answer: null,
      avatarUrl: '',
    }
    const dummyfilepath = path.join(__dirname, '../repo/dummy.js');

    fs.readFile(dummyfilepath, 'utf8', (err, data) => {
      if(err) {
        return res.status(500).json({error : 'Fail to read dummy'});
      }
      // let dummyData = JSON.parse(data).dummy;
      let dummyData = dummy.dummy;
      console.log(dummyData);
      dummyData.unshift(newData);

      const jsonData = JSON.stringify({dummy: dummyData}, null, 2);

      fs.writeFile(dummyfilepath, `module.exports.dummy = ${jsonData}`, 'utf8', (err) => {
        if (err) {
          return res.status(500).json({error: 'Fail to write dummy data'})
        }
        return res.status(201).json({message: 'Data added successfully'})
      })
    })
  }
}

module.exports = {
  postController,
  newpostController,
};