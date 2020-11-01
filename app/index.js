import document from "document";
import { gettext } from "i18n";
import * as messaging from "messaging";

let data = document.getElementById("data");
let nome = document.getElementById("nome");

let data1 = document.getElementById("data1");
let nome1 = document.getElementById("nome1");

let data2 = document.getElementById("data2");
let nome2 = document.getElementById("nome2");

// Message is received
messaging.peerSocket.onmessage = evt => {
  console.log(`App received: ${JSON.stringify(evt)}`);
  if (evt.data.key === "nome" && evt.data.newValue) {
    let hername= JSON.parse(evt.data.newValue);
      nome.text=hername.name;
  }
  
  if (evt.data.key === "day" && evt.data.newValue) {
    let mydata = JSON.parse(evt.data.newValue);
    mydata=new Date(mydata.name).getTime();
    mydata = Date.now() - mydata;
    mydata=Math.floor(mydata / (1000 * 3600 * 24));
    data.text=mydata;
  }

  console.log(`App received: ${JSON.stringify(evt)}`);
  if (evt.data.key === "nome1" && evt.data.newValue) {
    let hername1= JSON.parse(evt.data.newValue);
      nome1.text=hername1.name;
  }
  
  if (evt.data.key === "day1" && evt.data.newValue) {
    let mydata1 = JSON.parse(evt.data.newValue);
    mydata1=new Date(mydata1.name).getTime();
    mydata1 = Date.now() - mydata1;
    mydata1=Math.floor(mydata1 / (1000 * 3600 * 24));
    data1.text=mydata1;
  }

  console.log(`App received: ${JSON.stringify(evt)}`);
  if (evt.data.key === "nome2" && evt.data.newValue) {
    let hername2= JSON.parse(evt.data.newValue);
      nome2.text=hername2.name;
  }
  
  if (evt.data.key === "day2" && evt.data.newValue) {
    let mydata2 = JSON.parse(evt.data.newValue);
    mydata2=new Date(mydata2.name).getTime();
    mydata2 = Date.now() - mydata2;
    mydata2=Math.floor(mydata2 / (1000 * 3600 * 24));
    data2.text=mydata2;
  }

  

};



// Message socket opens
messaging.peerSocket.onopen = () => {
  console.log("App Socket Open");
};

// Message socket closes
messaging.peerSocket.onclose = () => {
  console.log("App Socket Closed");
};

console.log("Copyright \u00A92020 Giulio Sorrentino<gsorre84@gmail.com>");
console.log("This program is inspired by commercial product \"Days Together\"");
console.log("This program is distribuited under GPL. No Warranty is provided.");