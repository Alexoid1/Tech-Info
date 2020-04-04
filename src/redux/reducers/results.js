import {type as findResultsType} from '../actions/findResults'//DE ESTA MANERA EL TYPE ESTA DENTRO DE LA ACCION Y SE LO LLAMA DE ESTA MANERA
import items from '../../data/items';
const defaultState=[];

function reducer(state=defaultState, {type,payload}){
    switch(type){
        case findResultsType:{
            const regex =new RegExp(`^${payload}`,'i')
            return items
            .filter(n=>regex.test(n.title))

        }
        default:
            return state
    }
}
export default reducer;