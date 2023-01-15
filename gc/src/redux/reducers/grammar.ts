import type { actionType } from "../../types"

const initialState = {
    examTasks: [],
    examType: '',
    examAmount: 0,
    examActiveTask: null,
}

const examReducer = (state = initialState, action: actionType) => {
    switch (action.type) {
        case "exam:set":
            return {
                ...state,
                examTasks: action.payload.examTasks,
                examType: action.payload.examType,
                examAmount: action.payload.examAmount,
                examActiveTask: action.payload.examActiveTask,
            }

        case "exam:set:task":
            return {
                ...state,
                examActiveTask: action.payload.examActiveTask
            }

        case "exam:remove":
            return initialState

        default:
            return state
    }
}

export default examReducer