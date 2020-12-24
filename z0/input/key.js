export var keysDown = [];

export function isKeyDown(key) {
    return keysDown.indexOf(key) != -1;
}

document.onkeydown = (e) => {
    let key = e.key.toLowerCase();
    if(keysDown.indexOf(key) !== -1) return;

    keysDown.push(e.key.toLowerCase())
};

document.onkeyup = (e) => {
    let key = e.key.toLowerCase();
    
    // Using Array.indexOf would be more optimal, but does not resolve duplicate key indexes
    for(let i = 0, n = keysDown.length; i < n; i++) {
        if(key == keysDown[i]) {
            keysDown.splice(i, 1);
        }
    }
};


