// Write your JavaScript code here.
// Remember to pay attention to page loading!


window.addEventListener("load", function() {

let takeoffButton = document.getElementById("takeoff");

    takeoffButton.addEventListener('click', event => {
    var r = confirm('Confirm that the shuttle is ready for takeoff.');
        if (r == true){
            document.getElementById("flightStatus").innerHTML = 'Shuttle in flight.';
            document.getElementById('shuttleBackground').style.backgroundColor = 'blue';
            var shuttleHeight = document.getElementById('spaceShuttleHeight').innerHTML
            document.getElementById('spaceShuttleHeight').innerHTML = Number(shuttleHeight) + 10000;
        };
    });
let landingButton = document.getElementById('landing');
    
    landingButton.addEventListener('click', event => {
        var r = alert('The shuttle is landing. Landing gear engaged.');
        document.getElementById('flightStatus').innerHTML = 'The shuttle has landed.';
        document.getElementById('shuttleBackground').style.backgroundColor = 'green';
        document.getElementById('spaceShuttleHeight').innerHTML = 0;
        document.getElementById('rocket').style.top = '250px';
        document.getElementById('rocket').style.left = '200px';
    });

let abortButton = document.getElementById('missionAbort');

    abortButton.addEventListener('click', event => {
        var r = confirm('Confirm that you want to abort the mission.');
        if (r == true){
            document.getElementById('flightStatus').innerHTML = 'Mission aborted.';
            document.getElementById('shuttleBackground').style.backgroundColor = 'green';
            document.getElementById('spaceShuttleHeight').innerHTML = 0;
            document.getElementById('rocket').style.top = '250px';
            document.getElementById('rocket').style.left = '200px';
        };
    });

let upButton = document.getElementById('up');

    upButton.addEventListener('click', event => {
        var rocketPosition = document.getElementById('rocket').style.top;
        rocketPosition = rocketPosition.replace('px', '');
        rocketPosition = Number(rocketPosition) - 10;
        if (rocketPosition >= 0) {
            rocketPosition = String(rocketPosition + 'px');
            document.getElementById('rocket').style.top = rocketPosition;
            var shuttleHeight = document.getElementById('spaceShuttleHeight').innerHTML;
            document.getElementById('spaceShuttleHeight').innerHTML = Number(shuttleHeight) + 10000;
        };
    });

let downButton = document.getElementById('down');

downButton.addEventListener('click', event => {
    var rocketPosition = document.getElementById('rocket').style.top;
    rocketPosition = rocketPosition.replace('px', '');
    rocketPosition = Number(rocketPosition) + 10;
    if (rocketPosition <= 250) {
        rocketPosition = String(rocketPosition + 'px');
        document.getElementById('rocket').style.top = rocketPosition;
        var shuttleHeight = document.getElementById('spaceShuttleHeight').innerHTML;
        document.getElementById('spaceShuttleHeight').innerHTML = Number(shuttleHeight) - 10000;
    };
});


let leftButton = document.getElementById('left');

leftButton.addEventListener('click', event => {
    var rocketPosition = document.getElementById('rocket').style.left;
    rocketPosition = rocketPosition.replace('px', '');
    rocketPosition = Number(rocketPosition) - 10;
    if (rocketPosition >= 0) {
        rocketPosition = String(rocketPosition + 'px');
        document.getElementById('rocket').style.left = rocketPosition;
    };
});

let rightButton = document.getElementById('right');

rightButton.addEventListener('click', event => {
    var rocketPosition = document.getElementById('rocket').style.left;
    rocketPosition = rocketPosition.replace('px', '');
    rocketPosition = Number(rocketPosition) + 10;
    if (rocketPosition <= 400) {
        rocketPosition = String(rocketPosition + 'px');
        document.getElementById('rocket').style.left = rocketPosition;
    };
});

});