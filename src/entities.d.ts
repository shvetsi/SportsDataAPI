export namespace entities {
    /**
     * Represents datetime as a string formatted like '2017-08-02T05:40:01+01:00'
     * (or '2017-08-02T05:40:01Z' for UTC timezone)
     */  
    export type ISODateTimeString = string

    export enum EntityType {
        Event = 0,
        Market = 1,
        League = 2,
        Sport = 3,
        Region = 4
    }

    export type EventType = "Fixture" | "Outright"

    /**
     * Queryable entity
     */
    export interface SportEvent {
        id: string
        /** Type of SportEvent. */
        type: EventType
        /** Sport ID. */
        sportId: string
        /** Sport name (translated). */
        sportName: string
        /** Sorting order of Sport. */
        sportOrder: number
        /** Region ID. */
        regionId: string
        /** ISO country code or (for regions in country) region code. */
        regionCode: string
        /** Region name (translated). */
        regionName: string
        /** League ID. */
        leagueId: string
        /** League name (translated). */
        leagueName: string
        /** Sorting order of League. */
        leagueOrder: number
        /** Is league marked with top flag. */
        isTopLeague: boolean
        /** participants in the event. */
        participants: Participant[]  
        /** Name of event, for league events */
        eventName?: string
        // not queriable
        markets: Market[]
        // not queriable
        totalMarketsCount: number
        // not queriable
        marketGroups: MarketGroup[]
        /** date/time of game start */
        startEventDate: ISODateTimeString
        /**  Status of game serving*/
        status: GameStatus
        /**  Score in game*/
        score: GameScore | null
        /** is it live game */
        isLive: boolean
        /** will this game go live when started, for pre-live only and eventType = Game */
        isGoingLive: boolean

        liveGameState?: LiveGameState

        /** Is event suspended for some reason */
        isSuspended: boolean

        tags: string[]

        entityType: EntityType

        metadata: Dictionary<any>
    }

    export interface MarketGroup{
        id: string
        name: string
    }

    export type VenueRole = "Home" | "Away"

    export interface Participant{
        id: string
	    name: string
        /** Home | Away */
	    venueRole?: VenueRole
        /** ISO code */
	    country: string
        /** runnerNumber: number, imageUrl: string, weight: string, age: number, form: string */
	    metadata: Dictionary<any> 
    }

    /**
     * Market
     */
    export interface Market {
        id: string

        marketType: MarketType

        sportId: string

        leagueId: string

        startDate: ISODateTimeString

        title?: string

        participantMapping?: string

        selections: Selection[]

        eventId: string

        entityType: EntityType

        isLive: boolean

        isSuspended: boolean

        liveData: LiveData

        metadata: Dictionary<string>

        tags: string[]

        groups: string[]
    }

    export interface MarketType {
        id: string
        name: string
        swapTeams: boolean
    }

    export interface Sport {
        /** sport ID */
        id: string

        /** sorting order */
        order: number

        /** translated sport name */
        name: string

        /** number of live (in-game) active games */
        liveFixturesTotalCount: number

        /** total number of games, both live and pre-live */
        fixturesTotalCount: number

        /** number of games, both live and pre-live filtered by time range */
        fixturesCount: number

        /** number of active outrights league bound markets */
        outrightsTotalCount: number

        entityType: EntityType
    }

    export interface League {
        /** league ID */
        id: string

        /** translated league name */
        name: string

        /** link to sport */
        sportId: string

        /** link to region */
        regionId: string

        /** ISO country code or (for regions in country) region code */
        regionCode: string

        /** Sorting order */
        defaultOrder: number

        /** is league marked with hot flag */
        isTopLeague: boolean

        /** number of live (in-game) active games */
        liveFixturesTotalCount: number

        /** total number of games, both live and pre-live */
        fixturesTotalCount: number

        /** number of games, both live and pre-live filtered by time range*/
        fixturesCount: number

        /** number of active outrights league bound markets */
        outrightsTotalCount: number
        
        entityType: EntityType
    }

     export interface Region {
        /** region ID */
        id: string

        /** ISO country code or (for regions in country) region code */
        code: string

        /** translated region name */
        name: string

        /** number of live (in-game) active games */
        liveFixturesTotalCount: number

        /** total number of games, both live and pre-live */
        fixturesTotalCount: number

        /** number of games, both live and pre-live filtered by time range*/
        fixturesCount: number

        /** number of active outrights league bound markets */
        outrightsTotalCount: number
        
        entityType: EntityType
    }

    export interface Selection
    {
        id: string

        side?: SelectionSide

        type?: SelectionType

        outcomeType? : OutcomeType

        group: number

        name: string

        title?: string
        
        participantMapping?: string

        displayOdds: Dictionary<string>

        trueOdds: number
        
        points: number

        /* Win or Place for outrights */
        tags: string[]

        /* idsbtech: string */
        metadata: Dictionary<any>
    }

    export enum SelectionSide
    {
        Home = 1,
        Draw = 2,
        Away = 3
    }

    export enum SelectionType
    {
        ML = 1,
        HC = 2,
        OU = 3,
        Column1 = 13,
        Column2 = 14,
        Column3 = 15
    }

    export enum OutcomeType {
        Home = "Home",
        Tie = "Tie",
        Draw = "Draw",
        Away = "Away",
        OneOrX = "1X",
        XOrTwo = "X2",
        OneTwo = "12",
        Over = "Over",
        Exactly = "Exactly",
        Under = "Under",
        Yes = "Yes",
        No = "No",
        Odd = "Odd",
        Even = "Even",
        ToScoreFirst = "ToScoreFirst",
        ToScoreLast = "ToScoreLast",
        ToScoreAnyTime = "ToScoreAnyTime",
        ToScoreFirstOrLast = "ToScoreFirstOrLast",
        ToScore2OrMore = "ToScore2OrMore",
        ToScore3OrMore = "ToScore3OrMore"
    }

    export enum GamePart {
        FirstOvertime = "FirstOvertime",
        BreakAfterFirstOvertime = "BreakAfterFirstOvertime",
        SecondOvertime = "SecondOvertime",
        FirstSet = "FirstSet",
        SecondSet = "SecondSet",
        ThirdSet = "ThirdSet",
        FourthSet = "FourthSet",
        FifthSet = "FifthSet",
        FirstPeriod = "FirstPeriod",
        BreakAfterFirstPeriod = "BreakAfterFirstPeriod",
        SecondPeriod = "SecondPeriod",
        BreakAfterSecondPeriod = "BreakAfterSecondPeriod",
        ThirdPeriod = "ThirdPeriod",
        BreakAfterThirdPeriod = "BreakAfterThirdPeriod",
        FirstQuarter = "FirstQuarter",
        BreakAfterFirstQuarter = "BreakAfterFirstQuarter",
        SecondQuarter = "SecondQuarter",
        BreakAfterSecondQuarter = "BreakAfterSecondQuarter",
        ThirdQuarter = "ThirdQuarter",
        BreakAfterThirdQuarter = "BreakAfterThirdQuarter",
        FourthQuarter = "FourthQuarter",
        BreakAfterFourthQuarter = "BreakAfterFourthQuarter",
        Overtime = "Overtime",
        FirstHalf = "FirstHalf",
        SecondHalf = "SecondHalf",
        BreakAfterFirstHalf = "BreakAfterFirstHalf"
    }

    export enum GameStatus {
        NotStarted = "NotStarted",
        InProgress = "InProgress"
    }

    export enum ClockDirection {
        Stopwatch = "Stopwatch",
        Timer = "Timer"
    }

    export interface GameScore {
        /** Home team/player top level score */
        homeScore: string

        /** Away team/player top level score */
        awayScore: string

        additionalScores: Dictionary<number>
    }

    export interface LiveGameState {
        clockRunning: boolean
        clockDirection: ClockDirection
        gameTime: number
        gamePart: GamePart
    }

    export interface LiveData {
        scoreHome: string
        scoreAway: string
    }

}

export interface Dictionary<T> {
    [index:string]: T;
}