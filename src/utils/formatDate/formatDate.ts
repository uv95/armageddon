export const formatDate = (date:string, withTime = false) => {
    const newDate = new Date(date).toLocaleString('ru-RU', {
        month: 'short',
        year: 'numeric',
        day: 'numeric',
    }).split('').filter(el => el!=='.').join('').split(' ').filter(el => el!=='г').join(' ')

    const time = new Date(date).toLocaleString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit'
    }) 

    return withTime ? newDate + ', ' + time : newDate
}