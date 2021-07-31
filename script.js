///* Criar um formulário para Reserva de Hotel

//- Nome

//- Telefone

//- Data Chegada

//- Data Saída

//- Tipo de Quarto: Single (R$ 139,00), Double(R$ 220,00), Triplo(R$ 340,00)

//- Número Crianças menores de 5 anos(cada criança //adicional custa R$ 30,00 a mais por noite) máximo //de 4 hóspedes

////Efetuar o cálculo e apresentar ao usuário */

function calcular(){
    const dt1= new Date(document.getElementById("data-chegada").value);
    const dt2= new Date(document.getElementById("data-saida").value);
  
    const dias = Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(),dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24))
  
  
    const tipoQuarto = document.getElementsByName("tipo")
    let tipoSelected
  
    for(let i=0; i<tipoQuarto.length; i++){
      if(tipoQuarto[i].checked){
          tipoSelected = parseInt(tipoQuarto[i].value)
      }
    }
    
    const numCrianca = parseInt(document.getElementsByName("crianca")[0].value)
  
    const preco = (tipoSelected + (numCrianca*30)) * dias
  
    document.getElementById("total").innerHTML = preco.toString()
  
    console.log(preco.toString())
    
  }