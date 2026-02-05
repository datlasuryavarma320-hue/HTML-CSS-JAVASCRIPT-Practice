

    // This is the Pratice2.html Code
    // Start
    let imageElement = document.getElementById("image");
    let imageWidthElement = document.getElementById("imageWidth");
    let warningMessage = document.getElementById("warningMessage");

    let maxImageWidth = 300;
    let minImageWidth = 100;
    let OriginalImageWidth = 150;
    let maxwarningMessage = "Too big. Decrease the size of the Image.";
    let minwarningMessage = "Can't Visible. Increase the size of the Image.";

    imageElement.style.width = OriginalImageWidth + "px";
    imageWidthElement.textContent = OriginalImageWidth + "px";

        function onIncrement() {
            if (OriginalImageWidth >= maxImageWidth) {
                warningMessage.textContent = maxwarningMessage;
            } else {
                OriginalImageWidth += 5;
                let UpdatedImageWidth = OriginalImageWidth + "px";
                warningMessage.textContent = "";
                
                imageWidthElement.textContent = UpdatedImageWidth;
                imageElement.style.width = UpdatedImageWidth;
            }
        }

        function onDecrement() {
            if (OriginalImageWidth <= minImageWidth) {
                warningMessage.textContent = minwarningMessage;
            } else {
                OriginalImageWidth -= 5;
                let UpdatedImageWidth = OriginalImageWidth + "px";
                warningMessage.textContent = "";
                
                imageWidthElement.textContent = UpdatedImageWidth;
                imageElement.style.width = UpdatedImageWidth;
            }
        }


        let myArr = [ 1, 2, 'six', 4, 4.567];
        myArr[2] = 3;
        myArr.push(true,false,4,453,363,636,36,63,636,36,'six');
        console.log(myArr);
        let lengthOfArr = myArr.length
        console.log(lengthOfArr);
        console.log(myArr[3]);
        let lastitemArr = myArr.pop();
        console.log(myArr);
        console.log(lastitemArr);

        let h1Element = document.createElement('h1');
        h1Element.textContent = "web technologies";
         
        let containerElement = document.getElementById("myContainer")
        console.log(h1Element);
        containerElement.appendChild(h1Element);

        let removeStylesBtnElement = document.createElement('button');
        removeStylesBtnElement.textContent = "remove styles";
        
        containerElement.appendChild(removeStylesBtnElement);
        
        removeStylesBtnElement.onclick = function(){
            h1Element.classList.remove("heading");
        }


        let buttonElement = document.createElement('button');
        buttonElement.onclick = function() {
            if ( h1Element.textContent === "web technologies") {
            h1Element.textContent = "4.0 techologies";
            h1Element.classList.add("heading");
            } else {
            h1Element.textContent = "web technologies";
            }
        }
        buttonElement.textContent = "Change Heading"
        containerElement.appendChild(buttonElement);

        let pElement = document.createElement('p');
        
        pElement.textContent = "This is a Helper text";
        
        console.log(pElement);

        document.getElementById("myContainer").appendChild(pElement);
        
        pElement.onclick = function() {
            pElement.classList.add("helper-p");
            console.log(pElement)
        }

    

    


    // End


let arr = [1,2,3,4,5,true,"surya",8,9,10]

console.log(arr[6]);

arr[5] = 6;

console.log(arr);

console.log(arr.length);

let myarr = arr.push(11);

console.log(arr);

myarr = arr.pop();

console.log(arr);

function MyShowMessage () {
    console.log("Hello!")
}

MyShowMessage ();

let showMessage = function() {
        console.log("Hi")
}

showMessage();



