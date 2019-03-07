function main(args) {
    let words = args.text.split(" ")
    let map = {}
    let n = 0 
    for(word of words) {
       n = map[word] 
       map[word] = n ? n+1 : 1
    }
    return map
}
module.exports.main = main
