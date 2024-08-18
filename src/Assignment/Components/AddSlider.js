import { Box, Checkbox, FormControl, Grid, InputAdornment, OutlinedInput, Tab, Tabs, Typography, Button } from '@mui/material';
import React, { useEffect,useState } from 'react';
import Close from '@mui/icons-material/Close';
import { useDispatch,useSelector } from 'react-redux'; 
import { addWidget } from '../../actions/action';

const AddSlider = (props) => {
    const [tabs, setTabs] = useState(0);
    const [selectedWidgets, setSelectedWidgets] = useState([]);
    console.log(props);
    const {inittabs}=props;
    const [inputValue, setInputValue] = useState('');
    const [inputValue1,setInputValue1]=useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(inittabs)
        setTabs(inittabs);
       
      },[] );
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value);
  };
    const handleChangeTabs = (event, newValue) => {
        setTabs(newValue);
    };

    const handleCheckboxChange = (event, widgetName) => {
        let updatedWidgets;
        if (event.target.checked) {
            updatedWidgets = [...selectedWidgets, widgetName];
        } else {
            updatedWidgets = selectedWidgets.filter(name => name !== widgetName);
        }
        setSelectedWidgets(updatedWidgets);
        props.addWidget(updatedWidgets);
    };
    
   const handleConfirm = () => {
    if (inputValue.trim() === '' || inputValue1.trim() === '') {
        alert("Please fill in both widget name and text.");
        return;
    }

    const obj = {
        "categoryName": tabs === 0 ? 'CSPM Executive Dashboard' : tabs === 1 ? "CWPP Dashboard Dashboard" : tabs === 2 ? 'Registry Scan' : 'my name is snigdha',
        "widgets": [
            {
                "widgetName": inputValue,
                "widgetText": inputValue1
            }
        ]
    };

    console.log(obj);
    dispatch(addWidget(obj));
    setInputValue('');
    setInputValue1('');
    props?.handleSliderClose();
};

    return (
        <>
        <Box>
            <Grid container display='flex' flexDirection='column'>
                <Grid container display='flex' p={2} justifyContent='space-between' alignItems='center' width='100%' sx={{ backgroundColor: 'blue', position: 'sticky', top: 0, zIndex: '1' }}>
                    <Grid item>
                        <Typography sx={{ color: '#fff' }}>Add Widget</Typography>
                    </Grid>
                    <Grid item onClick={props?.handleSliderClose} sx={{ cursor: 'pointer', color: '#fff' }}>
                        <Close />
                    </Grid>
                </Grid>
                <Grid container px={2} py={2} width='100%'>
                    <Grid item>
                        <Typography>Personalize your dashboard by adding the following widget</Typography>
                    </Grid>
                    <Grid item>
                        <Tabs
                            value={tabs}
                            onChange={handleChangeTabs}
                            variant='scrollable'
                            scrollButtons='auto'
                            aria-label='scrollable auto tabs example'
                        >
                            <Tab label='CSPM' value={0} />
                            <Tab label='CWPP' value={1} />
                            <Tab label='Image' value={2} />
                            <Tab label='Ticket' value={3} />
                        </Tabs>
                    </Grid>
                </Grid>
                {/* {tabs === 0 && ( */}
                    {/* <> */}
                    <Grid item p={1}>
                        <FormControl sx={{ width: '48ch' }} variant="outlined">
                            <OutlinedInput
                                id="outlined-adornment-widget1"
                                startAdornment={<InputAdornment position="start">
                                    {/* <Checkbox 
                                        defaultChecked 
                                        onChange={(e) => handleCheckboxChange(e, 'Widget 1')} 
                                    /> */}
                                    
                                </InputAdornment>}
                                aria-describedby="outlined-widget1-helper-text"
                                placeholder='Widget 1'
                                inputProps={{
                                'aria-label': 'Widget 1',
                                }}
                                value={inputValue}
                                onChange={handleInputChange}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item p={1}>
                        <FormControl sx={{ width: '48ch' }} variant="outlined">
                            <OutlinedInput
                                id="outlined-adornment-widget2"
                                startAdornment={<InputAdornment position="start">
                                    {/* <Checkbox 
                                        defaultChecked 
                                        onChange={(e) => handleCheckboxChange(e, 'Widget 2')} 
                                    /> */}
                                </InputAdornment>}
                                aria-describedby="outlined-widget2-helper-text"
                                placeholder='Widget 2'
                                inputProps={{
                                'aria-label': 'Widget 2',
                                }}
                                value={inputValue1}
                                onChange={handleInputChange1}
                            />
                        </FormControl>
                    </Grid>
                    {/* </> */}
                {/* )} */}
                 <Grid item container justifyContent="center" p={2}>
                        <Button 
                            variant="outlined" 
                            className='capitalTxt' 
                            sx={{ mr: 1 }} 
                            onClick={handleConfirm}
                        >
                            Confirm
                        </Button>
                    </Grid>
            </Grid>
        </Box>
        </>
    );
}

export default AddSlider;
