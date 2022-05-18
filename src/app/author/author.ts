/**
 * Describe author object
 */
 class Author {

    id: number;
    author: string | undefined;
    description: string;

    constructor(author: string | undefined, description: string) {
        this.id = 0;
        this.author = author;
        this.description = description;
    }
}

export default Author;