
const str = 'http://pokeapi.co/api/v2/pokemon/';
const axios = require('axios');
const lastStr = str+1+'/';
axios.get(lastStr).then((resualt)=>{
    console.log('eee boy!!!');
});