/**
 * Describe article object
 */
class Article {

    id: number | undefined;
    title: string;
    content: string;
    author: string;
    creationDate: Date;

    constructor(title: string, content: string, author: string) {
        this.id = undefined;
        this.title = title;
        this.content = content;
        this.author = author;
        this.creationDate = new Date();
    }
}

export default Article;