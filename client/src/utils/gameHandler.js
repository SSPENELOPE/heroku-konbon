class GameHandler {
//    async fetchGames() {
//         const url = "http://localhost:3001/games/allGames"
//         const response = await fetch(url, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             credentials: 'include'
//         });

//         if(response.ok) {
//             const games = await response.json();
//             return games;
//         } else {
//             console.log("There was an internal");
//         } 
//     }
}

export default new GameHandler;