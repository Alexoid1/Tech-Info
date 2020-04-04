import React, { Component } from 'react'
import Page from './page'
import {connect} from 'react-redux'
import findSuggestions from '../../redux/actions/findSuggestions';
import findResults from '../../redux/actions/findResults';
import {withRouter} from 'react-router-dom'
export class AppBar extends Component {
    constructor(props){
        super(props);
        this.state={
            text:'',
        };
        this.onChangeText=this.onChangeText.bind(this);
        this.onChangeSelection=this.onChangeSelection.bind(this)

    }
    onChangeText(text){
        this.setState({text})//4)BUSCAR TEXTO:ASIGNA EL VALOR DEL TEXTO AL ESTADO DE COMPONENTE CON ESA FUNCION{text}es el valor del texto al cambairse el los mismo q return{this.state.text:text} 
        this.props.findSuggestions(text);
    }
    onChangeSelection(text){  //3)BUSCAR RESULTADO
        this.setState({text})//{text}es el valor del texto al cambairse el los mismo q return{this.props.text:text}
        this.props.findResults(text);
        this.props.history.push('/results')//se redirige la pagina de detail a una nueva si se usa el input sin esto se queda en la pagina de detalles y si se quiere ver otra informacion se tiene q inicar la app

    }
    render() {
        const {text}=this.state;
        const {suggestions}=this.props;
        
        return (
            <Page
            text={text} 
            suggestions={suggestions}
            onChangeText={this.onChangeText} 
            onChangeSelection={this.onChangeSelection}
            />
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        suggestions:state.suggestions, //5) BUSCAR TEXTO se conecta con redux para tomar el tipo de accion a usar con el estado
    }
}
const mapDispatchToProps={ //4)BUSCAR RESULTADO:CONECTA LA ACCIONES CON LA PAGE
    findSuggestions,
    findResults,
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(AppBar))


