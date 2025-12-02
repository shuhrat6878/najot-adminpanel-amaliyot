import { request } from '@/config/request'
import { useMutation } from '@tanstack/react-query'
import type { LoginResponse, LoginT } from '../types'

export const useLogin = () => {
  return  useMutation({
    mutationFn: (data:LoginT)=>request.post<LoginResponse>("/auth/signin",data,{
      withCredentials:true   // manashu joyini tekshiramiz
      
    }).then((res)=>res.data)
  })
}


