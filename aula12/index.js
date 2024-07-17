var diasDaSemana;
(function (diasDaSemana) {
    diasDaSemana[diasDaSemana["Segunda"] = 20] = "Segunda";
    diasDaSemana[diasDaSemana["Ter\u00E7a"] = 21] = "Ter\u00E7a";
    diasDaSemana[diasDaSemana["Quarta"] = 22] = "Quarta";
    diasDaSemana[diasDaSemana["Quinta"] = 23] = "Quinta";
    diasDaSemana[diasDaSemana["Sexta"] = 24] = "Sexta";
    diasDaSemana[diasDaSemana["S\u00E1bado"] = 25] = "S\u00E1bado";
    diasDaSemana[diasDaSemana["Domingo"] = 26] = "Domingo";
    diasDaSemana[diasDaSemana["esteEoSete"] = 27] = "esteEoSete";
})(diasDaSemana || (diasDaSemana = {}));
console.log(diasDaSemana.Terça);
