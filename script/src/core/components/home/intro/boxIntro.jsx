import React        from 'react'
import {
    Typography,
    Container,
    NoSsr
}                   from '@mui/material'
import Grid         from '@mui/material/Grid2'

export const BoxHomeIntro = (valuesInput) => {

    return(
        <React.Fragment>
            <Container 
                className={valuesInput.BoxClasses.Class_Box_Container}
            >
                <Grid 
                    container 
                    columns ={valuesInput.GridConfig.Grid_size}
                    id      ={valuesInput.BoxClasses.Class_Box_Grid}
                >
                    <Grid 
                        size        ={valuesInput.GridConfig.Grid_columns} 
                        className   ={ valuesInput.BoxClasses.Class_Box}
                    >
                        
                        <Typography 
                            id          ={valuesInput.TypographyConfig.typographyIdPrefix}
                            className   ={valuesInput.BoxClasses.Class_Box_Typography }
                            variant     ={valuesInput.TypographyConfig.variantH2}
                            sx          ={{ color: (theme) => theme.palette.text.secondary }}
                        >
                            {
                                valuesInput.BoxContentText.introBox.prefixName
                            }
                        </Typography>
                           
                      
                        <Typography 
                            id={valuesInput.TypographyConfig.typographyIdName}
                            className={valuesInput.BoxClasses.Class_Box_Typography}
                            variant={valuesInput.TypographyConfig.variantH1}
                        >
                            {
                                valuesInput.BoxContentText.introBox.name
                            }
                        </Typography>
                           <NoSsr>
                                {
                                    valuesInput.BoxContentText.introBox.functions.map((item, index)=>{
                                        
                                        let nameComponent = `functionsBoxContentIntroBox_${item}_index_${index}`
                                        return(
                                            <Typography 
                                                className   ={valuesInput.BoxClasses.Class_Box_Typography} 
                                                id          ={index} 
                                                key         ={index}
                                                sx          ={{ color: (theme) => theme.palette.text.secondary }}
                                                
                                            >
                                                <span 
                                                    className   ={ valuesInput.BoxClasses.Class_Box_Typography_span} 
                                                    name        ={nameComponent} 
                                                    id          ={`typography-span-index-${index}`} 
                                                >
                                                    {item}
                                                </span>
                                            </Typography>
                                        )
                                    })
                                }
                            </NoSsr>
                    </Grid>
                    <Grid 
                        size        ={valuesInput.GridConfig.Grid_columns}
                        className   ={ valuesInput.BoxClasses.Class_Box}
                    >
                        <img 
                            src         ="https://images.unsplash.com/photo-1481277542470-605612bd2d61" 
                            alt         ="" 
                            className   ={ valuesInput.BoxClasses.Class_Box_img}
                        />
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}
