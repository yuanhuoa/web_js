import MD5 = require("md5.js");

export class Md {
    static md5(mes: string) {
        var content = new MD5().update(mes).digest('hex')
        return content
    }
}