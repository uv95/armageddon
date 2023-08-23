export const getCurrentDate = () => {
    const today = new Date()
    const offset = today.getTimezoneOffset()
    const result = new Date(today.getTime() - (offset*60*1000)).toISOString().split('T')[0]
 
    return result
};
