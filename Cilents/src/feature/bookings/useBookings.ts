import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBooking";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("status");
  const filter = !filterValue || filterValue === 'all' ? null
     : { field: 'status', method: filterValue };
    // : { field: "totalPrice", value: 5000 , method: "gte" };

  // SORT
  const sortByRaw = searchParams.get('sortBy') || "startDate-desc";
  const [field, direction] = sortByRaw.split('-');
  const sortBy = { field, direction }; 

    const {
      isLoading, 
      data: bookings, 
      error
    } = useQuery({
        queryKey: ['bookings', filter],
        queryFn: ()  => getBookings({ filter, sortBy }),
    });

      return {isLoading, error, bookings };
}