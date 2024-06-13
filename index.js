const express = require('express') //require module syntax : CommonJS
// import express from "express";
require('dotenv').config(); //importing dotenv
const app = express() 
const port = 3000 //Virtual ports : listen to this port 


const githubData = {
    "login": "samandeep007",
    "id": 115439036,
    "node_id": "U_kgDOBuF1vA",
    "avatar_url": "https://avatars.githubusercontent.com/u/115439036?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/samandeep007",
    "html_url": "https://github.com/samandeep007",
    "followers_url": "https://api.github.com/users/samandeep007/followers",
    "following_url": "https://api.github.com/users/samandeep007/following{/other_user}",
    "gists_url": "https://api.github.com/users/samandeep007/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/samandeep007/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/samandeep007/subscriptions",
    "organizations_url": "https://api.github.com/users/samandeep007/orgs",
    "repos_url": "https://api.github.com/users/samandeep007/repos",
    "events_url": "https://api.github.com/users/samandeep007/events{/privacy}",
    "received_events_url": "https://api.github.com/users/samandeep007/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 8,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2022-10-10T02:26:48Z",
    "updated_at": "2024-03-12T03:33:06Z"
}

app.get('/', (req, res) => {  //app aap home route par listen karo, agar request aati hai to response mei hello world send krdo
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Welcome to Twitter')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at 3Suniverse</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Pixel Corporation</h2>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(port, () => { //process.env + .your_variable
  console.log(`Example app listening on port ${port}`)
})