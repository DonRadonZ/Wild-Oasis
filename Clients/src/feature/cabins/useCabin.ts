import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";
import { Cabin } from "../../types";

type UseCabinsType = {
  isLoading: boolean;
    data: Array<Cabin> | undefined;
    error: string | null;
}

export function useCabins() {
    const {isLoading, data: cabins, error}: UseCabinsType = useQuery({
        queryKey: ['cabins'],
        queryFn: getCabins
      });

      return {isLoading, error, cabins };
}