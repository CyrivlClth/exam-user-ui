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

const data = [
    {
        answer: 1,
        question: {
            id: 1,
            no: "1",
            team_id: 1,
            type: 0,
            chapter: "测试习题",
            text: "1+1=?",
            answer: 1,
            choices: [
                "2",
                "3",
                "4",
                "5"
            ]
        }
    },
    {
        answer: 1,
        question: {
            id: 1,
            no: "2",
            team_id: 1,
            type: 1,
            chapter: "测试习题",
            text: "多选AC",
            answer: 1 | 4,
            choices: [
                "2",
                "3",
                "4",
                "5"
            ]
        }
    },
    {
        answer: 1,
        question: {
            id: 1,
            no: "3",
            team_id: 1,
            type: 3,
            chapter: "测试习题",
            text: "1+1=2?",
            answer: 1,
            choices: [
                "2",
                "3",
                "4",
                "5"
            ]
        }
    }
]

const sheetList = [
    {
        id: 1,
        task_id: 1,
        task_name: "one",
        complete: true,
        grade: "75",
        data,
    },
    {
        id: 1,
        task_id: 2,
        task_name: "one",
        complete: true,
        grade: "75",
        data,
    },
    {
        id: 1,
        task_id: 3,
        task_name: "one",
        complete: true,
        grade: "75",
        data,
    }
]

export default {
    fetchTask: () => {
        return taskList
    },
    getTask: conf => {
        const id = parseInt(conf.url.split("/").pop())
        for (const i of sheetList) {
            if (i.task_id === id) {
                return i
            }
        }
        return {
            id: 2,
            task_id: id,
            task_name: "new",
            complete: false,
            grade: "",
            data
        }
    }
}