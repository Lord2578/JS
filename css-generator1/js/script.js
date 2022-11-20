let box = document.getElementById("box")
//Widht-Height
let rangeWidth = document.getElementById("rangeWidth")
let widthText = document.getElementById("widthText")

let rangeHeight = document.getElementById("rangeHeight")
let heightText = document.getElementById("heightText")

let code = document.getElementById("code")
let btnCopy = document.getElementById("btnCopy")

//Border-Radius
let TopLeft = document.getElementById ("TopLeft")
let TopLeftText = document.getElementById ("TopLeftText")

let TopRight = document.getElementById ("TopRight")
let TopRightText = document.getElementById ("TopRightText")

let BottomRight = document.getElementById ("BottomRight")
let BottomRightText = document.getElementById ("BottomRightText")

let BottomLeft = document.getElementById ("BottomLeft")
let BottomLeftText = document.getElementById ("BottomLeftText")

let Size = document.getElementById ("Size")
let SizeText = document.getElementById ("SizeText")

//Box Shadow
let Horizontal = document.getElementById ("Horizontal")
let HorizontalText = document.getElementById ("HorizontalText")

let Vertical = document.getElementById ("Vertical")
let VerticalText = document.getElementById ("VerticalText")

let Blur = document.getElementById ("Blur")
let BlurText = document.getElementById ("BlurText")

let Spread = document.getElementById ("Spread")
let SpreadText = document.getElementById ("SpreadText")

let Color = document.getElementById ("Color")

let boxy = document.getElementById ("boxy")

let ColorBox = document.getElementById ("ColorBox")

let ColorBack = document.getElementById ("ColorBack")

let BorderColor = document.getElementById ("BorderColor")

let Scale = document.getElementById ("Scale")
let ScaleText = document.getElementById ("ScaleText")

let Rotate = document.getElementById ("Rotate")
let RotateText = document.getElementById ("RotateText")







//Widht
rangeWidth.oninput = function() {
    // console.log(rangeWidth.value)

    box.style.width = rangeWidth.value + "px"
    widthText.value = rangeWidth.value

    code.innerText = ` 
    height: ${rangeHeight.value}px;
    width: ${rangeWidth.value}px;
    border: ${Size.value}px solid ${BorderColor.value};
    border-radius: ${TopLeft.value}px; ${TopRight.value}px; ${BottomRight.value}px; ${BottomLeft.value}px;
    box-shadow: ${Horizontal.value}px;  ${Vertical.value}px; ${Blur.value}px; ${Spread.value}px; ${Color.value}px;
    box-color: ${ColorBack.value};
    box-background: ${ColorBox.value};
    scale: ${Scale.value};
    rotate: ${Rotate.value}deg;`
}
widthText.oninput = function () {
    rangeWidth.value = widthText.value

    box.style.width = rangeWidth.value + "px"
    // widthText.value = rangeWidth.value

    code.innerText = ` 
    height: ${rangeHeight.value}px;
    width: ${rangeWidth.value}px;
    border: ${Size.value}px solid ${BorderColor.value};
    border-radius: ${TopLeft.value}px; ${TopRight.value}px; ${BottomRight.value}px; ${BottomLeft.value}px;
    box-shadow: ${Horizontal.value}px;  ${Vertical.value}px; ${Blur.value}px; ${Spread.value}px; ${Color.value}px;
    box-color: ${ColorBack.value};
    box-background: ${ColorBox.value};
    scale: ${Scale.value};
    rotate: ${Rotate.value}deg;`
}
//Height
rangeHeight.oninput = function() {
    box.style.height = rangeHeight.value + "px"
    heightText.value = rangeHeight.value

    code.innerText = ` 
    height: ${rangeHeight.value}px;
    width: ${rangeWidth.value}px;
    border: ${Size.value}px solid ${BorderColor.value};
    border-radius: ${TopLeft.value}px; ${TopRight.value}px; ${BottomRight.value}px; ${BottomLeft.value}px;
    box-shadow: ${Horizontal.value}px;  ${Vertical.value}px; ${Blur.value}px; ${Spread.value}px; ${Color.value}px;
    box-color: ${ColorBack.value};
    box-background: ${ColorBox.value};
    scale: ${Scale.value};
    rotate: ${Rotate.value}deg;`
    
}
heightText.oninput = function() {
    rangeHeight.value = heightText.value

    box.style.height = rangeHeight.value + "px"
    // widthText.value = rangeHeight.value

    code.innerText = ` 
    height: ${rangeHeight.value}px;
    width: ${rangeWidth.value}px;
    border: ${Size.value}px solid ${BorderColor.value};
    border-radius: ${TopLeft.value}px; ${TopRight.value}px; ${BottomRight.value}px; ${BottomLeft.value}px;
    box-shadow: ${Horizontal.value}px;  ${Vertical.value}px; ${Blur.value}px; ${Spread.value}px; ${Color.value}px;
    box-color: ${ColorBack.value};
    box-background: ${ColorBox.value};
    scale: ${Scale.value};
    rotate: ${Rotate.value}deg;`
}
//RangeWidht-TopLeft heightText-TopLeftText
//Border-Radius
TopLeft.oninput = function () {
    box.style.borderTopLeftRadius = TopLeft.value + "px"
    TopLeftText.value = TopLeft.value

    code.innerText = ` 
    height: ${rangeHeight.value}px;
    width: ${rangeWidth.value}px;
    border: ${Size.value}px solid ${BorderColor.value};
    border-radius: ${TopLeft.value}px; ${TopRight.value}px; ${BottomRight.value}px; ${BottomLeft.value}px;
    box-shadow: ${Horizontal.value}px;  ${Vertical.value}px; ${Blur.value}px; ${Spread.value}px; ${Color.value}px;
    box-color: ${ColorBack.value};
    box-background: ${ColorBox.value};
    scale: ${Scale.value};
    rotate: ${Rotate.value}deg;`
}
TopRight.oninput = function () {
    box.style.borderTopRightRadius = TopRight.value + "px"
    TopRightText.value = TopRight.value

    code.innerText = ` 
    height: ${rangeHeight.value}px;
    width: ${rangeWidth.value}px;
    border: ${Size.value}px solid ${BorderColor.value};
    border-radius: ${TopLeft.value}px; ${TopRight.value}px; ${BottomRight.value}px; ${BottomLeft.value}px;
    box-shadow: ${Horizontal.value}px;  ${Vertical.value}px; ${Blur.value}px; ${Spread.value}px; ${Color.value}px;
    box-color: ${ColorBack.value};
    box-background: ${ColorBox.value};
    scale: ${Scale.value};
    rotate: ${Rotate.value}deg;`
}
BottomLeft.oninput = function () {
    box.style.borderBottomLeftRadius = BottomLeft.value + "px"
    BottomLeftText.value = BottomLeft.value

    code.innerText = ` 
    height: ${rangeHeight.value}px;
    width: ${rangeWidth.value}px;
    border: ${Size.value}px solid ${BorderColor.value};
    border-radius: ${TopLeft.value}px; ${TopRight.value}px; ${BottomRight.value}px; ${BottomLeft.value}px;
    box-shadow: ${Horizontal.value}px;  ${Vertical.value}px; ${Blur.value}px; ${Spread.value}px; ${Color.value}px;
    box-color: ${ColorBack.value};
    box-background: ${ColorBox.value};
    scale: ${Scale.value};
    rotate: ${Rotate.value}deg;`
}
BottomRight.oninput = function () {
    box.style.borderBottomRightRadius = BottomRight.value + "px"
    BottomRightText.value = BottomRight.value

    code.innerText = ` 
    height: ${rangeHeight.value}px;
    width: ${rangeWidth.value}px;
    border: ${Size.value}px solid ${BorderColor.value};
    border-radius: ${TopLeft.value}px; ${TopRight.value}px; ${BottomRight.value}px; ${BottomLeft.value}px;
    box-shadow: ${Horizontal.value}px;  ${Vertical.value}px; ${Blur.value}px; ${Spread.value}px; ${Color.value}px;
    box-color: ${ColorBack.value};
    box-background: ${ColorBox.value};
    scale: ${Scale.value};
    rotate: ${Rotate.value}deg;`
}
Size.oninput = function () {
    box.style.border = `${Size.value}px solid`
    SizeText.value = Size.value

    code.innerText = ` 
    height: ${rangeHeight.value}px;
    width: ${rangeWidth.value}px;
    border: ${Size.value}px solid ${BorderColor.value};
    border-radius: ${TopLeft.value}px; ${TopRight.value}px; ${BottomRight.value}px; ${BottomLeft.value}px;
    box-shadow: ${Horizontal.value}px;  ${Vertical.value}px; ${Blur.value}px; ${Spread.value}px; ${Color.value}px;
    box-color: ${ColorBack.value};
    box-background: ${ColorBox.value};
    scale: ${Scale.value};
    rotate: ${Rotate.value}deg;`
}

//=========================================================================
TopLeftText.oninput = function () {
    box.style.borderTopLeftRadius = TopLeft.value + "px"
    TopLeft.value = TopLeftText.value

    code.innerText = ` 
    height: ${rangeHeight.value}px;
    width: ${rangeWidth.value}px;
    border: ${Size.value}px solid ${BorderColor.value};
    border-radius: ${TopLeft.value}px; ${TopRight.value}px; ${BottomRight.value}px; ${BottomLeft.value}px;
    box-shadow: ${Horizontal.value}px;  ${Vertical.value}px; ${Blur.value}px; ${Spread.value}px; ${Color.value}px;
    box-color: ${ColorBack.value};
    box-background: ${ColorBox.value};
    scale: ${Scale.value};
    rotate: ${Rotate.value}deg;`
}
TopRightText.oninput = function () {
    box.style.borderTopRightRadius = TopRight.value + "px"
    TopRight.value = TopRightText.value

    code.innerText = ` 
    height: ${rangeHeight.value}px;
    width: ${rangeWidth.value}px;
    border: ${Size.value}px solid ${BorderColor.value};
    border-radius: ${TopLeft.value}px; ${TopRight.value}px; ${BottomRight.value}px; ${BottomLeft.value}px;
    box-shadow: ${Horizontal.value}px;  ${Vertical.value}px; ${Blur.value}px; ${Spread.value}px; ${Color.value}px;
    box-color: ${ColorBack.value};
    box-background: ${ColorBox.value};
    scale: ${Scale.value};
    rotate: ${Rotate.value}deg;`
}
BottomLeftText.oninput = function () {
    box.style.borderBottomLeftRadius = BottomLeft.value + "px"
    BottomLeft.value = BottomLeftText.value

    code.innerText = ` 
    height: ${rangeHeight.value}px;
    width: ${rangeWidth.value}px;
    border: ${Size.value}px solid ${BorderColor.value};
    border-radius: ${TopLeft.value}px; ${TopRight.value}px; ${BottomRight.value}px; ${BottomLeft.value}px;
    box-shadow: ${Horizontal.value}px;  ${Vertical.value}px; ${Blur.value}px; ${Spread.value}px; ${Color.value}px;
    box-color: ${ColorBack.value};
    box-background: ${ColorBox.value};
    scale: ${Scale.value};
    rotate: ${Rotate.value}deg;`
     
}
BottomRightText.oninput = function () {
    box.style.borderBottomRightRadius = BottomRight.value + "px"
    BottomRight.value = BottomRightText.value

    code.innerText = ` 
    height: ${rangeHeight.value}px;
    width: ${rangeWidth.value}px;
    border: ${Size.value}px solid ${BorderColor.value};
    border-radius: ${TopLeft.value}px; ${TopRight.value}px; ${BottomRight.value}px; ${BottomLeft.value}px;
    box-shadow: ${Horizontal.value}px;  ${Vertical.value}px; ${Blur.value}px; ${Spread.value}px; ${Color.value}px;
    box-color: ${ColorBack.value};
    box-background: ${ColorBox.value};
    scale: ${Scale.value};
    rotate: ${Rotate.value}deg;`
}
SizeText.oninput = function () {
    box.style.border = `${Size.value}px solid`
    Size.value = SizeText.value

    code.innerText = ` 
    height: ${rangeHeight.value}px;
    width: ${rangeWidth.value}px;
    border: ${Size.value}px solid ${BorderColor.value};
    border-radius: ${TopLeft.value}px; ${TopRight.value}px; ${BottomRight.value}px; ${BottomLeft.value}px;
    box-shadow: ${Horizontal.value}px;  ${Vertical.value}px; ${Blur.value}px; ${Spread.value}px; ${Color.value}px;
    box-color: ${ColorBack.value};
    box-background: ${ColorBox.value};
    scale: ${Scale.value};
    rotate: ${Rotate.value}deg;`
}


// Box-Shadow
Horizontal.oninput = Vertical.oninput = Blur.oninput = Spread.oninput = Color.oninput = function () {
    box.style.boxShadow = `${Horizontal.value}px ${Vertical.value}px ${Blur.value}px ${Spread.value}px ${Color.value}`
    HorizontalText.value = Horizontal.value;
    VerticalText.value = Vertical.value;
    BlurText.value = Blur.value;
    SpreadText.value = Spread.value;

    code.innerText = ` 
    height: ${rangeHeight.value}px;
    width: ${rangeWidth.value}px;
    border: ${Size.value}px solid ${BorderColor.value};
    border-radius: ${TopLeft.value}px; ${TopRight.value}px; ${BottomRight.value}px; ${BottomLeft.value}px;
    box-shadow: ${Horizontal.value}px;  ${Vertical.value}px; ${Blur.value}px; ${Spread.value}px; ${Color.value}px;
    box-color: ${ColorBack.value};
    box-background: ${ColorBox.value};
    scale: ${Scale.value};
    rotate: ${Rotate.value}deg;`
}

HorizontalText.oninput = VerticalText.oninput = BlurText.oninput = SpreadText.oninput = Color.oninput = function () {
    box.style.boxShadow = `${Horizontal.value}px ${Vertical.value}px ${Blur.value}px ${Spread.value}px ${Color.value} `
    Horizontal.value = HorizontalText.value;
    Vertical.value = VerticalText.value;
    Blur.value = BlurText.value;
    Spread.value = SpreadText.value;

    code.innerText = ` 
    height: ${rangeHeight.value}px;
    width: ${rangeWidth.value}px;
    border: ${Size.value}px solid ${BorderColor.value};
    border-radius: ${TopLeft.value}px; ${TopRight.value}px; ${BottomRight.value}px; ${BottomLeft.value}px;
    box-shadow: ${Horizontal.value}px;  ${Vertical.value}px; ${Blur.value}px; ${Spread.value}px; ${Color.value}px;
    box-color: ${ColorBack.value};
    box-background: ${ColorBox.value};
    scale: ${Scale.value};
    rotate: ${Rotate.value}deg;`
}



ColorBack.oninput = function () {
    box.style.backgroundColor = `${ColorBack.value}`


    code.innerText = ` 
    height: ${rangeHeight.value}px;
    width: ${rangeWidth.value}px;
    border: ${Size.value}px solid ${BorderColor.value};
    border-radius: ${TopLeft.value}px; ${TopRight.value}px; ${BottomRight.value}px; ${BottomLeft.value}px;
    box-shadow: ${Horizontal.value}px;  ${Vertical.value}px; ${Blur.value}px; ${Spread.value}px; ${Color.value}px;
    box-color: ${ColorBack.value};
    box-background: ${ColorBox.value};
    scale: ${Scale.value};
    rotate: ${Rotate.value}deg;`
}

ColorBox.oninput = function () {
    boxy.style.backgroundColor = `${ColorBox.value}`


    code.innerText = ` 
    height: ${rangeHeight.value}px;
    width: ${rangeWidth.value}px;
    border: ${Size.value}px solid ${BorderColor.value};
    border-radius: ${TopLeft.value}px; ${TopRight.value}px; ${BottomRight.value}px; ${BottomLeft.value}px;
    box-shadow: ${Horizontal.value}px;  ${Vertical.value}px; ${Blur.value}px; ${Spread.value}px; ${Color.value}px;
    box-color: ${ColorBack.value};
    box-background: ${ColorBox.value};
    scale: ${Scale.value};
    rotate: ${Rotate.value}deg;`
}

BorderColor.oninput = function () {
    box.style.borderColor = `${BorderColor.value}`


    code.innerText = ` 
    height: ${rangeHeight.value}px;
    width: ${rangeWidth.value}px;
    border: ${Size.value}px solid ${BorderColor.value};
    border-radius: ${TopLeft.value}px; ${TopRight.value}px; ${BottomRight.value}px; ${BottomLeft.value}px;
    box-shadow: ${Horizontal.value}px;  ${Vertical.value}px; ${Blur.value}px; ${Spread.value}px; ${Color.value}px;
    box-color: ${ColorBack.value};
    box-background: ${ColorBox.value};
    scale: ${Scale.value};
    rotate: ${Rotate.value}deg;`
}


Scale.oninput = function () {
    box.style.scale = `${Scale.value}`
    ScaleText.value = Scale.value

    code.innerText = ` 
    height: ${rangeHeight.value}px;
    width: ${rangeWidth.value}px;
    border: ${Size.value}px solid ${BorderColor.value};
    border-radius: ${TopLeft.value}px; ${TopRight.value}px; ${BottomRight.value}px; ${BottomLeft.value}px;
    box-shadow: ${Horizontal.value}px;  ${Vertical.value}px; ${Blur.value}px; ${Spread.value}px; ${Color.value}px;
    box-color: ${ColorBack.value};
    box-background: ${ColorBox.value};
    scale: ${Scale.value};
    rotate: ${Rotate.value}deg;`
}

Rotate.oninput = function () {
    box.style.rotate = Rotate.value + "deg"
    RotateText.value = Rotate.value

    code.innerText = ` 
    height: ${rangeHeight.value}px;
    width: ${rangeWidth.value}px;
    border: ${Size.value}px solid ${BorderColor.value};
    border-radius: ${TopLeft.value}px; ${TopRight.value}px; ${BottomRight.value}px; ${BottomLeft.value}px;
    box-shadow: ${Horizontal.value}px;  ${Vertical.value}px; ${Blur.value}px; ${Spread.value}px; ${Color.value}px;
    box-color: ${ColorBack.value};
    box-background: ${ColorBox.value};
    scale: ${Scale.value};
    rotate: ${Rotate.value}deg;`
}




