var axios = require('axios');

function deleteGoal(firebaseId){
    // console.log()
    var data = JSON.stringify({"firebaseId":firebaseId});

    var config = {
        method: 'post',
        url: 'http://localhost:3000/deleteGoal',
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

module.exports = { deleteGoal }