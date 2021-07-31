/**
 * This is Article Entity Class.
 */
class Article{

    title;
    date;
    img;
    content;

    /**
     * @param title {string} Title of article.
     * @param date {string} Create date of article.
     * @param img {string} Illustrative image of article.
     * @param content {string} Content of the article.
     */
    constructor(title, date, img, content) {
        this.title = title;
        this.date = date;
        this.img = img;
        this.setContent(content);
    }

    /**
     * Return content of article.
     * @returns {string}
     */
    getContent() {
        return this.content;
    }

    /**
     * Set content of article
     * @param content {string} Content of article.
     */
    setContent(content) {
        this.content = content;
    }
}

export default Article;
