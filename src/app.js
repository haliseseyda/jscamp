console.log("Merhaba Kodama.io")

//JS type safe değildir => tip güvenli değildir
let dolarDun = 9.20

let dolarBugun = 9.30

{let dolarDun = 9.10}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11  bu yapılmaz

console.log(euroDun)

//array
//camelCasing => ilk küçük sonrası büyük
//PascalCasing => ilk ve son küçük
let konutKredileri = ["Konut kredisi","Emlak konut kredisi",
"Kamu konut kredisi","Özel konut kredisi"]
//react

console.log("<ul>")
for (let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

{
//     <ul>
//     <li>Konut kredisi</li> 
//     <li>Emlak konut kredisi</li>
//     <li>Kamu konut kredisi</li>
//     </ul>  
}

console.log(konutKredileri)