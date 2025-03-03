"use client"
import * as React from 'react'
import {printf} from "../../../global/globalFunctions"
import {
    Box,
    Typography,
    Container ,  
} from '@mui/material';
import Grid from '@mui/material/Grid2';

// BOX intro

function BoxHomeIntro(
    valuesInput
){
    return (
        <React.Fragment>
            <Container 
                className={valuesInput.BoxClasses.Class_Box_Container}
            >
                <Grid 
                    container 
                    columns={12}
                    id={valuesInput.BoxClasses.Class_Box_Grid}
                >
                    <Grid 
                        size={6} 
                        className={ valuesInput.BoxClasses.Class_Box}
                    >
                        {
                            valuesInput.BoxContentText.introBox.prefixName?
                            <Typography 
                                id='typography-introBox-prefix-name'
                                className={valuesInput.BoxClasses.Class_Box_Typography }
                                variant='h2'
                            >
                                {
                                    valuesInput.BoxContentText.introBox.prefixName
                                }
                            </Typography>
                            :null
                        }
                        {
                            valuesInput.BoxContentText.introBox.name?
                            <Typography 
                                id='typography-introBox-name' 
                                className={valuesInput.BoxClasses.Class_Box_Typography}
                                variant='h1'
                            >
                                {
                                    valuesInput.BoxContentText.introBox.name
                                }
                            </Typography>
                            :null
                        }
                            {   
                                valuesInput.BoxContentText.introBox.functions?
                                valuesInput.BoxContentText.introBox.functions.map((item, index)=>{
                                    let nameComponent = `functionsBoxContentIntroBox_${item}_index_${index}`
                                    return(
                                        <Typography 
                                            className={valuesInput.BoxClasses.Class_Box_Typography} 
                                            id={index} 
                                            key={index}
                                            
                                        >
                                            <span 
                                                className={ valuesInput.BoxClasses.Class_Box_Typography_span} 
                                                name={nameComponent} 
                                                id={`typography-span-index-${index}`} 
                                                >{item}
                                            </span>
                                        </Typography>
                                    )
                                })
                                :null
                            }
                    </Grid>
                    <Grid 
                        size={6}
                        className={ valuesInput.BoxClasses.Class_Box}
                    >
                            <img 
                                src="https://images.unsplash.com/photo-1481277542470-605612bd2d61" 
                                alt="" 
                                className={ valuesInput.BoxClasses.Class_Box_img}
                            />
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );

}

export {BoxHomeIntro};
