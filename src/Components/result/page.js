import React, { Fragment } from 'react'
import AppBar from '../appBar'
import CssBaseline from '@material-ui/core/CssBaseline';//SE USA PARA Q NO HALLA CONFICTO CON LOS ESTILOS DEL OTRO COMPONENTE
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from '@material-ui/core';
import './style.css'

export default function page(props) { //3)BUSCAR TEXTO: MAQUETA AL NAV BAR EN TODA LA PAGINA//
    const {results,goTo,}=props
    const isEmpty=results.length
    return (
        <Fragment>
            <CssBaseline/>
            <AppBar/>            
            <div className="results-page">
               {isEmpty===0 ?
                    <Typography variant="h5" component="h3" className="page-message">
                       There are no results

                    </Typography>
                    :results.map(item=>
                        <div
                            key={item.id}
                            className='card-container'
                        >
                            <Card
                                className="card"
                                onClick={() => goTo(`/details/${item.id}`)}
                            >
                                <CardActionArea>
                                    <CardMedia
                                        className="card-media"
                                        image={item.image}
                                        title={item.title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {item.title}
                                        </Typography>
                                        <Typography component="p">
                                            {item.content}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                        </div>)
               }
            </div>
            
        </Fragment>
    )
}
