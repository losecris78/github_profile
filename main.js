$(document).ready(function(){
const endpoint = 'https://api.github.com/users/losecris78';

fetch(endpoint)
.then(function(resposta){
    return resposta.json();
}).then(function(json){
    const nome = json.name;
    const followers = json.followers;
    const image = json.avatar_url;
    const login =json.login;
    const following = json.following;
    const repos = json.public_repos;
    const link = json.html_url;

    document.getElementById('profile_image').src = image;
    document.querySelector('#nome').innerHTML= nome;
    document.querySelector('#user_name').innerHTML = login;
    document.getElementById('following').innerHTML = following;
    document.getElementById('followers').innerHTML = followers;
    document.querySelector('#repos').innerHTML = repos;
    document.querySelector('#link_url').href = link;
})
})
