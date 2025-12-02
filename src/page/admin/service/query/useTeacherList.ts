import { request } from "@/config/request"
import { useQuery } from "@tanstack/react-query"
import type { IResponse, TeacherList } from "../../type"

export const useTeacherList = () => {
  return useQuery({
    queryKey:["teacher_list"],
    queryFn:()=> request.get<IResponse<TeacherList[]>>("/teacher").then((res)=> res.data)
  })
}


