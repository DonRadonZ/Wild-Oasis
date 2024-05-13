import styled from "styled-components";

import { useRecentBooking } from "./useRecentBooking";
import { useRecentStays } from "./useRecentStays";

import Spinner from "../../ui/Spinner/Spinner";
import Stats from "./Stats";


const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;



export default function DashboardLayout() {
  const {bookings, isLoading: isLoading1} = useRecentBooking();
  const {stays, confirmedStays, isLoading: isLoading2, numDays} = useRecentStays();
  const {cabins, isLoading: isLoading3} = useCabins()

  if (isLoading1 || isLoading2 || isLoading3) return <Spinner/>

  return (
    <StyledDashboardLayout>
      <Stats 
        bookings={bookings} 
        confirmedStays={confirmedStays} 
        numDays={numDays} 
        cabinCount={cabins.length}
        />
      <div>Today's activity</div>
      <div>Chart stay durations</div>
      <div>Chart sales</div>
    </StyledDashboardLayout>
  )
}
