import React, { useState, useEffect, createRef } from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import defaultImage from './defaultImage.jpg'
import useStyles from './styles';
import classNames from 'classnames';


const NewsCard = ({ singleNews: { description, publishedAt, source, title, url, urlToImage }, indexOfNews, activeArticle }) => {

    const classes = useStyles();
    const [elementRef, setElementRef] = useState([]);
    const scrollToRef = (refs) => window.scroll(0, refs.current.offsetTop)
    useEffect(() => {
        setElementRef((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));

    }, []);

    useEffect(() => {
        if (indexOfNews === activeArticle && elementRef[activeArticle]) {
            scrollToRef(elementRef[activeArticle])
        }

    }, [indexOfNews, activeArticle, elementRef])

    return (
        <Card ref={elementRef[indexOfNews]} className={classNames(classes.card, activeArticle === indexOfNews ? classes.activeCard : null)} style={{backgroundColor: "rgb(52, 56, 50)", boxShadow: '-37px -8px 181px -45px rgba(56,13,13,0.48)'}} >
            <CardActionArea href={url} target='_blank' >
                <CardMedia className={classes.media} image={urlToImage || defaultImage} />
                <div className={classes.details}>
                    <Typography variant='body2' color='white' component='h2'> {(new Date(publishedAt)).toDateString()} </Typography>

                    <Typography variant='body2' color='white' component='h2'> {source.name} </Typography>
                </div>
                <Typography className={classes.title} gutterBottom variant='h6'> 
                {
                    title.length > 75 ? `${title.substring(0, 75)} ...` : title
                }
                </Typography>
                <CardContent>
                    <Typography variant='body2' color="white" component='p' > 
                    {
                            description.length > 70 ? `${description.substring(0, 70)}...` : description 
                        }
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions className={classes.cardActions}>
                <Button size='small' color='primary'> Read More </Button>
                <Typography variant='h5' color='textSecondary'> {indexOfNews + 1} </Typography>
            </CardActions>

        </Card>
    );
};

export default NewsCard;