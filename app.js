function pesquisar () {
  let section = document.getElementById("resultados-pesquisa")

  let campoPesquisa = document.getElementById ("campo-pesquisa").value

if (!campoPesquisa) {
  section.innerHTML ="<p> Nenhum resultado foi encontrado </p>"
  return
}

campoPesquisa = campoPesquisa.toLowerCase()

let resultados = "";
let titulo = "";
let informacoes = "";
let tags = "";


for (let dado of dados) { 
  titulo = dado.titulo.toLocaleUpperCase()
  informacoes = dado.informacoes.toLowerCase ()
  tags = dado.tags.toLowerCase ()

  if (titulo.includes(campoPesquisa) || informacoes.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
    resultados += `

  <div class="item-resultado"> 
    <h2>  
<a href="#"target="_blank">${dado.titulo} </a>    
    </h2>                                          
<p class="descricao-meta">${dado.informacoes} </p>
<a href=${dado.link} target="_blank">Mais informações</a>                    
     </div> 
`;

  }

 }

 if (!resultados){
  resultados = "<p>Nenhum resultado foi encontrado </p>"

 }
   
section.innerHTML = resultados

}




                
                      