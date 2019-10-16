if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

const
      express = require('express')
    , router = express.Router()

    , multer = require('multer')
    , inMemoryStorage = multer.memoryStorage()
    , uploadStrategy = multer({ storage: inMemoryStorage }).single('image')

    , azureStorage = require('azure-storage')
    , blobService = azureStorage.createBlobService()

    , getStream = require('into-stream')
    , containerName = 'thumbnails'
;

const handleError = (err, res) => {
    res.status(500);
    res.render('error', { error: err });
};


router.post('/', (req, res, next) => {
    console.log("Hi....")
    console.log(req.body.tname)
  });

module.exports = router;