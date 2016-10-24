
let superheroData= [
  {name: "Superman", phone: "704-477-9452", affiliation: "DcComics", image_url: "https://upload.wikimedia.org/wikipedia/en/e/eb/SupermanRoss.png" },
  {name: "Batman", phone: "704-477-9453", affiliation: "DC Comics", image_url: "http://cartoonbros.com/wp-content/uploads/2016/05/Batman-15.jpg"},
  {name: "WonderWoman", phone: "704-477-9454", affiliation: "DC Comics", image_url: "http://media.dcentertainment.com/sites/default/files/GalleryComics_1920x1080_20150429_WonderWoman'77_CMYK-new-neck-v2_552849f55810a9.84883346.jpg"},
  {name: "Spiderman", phone: "704-477-9455", affiliation: "Marvel", image_url: "https://i.annihil.us/u/prod/marvel/i/mg/6/60/538cd3628a05e.jpg"},
  {name: " IronMan", phone: "704-477-9456", affiliation: "Marvel", image_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiX8Zj4ufPPAhVEPD4KHfi6CukQjRwIBw&url=http%3A%2F%2Fironman.wikia.com%2Fwiki%2FMark_43&bvm=bv.136593572,d.cWw&psig=AFQjCNEplr-Jfam8eq-xQdLA8a-yJmAjKA&ust=1477398902249466"},
]

angular
  .module("superheroApp", [])
  .controller("superheroesCtrl", [ superheroesController ])
    function superheroesController() {
      this.superheroes = superheroData
      this.addSuperhero = function() {
      this.superheroes.push(this.newSuperhero)
      this.newSuperhero = {}
  }
}
