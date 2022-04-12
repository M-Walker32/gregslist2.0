import { Job } from "../Models/Job.js";
export function getJobForm() {
  return `
 <form onsubmit="app.housesController.addHouse()">
  <div class="mb-3 d-flex justify-content-between">
    <div>
      <label for="company" class="form-label">Company:</label>
      <input type="text" class="form-control" name="company" id="company" aria-describedby="company"
        placeholder="0" required>
    </div>
  </div>
  <div class="mb-3 d-flex justify-content-between">
    <div>
      <label for="jobTitle" class="form-label">Job Title:</label>
      <input type="text" class="form-control" name="jobTitle" id="jobTitle" aria-describedby="jobTitle"
        placeholder="0" required>
    </div>
    <div>
    <label for="hours" class="form-label">Hours:</label>
    <input type="number" class="form-control" name="hours" id="hours" aria-describedby="hours"
      placeholder="0" required>
  </div>
</div>
<div class="mb-3 d-flex justify-content-between">
  <div>
    <label for="rate" class="form-label">Rate:</label>
    <input type="number" class="form-control" name="rate" id="rate" aria-describedby="rate"
      placeholder="$1.50 hr" required>
  </div>
  <div class="mb-3">
    <div>
      <label for="description" class="form-label">Description</label>
      <textarea type="text" class="form-control" name="description" id="description"
        aria-describedby="description" placeholder="Description..." required> </textarea>
    </div>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="submit" class="btn btn-primary">Create</button>
  </div>
</form>
 `
}