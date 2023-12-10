 function concat(arr) {
        let result = "";
        for (let i = 0; i < arr.length; i++) {
            result += arr[i];
        }
        return result;
    }
    let stringArray = ["Johnny", "DeeDee", "Joey", "Marky"];
    document.write("<h2>Concatenated String:</h2>");
    document.write("<p>" + concat(stringArray) + "</p>");
