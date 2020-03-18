
// Initialise variables for local temporary data storage
var page_history = {};
var click_history = [];
var mouseon_history = [];
var idle_history = 0;
var stored_keystrokes = {};
var path = window.location.pathname;
var page = path.split("/").pop();

//Run these given function while each page is loading
window.addEventListener('DOMContentLoaded', loadHandler);
window.onload = function () {

    setTimeout(function () {

        //Get value for page load data and save it temporarily
        let user_agent = navigator.userAgent;
        let user_language = navigator.language;
        let cookies_on = navigator.cookieEnabled;
        let Width = window.screen.width;
        let Height = window.screen.height;
        let width = window.innerWidth;
        let height = window.innerHeight;
        let connection_type = navigator.connection.effectiveType;
        localStorage.setItem("user-agent", user_agent);
        localStorage.setItem("user-language", user_language);
        localStorage.setItem("cookies", cookies_on);
        localStorage.setItem("screen-width", Width);
        localStorage.setItem("screen-height", Height);
        localStorage.setItem("window-width", width);
        localStorage.setItem("window-height", height);
        localStorage.setItem("connection", connection_type);

        localStorage.setItem("javascript_on", false);
        localStorage.setItem('css_on', window.getComputedStyle(document.getElementsByName('testButton')[0]).backgroundColor == 'rgb(75, 72, 72)');
        var data = {
            "current_page": page,
            "user_agent": user_agent,
            "user_language": user_language,
            "cookies_on": cookies_on,
            "screen_width": Width,
            "screen_height": Height,
            "window_width": width,
            "window_height": height,
            "connection_type": connection_type
        };
        
        //Use JS communication method - FETCH to send infomation to the endpoint for page_load data.
        fetch("https://us-central1-cse135-hw3-d14c9.cloudfunctions.net/collect?name=page", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'no-cors', // no-cors, *cors, same-origin
            // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'include', // include, *same-origin, omit
            // headers: {
            //   'Content-Type': 'application/json'
            //   // 'Content-Type': 'application/x-www-form-urlencoded',
            // },
            // redirect: 'follow', // manual, *follow, error
            // referrerPolicy: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        }).then(res => {
            console.log("page info is sent " + res.status);
        });
    }, 0);
}

//Function and event listerner handler
function loadHandler() {
    //image
    let image1 = document.querySelector('#image1');
    let image2 = document.querySelector('#image2');
    let image3 = document.querySelector('#image3');
    let image4 = document.querySelector('#image4');
    let image5 = document.querySelector('#image5');
    let image6 = document.querySelector('#image6');
    let image7 = document.querySelector('#image7');

    if (image1 != null) {
        image1.addEventListener('click', clickHandler);
        image1.addEventListener('mouseover', mouseOnHandler);
    }
    if (image2 != null) {
        image2.addEventListener('click', clickHandler);
        image2.addEventListener('mouseover', mouseOnHandler);
    }
    if (image3 != null) {
        image3.addEventListener('click', clickHandler);
        image3.addEventListener('mouseover', mouseOnHandler);
    }
    if (image4 != null) {
        image4.addEventListener('click', clickHandler);
        image4.addEventListener('mouseover', mouseOnHandler);
    }
    if (image5 != null) {
        image5.addEventListener('click', clickHandler);
        image5.addEventListener('mouseover', mouseOnHandler);
    }
    if (image6 != null) {
        image6.addEventListener('click', clickHandler);
        image6.addEventListener('mouseover', mouseOnHandler);
    }
    if (image7 != null) {
        image7.addEventListener('click', clickHandler);
        image7.addEventListener('mouseover', mouseOnHandler);
    }

    //table
    let table = document.querySelector('#table');
    let list1 = document.querySelector('#list1');
    let list2 = document.querySelector('#list2');
    let list3 = document.querySelector('#list3');
    if (table != null) {
        table.addEventListener('mouseover', tablemouseOnHandler);
    }
    if (list1 != null) {
        list1.addEventListener('mouseover', list1mouseOnHandler);
    }
    if (list2 != null) {
        list2.addEventListener('mouseover', list2mouseOnHandler);
    }
    if (list3 != null) {
        list3.addEventListener('mouseover', list3mouseOnHandler);
    }

    //externals
    let frame1 = document.querySelector('#frame1');
    let frame2 = document.querySelector('#frame2');
    let video1 = document.querySelector('#video1');
    let ex_image1 = document.querySelector('#ex_image1');
    let ex_image2 = document.querySelector('#ex_image2');
    let ex_image3 = document.querySelector('#ex_image3');
    let link1 = document.querySelector('#link1');
    let link2 = document.querySelector('#link2');
    let link3 = document.querySelector('#link3');
    let link4 = document.querySelector('#link4');
    let link5 = document.querySelector('#link5');
    if (frame1 != null) {
        frame1.addEventListener('click', clickHandler);
        frame1.addEventListener('mouseover', mouseOnHandler);
    }
    if (frame2 != null) {
        frame2.addEventListener('click', clickHandler);
        frame2.addEventListener('mouseover', mouseOnHandler);
    }
    if (video1 != null) {
        video1.addEventListener('click', clickHandler);
        video1.addEventListener('mouseover', mouseOnHandler);
    }
    if (ex_image1 != null) {
        ex_image1.addEventListener('click', clickHandler);
        ex_image1.addEventListener('mouseover', mouseOnHandler);
    }
    if (ex_image2 != null) {
        ex_image2.addEventListener('click', clickHandler);
        ex_image2.addEventListener('mouseover', mouseOnHandler);
    }
    if (ex_image3 != null) {
        ex_image3.addEventListener('click', clickHandler);
        ex_image3.addEventListener('mouseover', mouseOnHandler);
    }
    if (link1 != null) {
        link1.addEventListener('click', clickHandler);
        link1.addEventListener('mouseover', mouseOnHandler);
    }
    if (link2 != null) {
        link2.addEventListener('click', clickHandler);
        link2.addEventListener('mouseover', mouseOnHandler);
    }
    if (link3 != null) {
        link3.addEventListener('click', clickHandler);
        link3.addEventListener('mouseover', mouseOnHandler);
    }
    if (link4 != null) {
        link4.addEventListener('click', clickHandler);
        link4.addEventListener('mouseover', mouseOnHandler);
    }
    if (link5 != null) {
        link5.addEventListener('click', clickHandler);
        link5.addEventListener('mouseover', mouseOnHandler);
    }

    //form



    window.addEventListener('scroll', scrollHandler);

    //Keystrokes
    if (window.location.pathname.split('/').pop() == 'form.html') {
        document.querySelectorAll('input').forEach(element => {
            element.addEventListener('keydown', event => {
                //local
                var stored_keystrokes = JSON.parse(localStorage.getItem("keystrokes"));
                if (!stored_keystrokes){
                    stored_keystrokes = []
                }
                stored_keystrokes.push("User is typing on Page " + window.location.pathname.split('/').pop()+' in textbox: '+event.target.name+' -- '+event.key);
                localStorage.setItem("keystrokes", JSON.stringify(stored_keystrokes));

                //remote
                if (stored_keystrokes[event.target.name]) {
                    stored_keystrokes[event.target.name] += event.key;
                    //console.log(stored_keystrokes);
                }
                else {
                    stored_keystrokes[event.target.name] = event.key;
                    //console.log(stored_keystrokes);
                }
                var date = new Date();
                page_history[date.toString()] = "User is typing on Page " + window.location.pathname.split('/').pop() + ' in textbox: ' + event.target.name + ' -- ' + stored_keystrokes[event.target.name];    
            })
        });
        document.querySelectorAll('textarea').forEach(element => {
            element.addEventListener('keydown', event => {
                //local
                var stored_keystrokes = JSON.parse(localStorage.getItem("keystrokes"));
                if (!stored_keystrokes){
                    stored_keystrokes = []
                }
                stored_keystrokes.push("User is typing on Page " + window.location.pathname.split('/').pop()+' in textbox: '+event.target.name+' -- '+event.key);
                localStorage.setItem("keystrokes", JSON.stringify(stored_keystrokes));

                //remote
                if (stored_keystrokes[event.target.name]) {
                    stored_keystrokes[event.target.name] += event.key;
                    //console.log(stored_keystrokes);
                }
                else {
                    stored_keystrokes[event.target.name] = event.key;
                    //console.log(stored_keystrokes);
                }
                var date = new Date();
                page_history[date.toString()] = "User is typing on Page " + window.location.pathname.split('/').pop() + ' in textbox: ' + event.target.name + ' -- ' + stored_keystrokes[event.target.name];    
            })
        });
        document.querySelectorAll('select').forEach(element => {
            element.addEventListener('keydown', event => {
                //local
                var stored_keystrokes = JSON.parse(localStorage.getItem("keystrokes"));
                if (!stored_keystrokes){
                    stored_keystrokes = []
                }
                stored_keystrokes.push("User is typing on Page " + window.location.pathname.split('/').pop()+' in textbox: '+event.target.name+' -- '+event.key);
                localStorage.setItem("keystrokes", JSON.stringify(stored_keystrokes));

                //remote
                if (stored_keystrokes[event.target.name]) {
                    stored_keystrokes[event.target.name] += event.key;
                    //console.log(stored_keystrokes);
                }
                else {
                    stored_keystrokes[event.target.name] = event.key;
                    //console.log(stored_keystrokes);
                }
                var date = new Date();
                page_history[date.toString()] = "User is typing on Page " + window.location.pathname.split('/').pop() + ' in textbox: ' + event.target.name + ' -- ' + stored_keystrokes[event.target.name];    
            })
        });
    }

    //When unloading, send history data to the endpoint.
    window.addEventListener('beforeunload', (event) => {
        event.preventDefault();
        
        // Chrome requires returnValue to be set.
        event.returnValue = '';
        
        //process data and prepare to send to the endpoint /collect
        var idletime = {};
        idletime['page'] = page;
        idletime['value'] = "In total:  " + idle_history * 2 + " seconds";
        var date = new Date();
        page_history[date.toString()] = "User is leaving from Page " + window.location.pathname.split('/').pop();
        var clickData = {};
        clickData["page"] = page;
        clickData["value"] = click_history;
        var mouseonData = {};
        mouseonData["page"] = page;
        mouseonData["value"] = mouseon_history;


        //fetch the data to endpoint
        Promise.all([
            fetch("https://us-central1-cse135-hw3-d14c9.cloudfunctions.net/collect?name=idle", {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'no-cors', // no-cors, *cors, same-origin
                // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'include', // include, *same-origin, omit
                // headers: {
                //   'Content-Type': 'application/json'
                //   // 'Content-Type': 'application/x-www-form-urlencoded',
                // },
                // redirect: 'follow', // manual, *follow, error
                // referrerPolicy: 'no-referrer', // no-referrer, *client
                body: JSON.stringify(idletime) // body data type must match "Content-Type" header
            }).then(res => {
                console.log("page idle info is sent " + res.status);
            }),
            fetch("https://us-central1-cse135-hw3-d14c9.cloudfunctions.net/collect?name=history", {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'no-cors', // no-cors, *cors, same-origin
                // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'include', // include, *same-origin, omit
                // headers: {
                //   'Content-Type': 'application/json'
                //   // 'Content-Type': 'application/x-www-form-urlencoded',
                // },
                // redirect: 'follow', // manual, *follow, error
                // referrerPolicy: 'no-referrer', // no-referrer, *client
                body: JSON.stringify(page_history) // body data type must match "Content-Type" header
            }).then(res => {
                console.log("page history is sent " + res.status);
            }),
            fetch("https://us-central1-cse135-hw3-d14c9.cloudfunctions.net/collect?name=click", {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'no-cors', // no-cors, *cors, same-origin
                // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'include', // include, *same-origin, omit
                // headers: {
                //   'Content-Type': 'application/json'
                //   // 'Content-Type': 'application/x-www-form-urlencoded',
                // },
                // redirect: 'follow', // manual, *follow, error
                // referrerPolicy: 'no-referrer', // no-referrer, *client
                body: JSON.stringify(clickData) // body data type must match "Content-Type" header
            }).then(res => {
                console.log("page click info is sent " + res.status);
            }),
            fetch("https://us-central1-cse135-hw3-d14c9.cloudfunctions.net/collect?name=mouseon", {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'no-cors', // no-cors, *cors, same-origin
                // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'include', // include, *same-origin, omit
                // headers: {
                //   'Content-Type': 'application/json'
                //   // 'Content-Type': 'application/x-www-form-urlencoded',
                // },
                // redirect: 'follow', // manual, *follow, error
                // referrerPolicy: 'no-referrer', // no-referrer, *client
                body: JSON.stringify(mouseonData) // body data type must match "Content-Type" header
            }).then(res => {
                console.log("page mouseon info is sent " + res.status);
            })
        ])       

    });

    //Idle Time
    window.addEventListener('mousemove', idleHandler);
    window.addEventListener('click', idleHandler);
    window.addEventListener('mouseup', idleHandler);
    window.addEventListener('mousedown', idleHandler);
    window.addEventListener('keydown', idleHandler);
    window.addEventListener('keypress', idleHandler);
    window.addEventListener('keyup', idleHandler);
    window.addEventListener('change', idleHandler);
    window.addEventListener('scroll', idleHandler);
    window.addEventListener('resize', idleHandler);
    window.addEventListener('submit', idleHandler);
    window.addEventListener('mouseenter', idleHandler);
    var timer = null;
    function idleHandler() {
        if (timer) clearTimeout(timer);
        timer = setTimeout(function (t) {
            //local
            var stored_idletime = JSON.parse(localStorage.getItem("idletime"));
            if (!stored_idletime){
                stored_idletime=[];
            }
            stored_idletime.push("User has been idle on Page " + window.location.pathname.split('/').pop()+' for 2 seconds.');
            localStorage.setItem("idletime", JSON.stringify(stored_idletime));

            console.log("idle");
            //remote
            idle_history++;
            var date = new Date();
            page_history[date.toString()] = "User has been idle on Page " + window.location.pathname.split('/').pop() + ' for 2 seconds.';
        }, 2000);
    }

}


//Different event handler and save the value in local temporarily
function clickHandler(event) {
    //local
    var stored = JSON.parse(localStorage.getItem("click"));
    if (!stored){
        stored=[];
    }
    stored.push('User clicked '+event.target.id+' button on Page '+window.location.pathname.split('/').pop());
    localStorage.setItem("click", JSON.stringify(stored));
    console.log('User clicked '+event.target.id+' button on Page '+window.location.pathname.split('/').pop());
    
    //remote
    click_history.push(event.target.id);
    var date = new Date();
    page_history[date.toString()] = 'User clicked button ' + event.target.id;
}


function mouseOnHandler(event) {
    //local
    //alert('you have moused over a test image(only one image is test image in this page)');
    var stored_mouseon = JSON.parse(localStorage.getItem("mouse"));
    if (!stored_mouseon){
        stored_mouseon = []
    }
    stored_mouseon.push("User mouse on " + event.target.id);
    localStorage.setItem("mouse", JSON.stringify(stored_mouseon));
    console.log("User mouse on " + event.target.id)
    //remote
    mouseon_history.push(event.target.id);
    var date = new Date();
    page_history[date.toString()] = "User mouse on " + event.target.id;
}

function tablemouseOnHandler(event) {
    //local
    //alert('you have moused over a test image(only one image is test image in this page)');
    var stored_mouseon = JSON.parse(localStorage.getItem("mouse"));
    if (!stored_mouseon){
        stored_mouseon = []
    }
    stored_mouseon.push("User mouse on table");
    localStorage.setItem("mouse", JSON.stringify(stored_mouseon));
    console.log("User mouse on table")
    //remote
    mouseon_history.push(event.target.id);
    var date = new Date();
    page_history[date.toString()] = "User mouse on table";
    document.querySelector('#table').removeEventListener('mouseover', tablemouseOnHandler);
}


function list1mouseOnHandler(event) {
    //local
    //alert('you have moused over a test image(only one image is test image in this page)');
    var stored_mouseon = JSON.parse(localStorage.getItem("mouse"));
    if (!stored_mouseon){
        stored_mouseon = []
    }
    stored_mouseon.push("User mouse on list 1");
    localStorage.setItem("mouse", JSON.stringify(stored_mouseon));
    console.log("User mouse on list 1")
    //remote
    mouseon_history.push(event.target.id);
    var date = new Date();
    page_history[date.toString()] = "User mouse on list 1";
    document.querySelector('#list1').removeEventListener('mouseover', list1mouseOnHandler);
}

function list2mouseOnHandler(event) {
    //local
    //alert('you have moused over a test image(only one image is test image in this page)');
    var stored_mouseon = JSON.parse(localStorage.getItem("mouse"));
    if (!stored_mouseon){
        stored_mouseon = []
    }
    stored_mouseon.push("User mouse on list 2");
    localStorage.setItem("mouse", JSON.stringify(stored_mouseon));
    console.log("User mouse on list 2")
    //remote
    mouseon_history.push(event.target.id);
    var date = new Date();
    page_history[date.toString()] = "User mouse on list 2";
    document.querySelector('#list2').removeEventListener('mouseover', list2mouseOnHandler);
}

function list3mouseOnHandler(event) {
    //local
    //alert('you have moused over a test image(only one image is test image in this page)');
    var stored_mouseon = JSON.parse(localStorage.getItem("mouse"));
    if (!stored_mouseon){
        stored_mouseon = []
    }
    stored_mouseon.push("User mouse on list 3");
    localStorage.setItem("mouse", JSON.stringify(stored_mouseon));
    console.log("User mouse on list 3")
    //remote
    mouseon_history.push(event.target.id);
    var date = new Date();
    page_history[date.toString()] = "User mouse on list 3";
    document.querySelector('#list3').removeEventListener('mouseover', list3mouseOnHandler);
}

function scrollHandler(event) {
    //local
    var stored_scroll = JSON.parse(localStorage.getItem("scroll"));
    if (!stored_scroll){
        stored_scroll = []
    }
    stored_scroll.push("User scrolled on Page " + window.location.pathname.split('/').pop());
    localStorage.setItem("scroll", JSON.stringify(stored_scroll));
    //only record once in each page, otherwise the record will be messed up
    //window.removeEventListener('scroll', scrollHandler);
    console.log("scroll");
    //remote
    var date = new Date();
    page_history[date.toString()] = "User scroll on Page " + window.location.pathname.split('/').pop();
    window.removeEventListener('scroll', scrollHandler);
}

