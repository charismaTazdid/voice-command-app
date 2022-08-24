import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { Grid, Grow } from '@mui/material';
import useStyles from './styles.js';
import InfoCard from './InfoCard';



const NewsCards = ({ articles, activeArticle }) => {

    const classes = useStyles();

    if (!articles.length) {
        return (
            <InfoCard/>
          
        )
    }


    return (
        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {
                    articles.map((singleNews, indexOfNews) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>

                            <NewsCard singleNews={singleNews} indexOfNews={indexOfNews} activeArticle={activeArticle} />

                        </Grid>
                    ))
                }
            </Grid>

        </Grow>
    );
};

export default NewsCards;