import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin as createEditCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useEditCabin() {
    const queryClient = useQueryClient();

    const { isLoading: isEditing, mutate: editCabin } = useMutation({
        mutationFn: ({ newCabinData, id }) => createEditCabinApi(newCabinData, id),

        onSuccess: () => {
            toast.success("Cabin edited successfully");

            queryClient.invalidateQueries({
                queryKey: ["cabins"],
            });

        },
        onError: (err) => toast.error(err.message),
    });

    return { isEditing, editCabin }
}