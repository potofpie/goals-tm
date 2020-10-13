var axios = require('axios');

async function changeText(setShowSaveComlete, savingCallBack,  text,firebaseId){
    savingCallBack(true);
    // console.log(text);
    // console.log(firebaseId);
    var data = JSON.stringify({"text":text,'firebaseId':firebaseId});

    var config = {
        method: 'post',
        url: 'http://localhost:3000/changeText',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
    };

    await axios(config)
    // .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    // })
    .catch(function (error) {
        console.log(error);
    });

    setTimeout(async function() { 
        await savingCallBack(false) 
        await setShowSaveComlete(true)
    }, 1500)
    setTimeout(function() { 
        setShowSaveComlete(false) 
    }, 1500)
}

module.exports = { changeText }