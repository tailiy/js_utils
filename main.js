export function throttle(fn, wait) {
    var timer = null;
    return function(...args){
        if (timer) return;
        timer = setTimeout(() => {
            typeof fn === 'function' && fn(...args)
            timer = null
        }, wait);
    }
}