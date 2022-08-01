let agent = navigator.userAgent
let data = agent.split("(");
if(data[1].charAt(0) == 'W'){
    alert("windows");
}
if(data[1].charAt(0) == 'L'){
    alert("andriod");
}
if(data[1].charAt(0) == 'i'){
    alert("ios");
}