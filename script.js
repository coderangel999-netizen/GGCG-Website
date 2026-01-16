function showContent(type) {
    let content = document.getElementById("content");

    if (type === "contact") {
        content.innerHTML = "<h3>Contact Us</h3><p>You can contact college administration for admissions and queries during office hours.</p>";
    }
    else if (type === "services") {
        content.innerHTML = "<h3>Services</h3><p>College provides library, computer labs, sports facilities and career counseling.</p>";
    }
    else if (type === "info") {
        content.innerHTML = "<h3>College Info</h3><p>GGCG Gojra is a government institution affiliated with higher education authorities.</p>";
    }
    else if (type === "programs") {
        content.innerHTML = "<h3>Programs</h3><p>Intermediate and BS level programs are offered in multiple disciplines.</p>";
    }
}
