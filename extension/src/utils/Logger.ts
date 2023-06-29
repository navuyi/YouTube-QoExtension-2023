export class Logger {
    private readonly prefix: string;
  
    constructor(prefix: string) {
      this.prefix = prefix;
    }
  
    public log = (message: string): void => {
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] ${this.prefix}: ${message}`);
    }
  
    public error = (message: string): void => {
        const timestamp = new Date().toISOString();
        console.error(`[${timestamp}] ${this.prefix}: ${message}`);
    }
  
    public warn = (message: string): void => {
        const timestamp = new Date().toISOString();
        console.warn(`[${timestamp}] ${this.prefix}: ${message}`);
    }
  }

  