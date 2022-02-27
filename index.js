 function dateFormate(dataStr) {
    const dt = new Date(dataStr);

    const y = dt.getFullYear();
    const m = padZero(dt.getMonth() + 1);
    const d = padZero(dt.getDate());

    const hh = padZero(dt.getHours());
    const mm = padZero(dt.getMinutes());
    const ss = padZero(dt.getSeconds());

    return `${d}-${m}-${y} ${hh}:${mm}:${ss}`

}

function padZero(n) {
    return n > 9 ? n : "0" + n
}


function htmlEscape (htmlstr) {
    return htmlstr.replace(/<|>|"|&/g, (match)=>{
        switch(match){
            case "<":
                return "&lt;"
            case ">":
                return "&gt;"
            case '"':
                return "&quot;"
            case "&":
                return "&amp;"
        }
    })
}

function htmlUnexcape(str) {
    return str.replace(/&lt;|&gt;|&quot;|&amp;/g, (match) =>{
        switch(match){
            case "&lt;":
                return "<"
            case "&gt;":
                return ">"
            case '&quot;':
                return '"'
            case "&amp;":
                return "&"
        }

    })
}

export {dateFormate, htmlEscape, htmlUnexcape}