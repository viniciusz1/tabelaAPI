let userName = document.location.search;

a = userName = userName.substr(1, userName.length);

function getUserGithub(a) {
    fetch('https://fake-github2.herokuapp.com/api/search/' + userName)
        .then(function (resultado) {
            resultado.json().then(function (data) {
                console.log('User Data:', data);
                showUserGithub(data);
            });
        }).catch(function (erro) {
            console.log('erro:', erro);
        });
}
getUserGithub();

function showUserGithub(user, repositorio) {
    if (!user) return;
    let divName = document.createElement('div');
    divName.innerText = user.name;
    if(user.name == null){
        divName.innerText = 'Sem nome'
    }
    let divImagem = document.createElement('img');
    divImagem.src = user.avatar_url;

    let divUser = document.createElement('div');
    divUser.innerText = user.login;

    document.body.appendChild(divImagem);
    document.body.appendChild(divName);
    document.body.appendChild(divUser);



}

function getUserReposGithub(a) {
    fetch('https://fake-github2.herokuapp.com/api/search/' + userName + '/repos')
        .then(function (resultado) {
            resultado.json().then(function (dataRepositorio) {
                dataRepositorio.forEach(function(element) {
                    let linha = document.createElement('div');
                    let link = document.createElement('a')
                    link.href = element.clone_url
                    link.innerText = element.clone_url
                    linha.innerText = element.name 

                    document.body.appendChild(linha)
                    document.body.appendChild(link)
                    
                console.log('Repositories Data:', element.name);
                console.log('Repositories Data:', dataRepositorio);
                });
            });
        }).catch(function (erro) {
            console.log('erro:', erro);
        });
}
getUserReposGithub();