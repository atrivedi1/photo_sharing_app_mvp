$(document).ready(function() {
  async function renderPhotos() {
    const photoNames = await getPhotos();
    render(photoNames);
  }

  function getPhotos() {
    return fetch('/photos')
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw new Error(`Failed to fetch photos due to: ${ err }`)
      })
  }

  function render(photos) {
    photos.forEach((photo) => {
      $("#photo_container").append(
        `<img class='photos' src=./uploads/${photo}  alt="">`
      )
    })
  }

  renderPhotos();
});