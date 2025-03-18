"use client"
import * as React from 'react'
import {printf} from "../../../global/globalFunctions"
import {
    Typography,
    Container ,  
    Button,
    Backdrop,
    Box
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

    const imageList = [
        'https://github.com/pedrovtof/Portfolio/blob/master/script/public/images/social/github.png?raw=true',
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
                            imageList.length?
                            imageList.map((item, index) => {
                                return (
                                    <Grid
                                        key={index}
                                        size={valuesInput.GridConfig.Grind_columns_second}
                                        className={valuesInput.BoxClasses.Class_Box_Grid_second_box}
                                    >
                                        <a href={
                                            item.includes('linkedin')?'https://www.linkedin.com/in/pedrovotf/':
                                            item.includes('facebook')?'https://www.facebook.com/pedrovtof/':
                                            item.includes('instagram')?'https://www.instagram.com/pedrovtof/':
                                            item.includes('twitter')?'https://x.com/PedroVi13262224':
                                            item.includes('github')?'https://github.com/pedrovtof':
                                            null
                                        } target="_blank" rel="noreferrer">
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
               


/* 
=============================================================================
    HOME BOX TECNOLOGIES
=============================================================================
*/

function BoxHomeTecnologies(
        valuesInput
    ){
    const imageList = [
        'https://github.com/pedrovtof/Portfolio/blob/master/script/public/images/tech/js.png?raw=true',
        'https://github.com/pedrovtof/Portfolio/blob/master/script/public/images/tech/postgre.png?raw=true',
        'https://github.com/pedrovtof/Portfolio/blob/master/script/public/images/tech/python.png?raw=true',
        'https://github.com/pedrovtof/Portfolio/blob/master/script/public/images/tech/react.png?raw=true',
        'https://github.com/pedrovtof/Portfolio/blob/master/script/public/images/tech/sql-server.png?raw=true'
    ] 

    return(
        <React.Fragment>
            <Container
                className={valuesInput.BoxClasses.Class_Box_Container}
            >
                <Typography
                    className={valuesInput.BoxClasses.Class_Box_Grid_title}
                    variant={valuesInput.TypographyConfig.variant}
                >
                    {
                              valuesInput.BoxContentText.technologies?
                              valuesInput.BoxContentText.technologies.title
                              :null
                    }
                </Typography>
                <Grid
                    className={valuesInput.BoxClasses.Class_Box_Grid}
                    container
                    columns={valuesInput.GridConfig.Grid_size}
                >
                    {
                        imageList.map((item,index)=>{
                            const name_item = item.replace('https://github.com/pedrovtof/Portfolio/blob/master/script/public/images/tech/','').replace('?raw=true','')
                            return(
                                <Grid
                                    key={index}
                                    className={valuesInput.BoxClasses.Class_Box_second_grid}
                                    size={valuesInput.GridConfig.Grid_columns}
                                >
                                    <img 
                                        src={item} 
                                        key={index}  
                                        alt={name_item}
                                        title={name_item} 
                                        className={valuesInput.BoxClasses.Class_Box_img} 
                                    />
                                </Grid>
                            )
                        })
                    }  
                </Grid>
            </Container>
        </React.Fragment>
    )

}


/* 
=============================================================================
    HOME BOX PROJECTS
=============================================================================
*/

function BoxHomeProjects(
        valuesInput
    ){

        const [openBackDrop, setopenBackDrop] = React.useState(false);
        const [previewProjectState, setPreviewProjectState] = React.useState(-1);

        const handleCloseBackDrop = () => {
            setopenBackDrop(false);
        }
        const handleOpenBackDrop = (project) => {
            setPreviewProjectState(project);
            setopenBackDrop(true)
        }

        const PreviewProject = () => {
            return(
                previewProjectState>=0 && valuesInput.BoxContentText.projects.list[previewProjectState]?
                    <Grid
                        container
                        columns={valuesInput.GridConfig.Grid_size}
                        className={valuesInput.BoxClasses.Class_Box_Grid_hover}
                    >
                        <Grid
                            size={valuesInput.GridConfig.Grid_columns}
                            className={valuesInput.BoxClasses.Class_Box_Grid_hover_second}
                        >
                            <Box>
                                <Typography
                                    variant={valuesInput.TypographyConfig.variantH1}
                                    className={valuesInput.BoxClasses.Class_Box_Typography_hover}
                                    id={valuesInput.TypographyConfig.size_hover_box_typography_title}
                                    sx={{ color: (theme) => theme.palette.text.primary }}
                                >
                                    {valuesInput.BoxContentText.projects.list[previewProjectState].name}
                                </Typography>

                                <Typography
                                    variant={valuesInput.TypographyConfig.variantBody1}
                                    className={valuesInput.BoxClasses.Class_Box_Typography_hover}
                                    sx={{ color: (theme) => theme.palette.text.thrid }}
                                >   
                                    {valuesInput.BoxContentText.projects.list[previewProjectState].description}
                                </Typography>

                            </Box>
                            <Box>
                                <Typography
                                    variant={valuesInput.TypographyConfig.variantH3}
                                    className={valuesInput.BoxClasses.Class_Box_Typography_hover}
                                    id={valuesInput.TypographyConfig.size_hover_box_typography_title}
                                    sx={{ color: (theme) => theme.palette.text.secondary }}
                                >
                                    {
                                        valuesInput.BoxContentText.projects.hoverTitle?
                                        valuesInput.BoxContentText.projects.hoverTitle
                                        :null
                                    }
                                </Typography>
                            <Grid
                                container
                                columns={valuesInput.GridConfig.Grid_size}
                                className={valuesInput.BoxClasses.Class_Box_Grid_hover_tech}
                            >
                                <Grid
                                    size={valuesInput.GridConfig.Grid_columns_hover}
                                    className={valuesInput.BoxClasses.Class_Box_Grid_hover_tech_second}
                                >
                                    {valuesInput.BoxContentText.projects.list[previewProjectState].technologies.map((item,index)=>{
                                        printf(item)
                                        return(
                                            <img
                                                key={index}
                                                src={item}
                                                alt='preview'
                                                className={valuesInput.BoxClasses.Class_Box_img_hover_tech}
                                            >
                                            </img>
                                        )
                                    })}
                                </Grid>
                            </Grid>
                            </Box>
                            <Box 
                                className={valuesInput.BoxClasses.Class_Box_Button_Container_hover}
                            >
                                <Button
                                    sx={{ 
                                        background: (theme) => theme.palette.button.primary,
                                    }}
                                    className={valuesInput.BoxClasses.Class_Box_Button_hover}
                                >
                                    <a
                                        href={valuesInput.BoxContentText.projects.list[previewProjectState].linkCode}
                                        
                                    >
                                        <Typography
                                            variant={valuesInput.TypographyConfig.variantBody1}
                                            className={valuesInput.BoxClasses.Class_Box_Typography_hover}
                                            sx={{ 
                                                color: (theme) => theme.palette.primary.contrastText
                                            }}
                                        >
                                            {
                                                valuesInput.BoxContentText.projects.ButtonCodeText?
                                                valuesInput.BoxContentText.projects.ButtonCodeText
                                                :null
                                            }
                                        </Typography>
                                    </a>
                                </Button>
                                <Button
                                    sx={{ 
                                        background: (theme) => theme.palette.button.primary,
                                    }}
                                    className={valuesInput.BoxClasses.Class_Box_Button_hover}
                                >
                                    <a
                                        href={valuesInput.BoxContentText.projects.list[previewProjectState].linkDemo}
                                        
                                    >
                                        <Typography
                                            variant={valuesInput.TypographyConfig.variantBody1}
                                            className={valuesInput.BoxClasses.Class_Box_Typography_hover}
                                            sx={{ 
                                                color: (theme) => theme.palette.primary.contrastText
                                            }}
                                        >
                                            {
                                                valuesInput.BoxContentText.projects.ButtonDemoText?
                                                valuesInput.BoxContentText.projects.ButtonDemoText
                                                :null
                                            }
                                        </Typography>
                                    </a>
                                </Button>
                            </Box>
                        </Grid>
                        <Grid
                            size={valuesInput.GridConfig.Grid_columns}
                            className={valuesInput.BoxClasses.Class_Box_Grid_hover_second}
                        >
                            <img
                                className={valuesInput.BoxClasses.Class_Box_img_hover_preview}
                                src={valuesInput.BoxContentText.projects.list[previewProjectState].preview} 
                            >
                            </img>
                        </Grid>
                    </Grid>
                :null
            )
        }


        return(
            <React.Fragment>
                <Container
                    className={valuesInput.BoxClasses.Class_Box_Container}
                >
                    <Typography
                        className={valuesInput.BoxClasses.Class_Box_Typography}
                        variant={valuesInput.TypographyConfig.variantH2}
                    >
                        {
                            valuesInput.BoxContentText.projects.title?
                            valuesInput.BoxContentText.projects.title
                            :null
                        }
                    </Typography>
                    <Grid
                        container
                        columns={valuesInput.GridConfig.Grid_size}
                        className={valuesInput.BoxClasses.Class_Box_Grid}
                    >
                        {
                            valuesInput.BoxContentText.projects.list?
                            valuesInput.BoxContentText.projects.list.map((item,index)=>{
                                return(
                                        <Grid
                                            size={valuesInput.GridConfig.Grid_columns}
                                            key={index}
                                            className={valuesInput.BoxClasses.Class_Box_Grid_second}
                                        >
                                            <img 
                                                src={valuesInput.BoxContentText.projects.list[index].preview} 
                                                className={valuesInput.BoxClasses.Class_Box_img_preview}
                                                key={index}
                                                alt="preview"
                                                onClick={()=>{handleOpenBackDrop(index)}}
                                            />
                                            <Typography
                                                className={valuesInput.BoxClasses.Class_Box_Typography_hover}
                                                variant={valuesInput.TypographyConfig.variantH3}
                                                sx={{ color: (theme) => theme.palette.text.secondary }}
                                            >
                                                {
                                                    valuesInput.BoxContentText.projects.list[index].name
                                                }
                                            </Typography>
                                            <Typography
                                                className={valuesInput.BoxClasses.Class_Box_Typography_hover}
                                                variant={valuesInput.TypographyConfig.variantBody1}
                                                sx={{ color: (theme) => theme.palette.text.thrid }}
                                            >
                                                {
                                                    valuesInput.BoxContentText.projects.list[index].description
                                                }
                                            </Typography>
                                        </Grid>
                                )
                            })
                            :null
                        }
                    </Grid>
                    <Backdrop
                        sx={(theme) => ({ 
                            color: theme.palette.secondary.contrastText, zIndex: theme.zIndex.drawer + 1 
                        })}
                        open={openBackDrop}
                        onClick={handleCloseBackDrop}
                    >
                        <Container
                            className={valuesInput.BoxClasses.Class_Box_Container_hover}
                            sx={(theme)=>({
                                backgroundColor: theme.palette.background.default,
                            })}
                        >
                            <PreviewProject />
                        </Container>
                    </Backdrop>
                </Container>
            </React.Fragment>
        )
}

export {
    BoxHomeIntro,
    BoxHomeAboutMe,
    BoxHomeTecnologies,
    BoxHomeProjects
};
