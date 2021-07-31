/**
 * Application main core.
 */
class App {

    articles;

    /**
     * @param data {Array.<Article>} Article list.
     */
    constructor(data) {

        this.articles = [];

        for(const key in data){
            const article = data[key];
            this.addArticle(article);
        }
    }

    /**
     * Application main function
     */
    main() {
        for(const key in this.articles){
            const article = this.articles[key];
            console.log(article);
        }
    }

    /**
     * Add article in article list.
     * @param article {Article} An article object.
     */
    addArticle(article){
        if(article){
            this.articles.push(article);
        }
    }
}

export default App;
