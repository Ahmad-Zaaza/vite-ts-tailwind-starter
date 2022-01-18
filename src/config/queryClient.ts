import axios from "axios";
import toast from "react-hot-toast";
import { MutationCache, QueryCache, QueryClient } from "react-query";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      // 🎉 only show error toasts if we already have data in the cache
      // which indicates a failed background update
      if (query.state.data !== undefined) {
        if (axios.isAxiosError(error)) {
          toast.error(
            `Something went wrong: ${error.response?.data.errorMessage}`
          );
        }
      }
    }
  }),
  mutationCache: new MutationCache({
    onError: () => {
      toast.error("Something went wrong");
    }
  }),
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      notifyOnChangeProps: "tracked" // 🌟 Only rerenders if one of the used props used eg: {data, isFetching,...}
    }
  }
});
