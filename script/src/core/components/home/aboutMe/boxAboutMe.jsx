import React                from "react"
import {
    Typography,
    Container ,  
    Button,
    NoSsr
}                           from '@mui/material'
import Grid                 from '@mui/material/Grid2'
import DownloadingIcon      from '@mui/icons-material/Downloading';


export const BoxHomeAboutMe = (valuesInput) =>{

    const imageList = [
        'https://github.com/pedrovtof/Portfolio/blob/master/script/public/images/social/github.png?raw=true',
        'https://github.com/pedrovtof/Portfolio/blob/master/script/public/images/social/facebook.png?raw=true',
        'https://github.com/pedrovtof/Portfolio/blob/master/script/public/images/social/instagram.png?raw=true',
        'https://github.com/pedrovtof/Portfolio/blob/master/script/public/images/social/linkedin.png?raw=true',
        'https://github.com/pedrovtof/Portfolio/blob/master/script/public/images/social/twitter.png?raw=true'
    ]


    return(
        <React.Fragment>
            <Container
                className={valuesInput.BoxClasses.Class_Box_Container}
            >

                <Grid
                    container
                    columns     ={valuesInput.GridConfig.Grid_size}
                    className   ={valuesInput.BoxClasses.Class_Box_Grid}
                >

                    <Grid
                        size        ={valuesInput.GridConfig.Grid_columns}
                        className   ={valuesInput.BoxClasses.Class_Box}
                    >
                        <img 
                            src         ="https://images.unsplash.com/photo-1481277542470-605612bd2d61" 
                            alt         =""
                            className   ={valuesInput.BoxClasses.Class_Box_img}
                        />
                    </Grid>

                    <Grid 
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

                    </Grid>

                </Grid>

            </Container>
        </React.Fragment>
    )
}

