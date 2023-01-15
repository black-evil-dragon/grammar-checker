export type LinkProps = {
    children: string,
    href: string,
}

export type InputProps = {
    type: string,

    value?: string,
    placeholder?: string,
    onChange?: any,
    readonly?: boolean,
}

export type actionPayloadProps = {
    examTasks?: taskType[],
    examType?: string,
    examAmount?: number,
    examActiveTask?: taskType,
}
export type actionType = {
    type: string,
    payload: actionPayloadProps,
}

export type taskType = {
    id: string,
    idTask: string,
    index: number,
    replaced: Array<string>,
    word: string,
}