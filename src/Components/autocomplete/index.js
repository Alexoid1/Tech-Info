import React, { Component } from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import './style.css';

class Autocomplete extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };
    }

    render() {
        const {
            suggestions,
            onChangeText,
            onChangeSelection,
            text,
        } = this.props;
        const {
            isOpen,  //ESTADO Q SE LA DA A UNA INPUT BASE EN EL COMPONENTE DE MATERIUAL UI
        } = this.state;

        return (
            <div className="main-container">
                <div className="container-icon">
                    <SearchIcon />
                </div>
                <InputBase             //1)BUSCAR  TEXTO:AQUI ES INGRESADO EL TEXTO CON EL CUAL VA FUNCIONAS LA BARRA DE BUSQUEDA Y LOS RESULTADOS
                    placeholder="Search…"      //
                    value={text}               //
                    style={{ width: '100%' }}  // PROPIEDADES DEL INPUT
                    onChange={(event) => {     //
                        const newText = event.target.value; //GUARDA NUEVO TEXTO EN VARIABLE

                        onChangeText(newText);  //CAMBIA EL ESTA SI HAY TEXTO Y ASIGA COMO VALOR DE ESTADO ESE TEXTO

                        if (!isOpen && newText) {
                            this.setState({ isOpen: true });
                        } else if (isOpen && !newText) {
                            this.setState({ isOpen: false });
                        }
                    }}
                    onBlur={() => {
                        setTimeout(() => this.setState({ isOpen: false }), 100); // DEJA DE MOSTRAT OPCIONES DE BUSQUEDA 
                    }}
                    onFocus={() => {
                        if (text) {
                            this.setState({ isOpen: true });  //funciones q determinan cuando va estar la barra de auto comopletado abierta
                        }
                    }}
                    onKeyPress={(event) => {
                        if (event.key === 'Enter' && text) { 
                            onChangeSelection(text);    //1)BUSCAR RESULTADO aqui empieza la accion
                        }
                    }}
                />
                {isOpen &&
                <Paper className="container-results" square>
                    {suggestions.map(suggestion =>
                    <MenuItem
                        key={suggestion.id}
                        component="div"
                        onClick={() => {
                            onChangeSelection(suggestion.title);
                            this.setState({ isOpen: false });
                        }}
                    >
                        {suggestion.title}
                    </MenuItem>)}
                </Paper>}
            </div>
        );
    }
}

export default Autocomplete;