import { makeStyles } from '@mui/styles';

export default makeStyles({
    media: {
        height: 170,
    },
    border: {
        border: 'solid',
      },
      fullHeightCard: {
        height: '80%',
      },
      card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '1px -2px 100px 31px rgba(117,71,71,0.75)',
        
        borderBottom: '13px solid rgb(52, 56, 50)',
      },
      activeCard: {
        borderBottom: '10px solid #753a88',
      },
      grid: {
        display: 'flex',
      },
      details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
       
      },
      title: {
        padding: '0 16px',
        color: 'white'
      },
      cardActions: {
        
        display: 'flex',
        justifyContent: 'space-between',
      },
})