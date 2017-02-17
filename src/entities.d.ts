export declare namespace entities {
    /**
     * Event type
     */
    enum EventType {
        Game = 0,
        Outright = 1,
    }
    enum LiveStatus {
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
        PausedFourthPart = -14,
    }
    interface GameScore {
        /** Home team/player top level score */
        homeScore: number;
        /** Home team player score in sets, innings, etc where it's possible */
        homeScores?: number[];
        /** Away team/player top level score */
        awayScore: number;
        /** Away team player score in sets, innings, etc where it's possible */
        awayScores?: number[];
    }
    interface GameState {
        status: LiveStatus;
        score: GameScore;
        suspended: boolean;
        /** zero point for seconds in game, datetime */
        secondsUpdated: Date;
        /** seconds left after zero point */
        seconds: number;
        /** calculated string representation of in game time, string */
        timeInGame: string;
    }
    interface GameTime {
        /** zero point for seconds in game, datetime */
        secondsUpdated: Date;
        /** seconds left after zero point */
        seconds: number;
        /** calculated string representation of in game time, string */
        timeInGame: string;
    }
    /**
     * Queryable entity
     */
    interface SportEvent {
        id: number;
        /** Type of SportEvent. */
        type: EventType;
        /** Sport ID. */
        sportId: number;
        /** Sorting order of Sport. */
        sportOrder: number;
        /** Sport name (translated). */
        sportName: string;
        /** Region ID. */
        regionId: number;
        /** ISO country code or (for regions in country) region code. */
        regionCode: string;
        /** Region name (translated). */
        regionName: string;
        /** League ID. */
        leagueId: number;
        /** League name (translated). */
        leagueName: string;
        /** Sorting order of League. */
        leagueOrder: number;
        /** Is league marked with hot flag. */
        isLeagueHot: boolean;
        /** Is league marked with hot flag for current region. */
        isLeagueHotInRegion: boolean;
        /** Name of home team for game event */
        homeTeamName?: string;
        /** Name of away team for game event */
        awayTeamName?: string;
        /** Name of event, for league events */
        eventName?: string;
        /**
         *  Represent types of markets which will be attached to the current SportEvent.
         *  You can't use this property in filter query together with marketGroup property.
         */
        marketTypes: string[];
        /**  can't query this together with marketTypes */
        marketGroup: string;
        markets: Market[];
        /** Number of bets placed for entity */
        totalBets?: number;
        /** Total deposit of all bets placed for entity */
        totalDeposit?: number;
        /** date/time of game start */
        startEventDate: Date;
        /** is it live game */
        isLive: boolean;
        /** will this game go live when started, for pre-live only and eventType = Game */
        goingLive: boolean;
        liveGameState?: GameState;
        liveGameTime?: GameTime;
        tags: string[];
        entityType: EntityType;
    }
    /**
     * Market
     */
    interface Market {
        id: number;
        type: MarketType;
        gameId: number;
        leagueId: number;
        /** date/time of game start */
        startDate: Date;
        name?: string;
        title?: string;
        teamMapping?: number;
        /** Number of bets placed for entity */
        totalBets: number;
        /** Total deposit of all bets placed for entity */
        totalDeposit: number;
        selections: Selection[];
        /** template number used for draw market */
        splitType: number;
        eventId: number;
        entityType: EntityType;
    }
    interface MarketType {
        id: string;
        name: string;
        drawCapable: boolean;
        swapTeams: boolean;
    }
    interface Region {
        /** region ID */
        id: number;
        /** ISO country code or (for regions in country) region code */
        code: string;
        /** translated region name */
        name: string;
    }
    interface Sport {
        /** sport ID */
        id: number;
        /** sorting order */
        order: number;
        /** translated sport name */
        name: string;
        /** number of live (in-game) active games */
        liveCount: number;
        /** total number of games, both live and pre-live */
        gamesCount: number;
        /** number of active outrights league bound markets */
        outrightsCount: number;
        entityType: EntityType;
    }
    interface League {
        /** league ID */
        id: number;
        /** translated league name */
        name: string;
        /** link to sport */
        sportId: number;
        /** link to region */
        regionId: number;
        /** Sorting order */
        order: number;
        /** is league marked with hot flag */
        isHot: boolean;
        /** is league marked with hot flag for it's region */
        isLeagueHotInRegion?: boolean;
        /** number of live (in-game) active games */
        liveCount: number;
        /** total number of games, both live and pre-live */
        gamesCount: number;
        /** number of active outrights league bound markets */
        outrightsCount: number;
        entityType: EntityType;
    }
    enum SelectionSide {
        Home = 1,
        Draw = 2,
        Away = 3,
    }
    enum SelectionType {
        ML = 1,
        HC = 2,
        OU = 3,
        Column1 = 13,
        Column2 = 14,
        Column3 = 15,
    }
    interface Selection {
        id: string;
        side: SelectionSide;
        type: SelectionType;
        group: number;
        name: string;
        title?: string;
        odds: string;
        euOdds: number;
        points?: number;
        qaparam1: number;
        qaparam2: number;
    }
    enum EntityType {
        Event = 0,
        Market = 1,
        League = 2,
        Sport = 3,
    }
}
