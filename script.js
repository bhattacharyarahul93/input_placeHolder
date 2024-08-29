document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("inputName").addEventListener("focus", () => {
        const nameSpan = document.getElementById("nameSpan");
        nameSpan.style.transform = "translateY(-40px)";
        nameSpan.style.fontSize = "22px";
    })

    document.getElementById("inputName").addEventListener("blur", () => {
        const nameSpan = document.getElementById("nameSpan");
        nameSpan.style.transform = "translateY(-0px)";
        nameSpan.style.fontSize = "28px";

        const nameValue = document.getElementById("inputName").value.length;
        if (nameValue > 0) {
            const nameSpan = document.getElementById("nameSpan");
            nameSpan.style.transform = "translateY(-40px)";
            nameSpan.style.fontSize = "22px";
        }
    })
});
