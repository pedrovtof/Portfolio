import React        from 'react'
import {
    Typography,
    Container,
    NoSsr,
    Button,
    Box,
    TextareaAutosize,
    TextField,
    Alert,
    AlertTitle,
    Stack 
}                   from '@mui/material'


export const BoxHomeContact = (valuesInput) =>{

    const [loading, setLoading] = React.useState(false)
    const [_alert, set_Alert]   = React.useState({
        state:      false,
        severity:   '',
        alertTile:  '',
        category:   ''
    })
    const [form, setForm]       = React.useState({
        subject:    '',
        name:       '',
        message:    ''
    })
    const handleCloseAlert      = () => {
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

        let severity = ''
        let category = ''

        if (event_id === 1) {
            severity = 'success'
            category = 'success'
        }
        if (event_id === 2) {
            severity = 'error'
            category = 'error'
        }
        if (event_id === 3) {
            severity = 'warning'
            category = 'warning'
        }

        set_Alert({
            state: true,
            severity,
            category
        })

    }


    const handleSendEmail =(e)=>{
        const _dest         = "pedrovotf@gmail.com"
        const _name         = form.name
        const _subject      = form.subject
        const _message      = encodeURIComponent(form.message)
        const mailtoLink    = `mailto:${_dest}?subject=${encodeURIComponent(_subject)}&body=${encodeURIComponent('From:'+_name + '\n' + _message)}`

        try {
            window.location.href = mailtoLink

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
                    variant     ={valuesInput.TypographyConfig.variantH2}
                    className   ={valuesInput.BoxClasses.Class_Box_Typography}
                >
                    {
                        valuesInput.BoxContentText.contact.title
                    }
                </Typography>

                <Typography
                    variant     ={valuesInput.TypographyConfig.variantH5}
                    className   ={valuesInput.BoxClasses.Class_Box_Typography}
                    sx          ={{color: (theme) => theme.palette.text.secondary}}
                >
                    {
                        valuesInput.BoxContentText.contact.subtitle
                    }
                </Typography>

                <Stack
                    sx          ={{display:'block'}}
                    className   ={valuesInput.BoxClasses.Class_Box_Stack}
                >

                   {    
                        _alert.state && (
                            <Alert
                                onClose     ={() => {handleCloseAlert()}} 
                                severity    ={_alert.severity} 
                                className   ={valuesInput.BoxClasses.Class_Box_Stack_Alert}
                            >

                                <AlertTitle>
                                    {_alert.severity}
                                </AlertTitle>

                                {
                                        _alert.category     === 'success'   ?
                                        valuesInput.BoxContentText.contact.alert.success    :

                                        _alert.category === 'error'         ?
                                        valuesInput.BoxContentText.contact.alert.error      :

                                        _alert.category === 'warning'       ?
                                        valuesInput.BoxContentText.contact.alert.warning    :

                                        _alert.category === 'info'          ?
                                        valuesInput.BoxContentText.contact.alert.inf        :
                                        
                                        null
                                }

                            </Alert>

                        )
                    }

                </Stack>

                <Box
                    className   ={valuesInput.BoxClasses.Class_Box_Grid}
                >

                    <Box
                        className   ={valuesInput.BoxClasses.Class_Box_Grid_Second}
                    >

                        <Box
                            variant     ={valuesInput.BoxConfig.variant}
                            component   ={valuesInput.BoxConfig.component}
                            onSubmit    ={handleSubmit}
                            className   ={valuesInput.BoxClasses.Class_Box_Form}
                        >

                            
                            <React.Fragment>

                                <TextField
                                    id          ={valuesInput.TextFieldConfig.variant}
                                    label       ="subject"
                                    name        ="subject"
                                    type        ={valuesInput.TextFieldConfig.type_text}
                                    placeholder ={valuesInput.BoxContentText.contact.form.subject || ''}
                                    focused     ={valuesInput.TextFieldConfig.focused}
                                    helperText  ={''}
                                    className   ={valuesInput.BoxClasses.Class_Box_TextField}  
                                    onChange    ={(e)=>{handleChangeForm(e,'subject')}}
                                    sx          ={{
                                        '& label.Mui-focused'       : {
                                            color: (theme) => theme.palette.text.secondary,
                                        },
                                        '& .MuiOutlinedInput-root'  : {
                                            '&.Mui-focused fieldset': { borderColor: (theme) => theme.palette.text.secondary },
                                            color                   : (theme) => theme.palette.text.third,
                                        },
                                        }}                        
                                />

                                <TextField
                                    id          ={valuesInput.TextFieldConfig.variant}
                                    label       ="name"
                                    name        ="name"
                                    type        ={valuesInput.TextFieldConfig.type_text}
                                    placeholder ="Joe Black"
                                    focused     ={valuesInput.TextFieldConfig.focused}
                                    helperText  ={''}
                                    className   ={valuesInput.BoxClasses.Class_Box_TextField}
                                    onChange    ={(e)=>{handleChangeForm(e,'name')}}
                                    sx          ={{
                                        '& label.Mui-focused'       : { color: (theme) => theme.palette.text.secondary },
                                        '& .MuiOutlinedInput-root'  : {
                                            '&.Mui-focused fieldset': { borderColor: (theme) => theme.palette.text.secondary },
                                                color: (theme) => theme.palette.text.third,
                                        },
                                        }}
                                />

                                <TextareaAutosize
                                    placeholder ={valuesInput.BoxContentText.contact.form.message || ''}
                                    focused     = {valuesInput.TextFieldConfig.focused}
                                    className   ={valuesInput.BoxClasses.Class_TextArea}
                                    onChange    ={(e)=>{handleChangeForm(e,'message')}}
                                    minRows     ={valuesInput.TextareaAutosizeConfig.maxRows}
                                />

                                <NoSsr>
                                    <Button
                                        variant ={valuesInput.ButtonConfig.variant}
                                        type    ={valuesInput.ButtonConfig.type}
                                        loading ={loading}
                                        onClick ={(e)=>{handleSubmit(e)}}
                                        sx      ={{ 
                                            background  : (theme) => theme.palette.button.primary,
                                            color       : (theme) => theme.palette.text.secondary
                                        }}
                                        className={valuesInput.BoxClasses.Class_Box_Button}
                                    >
                                        {
                                            valuesInput.BoxContentText.contact.form.send
                                        }

                                    </Button>
                                </NoSsr>

                            </React.Fragment>
                                
                        </Box>

                    </Box>

                    <Box
                        className   ={valuesInput.BoxClasses.Class_Box_Grid_Second}
                    >

                        {
                            <img
                                src         ={valuesInput.BoxContentText.contact.image}
                                className   ={valuesInput.BoxClasses.Class_Box_img} 
                            />
                        }

                    </Box>

                </Box>

            </Container>
        </React.Fragment>
    )
}
