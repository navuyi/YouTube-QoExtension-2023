import { message } from "@src/types/messages"




export class NetworkThrottler {
    private static instance : NetworkThrottler | null = null

    constructor(){

    }

    public static getInstance = () => {
        if(!NetworkThrottler.instance){
            NetworkThrottler.instance = new NetworkThrottler()
        }
        return NetworkThrottler.instance
    }

    public init = async () : Promise<void> => {
        // Attach debugger
        const msg:message = {flag: "DEBUGGER_ATTACH"}
        const res = await chrome.runtime.sendMessage(msg)
        console.log(res)
    }
}