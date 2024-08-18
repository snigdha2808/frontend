import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import Close from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux'; 
import { removeWidget } from '../../actions/action';

const GridChildComponent = (props) => {
  const { name, categoryName, text } = props;
  const dispatch = useDispatch(); 

  const handleClose = () => {
    const obj = {
      "categoryName": categoryName,
      "widgets": [
        {
          "widgetName": name,
        }
      ]
    };
    dispatch(removeWidget(obj));
  }

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box 
        className='whiteBg' 
        sx={{ 
          p: 2, 
          height: 200, 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center' 
        }}
      >
        <Grid container alignItems="center" justifyContent="space-between">
          <Typography>{name}</Typography>
          <Close 
            onClick={handleClose} 
            sx={{ 
              cursor: 'pointer', 
              color: 'black' 
            }} 
          />
        </Grid>
        <Grid container justifyContent="center" alignItems="center" sx={{ height: '100%' }}>
          <Typography>text: {text}</Typography>
        </Grid>
      </Box>  
    </Grid>
  );
};

export default GridChildComponent;
