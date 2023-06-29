import { get_local_datetime } from "./datetime";

export class Logger {
    private readonly prefix: string;
  
    constructor(prefix: string) {
      this.prefix = prefix;
    }
  
    public log = (message: string): void => {
        console.log(`[${get_local_datetime(new Date())}] ${this.prefix}: ${message}`);
    }
  
    public error = (message: string): void => {
        console.error(`[${get_local_datetime(new Date())}] ${this.prefix}: ${message}`);
    }
  
    public warn = (message: string): void => {
        console.warn(`[${get_local_datetime(new Date())}] ${this.prefix}: ${message}`);
    }
  }

  