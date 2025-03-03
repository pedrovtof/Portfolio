"use client"
import * as React from 'react'
import {printf} from "../../../global/globalFunctions"
import {
    Typography,
    Container ,  
    Button
} from '@mui/material';
import Grid from '@mui/material/Grid2';


import DownloadingIcon from '@mui/icons-material/Downloading';

// BOX intro

/* 
=============================================================================
    HOME BOX INTRODUCTION
=============================================================================
*/

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
                    columns={valuesInput.GridConfig.Grid_size}
                    id={valuesInput.BoxClasses.Class_Box_Grid}
                >
                    <Grid 
                        size={valuesInput.GridConfig.Grid_columns} 
                        className={ valuesInput.BoxClasses.Class_Box}
                    >
                        {
                            valuesInput.BoxContentText.introBox.prefixName?
                            <Typography 
                                id={valuesInput.TypographyConfig.typographyIdPrefix}
                                className={valuesInput.BoxClasses.Class_Box_Typography }
                                variant={valuesInput.TypographyConfig.variantH2}
                                sx={{ color: (theme) => theme.palette.text.secondary }}
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
                                id={valuesInput.TypographyConfig.typographyIdName}
                                className={valuesInput.BoxClasses.Class_Box_Typography}
                                variant={valuesInput.TypographyConfig.variantH1}
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
                                            sx={{ color: (theme) => theme.palette.text.secondary }}
                                            
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
                        size={valuesInput.GridConfig.Grid_columns}
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

/* 
=============================================================================
    HOME BOX ABOUT ME
=============================================================================
*/



function BoxHomeAboutMe(
    valuesInput
){
    //printf(valuesInput)
//https://github.com/pedrovtof/Portfolio/blob/master/script/public/images/social/discord.png?raw=true
    const imageList = [
        'https://github.com/pedrovtof/Portfolio/blob/master/script/public/images/social/discord.png?raw=true',
        'https://github.com/pedrovtof/Portfolio/blob/master/script/public/images/social/facebook.png?raw=true',
        'https://github.com/pedrovtof/Portfolio/blob/master/script/public/images/social/instagram.png?raw=true',
        'https://github.com/pedrovtof/Portfolio/blob/master/script/public/images/social/linkedin.png?raw=true',
        'https://github.com/pedrovtof/Portfolio/blob/master/script/public/images/social/twitter.png?raw=true'
    ]

    const printCV = ()=>{
        print('https://github.com/pedrovtof/Portfolio/blob/master/script/public/images/social/discord.png?raw=true')
    }

    return (
        
        <React.Fragment>
            <Container
                className={valuesInput.BoxClasses.Class_Box_Container}
            >
            <Grid
                container
                columns={valuesInput.GridConfig.Grid_size}
                className={valuesInput.BoxClasses.Class_Box_Grid}
            >
                <Grid
                    size={valuesInput.GridConfig.Grid_columns}
                    className={valuesInput.BoxClasses.Class_Box}
                >
                    <img 
                        src="https://images.unsplash.com/photo-1481277542470-605612bd2d61" 
                        alt=""
                        className={valuesInput.BoxClasses.Class_Box_img}
                    />
                </Grid>
                <Grid 
                    size={valuesInput.GridConfig.Grid_columns}
                    className={valuesInput.BoxClasses.Class_Box}
                >   
                    {
                        valuesInput.BoxContentText.aboutMe.title?
                        <Typography
                            className={valuesInput.BoxClasses.Class_Box_Typography}
                            variant={valuesInput.TypographyConfig.variantH1}
                            sx={{ color: (theme) => theme.palette.text.secondary }}
                            id={valuesInput.TypographyConfig.typographyIdTitle}
                        >
                            {
                                valuesInput.BoxContentText.aboutMe.title
                            }
                        </Typography>
                        :null
                    }

                    {
                        valuesInput.BoxContentText.aboutMe.content?
                        <Typography
                            className={valuesInput.BoxClasses.Class_Box_Typography}
                            variant={valuesInput.TypographyConfig.variantBody1}
                            sx={{ color: (theme) => theme.palette.text.thrid }}
                            id={valuesInput.TypographyConfig.typographyIdBody}
                        >
                            {
                                valuesInput.BoxContentText.aboutMe.content
                            }
                        </Typography>
                        :null
                    }
                    <Grid
                        container
                        columns={valuesInput.GridConfig.Grid_size}
                        className={valuesInput.BoxClasses.Class_Box_Grid_second}
                    >
                        {
                            imageList.length > 0?
                            imageList.map((item, index) => {
                                return (
                                    <Grid
                                        key={index}
                                        size={valuesInput.GridConfig.Grind_columns_second}
                                        className={valuesInput.BoxClasses.Class_Box_Grid_second_box}
                                    >
                                        <a href={item} target="_blank" rel="noreferrer">
                                            <img
                                                key={index}
                                                src={item}
                                                alt={item.replace('https://github.com/pedrovtof/Portfolio/blob/master/script/public/images/social/','').replace('.png?raw=true','')}
                                                className={valuesInput.BoxClasses.Class_Box_Grid_second_box_img}
                                                id={`${valuesInput.BoxClasses.Class_Box_Grid_second_box_img}-${index}`}
                                            />
                                        </a>
                                    </Grid>
                                )
                            })
                            :null
                        }

                        <Grid
                            size={valuesInput.GridConfig.Grind_columns_second}
                            className={valuesInput.BoxClasses.Class_Box_Grid_second_box}
                        >
                            <Button 
                                variant="contained" 
                                endIcon={<DownloadingIcon />}
                                className={valuesInput.BoxClasses.Class_Box_Grid_second_box_button}
                                sx={{ 
                                    background: (theme) => theme.palette.button.primary,
                                    color: (theme) => theme.palette.text.secondary
                                }}
                                onClick={()=>{printCV()}}
                            >
                                {
                                    valuesInput.BoxContentText.aboutMe.cv?
                                    valuesInput.BoxContentText.aboutMe.cv
                                    :null
                                }
                            </Button>
                        </Grid>


                    </Grid>
                </Grid>
            </Grid>
            </Container>
        </React.Fragment>
    ) 
}
               

export {
    BoxHomeIntro,
    BoxHomeAboutMe
};
