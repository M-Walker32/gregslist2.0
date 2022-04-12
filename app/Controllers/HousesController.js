import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../components/HouseForm.js";
// @ts-ignore
import { House } from "../Models/House.js";
import { housesService } from "../Services/HousesService.js"
import { Pop } from "../Utils/Pop.js";


function _drawHouses() {
  let houseCardsTemplate = ''
  ProxyState.houses.forEach(h => houseCardsTemplate += h.houseCardsTemplate)
  document.getElementById('listings').innerHTML = `
    <div class="row jobs">
      ${houseCardsTemplate}
    </div>
  `
  document.getElementById('listing-modal-form-slot').innerHTML = getHouseForm()
  document.getElementById('add-listing-modal-label').innerText = 'Add House 🏠'
}

async function _getAllHouses() {
  try {
    await housesService.getAllHouses()
  }
  catch (error) {
    console.log(error)
    Pop.toast('error')
  }
}

export class HousesController {
  //  Do I want to do anything on page load?
  constructor() {
    ProxyState.on('houses', _drawHouses)
    _getAllHouses()
  }

  async addHouse() {
    // DO THIS like always
    try {
      event.preventDefault()
      // debugger
      const formElem = event.target
      const formData = {
        // @ts-ignore
        bedrooms: formElem.bedrooms.value,
        // @ts-ignore
        bathrooms: formElem.bathrooms.value,
        // @ts-ignore
        levels: formElem.levels.value,
        // @ts-ignore
        imgUrl: formElem.imgUrl.value,
        // @ts-ignore
        year: formElem.year.value,
        // @ts-ignore
        price: formElem.price.value,
        // @ts-ignore
        description: formElem.description.value
      }
      await housesService.addHouse(formData)
      console.log({ formData })
      // @ts-ignore
      formElem.reset()
    } catch (error) {
      console.log(error)
      Pop.toast(error.message)
    }
    // @ts-ignore
    bootstrap.Modal.getOrCreateInstance(document.getElementById('add-listing-modal')).hide()
  }

  drawHouses() {
    _drawHouses()
    // REVIEW [epic=Mark] How could we refactor this? 
    // @ts-ignore
    bootstrap.Offcanvas.getOrCreateInstance(document.getElementById('sidenav')).hide()
  }

  async removeHouse(id) {
    try {
      if (await Pop.confirm) {
        await housesService.removeHouse(id)
      }
    }
    catch (error) {
      console.log(error)
    }
  }

}