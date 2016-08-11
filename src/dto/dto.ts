import {StatusCodes} from "./StatusCodes";

module DTO
{
    /* The information about the sport (branch) */
    export interface ISportInfo
    {
        /* sport ID */
        id: number,

        /* sorting order */
        order: number,

        /* translated sport name */
        name: string,
        
        /* number of live (in-game) active games */ 
        liveCount?: number,

        /* total number of games, both live and pre-live */ 
        gamesCount?: number,

        /* number of active outrights league bound markets */
        outrightsCount?: number
    }

    /* The information about country */
    export interface IRegionInfo
    {
        /* region ID */
        id: number,

        /* ISO country code or (for regions in country) region code */
        code: string,

        /* translated region name */
        name: string
    }

    /* infromation about the league */
    export interface ILeagueInfo
    {
        /* league ID */ 
        id: number,

        /* link to sport */
        sportId: number,

        /* link to region */
        regionId: number,

        /* Sorting order */
        order: number,

        /* is league marked with hot flag */
        isHot: boolean,

        /* is league marked with hot flag for it's region */
        isRegionHot?: boolean,

        /* translated league name */
        name: string,

        /* number of live (in-game) active games */ 
        liveCount?: number,

        /* total number of games, both live and pre-live */ 
        gamesCount?: number,
    
        /* number of active outrights league bound markets */
        outrightsCount?: number
    }

    /* In-game time information */
    export interface ILiveGameTime
    {
        /* Zero point for seconds in game, datetime */
        secondsUpdated : Date,

        /* Seconds left after zero point */		
	    seconds: number,

        /* Calculated string representation of in game time, string */	
	    timeInGame: string		
    }

    /* socre for live game */
    export interface ILiveGameScore
    {
        /* Home team/player top level score */
        HomeScore: number;

        /* Away team/player top level score */
        AwayScore: number;

        /* Home team player score in sets, innings, etc where it's possible */
        HomeScores?: number[];

        /* Away team player score in sets, innings, etc where it's possible */
        AwayScores?: number[];
    }

    /* live game information*/
    export interface ILiveGameInfo
    {
        /* is the betting disabled for this game */    
        suspended: boolean,

        /* in-game time */
        gameTime: ILiveGameTime,

        /* In game score */
        score: ILiveGameScore

        /* in-game status */
        status: StatusCodes.GameStatus 
    }

    /* information about the bet stats for this game */
    export interface IBetStatistics
    {
        /* Number of bets placed for entity */
        totalBets : number;

        /* Total deposit of all bets placed for entity */
        totalDeposit : number;
    }
    
    export interface IGameInfo
    {
        /* game ID */
        id: number;

        /* sport link */
        sportId: number;

        /* league link */
        leagueId: number;

        /* region link */
        regionId: number;

        /* date/time of game start */
        startDate: Date;

        /* is it live game */
        isLive: boolean;

        /* will this game go live when started, for pre-live only */
        goingLive?: boolean;

        /* live game status infromation */
        liveStatus?: ILiveGameInfo;

        /* statics for the bets for the game */
        betStats?: IBetStatistics;
    }

    export interface IMarketType
    {
        id: string;

        drawCapable: boolean;

        swapTeams: boolean;

        name: string;
    }

    
    export interface IMarket
    {
        id: string;

        name?: string;

        title?: string;

        teamMapping?: number;

        betStats?: IBetStatistics;

        type?: IMarketType;

        selections: ISelection[];

        /* template number used for draw market */
        splitType: number;
    }

    enum SelectionSide
    {
        Home = 1,
        Draw = 2,
        Away = 3
    }

    enum SelectionType
    {
        ML = 1,
        HC = 2,
        OU = 3,
        Column1 = 13,
        Column2 = 14,
        Column3 = 15        
    }

    export interface ISelection
    {
        id: string;

        side: SelectionSide,

        type: SelectionType;

        group: number,

        name: string;

        title?: string;

        odds: string;

        euOdds: number;

        points?: number;

        qaparam1: number;

        qaparam2: number;
    }
}
