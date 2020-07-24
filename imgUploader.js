const imgFileUrl = document.querySelector(".image-file");

imgFileUrl.addEventListener("change", (e) => {
  console.log(imgFileUrl);

  if (e.target.files.length > 0) {
    let imageSource = URL.createObjectURL(e.target.files[0]);
    const imgFile = document.getElementById("image-file-preview");
    imgFile.src = imageSource;
    imgFile.style.display = "block";
    console.log(imageSource);
  }
});
