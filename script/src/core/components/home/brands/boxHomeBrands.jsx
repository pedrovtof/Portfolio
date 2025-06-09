import React        from 'react'
import {
    Typography,
    Container,
    NoSsr
}                   from '@mui/material'
import Grid         from '@mui/material/Grid2'


export const BoxHomeBrands = (valuesInput) =>{


    return(
        <React.Fragment>
            <Container
                className={valuesInput.BoxClasses.Class_Box_Container}
            >

                <Typography
                    className   ={valuesInput.BoxClasses.Class_Box_Typography}
                    variant     ={valuesInput.TypographyConfig.variant}
                    sx          ={{ color: (theme) => theme.palette.text.secondary }}
                >
                    {
                        valuesInput.BoxContentText.brands.title
                    }
                </Typography>

                <Grid
                    className   ={valuesInput.BoxClasses.Class_Box_Grid}
                    container
                    columns     ={valuesInput.GridConfig.Grid_size}
                    sx          ={{
                        justifyContent:"space-evenly",
                    }}
                >
                    <NoSsr>
                        {
                            valuesInput.BoxContentText.brands.list.map((item,index)=>{

                                return(
                                    <React.Fragment
                                        key={index}
                                    >

                                        <Grid
                                            size        ={valuesInput.GridConfig.Grid_columns}
                                            key         ={index}
                                            className   ={valuesInput.BoxClasses.Class_Box_Grid_Second}
                                        >

                                            <img 
                                                src         ={item.logo} 
                                                alt         ={item.label}
                                                className   ={valuesInput.BoxClasses.Class_Box_img}
                                                title       ={item.label} 
                                                key         ={index}
                                            />

                                        </Grid>

                                    </React.Fragment>
                                )
                            })
                            
                        }
                    </NoSsr>
                 
                </Grid>

            </Container>

        </React.Fragment>
    )

}