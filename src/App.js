import React, { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import wordsToNumbers from 'words-to-numbers';


const alankey = 'b375aa231dc5343b894aab9aefd99b6e2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);

    useEffect(() => {
        alanBtn({
            key: alankey,
            onCommand: ({ command, articles, number }) => {
                if (command === 'newHeadlines') {
                    setNewsArticles(articles);
                    setActiveArticle(-1)
                }
               
                else if (command === 'highlight') {
                    setActiveArticle((previousActiveArtile) => previousActiveArtile + 1)
                }
                else if (command === 'open') {

                    // window.open(articles[number].url, '_blank')

                    const parsedNumber = number.length > 2 ? wordsToNumbers(number, { fuzzy: true }) : number;
                    const article = articles[parsedNumber - 1];
                    if (parsedNumber > 20) {
                        alanBtn().playText('Something went wrong. Please try again!')
                    }
                    else if (article) {
                        window.open(article.url, '_blank');
                        alanBtn().playText(`ok boss. Opening the article`)
                    }
                }
            }
        })
    }, [])
    return (
        <div>
            <div className='header'>
                <h2 className='header'>i'm Your virtual agent </h2>
                <p><strong> What can I help you with?</strong></p>
            </div>

            <NewsCards articles={newsArticles} activeArticle={activeArticle}> </NewsCards>
        </div>
    );
};

export default App;