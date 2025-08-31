export class LoggerService {
  static info(message: string, meta?: any) {
    console.log(`[INFO] ${message}`, meta)
  }

  static error(message: string, meta?: any) {
    console.error(`[ERROR] ${message}`, meta)
  }
}
