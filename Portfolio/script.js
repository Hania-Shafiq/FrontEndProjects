var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    // Remove "active-link" class from all tab links
    for (var tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    // Remove "active-tab" class from all tab contents
    for (var tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    // Add "active-link" to the clicked tab link
    event.currentTarget.classList.add("active-link");

    // Add "active-tab" to the corresponding tab content
    document.getElementById(tabname).classList.add("active-tab");
}

