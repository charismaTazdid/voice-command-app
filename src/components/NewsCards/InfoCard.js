import React from 'react';
import { Grid, Grow, Typography } from '@mui/material';
import useStyles from './styles.js';

const InfoCard = () => {
    const classes = useStyles();

    return (
        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>



                <Grid className={classes.infoCard} item xs={12} sm={6} md={4} lg={3} >

                    <div className={classes.card} style={{ backgroundColor: 'black' }}>
                        <Typography variant='p' color=''>
You can ask  Michael to bring any latest news for you
                        </Typography>
                        <Typography variant='p'> <strong>News by Categories :</strong> <br />
                            Technology, Entertainment, General, Health, Science, Sports, Business
                        </Typography>

                        <Typography variant='h6'> Try Saying: <br /> <i>Give me the latest Technology news </i>
                        </Typography>
                        {/* 2nd terms */}
                        <Typography variant='p'> <strong>News by Terms :</strong> <br />
                       Vladimir Putin, Smartphones, Jeo Biden, Bitcoin, PlayStation 5, Smartphones, ...
                        </Typography>

                        <Typography variant='h6'> Try Saying: <br /> <i> What\'s up with Bitcoin </i>
                        </Typography>

                          {/* 3rd terms */}
                          <Typography variant='p'> <strong>News by Sources :</strong> <br />
                          Al-Jazeera, CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...
                        </Typography>

                        <Typography variant='h6'> Try Saying: <br /> <i> Give me the news from CNN</i>
                        </Typography>
                       
                    </div>
                </Grid>


            </Grid>

        </Grow>
    );
};

export default InfoCard;