const qr = new QRCode(document.querySelector(".qrcode"))

qr.makeCode("I hope you scanned this securely...")

function generateQr() {
    const val = document.querySelector("input").value

    if (val.trim() === "") {
        alert("Input field cannot be blank!")
    } else {
        qr.makeCode(val)
    }
}