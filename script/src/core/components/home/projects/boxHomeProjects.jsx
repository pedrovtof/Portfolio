import React        from 'react'
import {
    Typography,
    Container,
    NoSsr, 
    Button,
    Backdrop,
    Box
}                   from '@mui/material'
import Grid         from '@mui/material/Grid2'

export const BoxHomeProjects = (valuesInput) =>{

    const [openBackDrop, setopenBackDrop]               = React.useState(false);
    const [previewProjectState, setPreviewProjectState] = React.useState(-1);

    const handleCloseBackDrop = () => {
        setopenBackDrop(false)
    }
    
    const handleOpenBackDrop = (project) => {
        setPreviewProjectState(project)
        setopenBackDrop(true)
    }

    const PreviewProject = () => {

        return(
            <React.Fragment>
                {
                    previewProjectState>=0 && valuesInput.BoxContentText.projects.list[previewProjectState]?
                        <Box
                            className={valuesInput.BoxClasses.Class_Box_Grid_hover}
                        >

                            <Box  
                                className={valuesInput.BoxClasses.Class_Box_Grid_hover_second}
                            >

                                <Box
                                    className={valuesInput.BoxClasses.Class_Box_Grid_hover_second_typography_box}
                                >

                                    <Typography
                                        variant     ={valuesInput.TypographyConfig.variantH2}
                                        className   ={valuesInput.BoxClasses.Class_Box_Typography_hover}
                                        id          ={valuesInput.TypographyConfig.size_hover_box_typography_title}
                                        sx          ={{ color: (theme) => theme.palette.text.primary }}
                                    >
                                        {
                                            valuesInput.BoxContentText.projects.list[previewProjectState].name
                                        }
                                    </Typography>

                                    <Typography
                                        variant     ={valuesInput.TypographyConfig.variantBody1}
                                        className   ={valuesInput.BoxClasses.Class_Box_Typography_hover}
                                        sx          ={{ color: (theme) => theme.palette.text.third }}
                                    >   
                                        {
                                            valuesInput.BoxContentText.projects.list[previewProjectState].description
                                        }
                                    </Typography>

                                </Box>

                                <Box>

                                    <Typography
                                        variant     ={valuesInput.TypographyConfig.variantH3}
                                        className   ={valuesInput.BoxClasses.Class_Box_Typography_hover}
                                        id          ={valuesInput.TypographyConfig.size_hover_box_typography_title}
                                        sx          ={{ color: (theme) => theme.palette.text.secondary }}
                                    >
                                        {
                                            valuesInput.BoxContentText.projects.hoverTitle
                                        }
                                    </Typography>

                                    <Box
                                        className={valuesInput.BoxClasses.Class_Box_Grid_hover_tech}
                                    >

                                        <Box
                                            className={valuesInput.BoxClasses.Class_Box_Grid_hover_tech_second}
                                        >
                                           <NoSsr>
                                                {
                                                    valuesInput.BoxContentText.projects.list[previewProjectState].technologies.map((item,index)=>{
                                                    
                                                        return(
                                                            <img
                                                                key         ={index}
                                                                src         ={item}
                                                                alt         ={item.replace('/images/tech/','')}
                                                                className   ={valuesInput.BoxClasses.Class_Box_img_hover_tech}
                                                            >
                                                            </img>
                                                        )

                                                    })
                                                }
                                            </NoSsr>
                                        </Box>

                                    </Box>
                                
                                </Box>

                                <Box 
                                    className={valuesInput.BoxClasses.Class_Box_Button_Container_hover}
                                >

                                    <Button
                                        sx          ={{ background: (theme) => theme.palette.button.primary }}
                                        className   ={valuesInput.BoxClasses.Class_Box_Button_hover}
                                    >

                                        <a
                                            href    ={valuesInput.BoxContentText.projects.list[previewProjectState].linkCode}
                                            target  ='_blank'
                                        >

                                            <Typography
                                                variant     ={valuesInput.TypographyConfig.variantBody1}
                                                className   ={valuesInput.BoxClasses.Class_Box_Typography_hover}
                                                sx          ={{ 
                                                    color: (theme) => theme.palette.primary.contrastText
                                                }}
                                            >
                                                {
                                                    valuesInput.BoxContentText.projects.ButtonCodeText
                                                }
                                            </Typography>

                                        </a>

                                    </Button>

                                    <Button
                                        sx          ={{ background: (theme) => theme.palette.button.primary }}
                                        className   ={valuesInput.BoxClasses.Class_Box_Button_hover}
                                    >
                                        <a
                                            href    ={valuesInput.BoxContentText.projects.list[previewProjectState].linkDemo}
                                            target  ='_blank'
                                        >

                                            <Typography
                                                variant     ={valuesInput.TypographyConfig.variantBody1}
                                                className   ={valuesInput.BoxClasses.Class_Box_Typography_hover}
                                                sx          ={{ color: (theme) => theme.palette.primary.contrastText }}
                                            >
                                                {
                                                    valuesInput.BoxContentText.projects.ButtonDemoText
                                                }
                                            </Typography>

                                        </a>

                                    </Button>

                                </Box>

                            </Box>
                            <Box
                                className   ={valuesInput.BoxClasses.Class_Box_Grid_hover_second}
                            >
                                <img
                                    className   ={valuesInput.BoxClasses.Class_Box_img_hover_preview}
                                    src         ={valuesInput.BoxContentText.projects.list[previewProjectState].preview} 
                                >
                                </img>

                            </Box>

                        </Box>
                    :null
                }
            </React.Fragment>
        )
    }


    return(
        <React.Fragment>
            <Container
                className   ={valuesInput.BoxClasses.Class_Box_Container}
                sx          ={{ backgroundColor: (theme) => theme.palette.background.alternative }}
            >

                <Typography
                    className   ={valuesInput.BoxClasses.Class_Box_Typography}
                    variant     ={valuesInput.TypographyConfig.variantH2}
                    sx          ={{ color: (theme) => theme.palette.text.fifth }}
                >
                    {
                        valuesInput.BoxContentText.projects.title 
                    }
                </Typography>

                <Grid
                    container
                    columns     ={valuesInput.GridConfig.Grid_size}
                    className   ={valuesInput.BoxClasses.Class_Box_Grid}
                >
                    <NoSsr>
                        {
                            valuesInput.BoxContentText.projects.list.map((item,index)=>{
                                return(
                                        <Grid
                                            sx          ={{
                                                    '@media (max-width:850px)': {
                                                        flexBasis: '100%',
                                                        maxWidth: '100%',
                                                    }
                                                }}
                                            size        ={valuesInput.GridConfig.Grid_columns}
                                            key         ={index}
                                            className   ={valuesInput.BoxClasses.Class_Box_Grid_second}
                                        >
                                            <img 
                                                src         ={valuesInput.BoxContentText.projects.list[index].preview} 
                                                className   ={valuesInput.BoxClasses.Class_Box_img_preview}
                                                key         ={index}
                                                alt         ="preview"
                                                onClick     ={()=>{handleOpenBackDrop(index)}}
                                            />

                                            <Typography
                                                className   ={valuesInput.BoxClasses.Class_Box_Typography_hover}
                                                variant     ={valuesInput.TypographyConfig.variantH3}
                                                sx          ={{ color: (theme) => theme.palette.text.secondary }}
                                            >
                                                {
                                                    valuesInput.BoxContentText.projects.list[index].name
                                                }
                                            </Typography>

                                            <Typography
                                                className   ={valuesInput.BoxClasses.Class_Box_Typography_hover}
                                                variant     ={valuesInput.TypographyConfig.variantBody1}
                                                sx          ={{ color: (theme) => theme.palette.text.fifth }}
                                            >
                                                {
                                                    valuesInput.BoxContentText.projects.list[index].status
                                                }
                                            </Typography>

                                            <Typography
                                                className   ={valuesInput.BoxClasses.Class_Box_Typography_hover}
                                                variant     ={valuesInput.TypographyConfig.variantBody1}
                                                sx          ={{ color: (theme) => theme.palette.text.fifth }}
                                            >
                                                {
                                                    valuesInput.BoxContentText.projects.list[index].description_preview
                                                }
                                            </Typography>

                                        </Grid>
                                )
                            })
                        }
                    </NoSsr>

                </Grid>

                <Backdrop
                    sx      ={(theme) => ({ color: theme.palette.secondary.contrastText, zIndex: theme.zIndex.drawer + 1 })}
                    open    ={openBackDrop}
                    onClick ={handleCloseBackDrop}
                >

                    <Container
                        className   ={valuesInput.BoxClasses.Class_Box_Container_hover}
                        sx          ={(theme)=>({ backgroundColor: theme.palette.background.default })}
                    >

                        <PreviewProject />
                        
                    </Container>

                </Backdrop>

            </Container>

        </React.Fragment>
    )
}