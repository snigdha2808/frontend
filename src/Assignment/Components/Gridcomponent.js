import React, { useEffect, useState } from 'react';
import { Grid, Box, Typography, Button, Drawer } from '@mui/material';
import GridChildComponent from './GridChildComponent';
import AddIcon from '@mui/icons-material/Add';
import AddSlider from './AddSlider';

const GridComponent = (props) => {
  const [slider, setSlider] = useState(false);
  const { categoryName, widgetArray } = props;
  const [tabNo,setTabNo]=useState();
  useEffect(()=>{
    let Tab= categoryName=='CSPM Executive Dashboard'?0:categoryName=='CWPP Dashboard Dashboard'?1:categoryName=='Registry Scan'?2:3;
    console.log(Tab);
    setTabNo(Tab);
  },[categoryName])
  const handleSlider = () => {
    setSlider(true);
  };

  const handleSliderClose = () => {
    setSlider(false);
  };
  
  return (
    <>
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6">{categoryName}</Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {widgetArray.map((el, index) => (
          <GridChildComponent key={index} name={el.widgetName} categoryName={categoryName} text={el.widgetText} />
        ))}
        <Grid item>
               
                <Box 
                className='whiteBg' 
                sx={{ p: 2, height: 200 }}
              >
                <Button 
                  variant="outlined" 
                  className='capitalTxt' 
                  sx={{ mr: 1 }} 
                  endIcon={<AddIcon />}
                  onClick={handleSlider}
                >
                  Add Widget
                </Button>
              </Box>
              </Grid>
      </Grid>
      
    </Box>
    <Drawer
        anchor='right'
        open={slider}
        onClose={handleSliderClose}
        PaperProps={{
          sx: {
            width: {
              xs: '100%',
              sm: '70%',
              md: '45%',
              lg: '36%'
            }
          }
        }}>
        <AddSlider  inittabs={tabNo} handleSliderClose={handleSliderClose}/>
      </Drawer>
    </>
    
  );
};

export default GridComponent;
