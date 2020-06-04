function onSuccess() {
    alert("Cool");
}

function onError() {
    alert("Bad:(");
}
OpenPay.setSandboxMode(true);
OpenPay.setId('mcaxfyvjd9jgv3m73xy1');
OpenPay.setApiKey('pk_613797f73e794e21a228cd25da0c15e0');

OpenPay.setSandboxMode(true);

OpenPay.token.create({
    "card_number":"4111111111111111",
    "holder_name":"Juan Perez Ramirez",
    "expiration_year":"20",
    "expiration_month":"12",
    "cvv2":"110",
    "address":{
        "city":"Querétaro",
        "line3":"Queretaro",
        "postal_code":"76900",
        "line1":"Av 5 de Febrero",
        "line2":"Roble 207",
        "state":"Queretaro",
        "country_code":"MX"
    }
}, onSuccess, onError);