// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
const arrayTeam =
[
    {
       "name":"Wayne Barnett",
       "role":"Founder & CEO",
       "image":"img/wayne-barnett-founder-ceo.jpg" 
    },
    {
        "name":"Angela Caroll",
        "role":"Chief Editor",
        "image":"img/angela-caroll-chief-editor.jpg"
    },
    {
        "name":"Walter Gordon",
        "role":"Office Manager",
        "image":"img/walter-gordon-office-manager.jpg"
    },
    {
        "name":"Angela Lopez",
        "role":"Social Media Manager",
        "image":"img/angela-lopez-social-media-manager.jpg"
    },
    {
        "name":"Scott Estrada",
        "role":"Developer",
        "image":"img/scott-estrada-developer.jpg"
    },
    {
        "name":"Barbara Ramos",
        "role":"Graphic Designer",
        "image":"img/barbara-ramos-graphic-designer.jpg"
    }
]
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
console.log(arrayTeam);
for (let i = 0; i < arrayTeam.length; i++){
    let membtoIesimo = arrayTeam[i];

    for( let chiave in membtoIesimo){
        // console.log(chiave, membtoIesimo[chiave]);
    }
}
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sotto forma di stringhe
const output = document.getElementById("text");
arrayTeam.forEach(membro =>{
    // creo un div per ogni membro e gli do una classe
    const  membroContainer = document.createElement('div');
    membroContainer.classList.add('membro-container');
    // aggiungo le informaizoni ai container  creati 
     membroContainer.innerHTML= 
     `
     <img src="${membro.image} " alt="${membro.name}>
     <h1><strong>${membro.name}</strong></h1>
     <h2><strong>${membro.role}</strong></h2>
     `;

     output.appendChild(membroContainer);
     
});