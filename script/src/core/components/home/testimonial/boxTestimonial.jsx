import React        from 'react'
import {
    Typography,
    Container,
    Button,
    Box,
    MobileStepper,
    Paper
}                   from '@mui/material'
import {
    KeyboardArrowLeft,
    KeyboardArrowRight
}                   from '@mui/icons-material'

export const BoxTestimonial =(valuesInput) =>{
    
    const steps                         = valuesInput.BoxContentText.testimonial.list||[{
        "name"      :" ",
        "function"  :" ",
        "workedIn"  :" ",
        "message"   :" ",
        "img"       :"/?"
    }]
    const [activeStep, setActiveStep]   = React.useState(0)
    const maxSteps                      = steps.length
  
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
                    variant     ={valuesInput.TypographyConfig.variantH2}
                    className   ={valuesInput.BoxClasses.Class_Box_Typography}
                >
                    {
                        valuesInput.BoxContentText.testimonial.title
                    }
                </Typography>

                <Paper
                    square
                    elevation   ={valuesInput.PaperConfig.elevation}
                    className   ={valuesInput.BoxClasses.Class_Box_Paper}
                    sx          ={{ backgroundColor: theme => theme.palette.background.alternative }}
                >

                    <Box
                        className   ={valuesInput.BoxClasses.Class_Box_Grid}
                    >

                        <Box
                            className   ={`
                                ${valuesInput.BoxClasses.Class_Box_Grid_second} 
                                ${valuesInput.BoxClasses.Class_Box_Grid_second_img}
                            `}
                        >
                            {
                                steps[activeStep].img=="/?"?
                                <img 
                                    src         ='/images/selfies/null_user_photo.png' 
                                    alt         ='None'
                                    className   ={valuesInput.BoxClasses.Class_Box_img}
                                />
                                :
                                <img 
                                    src         ={steps[activeStep].img} 
                                    alt         ={steps[activeStep].img}
                                    className   ={valuesInput.BoxClasses.Class_Box_img}
                                />
                            }
                            

                        </Box>

                        <Box
                            className   ={`
                                ${valuesInput.BoxClasses.Class_Box_Grid_second} 
                                ${valuesInput.BoxClasses.Class_Box_Grid_second_txt}
                            `.trim()}
                        >
                            
                            <Typography
                                variant     ={valuesInput.TypographyConfig.variantH5}
                                className   ={valuesInput.BoxClasses.Class_Box_MobileStepper_Typography}
                                sx          ={{color: (theme) => theme.palette.text.secondary}}
                            >
                                {steps[activeStep].name}
                            </Typography>

                            <Typography
                                variant     = {valuesInput.TypographyConfig.variantH5}
                                className   ={valuesInput.BoxClasses.Class_Box_MobileStepper_Typography}
                                sx          ={{color: (theme) => theme.palette.text.secondary}}
                            >
                                {steps[activeStep].function}
                            </Typography>

                            <Typography
                                variant     = {valuesInput.TypographyConfig.variantH5}
                                className   ={valuesInput.BoxClasses.Class_Box_MobileStepper_Typography}
                                sx          ={{color: (theme) => theme.palette.text.secondary}}
                            >
                               {steps[activeStep].workedIn}
                            </Typography>

                            <Typography
                                variant     = {valuesInput.TypographyConfig.variantBody1}
                                className   ={valuesInput.BoxClasses.Class_Box_MobileStepper_Typography}
                                sx          ={{color: (theme) => theme.palette.text.fifth}}
                            >
                                {steps[activeStep].message}
                            </Typography>

                        </Box>

                    </Box>

                </Paper>

                <MobileStepper
                    variant     ={valuesInput.MobileStepperConfig.variant}
                    steps       ={maxSteps}
                    position    ={valuesInput.MobileStepperConfig.position}
                    activeStep  ={activeStep}
                    className   ={valuesInput.BoxClasses.Class_Box_MobileStepper}
                    nextButton  ={
                        <Button
                            onClick     ={handleNext}
                            disabled    ={activeStep === maxSteps - 1}
                            className   ={valuesInput.BoxClasses.Class_Box_Button}
                            sx          ={{
                                color           : (theme) => theme.palette.text.third,
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
                    backButton  ={
                        <Button 
                            onClick     ={handleBack} 
                            disabled    ={activeStep === 0}
                            className   ={valuesInput.BoxClasses.Class_Box_Button}
                            sx          ={{
                                color           : (theme) => theme.palette.text.third,
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
                    sx          ={{
                        '& .MuiMobileStepper-dot'       : { backgroundColor: (theme) => theme.palette.background.alternative},
                        '& .MuiMobileStepper-dotActive' : { backgroundColor: (theme) => theme.palette.primary.contrastText},
                      }}
                />

            </Container>
            
        </React.Fragment>
    )

}