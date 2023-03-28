// try{
//     console.aula('how are you');
// }catch(err){
//     console.log('Fire something here');
//     console.log(err);
// }


// const age = 17;
// try {
//    if(age < 18) {
//       throw 'You are too young';
//    } else {
//       console.log('You are adult');
//    }
// } catch(err) {
//    console.log(err);
// }


// try {
//     throw 'An error'
//  } catch(err) {
//     console.log(err);
//  } finally {
//     console.log('I will run always');
//  }


// const anError = new Error('This is a error object');
// console.log(anError);

// const ageNew = 17;
// try {
//    if(ageNew < 18) {
//       throw new Error('You are too young');
//    } else {
//       console.log('You are adult');
//    }
// } catch(err) {
//    console.log(err);
// }


//object
var obj = {
    Bangladesh: 'Dhaka', 
    India: 'Delhi', 
    Nepal: 'Kathmandu', 
    Afganistan: 'Kabul', 
    Thailand: 'Bangkok'
 }
//  console.log(obj);


//  for in loop
let kabul = obj.Afganistan;
console.log(kabul);
//  for(name in obj) {
//     console.log(obj.Afganistan);
//  }

//obj.constructor === Constructor

// var capitals = Object.values(obj);
// console.log(capitals);

// capitals.map(function(elem){
//     console.log('Capital is :'+elem);
// })


var countries = Object.keys(obj);
countries.map(function(country){
    console.log('Country is :'+ country + ' capital is '+obj[country]);
})