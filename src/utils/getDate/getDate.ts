export const getDate = (daysAfter: number) => {
    if(daysAfter < 0) throw new Error('Invalid input') 
    
    const today = new Date()
    const day = new Date(new Date(today).setDate(new Date(today).getDate() + daysAfter))

    const offset = day.getTimezoneOffset()
    const result = new Date(day.getTime() - (offset*60*1000)).toISOString().split('T')[0]
 
    return result
};


