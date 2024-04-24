
const hamburger = document.querySelector(".hamburger")

const Navmenu = document.querySelector(".first-ul");



hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  Navmenu.classList.toggle("active");
})


const features = document.getElementById("nav-feature"); 
const company = document.getElementById("nav-company");

const featureArrow = document.getElementById("showfeature-arrow");
const companyArrow = document.getElementById("showcompany-arrow")

const feautureList = document.getElementById("feature-list");
const companyList = document.getElementById("company-list")

// toggling feature down
const toggleFeature = () => {
  features.addEventListener('click', function(e) {
    e.stopPropagation();
    featureArrow.classList.toggle("feature-arrow");
    feautureList.classList.toggle("nav-feature-list");
  });
};
  toggleFeature();

// toggling company down
const toggleCompany = () => {
  company.addEventListener('click', function(e) {
    e.stopPropagation();
    companyArrow.classList.toggle("company-arrow");
    companyList.classList.toggle("nav-company-list");
  });
}
 toggleCompany();

// close anywhere
