import {type as findCurrentItemType} from '../actions/findCurrentItem'//DE ESTA MANERA EL TYPE ESTA DENTRO DE LA ACCION Y SE LO LLAMA DE ESTA MANERA
import items from '../../data/items';
const defaultState={};

function reducer(state=defaultState, {type,payload}){
    switch(type){
        case findCurrentItemType:{
            
            return items.find(n=>n.id === payload)
            
        }
        default:
            return state
    }
}
export default reducer;