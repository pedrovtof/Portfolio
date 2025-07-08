import React        from 'react'
import {
    Typography,
    Container,
    Box,
    NoSsr
}                   from '@mui/material'

export const BoxHomeIntro = (valuesInput) => {

    const selfie = '/images/selfies/pvf_selfie_desk.jpg'

    return(
        <React.Fragment>
            <Container 
                className={valuesInput.BoxClasses.Class_Box_Container}
            >
                <Box 
                    className={valuesInput.BoxClasses.Class_Box_Grid}
                >
                    <Box 
                        className={ valuesInput.BoxClasses.Class_Box}
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
                            id          ={valuesInput.TypographyConfig.typographyIdName}
                            className   ={valuesInput.BoxClasses.Class_Box_Typography}
                            variant     ={valuesInput.TypographyConfig.variantH1}
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
                    </Box>
                    <Box
                        className={ valuesInput.BoxClasses.Class_Box}
                    >
                        <img 
                            src         ={selfie}
                            alt         ="Pedro Fonseca Selfie - "
                            className   ={ valuesInput.BoxClasses.Class_Box_img}
                        />
                    </Box>
                </Box>
            </Container>
        </React.Fragment>
    )
}
