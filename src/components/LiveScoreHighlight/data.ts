export interface Club{
    logo: string,
    abb: string
}

export interface LeagueType{
    logo: string,
    abb: string
}

export interface MatchDetails{
    clubs: Club[],
    leagueType: LeagueType,
    date: string
}

export const data: MatchDetails[] = [
    {
        clubs: [
            {
                logo: "",
                abb: "CHE"
            },
            {
                logo: "",
                abb: "ARS"
            }
        ],
        leagueType: {
            logo: "",
            abb: "EPL"
        },
        date: "9th April, 2024"
    },
    {
        clubs: [
            {
                logo: "",
                abb: "TOT"
            },
            {
                logo: "",
                abb: "BUR"
            }
        ],
        leagueType: {
            logo: "",
            abb: "EPL"
        },
        date: "9th April, 2024"
    },
    {
        clubs: [
            {
                logo: "",
                abb: "MCI"
            },
            {
                logo: "",
                abb: "SHE"
            }
        ],
        leagueType: {
            logo: "",
            abb: "EPL"
        },
        date: "9th April, 2024"
    },
    {
        clubs: [
            {
                logo: "",
                abb: "CHE"
            },
            {
                logo: "",
                abb: "CHE"
            }
        ],
        leagueType: {
            logo: "",
            abb: "EPL"
        },
        date: "9th April, 2024"
    },
    {
        clubs: [
            {
                logo: "",
                abb: "CHE"
            },
            {
                logo: "",
                abb: "CHE"
            }
        ],
        leagueType: {
            logo: "",
            abb: "EPL"
        },
        date: "9th April, 2024"
    },
    {
        clubs: [
            {
                logo: "",
                abb: "CHE"
            },
            {
                logo: "",
                abb: "CHE"
            }
        ],
        leagueType: {
            logo: "",
            abb: "EPL"
        },
        date: "9th April, 2024"
    },
    {
        clubs: [
            {
                logo: "",
                abb: "CHE"
            },
            {
                logo: "",
                abb: "CHE"
            }
        ],
        leagueType: {
            logo: "",
            abb: "EPL"
        },
        date: "9th April, 2024"
    },
    {
        clubs: [
            {
                logo: "",
                abb: "CHE"
            },
            {
                logo: "",
                abb: "CHE"
            }
        ],
        leagueType: {
            logo: "",
            abb: "EPL"
        },
        date: "9th April, 2024"
    },
]