// step 1
const ActivS1 = document.querySelector('.bg1')
const nextS1 = document.querySelector('.bt-next1')
nextS1.addEventListener('click', next1)
ActivS1.style.backgroundColor = 'var(--Light-blue)'
ActivS1.style.color = 'var(--Marine-blue)'
function next1() {
    let Name = document.querySelector('.name')
    let Email = document.querySelector('.email')
    let Phone = document.querySelector('.phone')
    if (Name.value == '') {
        document.querySelector('.erro-name').innerHTML = 'This Fild is required'
        Name.style.border = '1px solid var(--Strawberry-red)'
    } else if (Email.value == '') {
        document.querySelector('.erro-name').innerHTML = ''
        Name.style.border = ''
        document.querySelector('.erro-email').innerHTML = 'This Fild is required'
        Email.style.border = '1px solid var(--Strawberry-red)'
    } else if (Phone.value == '') {
        document.querySelector('.erro-email').innerHTML = ''
        Email.style.border = ''
        document.querySelector('.erro-phone').innerHTML = 'This Fild is required'
        Phone.style.border = '1px solid var(--Strawberry-red)'
    } else {
        ActivS1.style.backgroundColor = ''
        ActivS1.style.color = ''
        ActivS2.style.backgroundColor = 'var(--Light-blue)'
        ActivS2.style.color = 'var(--Marine-blue)'
        document.querySelector('.erro-name').innerHTML = ''
        document.querySelector('.erro-email').innerHTML = ''
        document.querySelector('.erro-phone').innerHTML = ''
        Name.style.border = ''
        Email.style.border = ''
        Phone.style.border = ''
        document.querySelector('.Step1').style.display = 'none'
        document.querySelector('.Step2').style.display = 'block'
        document.querySelector('.bt-next1').style.display = 'none'
        document.querySelector('.Go-Back').style.display = 'block'
        document.querySelector('.bt-next2').style.display = 'block'
    }

}
// step 2
const ArcaSelect = document.querySelector('.Arcade')
ArcaSelect.addEventListener('click', Arcselect)
function Arcselect() {
    ArcaSelect.style.border = '1px solid var(--Purplish-blue)'
    ArcaSelect.style.backgroundColor = 'var(--Magnolia)'
    AdvSelect.style.border = ''
    AdvSelect.style.backgroundColor = ''
    ProSelect.style.border = ''
    ProSelect.style.backgroundColor = ''
}
const AdvSelect = document.querySelector('.Advanced')
AdvSelect.addEventListener('click', Advselect)
function Advselect() {
    AdvSelect.style.border = '1px solid var(--Purplish-blue)'
    AdvSelect.style.backgroundColor = 'var(--Magnolia)'
    ArcaSelect.style.border = ''
    ArcaSelect.style.backgroundColor = ''
    ProSelect.style.border = ''
    ProSelect.style.backgroundColor = ''
}
const ProSelect = document.querySelector('.Pro')
ProSelect.addEventListener('click', Proselect)
function Proselect() {
    ProSelect.style.border = '1px solid var(--Purplish-blue)'
    ProSelect.style.backgroundColor = 'var(--Magnolia)'
    ArcaSelect.style.border = ''
    ArcaSelect.style.backgroundColor = ''
    AdvSelect.style.border = ''
    AdvSelect.style.backgroundColor = ''
}

const btYearly = document.querySelector('.bt-Yearly')
btYearly.addEventListener('click', Yearly)
function Yearly() {
    document.querySelector('.bol').style.float = 'right'
    btYearly.style.color = 'var(--Marine-blue)'
    btMonthly.style.color = 'var(--Cool-gray)'
    document.querySelector('.yrArcade').innerHTML = '$90/yr'
    document.querySelector('.yrTexArcade').innerHTML = '2 months free'
    document.querySelector('.yrAdvanced').innerHTML = '$120/yr'
    document.querySelector('.yrTexAdvanced').innerHTML = '2 months free'
    document.querySelector('.yrPro').innerHTML = '$150/yr'
    document.querySelector('.yrTexPro').innerHTML = '2 months free'
}
const btMonthly = document.querySelector('.bt-Monthly')
btMonthly.addEventListener('click', Monthly)
function Monthly() {
    document.querySelector('.bol').style.float = 'left'
    btYearly.style.color = 'var(--Cool-gray)'
    btMonthly.style.color = 'var(--Marine-blue)'
    document.querySelector('.yrArcade').innerHTML = '$9/mo'
    document.querySelector('.yrTexArcade').innerHTML = ''
    document.querySelector('.yrAdvanced').innerHTML = '$12/mo'
    document.querySelector('.yrTexAdvanced').innerHTML = ''
    document.querySelector('.yrPro').innerHTML = '$15/mo'
    document.querySelector('.yrTexPro').innerHTML = ''
}

const ActivS2 = document.querySelector('.bg2')
const Back = document.querySelector('.Go-Back')
Back.addEventListener('click', GoBack)
function GoBack() {
    ActivS1.style.backgroundColor = 'var(--Light-blue)'
    ActivS1.style.color = 'var(--Marine-blue)'
    ActivS2.style.backgroundColor = ''
    ActivS2.style.color = ''
    document.querySelector('.Step1').style.display = 'block'
    document.querySelector('.Step2').style.display = 'none'
    document.querySelector('.bt-next1').style.display = 'block'
    document.querySelector('.Go-Back').style.display = 'none'
    document.querySelector('.bt-next2').style.display = 'none'
}

const nextS2 = document.querySelector('.bt-next2')
nextS2.addEventListener('click', next2)
function next2() {
    ActivS2.style.backgroundColor = ''
    ActivS2.style.color = ''
    ActivS3.style.backgroundColor = 'var(--Light-blue)'
    ActivS3.style.color = 'var(--Marine-blue)'
    document.querySelector('.Step2').style.display = 'none'
    document.querySelector('.Step3').style.display = 'block'
    document.querySelector('.Go-Back').style.display = 'none'
    document.querySelector('.bt-next2').style.display = 'none'
    document.querySelector('.Go-Back3').style.display = 'block'
    document.querySelector('.bt-next3').style.display = 'block'
}

// step 3
const itenBoxOnline = document.querySelector('.BoxOnline')
const itenOline = document.querySelector('.itenOnline')
itenOline.addEventListener('click', ItenOline)
function ItenOline() {
    if (itenOline.checked == true) {
        itenBoxOnline.style.border = '1px solid var(--Purplish-blue)'
        itenBoxOnline.style.backgroundColor = 'var(--Magnolia)'
        document.querySelector('.NumOnline').innerHTML = '+$10/yr'
    } else {
        itenBoxOnline.style.border = ''
        itenBoxOnline.style.backgroundColor = ''
        document.querySelector('.NumOnline').innerHTML = '+$1/mo'
    }
}

const itenBoxLarger = document.querySelector('.BoxLarger')
const itenLarger = document.querySelector('.itenLarger')
itenLarger.addEventListener('click', ItenLarger)
function ItenLarger() {
    if (itenLarger.checked == true) {
        itenBoxLarger.style.border = '1px solid var(--Purplish-blue)'
        itenBoxLarger.style.backgroundColor = 'var(--Magnolia)'
        document.querySelector('.NumLarger').innerHTML = '+$20/yr'
    } else {
        itenBoxLarger.style.border = ''
        itenBoxLarger.style.backgroundColor = ''
        document.querySelector('.NumLarger').innerHTML = '+$2/mo'
    }
}

const itenBoxCust = document.querySelector('.BoxCust')
const itenCust = document.querySelector('.itenCust')
itenCust.addEventListener('click', ItenCust)
function ItenCust() {
    if (itenCust.checked == true) {
        itenBoxCust.style.border = '1px solid var(--Purplish-blue)'
        itenBoxCust.style.backgroundColor = 'var(--Magnolia)'
        document.querySelector('.NumCust').innerHTML = '+$20/yr'
    } else {
        itenBoxCust.style.border = ''
        itenBoxCust.style.backgroundColor = ''
        document.querySelector('.NumCust').innerHTML = '+$2/mo'
    }
}

const ActivS3 = document.querySelector('.bg3')
const BackS2 = document.querySelector('.Go-Back3')
BackS2.addEventListener('click', GoBack3)
function GoBack3() {
    ActivS2.style.backgroundColor = 'var(--Light-blue)'
    ActivS2.style.color = 'var(--Marine-blue)'
    ActivS3.style.backgroundColor = ''
    ActivS3.style.color = ''
    document.querySelector('.Step2').style.display = 'block'
    document.querySelector('.Step3').style.display = 'none'
    document.querySelector('.Go-Back3').style.display = 'none'
    document.querySelector('.bt-next3').style.display = 'none'
    document.querySelector('.Go-Back').style.display = 'block'
    document.querySelector('.bt-next2').style.display = 'block'
}

const ActivS4 = document.querySelector('.bg4')
const nextS3 = document.querySelector('.bt-next3')
nextS3.addEventListener('click', next3)
function next3() {
    ActivS3.style.backgroundColor = ''
    ActivS3.style.color = ''
    ActivS4.style.backgroundColor = 'var(--Light-blue)'
    ActivS4.style.color = 'var(--Marine-blue)'
    document.querySelector('.Step3').style.display = 'none'
    document.querySelector('.Step4').style.display = 'block'
    document.querySelector('.bt-next3').style.display = 'none'
    document.querySelector('.Go-Back3').style.display = 'none'
    document.querySelector('.Go-Back4').style.display = 'block'
    document.querySelector('.bt-Confirm').style.display = 'block'
}

// step 4
const change = document.querySelector('.btChange')
change.addEventListener('click', btChange)
function btChange() {
    document.querySelector('.btBackChange').style.display = 'block'
    document.querySelector('.btChange').style.display = 'none'
    document.querySelector('.ArcMod').innerHTML = 'Arcade (Yearly)'
    document.querySelector('.ArcNum').innerHTML = '$90/yr'
    document.querySelector('.OnServ').innerHTML = '$10/yr'
    document.querySelector('.LarStor').innerHTML = '$20/yr'
    document.querySelector('.TotMont').innerHTML = '$120/yr'
    document.querySelector('.TotalMY').innerHTML = 'Total (per year)'
}
const Backchange = document.querySelector('.btBackChange')
Backchange.addEventListener('click', btBackChange)
function btBackChange() {
    document.querySelector('.btBackChange').style.display = 'none'
    document.querySelector('.btChange').style.display = 'block'
    document.querySelector('.ArcMod').innerHTML = 'Arcade (Monthly)'
    document.querySelector('.ArcNum').innerHTML = '$9/mo'
    document.querySelector('.OnServ').innerHTML = '$1/mo'
    document.querySelector('.LarStor').innerHTML = '$2/mo'
    document.querySelector('.TotMont').innerHTML = '$12/mo'
    document.querySelector('.TotalMY').innerHTML = 'Total (per month)'
}

const BackS3 = document.querySelector('.Go-Back4')
BackS3.addEventListener('click', GoBack4)
function GoBack4() {
    ActivS3.style.backgroundColor = 'var(--Light-blue)'
    ActivS3.style.color = 'var(--Marine-blue)'
    ActivS4.style.backgroundColor = ''
    ActivS4.style.color = ''
    document.querySelector('.Step3').style.display = 'block'
    document.querySelector('.Step4').style.display = 'none'
    document.querySelector('.bt-next3').style.display = 'block'
    document.querySelector('.Go-Back3').style.display = 'block'
    document.querySelector('.Go-Back4').style.display = 'none'
    document.querySelector('.bt-Confirm').style.display = 'none'
}

const btConfirm = document.querySelector('.bt-Confirm')
btConfirm.addEventListener('click', Confirm)
function Confirm() {
    document.querySelector('.Step4').style.display = 'none'
    document.querySelector('.Step5').style.display = 'block'
    document.querySelector('.bt-BackNext1').style.display = 'none'
    document.querySelector('.Go-Back4').style.display = 'none'
    document.querySelector('.bt-Confirm').style.display = 'none'
}
// end 
// step 5
const btEnd = document.querySelector('.bt-end')
btEnd.addEventListener('click', refresh)
function refresh() {
    window.location.reload(true)
}

// end