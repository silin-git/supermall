import { request } from "./request";

export function getAllData(){
  return request({
    url: "/home/multidata"
  })
}