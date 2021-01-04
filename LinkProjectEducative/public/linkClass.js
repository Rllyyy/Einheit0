module.exports = class Link {
    constructor(author, websiteName, url) {
        let absoluteUrl = checkUrl(url);

        this.author = author;
        this.websiteName = websiteName;
        this.url = absoluteUrl;
    }
    describe(){
        return `${this.author}, ${this.websiteName}, ${this.url}`;
    }
};

const checkUrl = (url) => {
    if (!url.startsWith("http://") && !url.startsWith("https://"))
    {
        return url = `https://${url}`;
    } 
    else 
    {
        return url;
    }
}