// Function onclick

// On click in qr code icon
// On click in Pix Icon
// On click in Ticket icon
// On click in Demand icon




// Adicionando qr icon

/*





*/

let transaction = document.querySelector('.container_transactions_child_main')


// function load {

// }

function clickQr() {
  transaction.innerHTML = ` <div class="choice_transaction_one">
 <div class="qr_transaction_parent"> <img style="width:180px;" src="assets/img/qrcode-imagem.png" alt="qr_image">
  <p class="paragraph_qr">
    @Develop by @joaocasado
  </p>
  <div class="container_button_qr"><button class="button_qr">Cobre um amigo</button> <div>
  <a class="link_qr" href="#">Compartilhar meu codigo</a> </div>
  </div>`
}

function clickPix() {
  transaction.innerHTML = `<div class="choice_transaction_two">
  <div class="pix_transaction_parent"> <div class="pix_transaction_child"><img style="width:150px" src="assets/img/pix-logo.png" alt="pix_logo"></div>  </div>
  
  </div>`
}


function clickTicket() {
  transaction.innerHTML = `<div class="choice_transaction_three">
  <div class="ticket_parent">
  <img style="width:80px" src="assets/img/boleto.png" alt="ticket">
  <h2 class="title_ticket" >Pagar com código de barras</h2>
  <p class="paragrapho_ticket">Você pode parcelar em até 12x no cartão ou usar o seu saldo em carteira pra pagar à vista.</p>
  <input type="text" name="" id="inpt_barcode" placeholder="Insira o código de barras">
  </div>
  </div>`
  
}

function clickDemand() {
  transaction.innerHTML = `<div class="choice_transaction_four">
  <img style="width:80px;" src="assets/img/cobrar.png" alt="demand_image">
  <h2>Cobrar</h2>
  <p class="paragraph_demand">Divida a conta com os amigos de forma fácil!</p>
  </div>`
}
