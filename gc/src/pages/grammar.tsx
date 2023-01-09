import React from 'react'
import Keyboard from '../components/Keyboard'
import { keyboardKeys } from '../data'
import { useRouter } from 'next/router'
import axios from 'axios'


type taskProps = {
    index: number,
    element: Element | null,
    data: any,
    correct: any
}

const Grammar = () => {
    const refTasks = React.createRef<HTMLDivElement>()


    const handleClick = async (key: any) => {
        //const word = data.find(word => word.id == activeTask!.data.id)
        //const vowel = word!.vowels.find(vowel => vowel.index == activeTask!.data.letterIndex)
        nextTask()
    }


    const nextTask = async () => {
        const response = await axios.post('/api/vowels', {
            examType: 'vowels',
            examAmount: 10,
        })

        console.log(response.data);
    }


    React.useEffect(() => {
        
    }, [])

    return (
        <div className='grammar'>
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
        </div>
    )
}

export default Grammar