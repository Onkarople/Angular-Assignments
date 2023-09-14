function ChkString(str, word1) {
    var strstrim = str.split(" ");
    console.log(word1);
    for (var word in strstrim) {
        if (strstrim[word] === word1) {
            console.log(" present word Is : " + word1);
            break;
        }
        else {
            console.log("Not present");
        }
    }
}
var string1 = "pune kothrud marvellous infosystems";
var string2 = "marvellous";
ChkString(string1, string2);
