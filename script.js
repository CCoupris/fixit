

var Quagga = window.Quagga;
var code = 0
var App = {
    _scanner: null,
    init: function() {
        this.attachListeners()
    },
    decode: function(file) {
        Quagga
            .decoder({readers: ['upc_reader','ean_reader']})
            .locator({patchSize: 'large'})
            .fromSource(file, {size: 800})
            .toPromise()
            .then(function(result) {
                //document.querySelector('input.isbn').value = result.codeResult.code
                code = result.codeResult.code
                getAPIdata()
            })
            .catch(function() {
                //document.querySelector('input.isbn').value = "Not Found"
            })
            .then(function() {
                this.attachListeners()
            }.bind(this))
    },
    attachListeners: function() {
        var self = this,
            button = document.querySelector('.button'),
            fileInput = document.querySelector('.input-field input[type=file]')

            button.addEventListener("click", function onClick(e) {
            e.preventDefault()
            button.removeEventListener("click", onClick)
            document.querySelector('.input-field input[type=file]').click()
        })

        fileInput.addEventListener("change", function onChange(e) {
            e.preventDefault()
            fileInput.removeEventListener("change", onChange)
            if (e.target.files && e.target.files.length) {
                self.decode(e.target.files[0])
            }
        })
    }
}
App.init()
const firstpart = document.querySelector('.container')
const secondpart = document.querySelector('.confirmation')
function getAPIdata() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/" // Use a proxy to avoid CORS error
    const api_key = "dak11o3uirjgcd561m0751e5l0y7bl"
    const url = proxyurl + "https://api.barcodelookup.com/v2/products?barcode="+code+"&formatted=y&key=" + api_key
    fetch(url)
            .then(response => response.json())
            .then((data) => {
                //document.getElementById("BarcodeNumber").innerHTML = (data.products[0].barcode_number)
                //document.getElementById("ProductName").innerHTML = (data.products[0].product_name)
                //document.getElementById("Category").innerHTML = (data.products[0].category) 
                nextpart()
                document.querySelector('.item-model') .innerHTML = (data.products[0].product_name)
                localStorage.setItem('type',(data.products[0].product_name))          
            })
            .catch(err => { 
                throw err 
            })
}
function nextpart(){
    firstpart.classList.toggle('invisible')
    secondpart.classList.toggle('invisible')
}