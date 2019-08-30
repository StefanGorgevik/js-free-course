const fetch = require("node-fetch")

// const second = () => {
//     setTimeout(() => {
//         console.log("From the second func!");
//     },2000)
// }

// const first = () => {
//     console.log("Hey there");
//     second();
//     console.log("The end!");
// }
// first();

// const getRecipe = () => {
//     setTimeout(()=> {
//         const recipeID = [523, 883, 432, 974];
//         console.log(recipeID)

//         setTimeout(id=> {
//             const recipe = {title: "Fresh tomato pasta" , publisher: "Stefan"};
//             console.log(`${id}: ${recipe.title}`);

//             setTimeout(publisher => {
//                 const recipe = {title: "Italian Piza", publisher: "Jonas"};
//                 console.log(recipe);
//             }, 1500, recipe.publisher)
//         }, 1500, recipeID[2]);
//     }, 1500);
// }

// getRecipe();

// const getIDs = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([523, 883, 432, 974]);
//     }, 1500)
// });

// const getRecipe = recID => {
//     return new Promise((resolve, reject) => {
//         setTimeout(ID => {
//             const recipe = {title: "Fresh tomato pasta" , publisher: "Stefan"};
//             resolve(`${ID}: ${recipe.title}`);
//         },1500, recID);
//     });
// };

// const getRelated = publisher => {
//     return new Promise((resolve, reject) => {
//         setTimeout(pub => {
//             const recipe = {title: "Italian Piza", publisher: "Jonas"};
//             resolve(`${pub}: ${recipe.title}`);
//         }, 1500, publisher)
//     })
// }

//consuming

// getIDs
// .then((IDs) => {
//     console.log("Then " + IDs);
//     return getRecipe(IDs[2]);
// })
// .then(recipe => {
//     console.log(recipe);
//     return getRelated("Jonas");
// })
// .then(recipe => {
//     console.log(recipe);
// })
// .catch(err => {
//     console.log("Error!");
// })


//async await

// async function getRecipesAW() {
//     const IDs = await getIDs;
//     console.log(IDs);
//     const recipe = await getRecipe(IDs[2]);
//     console.log(recipe);
//     const related = await getRelated("Jonas");
//     console.log(related);
//     return recipe;
// }

// getRecipesAW().then(result => {
//     console.log(result);
// });

// var getWeather = (woeid) => {
// fetch(`https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}/`)
// .then(result => {
//     console.log(result);
//     return result.json();
// })
// .then(data => {
//     const today = data.consolidated_weather[0];
//     console.log(`Temperatures in ${data.title} stay between ${today.min_temp} and ${today.max_temp}.`)
// })
// .catch(err => console.log(err))
    
// }
// getWeather(2487956);

async function getWeatherAW(woeid) {
    try{
        const result = await fetch
        (`https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}/`)
        const data = await result.json();
        const tomorrow = data.consolidated_weather[1];
        console.log(`Temperatures in ${data.title} stay between ${tomorrow.min_temp} and ${tomorrow.max_temp}.`)
    } catch(error) {
        console.log(error);
    }
  
}
getWeatherAW(2487956);

