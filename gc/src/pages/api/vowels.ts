import type { NextApiRequest, NextApiResponse } from 'next'
import * as wordsData from '../../../../script/output.json'

type ResponseData = {

}
type RequestData = {

}

const getRandomID = (amount: any, wordsData: any) => {
    const firstCircle: any = []
    const secondCircle: any = []
    const result: any = []

    try {
        for (let index = 0; index < amount; index++) {
            const randID = wordsData.idList[Math.floor(Math.random() * wordsData.idList.length)]
            if (contains(wordsData.idList, randID)) firstCircle.push(randID)
        }

        firstCircle.forEach((id: any) => {
            const obj = {
                id,
                idTasks: [] as any
            }
            wordsData.tasks.forEach((element: any) => {
                if (element.id == id) obj.idTasks.push(element.idTask)
            })
            secondCircle.push(obj)
        })


        secondCircle.forEach((element: any) => {
            const idTask = element.idTasks[Math.floor(Math.random() * element.idTasks.length)]
            result.push(idTask)
        })

        return result
    } catch (error) {
        return { text: `${error}`, code: 'error-randomId', error }
    }

}

const createExam = (wordsAmount: any) => {
    try {
        const wordsID = getRandomID(wordsAmount, wordsData)
        const examWords: any = []

        wordsID.forEach((id: string) => {
            wordsData.tasks.forEach((task: any) => {
                if (task.idTask == id) examWords.push(task)
            })
        })


        if (!wordsID.error) return examWords
        else throw wordsID

    } catch (error) {
        return { text: `${error}`, code: 'error-createExam', error }
    }
}

function contains(arr: any, elem: any) {
    return arr.find((i: any) => i === elem) != -1;
}


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {

    let result

    try {
        result = createExam(req.body.examAmount)
    } catch (error: any) {
        result = error
    }

    res.status(200).json(result)
}