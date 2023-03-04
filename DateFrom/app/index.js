import document from "document";
import { gettext } from "i18n";
import * as messaging from "messaging";


var data = document.getElementById("data");
var nome = document.getElementById("nome");
var avviso = document.getElementById("avviso");

var data1 = document.getElementById("data1");
var nome1 = document.getElementById("nome1");
var avviso1 = document.getElementById("avviso1");

var data2 = document.getElementById("data2");
var nome2 = document.getElementById("nome2");
var avviso2 = document.getElementById("avviso2");


function validaData(nome, day, evt, labelNome, labelAvviso, labelData) {
  let hername=null  
  let mydata=null;
  let data=null;
  
  if (evt.data.key === nome && evt.data.newValue) {
    hername= JSON.parse(evt.data.newValue);
    labelNome.text=hername.name;
  }
  
  if (evt.data.key === day && evt.data.newValue) {
    mydata = JSON.parse(evt.data.newValue);
    data=new Date(Date.now());
    mydata=new Date(mydata.name);
    if (data.getDate()==mydata.getDate())
      if (data.getMonth()==mydata.getMonth())
        labelAvviso.text=gettext('E\' il vostro anniversario');
      else
        labelAvviso.text=gettext('E\' il vostro meseversario');
    else
        labelAvviso.text=''
    mydata=new Date(mydata).getTime();
    mydata = Date.now() - mydata;
    mydata=Math.floor(mydata / (1000 * 3600 * 24));
    labelData.text=mydata;
  }
}

// Message is received
messaging.peerSocket.onmessage = evt => {
  console.log(`App received: ${JSON.stringify(evt)}`);
  validaData('nome', 'day', evt, nome, avviso, data);
  validaData('nome1', 'day1', evt, nome1, avviso1, data1);
  validaData('nome2', 'day2', evt, nome2, avviso2, data2);
};

// Message socket opens
messaging.peerSocket.onopen = () => {
  console.log("Copyright \u00A92020 Giulio Sorrentino<gsorre84@gmail.com>");
  console.log("This progam is dedicated to the bartress of Max Bar of Rivisondoli who make me happy");
  console.log("This program is inspired by commercial product \"Days Together\"");
  console.log("This program is distribuited under GPL. No Warranty is provided.");
  console.log("App Socket Open");
};

// Message socket closes
messaging.peerSocket.onclose = () => {
  console.log("App Socket Closed");
};
