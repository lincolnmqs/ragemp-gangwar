const errorMsg = {
	"password-mismatch": "As senhas não correspondem, digite-as novamente",
	"logged": "Essa conta já está logada",
	"invalid-info": "O e-mail que você forneceu não é válido",
	"takeninfo": "O nome de usuário ou e-mail que você forneceu foi usado",
	"tooshort": "O nome de usuário ou senha que você forneceu é muito curto",
	"incorrectinfo": "O nome de usuário ou senha que você digitou está incorreto"
}

$('.alert').hide();

$('form').submit(function(e){
	e.preventDefault()
})

function sendAccountInfo(state) {
	$('.alert').hide();
	switch (state) {
		case 0:
			mp.events.call('client:loginData', $('#loginName').val(), $('#loginPass').val());
			break;
		case 1:
			if ($('#registerPass').val() == $('#registerPass2').val()) {
				mp.events.call('client:registerData', $('#registerName').val(), $('#registerEmail').val(), $('#registerPass').val());
			} else {
				throwError('password-mismatch');
			}
			break;
		default:
			break;
	}
}

function throwError(err) {
	$('.alert').show().html(errorMsg[err]);
}

mp.events.add('b.throwError', (err) => {
	throwError(err);
})
