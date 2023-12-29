fetch('https://api.github.com/users/s-howe/repos')
  .then(response => response.json())
  .then(data => displayRepos(data));

function displayRepos(repos) {
    const ul = document.querySelector('#repos');
    for (let repo of repos) {
        let li = document.createElement('li');
        li.innerHTML = `<a href="${repo.html_url}">${repo.name}</a>`;
        ul.appendChild(li);
    }
    }