import { message } from "@src/types/messages"
import { ExperimentVariables } from "@src/utils/storage"
import { ChromeStorage } from "@src/utils/storage/ChromeStorage"

import { VariablesStorage } from "@src/utils/storage/ChromeStorage"

export class NetworkThrottler {
    private static instance : NetworkThrottler | null = null
    private interval : ReturnType<typeof setInterval> | null = null

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

        // Check if next bitrate change is already scheduled
        const scheduled = await VariablesStorage.getItem("nextBitrateChange")
        if(!scheduled) {
            this.executeBitrateChange()
            await this.scheduleNextBitrateChange()
            this.start()
        }
        else{
            console.log("Bitrate changes already scheduled");
            this.start()
        }
    }

    private start = () => {
        this.interval = setInterval(async () => {
            const next = new Date(JSON.parse(await VariablesStorage.getItem("nextBitrateChange")))
            const now = new Date()
            if(now.getTime() > next.getTime()){
                this.executeBitrateChange()
                await this.scheduleNextBitrateChange()
            }
        }, 1000)
    }

    private executeBitrateChange = () => {
        console.log("Bitrate change")
        // Execute bitrate change according to customizable scenario
    }

    private scheduleNextBitrateChange = async () => {
        const now = new Date()
        const next = JSON.stringify(new Date(now.setSeconds(now.getSeconds()+10)))
        await VariablesStorage.setItem("nextBitrateChange", next)
    }
}