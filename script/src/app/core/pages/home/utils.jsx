import * as React from 'react'
import {printf} from "../../../global/globalFunctions"
import {
    Typography,
    Container ,  
    Button,
    Backdrop,
    Box,
    MobileStepper,
    Paper,
    TextareaAutosize,
    TextField,
    Alert,
    AlertTitle,
    Stack 
} from '@mui/material';
import Grid from '@mui/material/Grid2';
//import NoSsr from '@mui/material/NoSsr';
import {
    KeyboardArrowLeft,
    KeyboardArrowRight
}from '@mui/icons-material';




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
                            sx={{ color: (theme) => theme.palette.text.third }}
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
                    sx={{color: (theme) => theme.palette.text.primary}}
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
                                    sx={{ color: (theme) => theme.palette.text.third }}
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
                                        target='_blank'
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
                                        target='_blank'
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
                    sx={{ backgroundColor: (theme) => theme.palette.background.alternative }}
                >
                    <Typography
                        className={valuesInput.BoxClasses.Class_Box_Typography}
                        variant={valuesInput.TypographyConfig.variantH2}
                        sx={{ color: (theme) => theme.palette.text.fifth }}
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
                                                sx={{ color: (theme) => theme.palette.text.fifth }}
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


/* 
=============================================================================
    HOME BOX BRANDS
=============================================================================
*/

function BoxHomeBrands(valuesInput){

    return(
        <React.Fragment>
            <Container
                className={valuesInput.BoxClasses.Class_Box_Container}
            >
                <Typography
                    className={valuesInput.BoxClasses.Class_Box_Typography}
                    variant={valuesInput.TypographyConfig.variant}
                    sx={{color: (theme) => theme.palette.text.primary}}
                >
                    {
                        valuesInput.BoxContentText.brands?
                        valuesInput.BoxContentText.brands.title
                        :null
                    }
                </Typography>
                <Grid
                    className={valuesInput.BoxClasses.Class_Box_Grid}
                    container
                    columns={valuesInput.GridConfig.Grid_size}
                >
                {
                    valuesInput.BoxContentText.brands.list?
                        valuesInput.BoxContentText.brands.list.map((item,index)=>{
                            return(
                                <React.Fragment
                                    key={index}
                                >
                                    <Grid
                                        size={valuesInput.GridConfig.Grid_columns}
                                        key={index}
                                        className={valuesInput.BoxClasses.Class_Box_Grid_Second}
                                    >
                                        <img 
                                            src={item.logo} 
                                            alt={item.label}
                                            className={valuesInput.BoxClasses.Class_Box_img}
                                            title={item.label} 
                                            key={index}
                                        />
                                    </Grid>
                                </React.Fragment>
                            )
                        })
                    :null
                }
                 
                </Grid>
            </Container>
        </React.Fragment>
    )
}


/* 
=============================================================================
    HOME BOX TESTIMONIAL
=============================================================================
*/


function BoxTestimonial(valuesInput){
    
    const steps = valuesInput.BoxContentText.testimonial.list||[{
        "name":" ",
        "function":" ",
        "workedIn":" ",
        "message":" ",
        "img":"/?"
    }]

    const [activeStep, setActiveStep] = React.useState(0)

    const maxSteps = steps.length
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    return(
        <React.Fragment>
            <Container
                className={valuesInput.BoxClasses.Class_Box_Container}
            >
                <Typography
                    variant={valuesInput.TypographyConfig.variantH2}
                    className={valuesInput.BoxClasses.Class_Box_Typography}
                >
                    {
                        valuesInput.BoxContentText.testimonial?
                        valuesInput.BoxContentText.testimonial.title
                        :null   
                    }
                </Typography>

                <Paper
                    square
                    elevation={valuesInput.PaperConfig.elevation}
                    className={valuesInput.BoxClasses.Class_Box_Paper}
                >
                    <Grid
                        className={valuesInput.BoxClasses.Class_Box_Grid}
                        container
                        columns={valuesInput.GridConfig.Grid_size}
                    >
                        <Grid
                            className={`
                                ${valuesInput.BoxClasses.Class_Box_Grid_second} 
                                ${valuesInput.BoxClasses.Class_Box_Grid_second_img}
                            `}
                            size={valuesInput.GridConfig.Grid_columns}
                        >
                            <img 
                                src={steps[activeStep].img} 
                                alt={steps[activeStep].img}
                                className={valuesInput.BoxClasses.Class_Box_img}
                            />  
                        </Grid>

                        <Grid
                            className={`
                                ${valuesInput.BoxClasses.Class_Box_Grid_second} 
                                ${valuesInput.BoxClasses.Class_Box_Grid_second_txt}
                            `.trim()}
                            size={valuesInput.GridConfig.Grid_columns}
                        >
                            <Typography
                                variant= {valuesInput.TypographyConfig.variantH5}
                                className={valuesInput.BoxClasses.Class_Box_MobileStepper_Typography}
                                sx={{color: (theme) => theme.palette.text.secondary}}
                            >
                                {steps[activeStep].name}
                            </Typography>

                            <Typography
                                variant= {valuesInput.TypographyConfig.variantH5}
                                className={valuesInput.BoxClasses.Class_Box_MobileStepper_Typography}
                                sx={{color: (theme) => theme.palette.text.secondary}}
                            >
                                {steps[activeStep].function}
                            </Typography>

                            <Typography
                                variant= {valuesInput.TypographyConfig.variantH5}
                                className={valuesInput.BoxClasses.Class_Box_MobileStepper_Typography}
                                sx={{color: (theme) => theme.palette.text.secondary}}
                            >
                               {steps[activeStep].workedIn}
                            </Typography>

                            <Typography
                                variant= {valuesInput.TypographyConfig.variantBody1}
                                className={valuesInput.BoxClasses.Class_Box_MobileStepper_Typography}
                                sx={{color: (theme) => theme.palette.secondary.contrastText}}
                            >
                                {steps[activeStep].message}
                            </Typography>

                        </Grid>
                   </Grid>
                </Paper>

                <MobileStepper
                    variant={valuesInput.MobileStepperConfig.variant}
                    steps={maxSteps}
                    position={valuesInput.MobileStepperConfig.position}
                    activeStep={activeStep}
                    className={valuesInput.BoxClasses.Class_Box_MobileStepper}
                    nextButton={
                        <Button
                            size={valuesInput.ButtonConfig.size}
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                            className={valuesInput.BoxClasses.Class_Box_Button}
                            sx={{
                                color: (theme) => theme.palette.text.third,
                                '&.Mui-disabled': {
                                    color: (theme) => theme.palette.background.default,
                                },
                            }}
                        >
                            {
                                valuesInput.BoxContentText.testimonial.next
                            }
                            <KeyboardArrowRight />
                        </Button>
                    }
                    backButton={
                        <Button 
                            size={valuesInput.ButtonConfig.size}
                            onClick={handleBack} 
                            disabled={activeStep === 0}
                            className={valuesInput.BoxClasses.Class_Box_Button}
                            sx={{
                                color: (theme) => theme.palette.text.third,
                                '&.Mui-disabled': {
                                    color: (theme) => theme.palette.background.default,
                                },
                            }}
                        >
                            <KeyboardArrowLeft />
                            {
                                valuesInput.BoxContentText.testimonial.prev
                            }
                        </Button>
                    }
                    sx={{
                        '& .MuiMobileStepper-dot': {
                            backgroundColor: (theme) => theme.palette.background.alternative, // cor das bolinhas inativas
                        },
                        '& .MuiMobileStepper-dotActive': {
                            backgroundColor: (theme) => theme.palette.primary.contrastText, // cor da bolinha ativa
                        },
                      }}
                />
            </Container>
        </React.Fragment>
    )
}



/* 
=============================================================================
    HOME BOX CONTACT
=============================================================================
*/


function BoxHomeContact(valuesInput){

    const [loading, setLoading] = React.useState(false)

    const [_alert, set_Alert] = React.useState({
        state:      false,
        severity:   '',
        alertTile:  '',
        category:   ''
    })

    const [form, setForm] = React.useState({
        subject:    '',
        name:       '',
        message:    ''
    })

    const handleCloseAlert = () => {
        set_Alert((prev) => ({
            ...prev,
            state: false
        }))
    }


    const handleAlert = (event_id) => {
        // 1 success
        // 2 error
        // 3 warning
        // 4 info

        let severity = '';
        let category = '';

        if (event_id === 1) {
            severity = 'success';
            category = 'success';
        }
        if (event_id === 2) {
            severity = 'error';
            category = 'error';
        }
        if (event_id === 3) {
            severity = 'warning';
            category = 'warning';
        }

        set_Alert({
            state: true,
            severity,
            category
        });

    }


    const handleSendEmail =(e)=>{
        const _dest = "pedrovotf@gmail.com"
        const _name = form.name
        const _subject = form.subject
        const _message = encodeURIComponent(form.message)
        const mailtoLink = `mailto:${_dest}?subject=${encodeURIComponent(_subject)}&body=${encodeURIComponent('From:'+_name + '\n' + _message)}`

        try {
            window.location.href = mailtoLink;
            handleAlert(1)
            setTimeout(()=>{
                setLoading(false)
            }, 2000)
        } catch (error) {
            handleAlert(2)
            return 
        }
        
    }

    const validateForm = (e) => {
        const {
            subject,
            name,
            message,
        } = e

        if(!subject || !name || !message){
            setLoading(false)
            handleAlert(3)
            return 
        }

        if(message.length < 3 || subject.length < 3){
            setLoading(false)
            handleAlert(3)
            return 
        }

        else{
            handleSendEmail()
        }


    }
    
    const handleLoading=(e)=>{
        setLoading(true)
        validateForm(form)
    }

    const handleChangeForm=(e, label)=>{
        const {value} = e.target
        setForm({
            ...form,
            [label]: value,
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        handleLoading()
    }


    return(
        <React.Fragment>
            <Container
                className={valuesInput.BoxClasses.Class_Box_Container}
            >
         
                <Typography
                    variant={valuesInput.TypographyConfig.variantH2}
                    className={valuesInput.BoxClasses.Class_Box_Typography}
                >
                    {
                        valuesInput.BoxContentText.contact.title
                    }
                </Typography>

                <Typography
                    variant={valuesInput.TypographyConfig.variantH5}
                    className={valuesInput.BoxClasses.Class_Box_Typography}
                    sx={{color: (theme) => theme.palette.text.secondary}}
                >
                    {
                        valuesInput.BoxContentText.contact.subtitle
                    }
                </Typography>
                <Stack
                    sx={{display:'block'}}
                    className={valuesInput.BoxClasses.Class_Box_Stack}
                >
                   {_alert.state && (
                        <Alert
                            onClose={() => {handleCloseAlert()}} 
                            severity={_alert.severity} 
                            className={valuesInput.BoxClasses.Class_Box_Stack_Alert}
                        >
                            <AlertTitle>
                                {_alert.severity}
                            </AlertTitle>
                            {
                                _alert.category === 'success' ?
                                    valuesInput.BoxContentText.contact.alert.success :
                                    _alert.category === 'error' ?
                                    valuesInput.BoxContentText.contact.alert.error :
                                    _alert.category === 'warning' ?
                                    valuesInput.BoxContentText.contact.alert.warning :
                                    _alert.category === 'info' ?
                                    valuesInput.BoxContentText.contact.alert.inf :
                                    null
                            }
                        </Alert>
                    )}
                </Stack>
                <Grid
                    className={valuesInput.BoxClasses.Class_Box_Grid}
                    container
                    columns={valuesInput.GridConfig.Grid_size}
                >
                    <Grid
                        className={valuesInput.BoxClasses.Class_Box_Grid_Second}
                        size={valuesInput.GridConfig.Grid_columns}
                    >
                        <Box
                            variant={valuesInput.BoxConfig.variant}
                            component={valuesInput.BoxConfig.component}
                            onSubmit={handleSubmit}
                            className={valuesInput.BoxClasses.Class_Box_Form}
                        >
                            {
                                valuesInput.BoxContentText.contact.form?
                                <React.Fragment>
                                    <TextField
                                        id={valuesInput.TextFieldConfig.variant}
                                        label="subject"
                                        name="subject"
                                        type={valuesInput.TextFieldConfig.type_text}
                                        placeholder={valuesInput.BoxContentText.contact.form.subject || ''}
                                        focused ={valuesInput.TextFieldConfig.focused}
                                        helperText={''}
                                        className={valuesInput.BoxClasses.Class_Box_TextField}  
                                        onChange={(e)=>{handleChangeForm(e,'subject')}}
                                        sx={{
                                            '& label.Mui-focused': {
                                              color: (theme) => theme.palette.text.secondary,
                                            },
                                            '& .MuiOutlinedInput-root': {
                                              '&.Mui-focused fieldset': {
                                                borderColor: (theme) => theme.palette.text.secondary,
                                              },
                                              color: (theme) => theme.palette.text.third,
                                            },
                                          }}                         
                                    />

                                    <TextField
                                        id={valuesInput.TextFieldConfig.variant}
                                        label="name"
                                        name="name"
                                        type={valuesInput.TextFieldConfig.type_text}
                                        placeholder="Joe Black"
                                        focused ={valuesInput.TextFieldConfig.focused}
                                        helperText={''}
                                        className={valuesInput.BoxClasses.Class_Box_TextField}
                                        onChange={(e)=>{handleChangeForm(e,'name')}}
                                        sx={{
                                            '& label.Mui-focused': {
                                              color: (theme) => theme.palette.text.secondary,
                                            },
                                            '& .MuiOutlinedInput-root': {
                                              '&.Mui-focused fieldset': {
                                                borderColor: (theme) => theme.palette.text.secondary,
                                              },
                                              color: (theme) => theme.palette.text.third,
                                            },
                                          }}
                                    />

                                    <TextareaAutosize
                                        placeholder={valuesInput.BoxContentText.contact.form.message || ''}
                                        focused = {valuesInput.TextFieldConfig.focused}
                                        className={valuesInput.BoxClasses.Class_TextArea}
                                        onChange={(e)=>{handleChangeForm(e,'message')}}
                                    />

                                    <Button
                                        variant={valuesInput.ButtonConfig.variant}
                                        type={valuesInput.ButtonConfig.type}
                                        loading={loading}
                                        onClick={(e)=>{handleSubmit(e)}}
                                        sx={{ 
                                            background: (theme) => theme.palette.button.primary,
                                        }}
                                        className={valuesInput.BoxClasses.Class_Box_Button}
                                    >
                                        {
                                            valuesInput.BoxContentText.contact.form?
                                            valuesInput.BoxContentText.contact.form.send
                                            :null
                                        }
                                    </Button>
                                </React.Fragment>
                                :null
                            }
                        </Box>
                    </Grid>

                    <Grid
                        className={valuesInput.BoxClasses.Class_Box_Grid_Second}
                        size={valuesInput.GridConfig.Grid_columns}
                    >
                        {
                            valuesInput.BoxContentText.contact.image?
                            <img
                                src={valuesInput.BoxContentText.contact.image}
                                className={valuesInput.BoxClasses.Class_Box_img} 
                            />
                            :null
                        }
                    </Grid>
                </Grid>
                <React.Fragment>
                
            </React.Fragment>
            </Container>
        </React.Fragment>
    )
}


export {
    BoxHomeIntro,
    BoxHomeAboutMe,
    BoxHomeTecnologies,
    BoxHomeProjects,
    BoxHomeBrands,
    BoxTestimonial,
    BoxHomeContact
};
