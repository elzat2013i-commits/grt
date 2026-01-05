//Attributes-атрибут бул объкттин касиети,ал анын сырткы корунушуно же иштешине таасир этет.
//hasAtеribute-тегтир атрибутун батба же жокпу текшерет.
//getAteribute-бул меттод тегтин атрибутунун маанисин чыгарат
//setAttribute-бул метод жаны атрибут кошот
let photo= document.getElementById("ptoho")

photo.getAttribute('id')
console.log(photo.getAttribute('id'))
//ptoho.hasAttribute('alt')
//console.log(ptoho.hasAttribute('alt'))
const img = () => {
photo.setAttribute('src',"https://img.freepik.com/free-photo/couple-making-heart-from-hands-sea-shore_23-2148019887.jpg?semt=ais_hybrid&w=740&q=80")
} 

