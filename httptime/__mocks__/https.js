var observer = {
   on(event, fun) {
       observer[event] = fun
    }
}

function get(url, handler) {
    handler(observer)
    observer.data(url)
    observer.end()
}

module.exports.get = get
