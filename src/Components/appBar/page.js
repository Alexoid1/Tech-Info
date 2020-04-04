import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Autocomplete from '../autocomplete';
import './style.css';


export default function Page(props) {
    const {text,suggestions,onChangeText,onChangeSelection}=props;    //2)BUSCAR TEXTO: SE MAQUETA EL COMPONENTE EN EL NAV BAR 2)BUSCAR RESULTADO asigna la funcion onchangeselection al componente
    return (
        <AppBar position="static">           
            <Toolbar className="appbar">
                <Typography variant="h6" colors="inherit">
                    Alexoid

                </Typography>            
                <Autocomplete text={text} suggestions={suggestions} onChangeText={onChangeText} onChangeSelection={onChangeSelection}/>   
                
                <AccountCircle/>

            </Toolbar>

        </AppBar>
    )
}
