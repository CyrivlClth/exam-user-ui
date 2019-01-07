const startList = {
    code: 200,
    data: {
        id: 1,
        task_name: "one",
        task_id: 1,
        grade: "92.1",
        answer: [0, 0, 0],
        questions: [{
            id: 1,
            no: "1",
            team_id: 1,
            type: 0,
            chapter: "测试习题",
            text: "1+1=?",
            choices: [
                "2",
                "3",
                "4",
                "5"
            ]
        },
        {
            id: 1,
            no: "2",
            team_id: 1,
            type: 1,
            chapter: "测试习题",
            text: "多选AC",
            choices: [
                "2",
                "3",
                "4",
                "5"
            ]
        },
        {
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
        }]
    }
}

const readyStart = {
    code: 200,
    data: null
}

export default {
    fetchStart: () => {
        return startList
    },
    updateStart: conf => {
        console.log(conf)
        startList.data.answer.splice(conf.body.index, 1, conf.body.answer)
    }
}