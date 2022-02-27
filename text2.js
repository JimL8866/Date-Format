
import * as tool from "../Date-Format/index.js"


const dt = tool.dateFormate(new Date())

console.log(dt)

console.log("__________")

const htmlStr = "<h1 title= 'abc'>this is h1 lable <span>1234&nbsp;</span></h1>"
const str = tool.htmlEscape(htmlStr)
console.log(str)

console.log("__________")


const str2 = tool.htmlUnexcape(str)
console.log(str2)