import items from '../../data/items'
import {type as findSuggestionsType} from '../actions/findSuggestions'//DE ESTA MANERA EL TYPE ESTA DENTRO DE LA ACCION Y SE LO LLAMA DE ESTA MANERA
const defaultState=[];

function reducer(state=defaultState, {type,payload}){
    switch(type){
        case findSuggestionsType:{
            const regex =new RegExp(`^${payload}`,'i')  //6)BUSCAR TEXTO mediante una funcion regular se filtra  los items traidos de data
            return items.filter(n=>regex.test(n.title))

        }
        default:
            return state
    }
}

export default reducer;