

// creo classe Abbigliamento

class Abbigliamento implements fetchData {
    constructor(
        _id: number,
        _codprod: number,
        _collezione: string,
        _capo: string,
        _modello: number,
        _quantita: number,
        _colore: string,
        _prezzoivaesclusa: number,
        _prezzoivainclusa: number,
        _disponibile: string,
        _saldo: number
    ) {
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
    id: number;
    codprod: number;
    collezione: string;
    capo: string;
    modello: number;
    quantita: number;
    colore: string;
    prezzoivaesclusa: number;
    prezzoivainclusa: number;
    disponibile: string;
    saldo: number;

    getsaldocapo(): number {
        let s = (this.prezzoivaesclusa * this.saldo) / 100;
        return s;
    }
    getacquistocapo(): number {
        let p = this.prezzoivainclusa - this.getsaldocapo();
        return p;
    }
}

interface fetchData {
    id: number;
    codprod: number;
    collezione: string;
    capo: string;
    modello: number;
    quantita: number;
    colore: string;
    prezzoivaesclusa: number;
    prezzoivainclusa: number;
    disponibile: string;
    saldo: number;
}

fetch("http://localhost:3000/abbigliamento")
    .then((res) => res.json())
    .then((data: fetchData[]) => {
        console.log(data);

        var array = data.map((e) => {
            let articolo = new Abbigliamento(
                e.id,
                e.codprod,
                e.collezione,
                e.capo,
                e.modello,
                e.quantita,
                e.colore,
                e.prezzoivaesclusa,
                e.prezzoivainclusa,
                e.disponibile,
                e.saldo
            );

            document.getElementById('tabella')!.innerHTML += `<tr>
            <td>${articolo.id}</td>
            <td>${articolo.codprod}</td>
            <td>${articolo.collezione}</td>
            <td>${articolo.capo}</td>
            <td>${articolo.modello}</td>
            <td>${articolo.quantita}</td>
            <td>${articolo.colore}</td>
            <td>${articolo.prezzoivaesclusa}</td>
            <td>${articolo.prezzoivaesclusa}</td>
            <td>${articolo.disponibile}</td>
            <td>${articolo.saldo}</td>
        </tr>`;

            console.log(articolo);
            console.log(
                `Questo articolo è un ${articolo.capo
                }, costa ${articolo.getacquistocapo()} applicando il ${articolo.saldo
                }% di sconto`
            );
        });
    });
