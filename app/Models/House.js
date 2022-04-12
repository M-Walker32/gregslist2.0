export class House {
  constructor({ id, bedrooms, bathrooms, levels, imgUrl, year, price, description }) {
    this.id = id
    this.bedrooms = bedrooms || ''
    this.bathrooms = bathrooms || ''
    this.levels = levels || ''
    this.imgUrl = imgUrl || ''
    this.year = year || ''
    this.price = price || ''
    this.description = description || ''
  }

  get houseCardsTemplate() {
    return ` <div class="house col-md-4 p-4">
    <div class="bg-white shadow rounded">
      <img class="w-100 rounded-top" src="${this.imgUrl}" alt="image">
      <div class="p-3">
      Bedrooms: ${this.bedrooms} Bathrooms: ${this.bathrooms}</b></p>
      </div>
      <p class="m-2">${this.description}</p>
      <div class="p-3 d-flex justify-content-between align-items-center">
        <p class="m-0">$${this.price}</p>
        <p class="m-0">Levels: ${this.levels}</p>
        <p class="m-0">Year: ${this.year}</p>
        <i class="mdi mdi-delete selectable" onclick="app.housesController.removeHouse('${this.id}')"></i>
      </div>
    </div>
  </div>`
  }
}