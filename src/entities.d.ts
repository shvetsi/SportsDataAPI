export namespace entities {

    export type EventType = "Fixture" | "Outright"    
    
    export enum LiveStatus {
        NotStarted = 0,
        FirstHalf = 1,
        PausedFirstHalf = -1,
        SecondHalf = 2,
        PausedSecondHalf = -2,
        EndFirstHalf = 3,
        PauseBetweenHalfs = -3,
        Finished = 6,
        Overtime = 9,
        FirstPart = 11,
        SecondPart = 12,
        ThirdPart = 13,
        FourthPart = 14,
        FifthPart = 15,
        SixthPart = 16,
        SeventhPart = 17,
        EighthPart = 18,
        NinthPart = 19,
        TenthPart = 20,
        EleventhPart = 21,
        TwelfthPart = 22,
        ThirteenthPart = 23,
        FourteenthPart = 24,
        FifteenthPart = 25,
        SixteenthPart = 26,
        SeventeenthPart = 27,
        EighteenthPart = 28,
        NineteenthPart = 29,
        TwentiethPart = 30,
        FirstBreak = 31,
        SecondBreak = 32,
        ThirdBreak = 33,
        FourthBreak = 34,
        FifthBreak = 35,
        SixthBreak = 36,
        SeventhBreak = 37,
        EighthBreak = 38,
        NinthBreak = 39,
        TenthBreak = 40,
        EleventhBreak = 41,
        TwelfthBreak = 42,
        ThirteenthBreak = 43,
        FourteenthBreak = 44,
        FifteenthBreak = 45,
        SixteenthBreak = 46,
        SeventeenthBreak = 47,
        EighteenthBreak = 48,
        NineteenthBreak = 49,
        EndGame = 50,
        Started = 51,
        PausedFirstPart = -11,
        PausedSecondPart = -12,
        PausedThirdPart = -13,
        PausedFourthPart = -14
    }
    
    export interface LiveGameScore {
        /** Home team/player top level score */
        homeScore: number
        /** Away team/player top level score */
        awayScore: number
        additionalScores: Dictionary<string>
    }
    
    export interface LiveGameState {
        status: LiveStatus
        score: LiveGameScore
        isSuspended: boolean
        /** zero point for seconds in game, datetime */
        secondsUpdated: Date
        /** seconds left after zero point */
        seconds: number
    }
    
    export interface GameTime {
        /** zero point for seconds in game, datetime */
        secondsUpdated: Date
        /** seconds left after zero point */
        seconds: number
        /** calculated string representation of in game time, string */
        timeInGame: string
    }
    
    export interface Event {
        id: string
        /** Type of SportEvent. */
        type: EventType
        /** Type of Entity. */
        entityType: EntityType
        /** Sport ID. */
        sportId: number
        /** Sorting order of Sport. */
        sportOrder: number
        /** Sport name (translated). */
        sportName: string
        /** Region ID. */
        regionId: number
        /** ISO country code or (for regions in country) region code. */
        regionCode: string
        /** Region name (translated). */
        regionName: string
        /** League ID. */
        leagueId: number
        /** League name (translated). */
        leagueName: string
        /** Sorting order of League. */
        leagueOrder: number
        /** Is league in TOP for specific region. */
        topLeague: boolean
        /** Is league marked with hot flag for current region. */
        topLeagueInUserGeography: boolean
        /** Name of home team for game event */
        homeTeamName?: string
        /** Name of away team for game event */
        awayTeamName?: string
        /** Name of event, for league events */
        eventName?: string

        markets: Market[]

        /** date/time of game start */
        startEventDate: Date
        /** is it live game */
        isLive: boolean
        /** will this game go live when started, for pre-live only and eventType = Game */
        isGoingLive: boolean
        liveGameState?: LiveGameState        
        liveGameTime?: GameTime
        tags: string[]
        meta: Dictionary<string>
    }
    
    export interface Market {
        id: string
        marketType: MarketType
        sportId: number
        leagueId: number
        /** date/time of game start */
        startDate: Date
        title?: string
        participantMapping?: number

        selections: Selection[]
        /** template number used for draw market */
        splitType: number
        eventId: string
        entityType: EntityType

        isLive: boolean
        liveData: LiveData
        groupId: number
        groupName: string
        liveGroupId: number
        preLiveGroupId: number        
        tags: string[]
        meta: Dictionary<string>
    }

    export interface LiveData {
        secondsToShow: number
        secondsToShowUpdateTime: Date
        scoreTeam1: number
        scoreTeam2: number
        isDanger: boolean
        aServePnppA: number
        bServePnppB: number
    }
    
    export interface MarketType {
        id: string
        name: string
        drawCapable: boolean
        swapTeams: boolean
    }
    
    export interface Region {
        /** region ID */
        id: string
        /** ISO country code or (for regions in country) region code */
        code: string
        /** translated region name */
        name: string
        /** number of live (in-game) active fixtures */
        liveFixturesCount: number
        /** total number of fixtures, both live and pre-live */
        fixturesCount: number
        /** number of active outrights league bound markets */
        outrightsCount: number        
        entityType: EntityType
    }
    
    export interface Sport {
        /** sport ID */
        id: string
        /** sorting order */
        order: number
        /** translated sport name */
        name: string
        /** number of live (in-game) active fixtures */
        liveFixturesCount: number
        /** total number of fixtures, both live and pre-live */
        fixturesCount: number
        /** number of active outrights league bound markets */
        outrightsCount: number
        entityType: EntityType
    }
    
    export interface League {
        /** league ID */
        id: string
        /** translated league name */
        name: string
        /** link to sport */
        sportId: number
        /** link to region */
        regionId: number
        /** Sorting order */
        order: number
        /** Is league in TOP for specific region. */
        topLeague: boolean
        /** Is league marked with hot flag for current region. */
        topLeagueInUserGeography: boolean
        /** number of live (in-game) active fixtures */
        liveFixturesCount: number
        /** total number of fixtures, both live and pre-live */
        fixturesCount: number
        /** number of active outrights league bound markets */
        outrightsCount: number
        entityType: EntityType
    }
    
    export enum SelectionSide {
        Home = 1,
        Draw = 2,
        Away = 3
    }
    
    export enum SelectionType {
        ML = 1,
        HC = 2,
        OU = 3,
        Column1 = 13,
        Column2 = 14,
        Column3 = 15
    }
    
    export interface Selection {
        id: string
        side?: SelectionSide
        type?: SelectionType
        group: number
        name: string
        title?: string
        displayOdds: Dictionary<string>
        trueOdds: number
        points: number
        qaparam1?: number
        qaparam2?: number
    }
    
    export enum EntityType {
        Event = 0,
        Market = 1,
        League = 2,
        Sport = 3,
        Region = 4
    }
}

export interface Dictionary<T> {
    [index:string]: T
}
