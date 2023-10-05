const getPaginationPageFrom = (url) => {
    return parseInt(url.split('page=')[1])
}

export default {
    getPaginationPageFrom
}