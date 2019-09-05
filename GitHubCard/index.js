/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// avatar_url: "https://avatars3.githubusercontent.com/u/53534626?v=4"
// bio: null
// blog: ""
// company: null
// created_at: "2019-07-31T16:44:37Z"
// email: null
// events_url: "https://api.github.com/users/Lfritze/events{/privacy}"
// followers: 8
// followers_url: "https://api.github.com/users/Lfritze/followers"
// following: 7
// following_url: "https://api.github.com/users/Lfritze/following{/other_user}"
// gists_url: "https://api.github.com/users/Lfritze/gists{/gist_id}"
// gravatar_id: ""
// hireable: null
// html_url: "https://github.com/Lfritze"
// id: 53534626
// location: null
// login: "Lfritze"
// name: "Leighton Fritze"
// node_id: "MDQ6VXNlcjUzNTM0NjI2"
// organizations_url: "https://api.github.com/users/Lfritze/orgs"
// public_gists: 0
// public_repos: 20
// received_events_url: "https://api.github.com/users/Lfritze/received_events"
// repos_url: "https://api.github.com/users/Lfritze/repos"
// site_admin: false
// starred_url: "https://api.github.com/users/Lfritze/starred{/owner}{/repo}"
// subscriptions_url: "https://api.github.com/users/Lfritze/subscriptions"
// type: "User"
// updated_at: "2019-08-22T11:11:36Z"
// url: "https://api.github.com/users/Lfritze"




/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/
const masterCard = document.querySelector('.cards')

// function buildUserCard(username) 
  axios.get('https://api.github.com/users/Lfritze')
    .then((res) => {
      console.log(res.data);
      masterCard.appendChild(cardMaker(res.data));
    })
    .catch (error => {
      console.log("The data was not returned", error);
    })
  

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

const followersArray = [
  "darrenjcarrillo",
  "BaoPham92",
  "seanaleid",
  "mxxt1",
  "vishalicious213"
];

followersArray.forEach(dudeName => {
  axios.get(`https://api.github.com/users/${dudeName}`)
  .then(res => {
    masterCard.appendChild(cardMaker(res.data))
    console.log(res.data)
  })
  .catch (error => {
    console.log("The data was not returned", error);
  })
})




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

function cardMaker(object) {
  //define new elements
  const cardDiv = document.createElement('div');   // see class below
  const newPic = document.createElement('img');
  const cardInfoDiv = document.createElement('div'); // see class below
  const nameH3 = document.createElement('h3'); // see class below
  const userNameP = document.createElement('p'); // see class below
  const locationP = document.createElement('p');
  const profileP = document.createElement('p');
  const gitHubAddress = document.createElement('a');
  const followersP = document.createElement('p');
  const followingP = document.createElement('p');
  const usersBioPara = document.createElement('p');

  //add classes
  cardDiv.classList.add('card')
  cardInfoDiv.classList.add('card-info')
  nameH3.classList.add('name')
  userNameP.classList.add('username')

  //set content
newPic.src = object.avatar_url;
nameH3.textContent = object.name;
userNameP.textContent = object.login;
locationP.textContent = `Location: ${object.location || 'null'}`;
profileP.textContent = `Profile: `
gitHubAddress.textContent = object.html_url;
gitHubAddress.href = object.html_url; // Make it a link
followersP.textContent = `Followers: ${object.followers}`;
followingP.textContent = `Following: ${object.following}`;
usersBioPara.textContent = `Bio: ${object.bio || 'null'}`;
  
//structure
cardDiv.appendChild(newPic);
cardDiv.appendChild(cardInfoDiv);
  cardInfoDiv.appendChild(nameH3);
  cardInfoDiv.appendChild(userNameP);
  cardInfoDiv.appendChild(locationP);
  cardInfoDiv.appendChild(profileP);
  cardInfoDiv.appendChild(followersP);
  cardInfoDiv.appendChild(followingP);
  cardInfoDiv.appendChild(usersBioPara);
  profileP.appendChild(gitHubAddress)

  return cardDiv;
}
// buildCardMaker("Lfritze");

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
