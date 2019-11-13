namespace MakeyMakey {
    document.addEventListener("DOMContentLoaded", handleLoad);
    document.addEventListener("keydown", handleKeyDown);

    function handleLoad(): void {
        console.log("Hallo Herr Krach, ich bin eine Konsolenausgabe :)");
        alert("Plug in a MakeyMakey or press W A S D F G to change colors");
    }


    export function handleKeyDown(_event: KeyboardEvent): void {

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

    function changeColor(_color: string): void {
        document.getElementsByTagName("body")[0].id = (_color);
    }

} //clos enamespace