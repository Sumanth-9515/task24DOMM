var containerdiv=document.getElementById("container")
// containerdiv.textContent="sumanth"
var maindiv=document.createElement("div")
containerdiv.appendChild(maindiv)
 var imgtag=document.createElement("img")
 imgtag.setAttribute("src","https://i5.walmartimages.com/asr/5494ba72-6bfe-4531-bbbc-2489a7ddc597_1.9008873099ec2933db6d6fe74e0c98a1.jpeg")
 imgtag.style.borderRadius="100px"
 imgtag.style.width="150px"
 maindiv.appendChild(imgtag)
var ptag=document.createElement("p")
ptag.textContent="watch"
maindiv.appendChild(ptag)
var spantag=document.createElement("button")
ptag.appendChild(spantag)
spantag.textContent="BUY NOW"
containerdiv.style.border="2px solid black"
containerdiv.style.width="170px"
containerdiv.style.padding="30px"
containerdiv.style.borderRadius="30px"


