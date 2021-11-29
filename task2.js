// API Read Access Token (v4 auth): eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTQyMDBjYTQ5ZDNhY2E5YWVmOWYzZWMzYmEzZWExYSIsInN1YiI6IjYxOWI5YTA0YmU3ZjM1MDAyYWQ1Njg0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nnQnFISK0DEd5pwlRAG_BK5XvmJBxQ3L41qkTz9n2ZU
// Example API Request            : https://api.themoviedb.org/3/movie/550?api_key=754200ca49d3aca9aef9f3ec3ba3ea1a
// API Key (v3 auth)              : 754200ca49d3aca9aef9f3ec3ba3ea1a 


var search=document.getElementById("search");
var imgArr=document.getElementsByClassName("img");
var infoArr=document.getElementsByClassName("info");

search.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    console.log("pressed enter");
    getQuery(search.value)
        .then(function(results){
            console.log("results :",results);
            var filteredResults=results.filter(result=>result.backdrop_path);
            for(let i=0; i<8;i++){
                imgArr[i].src="https://image.tmdb.org/t/p/w500"+filteredResults[i].backdrop_path;
                infoArr[i].innerHTML=`<strong>${filteredResults[i].original_title}</strong><br><br>
                                      IMDB Rating  : ${filteredResults[i].vote_average}<br>
                                      Release-date : ${filteredResults[i].release_date}`;
            }
        })
        .catch(err=>console.error(err));
  }
}); 

const getQuery=async function(query){ 
    const response=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=754200ca49d3aca9aef9f3ec3ba3ea1a&query=${query}`);
    const data=await response.json();
    if(response.status!==200){
        throw new Error("===== Can't reach TMDB =====");
    }
    return data.results;
}

const getQueryDetails=async function(query){ 
    const response=await fetch(`https://api.themoviedb.org/3/movie/${ID}?api_key=754200ca49d3aca9aef9f3ec3ba3ea1a&query=${query}`);
    const data=await response.json();
    if(response.status!==200){
        throw new Error("===== Can't reach TMDB =====");
    }
    return data.results;
}

  
// api to get response
    // fetch('https://api.themoviedb.org/3/search/movie?api_key=754200ca49d3aca9aef9f3ec3ba3ea1a&query=avengers')
    // .then(response => response.json())
    // .then(data => console.log(data));

// api to get image
//     fetch('https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg');

// api to get details
    // fetch('https://api.themoviedb.org/3/movie/299534?api_key=754200ca49d3aca9aef9f3ec3ba3ea1a&query=avengers')
    // .then(response => response.json())
    // .then(data => console.log(data));
  