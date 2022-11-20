let btnConvert = document.getElementById("btnOk")
var shit = document.getElementById('shit');
const selectOne = document.getElementById("select1")
const selectTwo = document.getElementById("select2")
const requestURL = 'https://api.exchangerate.host'

//console.log(date.value)
btnConvert.addEventListener("click", () => {

   axios.get(`${requestURL}/${date.value}`, {
         params: {
            symbols: selectOne.value,
            base: selectTwo.value,
            date: date.value
         }
      })
      .then(function (response) {

         output.innerText = response.data.rates[selectOne.value]
      })
      .catch(function (error) {

         console.log(error)
      })

}, )