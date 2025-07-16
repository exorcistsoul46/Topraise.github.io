document.addEventListener("DOMContentLoaded", function () {
    let heyBtn = document.getElementById("heyBtn");
    let revealBtn = document.getElementById("revealBtn");
    let finalMessage = document.getElementById("finalMessage");

    // Function to handle button click or tap
    function goToPage(url) {
        window.location.href = url;
    }

    // Redirect to second page when "Hey" button is clicked (Works for Touch & Click)
    if (heyBtn) {
        heyBtn.addEventListener("click", () => goToPage("revel.html"));
        heyBtn.addEventListener("touchstart", () => goToPage("revel.html"));
    }

    // Redirect to third page when "Reveal" button is clicked (Works for Touch & Click)
    if (revealBtn) {
        revealBtn.addEventListener("click", () => goToPage("final.html"));
        revealBtn.addEventListener("touchstart", () => goToPage("final.html"));
    }

    // Typing effect for final message on third page
    if (finalMessage) {
        setTimeout(() => {  // 🟢 2-second delay before typing starts
            let message = "Pata nahi kyoon mujhe yeh kehna chahiye ki nahi,
lekin log kehte hain ki koi bhi baat apne andar nahi rakhni chahiye.

Pata nahi kyoon, lekin main tumhe dheere-dheere pasand karne laga hoon.
Aur tum pehle se hi meri pasandida Aurat ho — shayad isiliye.

Tum meri priyatama ho. Main yeh tumhe batane ke liye likh raha hoon
ki mere paas tumse koi sawaal nahi hai jiska tum mujhe jawaab do.

Tum mere uss sawaal ki tarah ho jiska koi matlab nahi hota,
aur main bhi ussi tarah tumhe chahta hoon. Main tumhe pasand karta hoon...
tumhe nahi pata.

--------- I Love You As A Friend";
            let i = 0;
            let speed = 150; // Adjusted speed for better visibility

            function typeWriter() {
                if (i < message.length) {
                    finalMessage.innerHTML += message.charAt(i); // Letter-by-letter effect
                    i++;
                    setTimeout(typeWriter, speed);
                }
            }

            typeWriter(); // Start typing effect
        }, 2000);
    }
});

