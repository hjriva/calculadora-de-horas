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
const HorAgora = window.document.getElementById("hora").value.toString().padStart(2,'0')
const MinAgora = window.document.getElementById("minuto").value.toString().padStart(2,'0')
const DiaAgora = window.document.getElementById("dia").value.toString().padStart(2,'0')
const MesAgora = window.document.getElementById("mes").value.toString().padStart(2,'0')
const AnoAgora = window.document.getElementById("ano").value.toString()
const agora = new Date(`${AnoAgora}-${MesAgora}-${DiaAgora}T${HorAgora}:${MinAgora}:00`)

const AgoraFreq = agora.getTime()
const Freq = Number(window.document.getElementById('horasInt').value) * 3600000
const NumDias = Number(window.document.getElementById('numdias').value) * 86400000


const limit = AgoraFreq + NumDias
const DataLimite = new Date(limit)
//alert(limit)
//alert (DataLimite)

const Intervalos = []



    




    
})