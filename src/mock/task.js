const taskList = {
    code: 200,
    data: [{
            id: 1,
            name: "one"
        },
        {
            id: 2,
            name: "two"
        },
        {
            id: 3,
            name: "three"
        },
        {
            id: 4,
            name: "four"
        },
        {
            id: 5,
            name: "five"
        }
    ]
}

export default {
    fetchTask: () => {
        return taskList
    },
    getTask: conf => {
        const id = parseInt(conf.url.split("/").pop())
        for (const i of taskList.data) {
            if (i.id === id) {
                return i
            }
        }
    }
}