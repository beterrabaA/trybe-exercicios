const techList = (array, nome) => {
    let contentva = []
    if (array.length !== 0) {
        for (let i = 0; i < array.length; i++) {
            let org = array.sort()
            let objeto = { tech: org[i], name: nome }
            contentva[i] = (objeto)
        }
        return contentva
    }
    return "Vazio!"
}

module.exports = techList