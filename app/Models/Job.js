export class Job {
  constructor({ id, company, jobTitle, hours, rate, description }) {
    this.id = id
    this.company = company || ''
    this.jobTitle = jobTitle || ''
    this.hours = hours || ''
    this.rate = rate || ''
    this.description = description || ''
  }


  get jobCardsTemplate() {
    return `
<div class="job col-md-4 p-4">
    <div class="bg-white shadow rounded">
      <h1 class="p-2 rounded-top bg-dark text-light">
      Company: ${this.company} Rate: ${this.rate}</b></p>
      </h1>
      <h2 class="m-2 text-danger text-uppercase">${this.jobTitle}</h2>
      <p class="m-2">${this.description}</p>
      <div class="p-3 d-flex justify-content-between align-items-center">
        <p class="m-0 text-danger">Hours: ${this.hours}</p>
        <i class="mdi mdi-delete selectable" onclick="app.housesController.removeHouse('${this.id}')"></i>
      </div>
    </div>
  </div>
`
  }

}