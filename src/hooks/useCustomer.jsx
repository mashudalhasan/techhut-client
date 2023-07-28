import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCustomer = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: isStudent, isLoading: isStudentLoading } = useQuery({
    queryKey: ["isCustomer", user?.email],
    enabled: !loading,
    queryFn: async () => {
      if (!user) {
        return false;
      }
      const res = await axiosSecure.get(`/users/customer/${user.email}`);
      return res.data.student;
    },
  });

  return [isStudent, isStudentLoading];
};

export default useCustomer;
