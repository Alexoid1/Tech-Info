export const type='findSuggestions'

function findSuggestions(text) {
    return {
        type,
        payload:text,
    }
}
export default findSuggestions