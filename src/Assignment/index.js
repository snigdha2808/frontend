import React, { useState } from 'react';
import { Grid, Box, Button, Typography, Drawer } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ScheduleIcon from '@mui/icons-material/Schedule';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddSlider from './Components/AddSlider';
import Gridcomponent from './Components/Gridcomponent';
import { useSelector, useDispatch } from 'react-redux';

const Assignment = () => {
  const categories = useSelector((state) => state.categoryReducer.categories);
  const dispatch = useDispatch();

  // const handleAddCategory = () => {
  //   const newCategory = { id: Date.now(), name: 'New Category' };
  //   dispatch(addCategory(newCategory));
  // };

  // const handleRemoveCategory = (id) => {
  //   dispatch(removeCategory(id));
  // };

  const [slider, setSlider] = useState(false);

  const handleSlider = () => {
    setSlider(true);
  };

  const handleSliderClose = () => {
    setSlider(false);
  };
  return (
    <>
      <Box className='baseBlockCntr' sx={{ p: 2 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm="auto">
            <Typography variant="h6">CNAPP Dashboard</Typography>
          </Grid>
          <Grid item xs={12} sm>
            <Grid container spacing={1} justifyContent={{ sm: 'flex-end' }}>
              <Grid item>
                <Button 
                  variant="outlined" 
                  className='capitalTxt' 
                  sx={{ mr: 1 }} 
                  endIcon={<AddIcon />}
                  onClick={handleSlider}
                >
                  Add Widget
                </Button>
              </Grid>
              <Grid item>
                <Button 
                  variant='outlined' 
                  sx={{ mr: 1 }} 
                  startIcon={<AutorenewIcon />}
                />
              </Grid>
              <Grid item>
                <Button 
                  variant='outlined' 
                  sx={{ mr: 1 }} 
                  startIcon={<MoreVertIcon />}
                />
              </Grid>
              
            </Grid>
          </Grid>
        </Grid>
        {/* header close */}

       
        {categories.map(el=>Gridcomponent({categoryName:el.categoryName, widgetArray:el.widgets}))}
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
        <AddSlider inittabs={1}  handleSliderClose={handleSliderClose}/>
      </Drawer>
    </>
  );
}

export default Assignment;

