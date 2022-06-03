module.exports = function (content) {
    if (this.cacheable) {
        this.cacheable();
    }
    let _content = '/*** author zonglinlee ***/\r\n' + content
    return _content
};
