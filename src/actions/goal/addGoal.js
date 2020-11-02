var axios = require('axios');

function addGoal(type){
    var data = JSON.stringify({"type":type});

    var config = {
        method: 'post',
        url: 'http://localhost:3000/addGoal',
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

module.exports = { addGoal }