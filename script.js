///* Criar um formulário para Reserva de Hotel

//- Nome

//- Telefone

//- Data Chegada

//- Data Saída

//- Tipo de Quarto: Single (R$ 139,00), Double(R$ 220,00), Triplo(R$ 340,00)

//- Número Crianças menores de 5 anos(cada criança //adicional custa R$ 30,00 a mais por noite) máximo //de 4 hóspedes
// O tipo de quarto influencia. Exemplo quarto Triplo só poderia ter mais uma criança porque o máximo é 4 hospedes
////Efetuar o cálculo e apresentar ao usuário */

function calcular(){
    const nome = document.getElementsByName("nome")[0].value;
    const telefone = document.getElementsByName("telefone")[0].value;
    const dt1= new Date(document.getElementById("data-chegada").value);
    const dt2= new Date(document.getElementById("data-saida").value);

    
  
    const dias = Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(),dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24))
  
    console.log(dias)
  
    const tipoQuarto = document.getElementsByName("tipo")
    let valorQuarto
  
    for(let i=0; i<tipoQuarto.length; i++){
      if(tipoQuarto[i].checked){
          valorQuarto = parseInt(tipoQuarto[i].value)
      }
    }
    
    const numCrianca = parseInt(document.getElementsByName("crianca")[0].value)
    const temp = "Error"
    if(valorQuarto==139 && numCrianca>3)  {
        alert("Numero de crianças permitidas neste quarto são 3");
        return null;
    }
    if(valorQuarto==220 && numCrianca>2)  {
        alert("Numero de crianças permitidas neste quarto são 2");
        return null;
    }
    if(valorQuarto==340 && numCrianca>1)  {
        alert("Apenas uma criança permitida neste quarto");
        return null;
    }
    
    if (dias<1){
      alert("A data de chegada deve ser anterior a da saída.")
    }
    else {
      if (valorQuarto && numCrianca && nome && telefone)
      {
        const preco = (valorQuarto + (numCrianca*30)) * dias
        document.getElementById("total").innerHTML = preco.toFixed(2)
      }
      else {
        alert("Favor preencher todos os campos!")
        
      }
    }
    // console.log(valorQuarto)
    // console.log(numCrianca)
    // console.log(dias)

    // console.log(nome);
    // console.log(telefone);
  
  }