const path = require('path')
const fs = require('fs')

function getPhotosSync(dir) {
  let fileNames = [];

  fs.readdirSync(dir).forEach((file) => {
    let base_name = path.parse(file).name

    let ext = path.parse(file).ext
    let fileName = base_name + ext

    if(ext) {
      fileNames.push(fileName)
    }
  })

  return fileNames;
}

module.exports = {
  getPhotos: getPhotosSync
}