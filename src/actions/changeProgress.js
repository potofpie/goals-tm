var axios = require('axios');

function changeProgress(progress,firebaseId){
    var data = JSON.stringify({"progress":progress,'firebaseId':firebaseId});
    // console.log('progress ' + progress)
    // console.log(firebaseId)
    var config = {
        method: 'post',
        url: 'http://localhost:3000/changeProgress',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
    };

    axios(config)
    // .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    // })
    .catch(function (error) {
        console.log(error);
    });
}

module.exports = { changeProgress }