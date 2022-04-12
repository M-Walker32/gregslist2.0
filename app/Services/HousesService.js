import { ProxyState } from "../AppState.js"
import { House } from "../Models/House.js"
import { sandboxApi } from "./AxiosService.js"

class HousesService {

  async getAllHouses(params = {}) {
    const res = await sandboxApi.get('houses', { params })
    // console.log(res)
    const houses = res.data.map(h => new House(h))
    ProxyState.houses = houses
  }

  async addHouse(formData) {
    const res = await sandboxApi.post('houses', formData)
    const newHouse = new House(res.data)
    ProxyState.houses = [newHouse, ...ProxyState.houses]
  }

  async editHouse() {
    console.log('edit house')
  }

  async removeHouse(id) {
    const res = await sandboxApi.delete('houses/' + id)
    ProxyState.houses = ProxyState.houses.filter(h => h.id !== id)
  }

}


export const housesService = new HousesService()