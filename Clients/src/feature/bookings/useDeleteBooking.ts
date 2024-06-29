import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteBooking as deleteBookingApi } from "../../services/apiBooking"; 

export function useDeleteBooking(){
const queryClient = useQueryClient();


  const {isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: () => {
      toast.success("Booking successfully deleted");
      
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      })
    },
    onError: () => toast.error("An Error Occured Deleting the booking")
  });

  return { isDeleting, deleteBooking };
}