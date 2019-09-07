function fetctchData() {
    fetch("https://api.github.com/users/MasoudMusa/repos")
        .then(response => response.json())
        .then(jsondata => {
            createDynamicDiv(jsondata);
        });
}

function createDynamicDiv(jsondata) {
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    var name = document.getElementById('name');
    var description = document.getElementById('description');
    description.innerHTML = lorem;
    // divClass.innerHtml = 'it works';
}


window.onload = fetctchData();