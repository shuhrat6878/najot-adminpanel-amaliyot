import { Spinner } from "@/components/ui/spinner"
import { TeacherTable } from "../components/table"
import { useTeacherList } from "../service/query/useTeacherList"
import type { ColumnDef } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


type Payment = {
  count: number
  name: string
  id?:string
  specification:  string
  isActive: "Active" | "Blocked"
  groups: number
  username: string
}
 
 


export const Teacher = () => {

  const { data, isLoading } = useTeacherList()

  const teacher: Payment[] = (data?.data ?? []).map((item: any,index) => ({
    groups: Array.isArray(item.groups) ? item.groups.length : 0,
    id:item.id,
    count: index+1,
    name: item.name ?? "",
    specification: item.specification ?? "",
    isActive: (item.isActive as "Active" | "Blocked") ?? "Blocked",
    username: item.username ?? ""
  }))

  const columns: ColumnDef<Payment>[] = [
    {
      accessorKey: "count",
      header: "Count",
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "specification",
      header: "Specification",
    },
    {
      accessorKey: "username",
      header: "Username",
    },
    {
      accessorKey: "groups",
      header: "Groups",
    },
    {
      accessorKey: "isActive",
      header: "Status",
    },
    {
      id:"actions",
      header: "Actions",
      cell:({row})=>{
        const teacher = row.original;
        console.log(teacher);
        return <Button>Lorem</Button>
        
      }
    }
  ]


  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {isLoading ? <Spinner/> :<TeacherTable columns={columns} data={teacher} /> }
      
    </div>
  )
}