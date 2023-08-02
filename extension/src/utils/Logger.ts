import { DateTime } from "luxon";

export class Logger {
    private readonly prefix: string;
  
    constructor(prefix: string) {
      this.prefix = prefix;
    }
  
    public log = (message: string): void => {
        console.log(`[${DateTime.now().toISO()}] ${this.prefix}: ${message}`);
    }
  
    public error = (message: string): void => {
        console.error(`[${DateTime.now().toISO()}] ${this.prefix}: ${message}`);
    }
  
    public warn = (message: string): void => {
        console.warn(`[${DateTime.now().toISO()}] ${this.prefix}: ${message}`);
    }
  }

  