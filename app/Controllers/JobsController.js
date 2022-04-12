import { ProxyState } from "../AppState.js";
import { getJobForm } from "../components/JobForm.js";
import { Job } from "../Models/Job.js";
import { jobsService } from "../Services/JobsService.js";
import { Pop } from "../Utils/Pop.js";

function _drawJobs() {
  let jobsCardsTemplate = ''
  ProxyState.jobs.forEach(j => jobsCardsTemplate += j.jobCardsTemplate)
  document.getElementById('listings').innerHTML = `
  <div class="row houses">
      ${jobsCardsTemplate}
    </div>
  `
  document.getElementById('listing-modal-form-slot').innerHTML = getJobForm()
  document.getElementById('add-listing-modal-label').innerText = 'Add Job'
}

async function _getAllJobs() {
  try {
    await jobsService.getAllJobs()
  }
  catch (error) {
    console.log(error)
    Pop.toast('error', error)
  }
}

export class JobsController {
  constructor() {
    ProxyState.on('jobs', _drawJobs)
    _getAllJobs()
  }
  async addJob() {
    try {
      event.preventDefault()

    } catch (error) {
      console.log(error)
      Pop.toast(error.message)

    }
  }

  drawJobs() {
    _drawJobs()
    bootstrap.Offcanvas.getOrCreateInstance(document.getElementById('sidenav')).hide()
  }

  async removeJob(id) {

  }

}