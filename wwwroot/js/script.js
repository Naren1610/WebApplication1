// wwwroot/js/script.js

async function fetchData() {
    const response = await fetch('/api/values');
    const data = await response.json();
    console.log(data);
}

fetchData();
