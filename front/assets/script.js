const url = "http://localhost:5000/md5"
let inputUser = document.querySelector(".inputUser");
let calculate = document.querySelector(".calculate");
let resultData = document.querySelector(".result");

calculate.addEventListener('click', getEncryption);

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "input": "NamaSayaIan"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

function status(response) {
    if (response.status !== 200) {
      console.log("Error : " + response.status);
      return Promise.reject(new Error(response.statusText));
    } else {
      return Promise.resolve(response);
    }
}
function json(response) {
    return response.json();
}
function error(error) {
    console.log("Error : " + error);
}

const fetchAPI = (url, data) => {
    let send = {input : data};
    return fetch("http://6408ebac5833.ngrok.io/md5", requestOptions)
        .then(status)
        .then(json)
        .catch(error)
};

function getEncryption(event){
    event.preventDefault();
    let data = inputUser.value;
    console.log(data);
    fetchAPI("/md5","NamaSayaIan")
    .then(result => {
        showResult(result);
    })
    .catch(error =>  {
        console.log(error);
    })
}

function showResult(result){
    console.log(result);
    // resultData.value =Nama result.data;
}

// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// var raw = JSON.stringify({
//   "input": "NamaSayaIan"
// });

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };

// fetch("http://192.168.100.136:5000/md5", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));