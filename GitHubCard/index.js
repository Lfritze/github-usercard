/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const masterCard = document.querySelector('.cards');
  axios.get('https://api.github.com/users/Lfritze')
    .then((response) => {
      console.log(response.data);
      masterCard.appendChild(cardBuilder(response.data));
    })
    .catch (error => {
      console.log('Error in returning data', error);
    })

const followersArray = [
  'vivaCode',
  'BlueImport',
  'MrT3313',
  "BaoPham92",
  "mxxt1",
];

followersArray.forEach(peopleName => {
  axios.get(`https://api.github.com/users/${peopleName}`)
  .then(response => {
    masterCard.appendChild(cardBuilder(response.data))
    console.log(response.data)
  })
  .catch (error => {
    console.log("The data was not returned", error);
  })
})


// Step 3 *****************************************
//accepts a single object as its only argument

function cardBuilder(object) {
  //DEFINE - document.createElement()
  const cardDiv = document.createElement('div'); //<div class="card">
    //carDiv children
    const newPic = document.createElement('img'); //<img src={image url of user} />
    const cardInfoDiv = document.createElement('div'); // <div class="card-info">
      //Children of cardInfoDiv
      const nameH3 = document.createElement('h3'); //<h3 class="name">{users name}</h3>
      const userNameP = document.createElement('p');// <p class="username">{users user name}
      const locationP = document.createElement('p'); //<p>Location: {users location}</p>
      const profileP = document.createElement('p');//<p>Profile:
        // Child of profile
        const gitHubAddress = document.createElement('a');  //<a href={address to users github page}>{address to users github page}</a></p> 
      const followersP = document.createElement('p');//<p>Followers: {users followers count}</p>
      const followingP = document.createElement('p')//<p>Following: {users following count}</p>
      const usersBioP = document.createElement('p');//<p>Bio: {users bio}</p>

        // SET CLASS NAMES - .classList.add()
  // classes include: card, card-info, name, username.
  // card = cardDiv, card-info = cardInfoDiv, name = nameH3, username = userNameP
  cardDiv.classList.add('card');
  cardInfoDiv.classList.add('card-info');
  nameH3.classList.add('name');
  userNameP.classList.add('username');

    // SET CONTENT - .textContent = object.thing
  // newPic.src, nameH3, userNameP, locationP, profileP, gitHubAddress, followersP, followingP, usersBioP
  //use object as argument
  newPic.src = object.avatar_url;
  nameH3.textContent = object.name;
  userNameP.textContent = object.login; //login: "Lfritze"
  locationP.textContent = `Location: ${object.location || 'null'}`; 
  profileP.textContent = `Profile: `;
  gitHubAddress.textContent = object.html_url; // fixing link here ??
  gitHubAddress.href = object.html_url;
  followersP.textContent = `Followers: ${object.followers}`;
  followingP.textContent = `Following ${object.following}`;
  usersBioP.textContent = `Bio: ${object.bio || 'null'}`;

  // SET STRUCTURE - appendChild()
  cardDiv.appendChild(newPic);
  cardDiv.appendChild(cardInfoDiv);
    cardInfoDiv.appendChild(nameH3);
    cardInfoDiv.appendChild(userNameP);
    cardInfoDiv.appendChild(locationP);
    cardInfoDiv.appendChild(profileP);
      profileP.appendChild(gitHubAddress); // child of profileP
    cardInfoDiv.appendChild(followersP);
    cardInfoDiv.appendChild(followingP);
    cardInfoDiv.appendChild(usersBioP);
    






  return cardDiv;
}

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:



<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

//******************************************************* */
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   // See file /GitHubCard/GitHubAxiosInfo.md/
   I copied and pasted what was returned in the console in my browser
//****************************************************** */
  // Skip to Step 3.

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/