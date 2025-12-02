import {Teacher} from '@/page/admin/teacher/teacher'
import {Student} from '@/page/admin/student/student'
import { Profile } from "@/page/admin/profile"
import { Settings } from "@/page/admin/settings"

export default [
    
    {
       path:"teacher",
        page: Teacher
    },
    {
       path:"students",
        page: Student
    },
    {
       path:"profile",
        page: Profile
    },
    {
       path:"settings",
        page: Settings
    },
]


