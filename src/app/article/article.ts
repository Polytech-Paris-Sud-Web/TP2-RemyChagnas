class Article {

    id: Number;
    title: String;
    content: String;
    author: String;

    constructor(title: String, content: String, author: String) {
        this.id = 0;
        this.title = title;
        this.content = content;
        this.author = author;
    }
}

export default Article;