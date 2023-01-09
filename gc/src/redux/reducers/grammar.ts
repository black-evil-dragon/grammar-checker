const initialState = {
    onLoad: false,
    gradeNumber: '',
    schoolName: '',
    timetable: [],
}

const timetableReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "timetable:get":
            return {
                ...state,
                gradeNumber: action.payload.gradeNumber,
                schoolName: action.payload.schoolName,
                timetable: action.payload.timetable,
                onLoad: true,
            }

        case "timetable:remove":
            return initialState

        default:
            return state
    }
}

export default timetableReducer