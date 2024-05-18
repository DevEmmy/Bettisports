import { fetcher } from "@/utils/fetcher/apiFootballFetcher"
import useSWR from "swr"

export const useGetStandings = ()=>{
    let {data, error, isLoading} = useSWR("/standings?league=39&season=2023", fetcher);
    if(data){
        data = data[0].league.standings[0]
    }
    return {standings: data, isLoading, error}
}
