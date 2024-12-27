const qr = new QRCode(document.querySelector(".qrcode"))

qr.makeCode("I hope you scanned this securely...")

function generateQr(e) {
    e.preventDefault()

    const val = document.querySelector("input").value

    if (val.trim() === "") {
        alert("Input field cannot be blank!")
    } else {
        qr.makeCode(val)
    }
}

document
    .querySelector('form')
    .addEventListener('submit', generateQr)