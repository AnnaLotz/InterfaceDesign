var MakeyMakey;
(function (MakeyMakey) {
    document.addEventListener("DOMContentLoaded", handleLoad);
    document.addEventListener("keydown", handleKeyDown);
    function handleLoad() {
        console.log("Hallo Herr Krach, ich bin eine Konsolenausgabe :)");
        alert("Plug in a MakeyMakey or press W A S D F G to change colors");
    }
    function handleKeyDown(_event) {
        switch (_event.keyCode) {
            case 87:
                console.log("W");
                changeColor("one");
                break;
            case 65:
                console.log("A");
                changeColor("two");
                break;
            case 83:
                console.log("S");
                changeColor("three");
                break;
            case 68:
                console.log("D");
                changeColor("four");
                break;
            case 70:
                console.log("F");
                changeColor("five");
                break;
            case 71:
                console.log("G");
                changeColor("six");
                break;
            default:
                break;
        }
    } //handleKeyDown zu
    MakeyMakey.handleKeyDown = handleKeyDown;
    function changeColor(_color) {
        document.getElementsByTagName("body")[0].id = (_color);
    }
})(MakeyMakey || (MakeyMakey = {})); //clos enamespace
//# sourceMappingURL=Main.js.map