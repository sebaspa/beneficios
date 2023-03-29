import customFetch from '../utils/axios'
import { type Country } from '../types/country'

export const getAllCountries = async (): Promise<Country | []> => {
  try {
    const response = await customFetch.get('/countries')
    return response.data
  } catch (error) {
    console.error(error)
    return []
  }
}
