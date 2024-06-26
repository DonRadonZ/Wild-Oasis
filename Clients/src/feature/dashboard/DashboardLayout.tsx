import styled from "styled-components";

import { useRecentBooking } from "./useRecentBooking";
import { useRecentStays } from "./useRecentStays";

import Spinner from "../../ui/Spinner/Spinner";
import Stats from "./Stats";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";
import { useCabins } from "../cabins/useCabin";


const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;



export default function DashboardLayout() {
  const {bookings, isLoading: isLoading1} = useRecentBooking();
  const {
    //stays, 
    confirmedStays, isLoading: isLoading2, numDays} = useRecentStays();
  const {cabins, isLoading: isLoading3} = useCabins()

  if (isLoading1 || isLoading2 || isLoading3) return <Spinner/>

  return (
    <StyledDashboardLayout>
      <Stats 
        bookings={bookings} 
        confirmedStays={confirmedStays} 
        numDays={numDays} 
        cabinCount={cabins?.length}
        />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  )
}
