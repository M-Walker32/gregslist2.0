import { ProxyState } from "../AppState.js"
import { Job } from "../Models/Job.js"
import { sandboxApi } from "./AxiosService.js"

class JobService {
  async getAllJobs(params = {}) {
    const res = await sandboxApi.get('jobs', { params })
    console.log(res)
    const jobs = res.data.map(j => new Job(j))
    ProxyState.jobs = jobs
  }

  async addJob(formData) {
    //  await 
  }

  async removeJob(id) {

  }

  async editJob() {
    console.log('edit job')
  }
}

export const jobsService = new JobService()