import { House } from "../Models/House.js"
export function getHouseForm() {
  return `<form onsubmit="app.housesController.addHouse()">
  <div class="mb-3 d-flex justify-content-between">
    <div>
      <label for="bedrooms" class="form-label">Bedrooms:</label>
      <input type="number" class="form-control" name="bedrooms" id="bedrooms" aria-describedby="bedrooms"
        placeholder="0" required>
    </div>
  </div>
  <div class="mb-3 d-flex justify-content-between">
    <div>
      <label for="bathrooms" class="form-label">Bathrooms:</label>
      <input type="number" class="form-control" name="bathrooms" id="bathrooms" aria-describedby="bathrooms"
        placeholder="0" required>
    </div>
    <div>
    <label for="levels" class="form-label">Levels:</label>
    <input type="number" class="form-control" name="levels" id="levels" aria-describedby="levels"
      placeholder="0" required>
  </div>
</div>
<div class="mb-3 d-flex justify-content-between">
  <div>
    <label for="year" class="form-label">Year:</label>
    <input type="number" class="form-control" name="year" id="year" aria-describedby="year"
      placeholder="1990" required>
  </div>
    <div>
      <label for="price" class="form-label">Price: $</label>
      <input type="number" class="form-control" name="price" id="price" aria-describedby="price"
        placeholder="Price..." min='1' required>
    </div>
  </div>
  <div class="mb-3">
    <div>
      <label for="imgUrl" class="form-label">Image Url:</label>
      <input type="url" class="form-control" name="imgUrl" id="imgUrl" aria-describedby="imgUrl"
        placeholder="http://thishousedoesnotexist.com" required>
    </div>
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
</form>`
}