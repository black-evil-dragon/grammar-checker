import React from 'react'
import Keyboard from '../components/Keyboard'
import { keyboardKeys } from '../data'
import { useRouter } from 'next/router'
import axios from 'axios'
import Loader from '../components/loader'
import { setExamTasks } from '../redux/actions'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { taskType } from '../types'


type taskProps = {
    index: number,
    element: Element | null,
    data: any,
    correct: any,
}[]

type serverErrorType = {
    status: number,
    error: {
        text: string,
        code: string,
        error: any,
    },
}

const Grammar = () => {
    const dispatch = useDispatch()
    const refTasks = React.createRef<HTMLDivElement>()
    const [loader, setLoader] = React.useState(true)
    const examData = useSelector((state: any) => state.examReducer)


    const handleClick = async (key: any) => {
        //const word = data.find(word => word.id == activeTask!.data.id)
        //const vowel = word!.vowels.find(vowel => vowel.index == activeTask!.data.letterIndex)
        nextTask()
    }


    const fetchTasks = async () => {
        const data = {
            examType: 'vowels',
            examAmount: 10,
        }
        const response: { data: Array<taskType> | serverErrorType } = await axios.post('/api/vowels', data)

        if ("error" in response.data) {
            console.warn(response.data)
        } else {
            await dispatch(
                setExamTasks({
                    examTasks: response.data,
                    examActiveTask: response.data[0],
                    examAmount: data.examAmount,
                    examType: data.examType,
                })
            )
            console.log(response.data[0]);
            setLoader(false)
        }
    }


    const nextTask = async () => {

    }


    React.useEffect(() => {
        fetchTasks()
    }, [])

    React.useEffect(() => {
        console.log(examData);
    }, [examData])

    return (
        <div className='grammar'>
            {loader ? <Loader /> :
                <>
                    <div className="grammar__content" ref={refTasks}>
                        {/*
                    tasks.map((task, index) => (
                        <div className='word' key={index} id={correctTask}> {
                            task.replaced.map((letter, index) => (
                                <div className='word__letter' key={index}>{letter}</div>
                            ))
                        }</div>
                    ))
                */}
                    </div>


                    <div className="grammar__keyboard">
                        <Keyboard keys={keyboardKeys} onClick={handleClick} />
                    </div>
                </>
            }
        </div>
    )
}

export default Grammar