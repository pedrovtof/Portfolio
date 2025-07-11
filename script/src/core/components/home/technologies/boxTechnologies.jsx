import React        from 'react'
import {
    Typography,
    Container,
    NoSsr
}                   from '@mui/material'
import Grid         from '@mui/material/Grid2'

export const BoxHomeTechnologies = (valuesInput) => {

    const imageList = [
        '/images/tech/js.png',
        '/images/tech/python.png',
        '/images/tech/react.png',
        '/images/tech/next-js.png',
        '/images/tech/sql-server.png',
        '/images/tech/postgre.png',
        '/images/tech/mysql.png'
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
                                const name_item = item.replace('/images/tech/','')
                                
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

