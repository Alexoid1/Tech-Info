export const type='findCurrentItem'

function findCurrentItem(id) {
    return {
        type,
        payload:id,
    }
}
export default findCurrentItem
