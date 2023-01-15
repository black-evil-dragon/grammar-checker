import type { actionPayloadProps } from "../../types"



export const setExamTasks = (data: actionPayloadProps) => {
    return {
        type: "exam:set",
        payload: data
    }
}

export const setActiveTask = (data: actionPayloadProps) => {
    return {
        type: "exam:set:task",
        payload: data
    }
}

export const removeTimetable = (data: actionPayloadProps) => {
    return {
        type: "exam:remove",
        payload: {},
    }
}