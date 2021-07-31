import App from "./src/App";

const data = [
    {
        title: "Starliner, la capsule spatiale de Boeing prête pour son deuxième vol test vers l'ISS",
        date: new Date(Date.now()),
        image: "https://www.sciencesetavenir.fr/assets/img/2021/07/30/cover-r4x3w1000-6104135e69546-pad-sunset-medium-1.jpg",
        content: "La capsule CST-100 Starliner de Boeing devrait être lancée le 3 août 2021 pour un deuxième vol d'essai sans équipage, après l'échec de son premier vol, en décembre 2019. Une étape cruciale à suivre en direct.",
    },
    {
        title: "Intelligence artificielle : quels métiers sont appelés à disparaître ?",
        date: new Date(Date.now()),
        image: "https://www.sciencesetavenir.fr/assets/img/2021/06/23/cover-r4x3w1000-60d32e8540e1c-035-pbu387932-21.jpg",
        content: `"Les tâches les plus répétitives seront demain accomplies par les machines", assure Lee Shenker, consultant chez Business Analytics Institute, entreprise de formation de cadres supérieurs.`,
    }
];

const app = new App(data);
app.main();
