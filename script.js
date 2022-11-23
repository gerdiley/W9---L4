// creo classe Abbigliamento
var Abbigliamento = /** @class */ (function () {
    function Abbigliamento(_id, _codprod, _collezione, _capo, _modello, _quantita, _colore, _prezzoivaesclusa, _prezzoivainclusa, _disponibile, _saldo) {
        this.id = _id;
        this.codprod = _codprod;
        this.collezione = _collezione;
        this.capo = _capo;
        this.modello = _modello;
        this.quantita = _quantita;
        this.colore = _colore;
        this.prezzoivaesclusa = _prezzoivaesclusa;
        this.prezzoivainclusa = _prezzoivainclusa;
        this.disponibile = _disponibile;
        this.saldo = _saldo;
    }
    Abbigliamento.prototype.getsaldocapo = function () {
        var s = (this.prezzoivaesclusa * this.saldo) / 100;
        return s;
    };
    Abbigliamento.prototype.getacquistocapo = function () {
        var p = this.prezzoivainclusa - this.getsaldocapo();
        return p;
    };
    return Abbigliamento;
}());
fetch("http://localhost:3000/abbigliamento")
    .then(function (res) { return res.json(); })
    .then(function (data) {
    console.log(data);
    var array = data.map(function (e) {
        var articolo = new Abbigliamento(e.id, e.codprod, e.collezione, e.capo, e.modello, e.quantita, e.colore, e.prezzoivaesclusa, e.prezzoivainclusa, e.disponibile, e.saldo);
        document.getElementById('tabella').innerHTML += "<tr>\n            <td>".concat(articolo.id, "</td>\n            <td>").concat(articolo.codprod, "</td>\n            <td>").concat(articolo.collezione, "</td>\n            <td>").concat(articolo.capo, "</td>\n            <td>").concat(articolo.modello, "</td>\n            <td>").concat(articolo.quantita, "</td>\n            <td>").concat(articolo.colore, "</td>\n            <td>").concat(articolo.prezzoivaesclusa, "</td>\n            <td>").concat(articolo.prezzoivaesclusa, "</td>\n            <td>").concat(articolo.disponibile, "</td>\n            <td>").concat(articolo.saldo, "</td>\n        </tr>");
        console.log(articolo);
        console.log("Questo articolo \u00E8 un ".concat(articolo.capo, ", costa ").concat(articolo.getacquistocapo(), " applicando il ").concat(articolo.saldo, "% di sconto"));
    });
});
