import { ExperimentSettings } from "."


export class ChromeStorage {

    public static setItem = async <T>(key:keyof T, value:any) : Promise<void> => {
        await chrome.storage.local.set({key, value})
    }

    public static getItem = async <T>(key:keyof T) : Promise<any> => {
        return await chrome.storage.local.get([key])
    }
 }




