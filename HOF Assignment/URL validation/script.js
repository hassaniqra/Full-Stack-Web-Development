const ragx = /^(https?:\/\/)?([\da-z\.-]+\.[a-z\.]{2,6}|[\d\.]+)([\/:?=&#]{1}[\da-z\.-]+)*[\/\?]?$/igm;

const url = "https://drive.google.com/file/d/1Xoy9EwDYKSC5QQZ541xAaNkzbNkeREE1/view";


//condition to match the url and log it
if (url.match(ragx)) {
    console.log("url matched successfully");
}
else{
    console.log("enter a valid url");
}