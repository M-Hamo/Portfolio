import { Injectable } from "@angular/core";

/**
 * Defines the level of severity for the event.
 */
export enum SeverityLevel {
  Verbose = 0,
  Information = 1,
  Warning = 2,
  Error = 3,
  Critical = 4,
}

@Injectable()
export class LoggerService {
  logPageView(name?: string, url?: string): void {
    console.log({ name: "logPageView", pageView: { name, uri: url } });
  }

  logEvent(name: string, properties?: Record<string, any>): void {
    console.log({
      name: "logEvent",
      event: { name, properties },
    });
  }

  logMetric(name: string, average: number, properties?: Record<string, any>): void {
    console.log({ name: "metric", metric: { name, average, properties } });
  }

  logTrace(message: string, properties?: Record<string, any>): void {
    console.log(`@Trace ~ ${message}`, properties || "");
  }

  logException(
    exception: Error,
    severityLevel: SeverityLevel,
    properties?: Record<string, any>
  ): void {
    console.error("@Error ~ ", exception, properties);
  }
}
