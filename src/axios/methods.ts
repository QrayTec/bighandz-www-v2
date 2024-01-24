import { instance } from './config'

export async function QueryInfo(info: string, params: any) {
  try {
    const response = await instance.post(info, params)
    return response.data
  } catch (error: any) {
    return error.response.data
  }
}
