import React        from 'react'
import {
    Typography,
    Container,
    NoSsr
}                   from '@mui/material'
import Grid         from '@mui/material/Grid2'

export const BoxHomeTechnologies = (valuesInput) => {

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
                    className   ={valuesInput.BoxClasses.Class_Box_Grid_title}
                    sx          ={{color: (theme) => theme.palette.text.primary}}
                    variant     ={valuesInput.TypographyConfig.variant}
                >
                    {
                        valuesInput.BoxContentText.technologies.title                            
                    }
                </Typography>

                <Grid
                    className   ={valuesInput.BoxClasses.Class_Box_Grid}
                    container
                    columns     ={valuesInput.GridConfig.Grid_size}
                >

                    <NoSsr>
                        {
                            imageList.map((item,index)=>{
                                const name_item = item.replace('https://github.com/pedrovtof/Portfolio/blob/master/script/public/images/tech/','').replace('?raw=true','')
                                
                                return(
                                    <Grid
                                        key         ={index}
                                        className   ={valuesInput.BoxClasses.Class_Box_second_grid}
                                        size        ={valuesInput.GridConfig.Grid_columns}
                                    >

                                        <img 
                                            src         ={item} 
                                            key         ={index}  
                                            alt         ={name_item}
                                            title       ={name_item} 
                                            className   ={valuesInput.BoxClasses.Class_Box_img} 
                                        />
                                        
                                    </Grid>
                                )
                            })
                        }
                    </NoSsr>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

