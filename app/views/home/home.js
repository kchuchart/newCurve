const frameModule = require("ui/frame")
exports.pageLoaded = (args)=>{
    let page = args.object
}

exports.myRoom =()=>{
let topmost = frameModule.topmost()
topmost.navigate('views/myroom/myroom')
}

exports.takePhoto =()=>{
let topmost = frameModule.topmost()
topmost.navigate('views/takephoto/takephoto')
}

exports.register =()=>{
let topmost = frameModule.topmost()
topmost.navigate('views/register/register')
}

exports.logOut = ()=> {
    console.log('exitApp')
    android.os.Process.killProcess(android.os.Process.myPid())
};