function isdefwinname() {
    if ( window.name ) {
        var winname = JSON.parse(window.name);
        console.log(winname);
        if ( winname.uid && winname.gid ) {
            return true;
        }
    } else {
        return false;
    }
}

function getwinname() {
    return JSON.parse(window.name);
}