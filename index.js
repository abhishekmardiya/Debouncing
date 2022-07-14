async function searchMovie() {
  try {
    let movie = document.getElementById("query").value;

    let res = await fetch(
      `https://www.omdbapi.com/?apikey="enter your API key"=${movie}`
    );
    let data = await res.json();
    // console.log(data.Search);
    return data.Search;
  } catch (err) {
    console.log(err);
  }
}

async function main() {
  let data = await searchMovie();
  if (data === undefined) {
    return;
  }
  appendData(data);
  console.log(data);
}

let moviesDiv = document.getElementById("movies");
function appendData(data) {
  moviesDiv.innerHTML = null;
  data.map(function (el) {
    let p = document.createElement("p");
    p.innerText = el.Title;

    moviesDiv.append(p);
  });
}

//debounce code
let timerId;
function debounce() {
  if (timerId) {
    clearTimeout(timerId);
  }
  timerId = setTimeout(function () {
    main();
  }, 1000);
}
