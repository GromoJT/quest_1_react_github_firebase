import React from 'react'
import {useSelector,useDispatch} from "react-redux";

import { 
    increment,
    decrement, 
    reset, 
    incrementByAmount 
} from '../../counterSlice';

import { useState } from 'react';

import { Box, Button, Grid, Input, Typography } from '@mui/material';
import { margin, width } from '@mui/system';


const Counter = () => {

    const count = useSelector((state) => state.counteri.count);
    const dispatch = useDispatch();

    const [incrementAmount,setIcrementAmount] = useState(0);

    const addValue = Number(incrementAmount) || 0;

    const resetAll = () =>{
        setIcrementAmount(0);
        dispatch(reset());
    }

    const clearAmountInput = () =>{
        const i = document.getElementById('amountInput')
        if(isNaN(i.value)){
            i.value="";
        }
    } 

  return (
    <Box sx={{
        backgroundColor:"#222222",
        width:360,
        p:2,
        borderRadius:8,
        boxShadow:'5px 5px #444444',
        }}>
        <Grid container spacing={1}
            
            justifyContent="center"
            alignItems="center"
            sx={{
                //border:'1px solid red',
            
            }}>
            <Grid item md={12} 
                sx={{
                    //border:'1px solid red',
                    margin:'auto',
                    textAlign:'center',
                    color:'white'
                }}>
                <Typography
                variant="h2"
                
                > {count} </Typography>
            </Grid>
        </Grid>
        <Grid container 
            
            spacing={1}
            justifyContent="center"
            alignItems="center"
            sx={{
                //border:'1px solid red',
            
            }}
            >
            <Grid item md={4}>
                <Button 
                    variant="contained"
                    onClick={()=>dispatch(increment())}
                    sx={{
                        //border:'1px solid red',
                        width:'100%', 
                        
                    }}>
                    +
                </Button>
            </Grid>
            
            <Grid item md={4}>
                <Button 
                variant="outlined"
                onClick={()=>dispatch(reset())}
                sx={{
                    //border:'1px solid red',
                    width:'100%', 
                    
                }}>
                    reset
                </Button>
            </Grid>
            
            <Grid item md={4}>
                <Button 
                    variant="contained" 
                    onClick={()=>dispatch(decrement())}
                    sx={{
                        //border:'1px solid red',
                        width:'100%', 
                    }}>
                    -
                </Button>
            </Grid>

            <Grid item md={12}>
                <Input 
                    id='amountInput'
                    type='text'
                    fullWidth={true}
                    value={incrementAmount}
                    onChange={(e)=>setIcrementAmount(e.target.value)}
                    inputProps={{
                        sx:{
                            //border:'1px solid red',
                            textAlign:"center",
                            backgroundColor:'#aaaaaa',
                            
                        } 
                        
                    }}
                      
                />
            </Grid>
            <Grid item md={6}>
                <Button 
                    variant="contained" 
                    onClick={ ()=> {
                    dispatch(incrementByAmount(addValue));
                    clearAmountInput()
                    }}
                    sx={{
                        //border:'1px solid red',
                        width:'100%', 
                    }}>
                        Add amount
                </Button>
            </Grid>
            <Grid item md={6}>
                <Button 
                    variant="contained"  
                    onClick={ resetAll}
                    sx={{
                        //border:'1px solid red',
                        width:'100%', 
                    }}>

                    Reset all
                </Button>
            </Grid>
        </Grid>
        
           <div>
                
                
                
            </div> 
            
            <div>
                
            </div>
            <div>
                
            </div>
    </Box>
  )
}

export default Counter