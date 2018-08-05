var hereCallJS = document.getElementById('HereCall');
var refData = firebase.dataBase().ref().child('text');
refData.on('value', snap => hereCallJS.innerText = snap.val());
