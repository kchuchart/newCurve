const frameModule = require("ui/frame")

exports.backMenu =()=>{
let topmost = frameModule.topmost()
topmost.navigate('views/home/home')
}