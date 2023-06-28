import { message } from "@src/types/messages"
import { StorageDefault } from "@src/utils/storage"

chrome.runtime.onInstalled.addListener(async () => {
    console.log("Extension loaded")
    // Initialize local storage || WARNING --> THIS RESETS ALL chrome.storage KEYS TO DEFAULT VALUES
    // await ChromeStorage.setDefault() // <-- it crashes the app

    await chrome.storage.local.set(StorageDefault)
})


// Message listeners

chrome.runtime.onMessage.addListener((msg:message, sender:chrome.runtime.MessageSender, sendResponse: (msg:message) => void) => {
    if(msg.flag === "TAB_ID"){
        sendResponse({
            flag: "TAB_ID",
            data: {
                tabID: sender.tab?.id
            }
        })
    }
    else if(msg.flag === "DEBUGGER_ATTACH"){
        if(sender.tab && sender.tab.id) /*no await*/ attach(sender.tab.id, sendResponse);
        else throw new Error("Cannot get tab ID and attach debugger");
    }  

    return true // <-- essential
})


const attach = async (tabID:number, sendResponse) : Promise<void> => {
    try{
        await chrome.debugger.attach({tabId: tabID}, "1.2")
        sendResponse({flag: "DEBUGGER_ATTACH", msg: "Debugger attached"})
    }catch(error: any){
        sendResponse({flag: "DEBUGGER_ATTACH", msg: error.message})
    }
    
}