/**
 * Represents datetime as a string formatted like '2017-08-02T05:40:01+01:00'
 * (or '2017-08-02T05:40:01Z' for UTC timezone)
 */
export declare type ISODateTimeString = string;
export declare enum EntityType {
    Event = 0,
    Market = 1,
    League = 2,
    Sport = 3,
    Region = 4,
    Selection = 5
}
export interface Dictionary<T> {
    [index: string]: T;
}
