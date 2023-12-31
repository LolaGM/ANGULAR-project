// Generated by https://quicktype.io

export interface Director {
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}

export interface Result {
    adult:                boolean;
    gender:               number;
    id:                   number;
    known_for_department: KnownForDepartment;
    name:                 string;
    original_name:        string;
    popularity:           number;
    profile_path:         null | string;
    known_for:            KnownFor[];
}

export interface KnownFor {
    adult:             boolean;
    backdrop_path:     null | string;
    id:                number;
    title?:            string;
    original_language: OriginalLanguage;
    original_title?:   string;
    overview:          string;
    poster_path:       null | string;
    media_type:        MediaType;
    genre_ids:         number[];
    popularity:        number;
    release_date?:     string;
    video?:            boolean;
    vote_average:      number;
    vote_count:        number;
    name?:             string;
    original_name?:    string;
    first_air_date?:   string;
    origin_country?:   string[];
}

export enum MediaType {
    Movie = "movie",
    Tv = "tv",
}

export enum OriginalLanguage {
    De = "de",
    En = "en",
    Or = "or",
    Zu = "zu",
}

export enum KnownForDepartment {
    Acting = "Acting",
    Directing = "Directing",
    Production = "Production",
}
