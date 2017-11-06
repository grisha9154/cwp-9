const Promise = require('bluebird');
const axios = require('axios');
const str1 = 'http://pokeapi.co/api/v2/pokemon/';
const str2 = 'http://pokeapi.co/api/v2/item/';
const str3 = 'http://pokeapi.co/api/v2/location/';
const task3 = ['http://pokeapi.co/api/v2/pokemon/1/','http://pokeapi.co/api/v2/pokemon/4/','http://pokeapi.co/api/v2/pokemon/7/'];
const task4 = ['http://pokeapi.co/api/v2/berry/1/','http://pokeapi.co/api/v2/berry/2/','http://pokeapi.co/api/v2/berry/3/','http://pokeapi.co/api/v2/berry/4/'];
axios.get('http://pokeapi.co/api/v2/pokemon/25/').then(function (resualt) {
    console.log("Name: "+resualt.data.name+" Weight: "+resualt.data.weight+" Height: "+resualt.data.height);
    let arr = createArray(30,str1);
   return Promise.all(arr.map(axios.get));
}).then(function (resualt) {
    console.log("Tasck2\n");
    for(let i=0;i<resualt.length;i++){
        console.log("Name: "+resualt[i].data.name);
    }
    return Promise.any(task3.map(axios.get));
}).then(function (resualt) {
    console.log('Task3, Name: ' + resualt.data.name);
    let arr1 = createArray(10,str1);
    let arr2 = createArray(10,str2);
    let arr3 = createArray(10,str3);
    return Promise.props({poke:  Promise.all(arr1.map(axios.get)).then(function (resualt) {
        return resualt;
    }),
    items:Promise.all(arr2.map(axios.get)).then(function (resualt) {
        return resualt;
    }),
    location:Promise.all(arr3.map(axios.get)).then(function (resualt) {
        return resualt;
    })});
}).then(function (resualt) {
    console.log('Poke Name: ');
    for(let i=0;i<resualt.poke.length;i++){
        console.log(resualt.poke[i].data.name);
    }
    console.log('Items: ');
    for(let i=0;i<resualt.items.length;i++){
        console.log(resualt.items[i].data.name);
    }
    console.log('Location: ');
    for(let i=0;i<resualt.location.length;i++){
        console.log(resualt.location[i].data.name);
    }
    return Promise.map(task4,function (berryURL) {
        return axios.get(berryURL);
    })
}).then(function (resualt) {
    console.log('Berry: ');
    for(let i=0;i<resualt.length;i++){
        console.log(resualt[i].data.name);
    }
});
function createArray(size,str) {
    let arr =[];
    for(let i=1;i<size;i++){
        arr.push(str+i+'/');
    }
    return arr;
}
