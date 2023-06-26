

export type flag = "TAB_ID" | "DEBUGGER_ATTACH"

export interface message {
    flag: flag
    msg?: string
    data?: object
}