$(document).ready(function () {
  var traking = window.location.href;
  var pos = traking.indexOf('?');
  if(pos == -1){
             $('#traking_id').val('');
  }else{
          traking = traking.substring(pos, traking.length);
           $('#traking_id').val(traking);
  }

 
  charge(1,1);
});


function quiz(){
  document.getElementById('ocult').style = "display: block;";
}
function move(){
  document.getElementById('inicial').style = "transform: translateX(-800px); opacity: 0";
}
function none(){
  document.getElementById('inicial').style = "display: none";
}

function off(){
  window.setTimeout('move()', 1000);
  window.setTimeout('none()', 2000);
  window.setTimeout('quiz()', 2300);



}

function titulo(){
  document.getElementById('h1-titulo').style = 'opacity: 1';
}
function h2Titulo(){
  document.getElementById('h2-titulo').style = 'opacity: 1';
}
function finalTitulo(){
  document.getElementById('final-titulo').style = 'opacity: 1';
}

function tituloEfeito(){
  window.setTimeout('titulo()', 700);
  window.setTimeout('h2Titulo()', 2700);
  window.setTimeout('finalTitulo()', 5000);


}


window.onload = tituloEfeito();









function charge(question,resp){


  document.addEventListener('keydown', function(e){
    if(e.key == 1){
      document.getElementById("btn1").click(); 
    }
  }, false);

  document.addEventListener('keydown', function(e){
    if(e.key == 2){
      document.getElementById("btn2").click(); 
    }
  }, false);

  document.addEventListener('keydown', function(e){
    if(e.key == 3){
      document.getElementById("btn3").click(); 
    }
  }, false);

  document.addEventListener('keydown', function(e){
    if(e.key == 4){
      document.getElementById("btn4").click(); 
    }
  }, false);
  document.addEventListener('keydown', function(e){
    if(e.key == 'Enter'){
      document.getElementById("Enter").click();
      console.log(e); 
    }
  }, false);

  var titulo = "Descubra qual é o cartão de crédito ideal para você";
  var subtitulo = "Responda às perguntas abaixo para que nossa tecnologia possa escolher o melhor cartão de crédito para você.";
  var total_questoes = "3";

  var questao_atual = "";
  var pergunta = "";
  var respostas = "";
  var percentual = "";

  $('#titulo_id').html(titulo);
  $('#subtitulo_id').html(subtitulo);
  $('#total_id').html(total_questoes);


  if(question == 1){
            pergunta = "O que é mais importante para você?";
            respostas =  '<button class="btn btn-lg btn-block btn-outline-primary" onclick= charge(2,1) id="btn1"> <p>1</p> Limite de Crédito Alto</button>'+
                         '<button class="btn btn-lg btn-block btn-outline-primary btn2" onclick=charge(2,2) id="btn2"> <p>2</p> Sem anuidade</button>'+
                         '<button class="btn btn-lg btn-block btn-outline-primary btn3" onclick=charge(2,3) id="btn3"> <p>3</p> Milhas aéreas</button>';
     questao_atual = 1;
  

   }else if(question == 2){
     $('#resp_1').val(resp);
            pergunta = "Em qual grupo você se encaixa?";
            respostas =  '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=charge(3,1) id="btn1"> <p>1</p>Aposentado / Pensonista / Servidor Público</button>'+
                         '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=charge(3,2) id="btn2"> <p>2</p>Concurseiro / Estudante universitario</button>'+
                         '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=charge(3,3) id="btn3"> <p>3</p>Carteira assinada / Autonomo / Empreendedor</button>'+
                         '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=charge(3,4) id="btn4"> <p>4</p>Estou Desempregado</button>';
            questao_atual = 2;

  }else if(question == 3){
 $('#resp_2').val(resp);
           pergunta =  "Você esta negativado? ";
           respostas = '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=charge(4,1) id="btn1"> <p>1</p> Sim</button>'+
                       '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=charge(4,2)id="btn2"> <p>2</p> Não</button>';
           questao_atual = 3;



  }else if(question == 4){

 $('#resp_3').val(resp);
     html='<img src="img/JD-20-512.png" class="img-fluid"><br>'+
          '<h1 class="MyFont">Falta pouco!</h1>'+
  '<p class="lead">Digite seus dados abaixo e receba o cartão perfeito para você.</p>'+
  '</div>'+
  '<div class="row justify-content-md-center">'+
     '<div class="col-md-9" >'+
    
        '<div class="form-group">'+
          '<input type="text" class="form-control"  id="nome_send" aria-describedby="emailHelp" placeholder="Insira seu nome.">'+
        '</div>'+
        '<div class="form-group">'+
        '<input type="email" class="form-control" id="email_send" aria-describedby="emailHelp" placeholder="Insira seu email.">'+
        '</div>'+
        '<div class="form-check">'+
        '<input type="checkbox" class="form-check-input" id="Check1_termos" checked style="display:none;">'+
         
        '</div><br>'+
     '<button onclick="send_info()" class="btn btn-primary btn-block br" id="Enter">VER MEU CARTÃO DE CRÉDITO</button><br>'+
     '<label  id="label_check" class="form-check-label" for="exampleCheck1"><a href="https://utua.com.br/politica-de-privacidade/" target="_blank" >Ao clicar no botão "ver meu cartao" você concorda com os termos de uso e as politicas de privacidade.</a></label>'+
 
     '</div>';


    $('#maincontent_id').html(html);
    $('#go_id').hide('slow');
     
  }
    
    if(question != 4){
     percentual = (questao_atual /(total_questoes))*100;  
     
     $('#progressbar_id').html('<div class="progress-bar" role="progressbar" style="width: '+percentual+'%" aria-valuenow="'+percentual+'" aria-valuemin="0" aria-valuemax="100" ></div>');

     $('#questaoatual_id').html(questao_atual);
     $('#percentual_id').html(percentual);
     $('#pergunta_id').html(pergunta);
     $('#respostas_id').html(respostas);
    }
}



function send_info(){
  
var resp1 = $('#resp_1').val();
var resp2 = $('#resp_2').val();
var resp3 = $('#resp_3').val();
//var resp4 = $('#resp_4').val();
//var resp5 = $('#resp_5').val();

//array de resposatas para campos personalizados
var q1 = ['Limite de Crédito Alto','Sem anuidade','Milhas aéreas'];
var q2 = ['Aposentado / Pensonista / Servidor Público','Concurseiro / Estudante universitario','Carteira assinada / Autonomo / Empreendedor','Estou Desempregado</button>'];
var q3 = ['Sim','Não'];

q1 = q1[(resp1-1)];
q2 = q2[(resp2-1)];
q3 = q3[(resp3-1)];


var traking = $('#traking_id').val();
var link =  'https://utua.com.br/category/cartao-de-credito/'+traking;

if(resp1 == 1) { link='https://utua.com.br/cartao-de-credito-nubank/'+traking;} //Limite Alto
if(resp1 == 2) { link='https://utua.com.br/cartao-de-credito-meu-bmg/'+traking;} //Sem anuidade
if(resp1 == 3) { link='https://utua.com.br/cartao-de-credito-c6/'+traking;} //Milhas Aereas
if(resp2 == 1 && resp3 == 1){    link = 'https://utua.com.br/cartao-negativado-bmg/'+traking; } // Negativado
if((resp2 == 2 || resp2 == 3 || resp2 == 4) && resp3 == 1){    link = 'https://utua.com.br/cartao-negativado-superdigital/'+traking; } 
 //alert(resp1+'-'+resp2+'-'+resp3+'-'+resp4+'-'+resp5+'-'+link);
  
  var nome =  $('#nome_send').val();
  var email = $('#email_send').val();
  var    r =  $('#listaactive_id').val();
  var lista = 10;
  if(r =='s'){ lista = 3;  }

   if(!$('#Check1_termos').is(":checked")){
      $("#Check1_termos").addClass( "is-invalid" );
      $('#label_check').html('Concorde com os termos e condições')
   }else if(email == ''){
    $("#email_send").addClass( "is-invalid" );
   }else if(nome ==''){
    $("#nome_send").addClass( "is-invalid" );
   }
  else{
     
    $.ajax({
        url: "active/examples.php",
        type: 'POST',
        data: {
            'param1': nome,
            'param2': email,
            'param3': lista,
            'param4': q1,
            'param5': q2,
            'param6': q3
        },
        dataType: 'html',
        beforeSend: function () {
          
        },
        success: function (retorno) {
            // Atribui o retorno HTML para a div correspondente
            window.location.href = link;
            //alert(retorno);

        },
        error: function (erro, er) {
            // Se houver um erro durante o processamento, exibe a mensagem na div correspondente
            $('#ret_data').html('<p class="destaque">Erro ' + erro.status + ' - ' + erro.statusText + '</br> Tipo de erro: ' + er + '</p>');

        }
    });
  }
}

