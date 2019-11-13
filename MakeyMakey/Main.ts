namespace MakeyMakey {
    document.addEventListener("DOMContentLoaded", handleLoad);
    document.addEventListener("keydown", handleKeyDown);


    function handleLoad(): void {
        console.log("Hello World");
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

        }
    } //handleKeyDown zu

    function changeColor(_color: string): void {
        document.getElementsByTagName("body")[0].id = (_color);

    }

} //clos enamespace