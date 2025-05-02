import React                from "react"
import {
    Typography,
    Container ,  
    Box
}                           from '@mui/material'
import Grid                 from '@mui/material/Grid2'


export const BoxHomeAboutMe = (valuesInput) =>{

    

    const imageList = [
        '/images/social/discord.png',
        '/images/social/facebook.png',
        '/images/social/instagram.png',
        '/images/social/linkedin.png',
        '/images/social/twitter.png'
    ]


    return(
        <React.Fragment>
            <Container
                className={valuesInput.BoxClasses.Class_Box_Container}
            >

                <Box
                    className   ={valuesInput.BoxClasses.Class_Box_Grid}
                >

                    <Box
                        className   ={valuesInput.BoxClasses.Class_Box}
                    >
                        <img 
                            src         ="https://images.unsplash.com/photo-1481277542470-605612bd2d61" 
                            alt         =""
                            className   ={valuesInput.BoxClasses.Class_Box_img}
                        />
                    </Box>

                    <Box 
                        size        ={valuesInput.GridConfig.Grid_columns}
                        className   ={valuesInput.BoxClasses.Class_Box}
                    >   
                        
                        <Typography
                            className   ={valuesInput.BoxClasses.Class_Box_Typography}
                            variant     ={valuesInput.TypographyConfig.variantH1}
                            sx          ={{ color: (theme) => theme.palette.text.secondary }}
                            id          ={valuesInput.TypographyConfig.typographyIdTitle}
                        >
                            {
                                valuesInput.BoxContentText.aboutMe.title
                            }
                        </Typography>
                            

                        
                        <Typography
                            className   ={valuesInput.BoxClasses.Class_Box_Typography}
                            variant     ={valuesInput.TypographyConfig.variantBody1}
                            sx          ={{ color: (theme) => theme.palette.text.third }}
                            id          ={valuesInput.TypographyConfig.typographyIdBody}
                        >
                            {
                                valuesInput.BoxContentText.aboutMe.content
                            }
                        </Typography>
                            
                        <Grid
                            container
                            columns     ={valuesInput.GridConfig.Grid_size}
                            className   ={valuesInput.BoxClasses.Class_Box_Grid_second}
                        >

                            {
                                imageList.map((item, index) => {
                                    return (
                                        <Grid
                                            key         ={index}
                                            size        ={valuesInput.GridConfig.Grind_columns_second}
                                            className   ={valuesInput.BoxClasses.Class_Box_Grid_second_box}
                                        >

                                            <a 
                                                href    ={
                                                    item.includes('linkedin')   ?'https://www.linkedin.com/in/pedrovotf/'   :
                                                    item.includes('facebook')   ?'https://www.facebook.com/pedrovtof/'      :
                                                    item.includes('instagram')  ?'https://www.instagram.com/pedrovtof/'     :
                                                    item.includes('twitter')    ?'https://x.com/PedroVi13262224'            :
                                                    item.includes('github')     ?'https://github.com/pedrovtof'             :
                                                    null
                                                } 
                                                target  ="_blank" 
                                                rel     ="noreferrer"
                                            >

                                                <img
                                                    key         ={index}
                                                    src         ={item}
                                                    alt         ={item.replace('https://github.com/pedrovtof/Portfolio/blob/master/script/public/images/social/','').replace('.png?raw=true','')}
                                                    className   ={valuesInput.BoxClasses.Class_Box_Grid_second_box_img}
                                                    id          ={`${valuesInput.BoxClasses.Class_Box_Grid_second_box_img}-${index}`}
                                                />

                                            </a>
                                        </Grid>

                                    )
                                })
                            }  

                        </Grid>
                          
                    </Box>

                </Box>

            </Container>
        </React.Fragment>
    )
}

