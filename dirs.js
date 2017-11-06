const Promise = require('bluebird');
const axios = require('axios');

const fs = Promise.promisifyAll(require('fs'));

const dirs = [
    'dir-1',
    'dir-1/dir-1-1',
    'dir-1/dir-1-2',
    'dir-1/dir-1-2/dir-1-2-1',
    'dir-2',
    'dir-2/dir-2-1',
    'dir-2/dir-2-2',
    'dir-2/dir-2-1/dir-2-1-1',
    'dir-2/dir-2-2/dir-2-2-1',
    'dir-2/dir-2-1/dir-2-2-2',
    'dir-2/dir-2-1/dir-2-2-2/dir-2-2-2-1',
    'dir-3',
    'dir-3/dir-3-1',
    'dir-3/dir-3-2',
    'dir-3/dir-3-3',
    'dir-3/dir-3-2/dir-3-2-1',
    'dir-3/dir-3-3/dir-3-3-1'
];

Promise.mapSeries(dirs,function (a) {
   fs.mkdirAsync(a).then(function () {
       console.log('eee boy!!!')
   })
});