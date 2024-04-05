var CurrentDate = new Date()
            var hora = CurrentDate.getHours().toString().padStart(2,'0')
            var minuto = CurrentDate.getMinutes().toString().padStart(2,'0')
            var dia = CurrentDate.getDate().toString().padStart(2,'0')
            var mes = (CurrentDate.getMonth()+1).toString().padStart(2,'0')
            var ano = CurrentDate.getFullYear().toString().padStart(4,'0')
            document.getElementById("hora").value = hora
            document.getElementById("minuto").value = minuto
            document.getElementById("dia").value = dia
            document.getElementById("mes").value = mes
            document.getElementById("ano").value = ano

window.document.getElementById('calcular').addEventListener('click', function () {
    if (window.document.getElementById('show').style.display == 'block') {
        this.innerHTML = " "
    }
const HorAgora = window.document.getElementById("hora").value.toString().padStart(2,'0')
const MinAgora = window.document.getElementById("minuto").value.toString().padStart(2,'0')
const DiaAgora = window.document.getElementById("dia").value.toString().padStart(2,'0')
const MesAgora = window.document.getElementById("mes").value.toString().padStart(2,'0')
const AnoAgora = window.document.getElementById("ano").value.toString()

const agora = new Date(`${AnoAgora}-${MesAgora}-${DiaAgora}T${HorAgora}:${MinAgora}:00`)

const dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]
const diadaSemana = dias[agora.getDay()]

const AgoraFreq = agora.getTime()
const FreqNum = Number(window.document.getElementById('horasInt').value)
const Freq = FreqNum  * 3600000
const NumDias = Number(window.document.getElementById('numdias').value) * 86400000


const limit = AgoraFreq + NumDias
const DataLimite = new Date(limit)
//alert(limit)
//alert (DataLimite)

var limit2 = DataLimite.getTime()


const Intervalos = [`${diadaSemana}, ${DiaAgora}/${MesAgora}/${AnoAgora}, ${HorAgora}:${MinAgora}`]

const IntervNum = Number(window.document.getElementById('IntervalosNum').value)

var CalcTest = ((limit2 - AgoraFreq) / 3600000) / FreqNum


//alert(IntervNum)

var QuantosIntervalos = function Test () {
    if (NumDias == 0) {
        return IntervNum 
    } else if (IntervNum == 0) {
        return CalcTest
    }
}

var TestFor = function () {
    if (NumDias == 0) {
        return i < IntervNum
    } else if (IntervNum == 0) {
        return i <= CalcTest
    } else if (NumDias != 0 && IntervNum != 0) {
        return i < IntervNum
    }
}


//((limit2 - AgoraFreq) / 3600000) / FreqNum



if (FreqNum == 0) {
    window.document.getElementById('show').innerHTML = 'Por favor, preencha o campo obrigatório!'
    window.document.getElementById('show').style.color = 'red'
    window.document.getElementById('horasInt').style.borderColor = 'red'
} else {

for (var i = 1; TestFor() ; i ++) {

    const teste = AgoraFreq + Freq * i
    const data = new Date(teste)
    const minFor = data.getMinutes().toString().padStart(2,'0')
    const horaFor = data.getHours().toString().padStart(2,'0')
    const diaFor = data.getDate().toString().padStart(2,'0')
    const mesFor = (data.getMonth()+1).toString().padStart(2,'0')
    const yearFor = data.getFullYear()
    const semanaFor = dias[data.getDay()]
    const Intervalo = `${semanaFor}, ${diaFor}/${mesFor}/${yearFor}, ${horaFor}:${minFor }`
    Intervalos.push(Intervalo)
    
    
    }

    const ul = `<ul>${Intervalos.map(Intervalos =>
        `<li>${Intervalos}</li>`).join('')}
              </ul>`;

    window.document.getElementById('show').innerHTML = ul

   
    window.document.getElementById('show').style.color = 'inherit'
    window.document.getElementById('horasInt').style.borderColor = 'inherit'
    
    

    //window.document.getElementById('show').style.display = 'block'
    //window.document.getElementById('show').innerHTML = `${list}`

    //let str =  Intervalos.join("<br> ")
   // window.document.getElementById('show').innerHTML = str
}




    
})

window.document.getElementById('horasInt').addEventListener('input', function() {
    this.style.borderColor = 'inherit'
})

