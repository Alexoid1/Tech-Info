export const type='findResults'

function findResults(text) {
    return {
        type,
        payload:text,
    }
}
export default findResults