// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
const arrayTeam =
[
    {
       "name":"Wayne Barnett",
       "role":"Founder & CEO",
       "image":"wayne-barnett-founder-ceo.jpg" 
    },
    {
        "name":"Angela Caroll",
        "role":"Chief Editor",
        "image":"angela-caroll-chief-editor.jpg"
    },
    {
        "name":"Walter Gordon",
        "role":"Office Manager",
        "image":"walter-gordon-office-manager.jpg"
    },
    {
        "name":"Angela Lopez",
        "role":"Social Media Manager",
        "image":"angela-lopez-social-media-manager.jpg"
    },
    {
        "name":"Scott Estrada",
        "role":"Developer",
        "image":"scott-estrada-developer.jpg"
    },
    {
        "name":"Barbara Ramos",
        "role":"Graphic Designer",
        "image":"barbara-ramos-graphic-designer.jpg"
    }
]
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
console.log(arrayTeam);
for (let i = 0; i < arrayTeam.length; i++){
    let membtoIesimo = arrayTeam[i];

    for( let chiave in membtoIesimo){
        console.log(chiave, membtoIesimo[chiave]);
    }
}
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sotto forma di stringhe
