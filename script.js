document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       NAVBAR - EFEITO AO ROLAR
    ===================================================== */

    const navbar = document.querySelector(".navbar");

    function updateNavbar() {
        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", updateNavbar);

    updateNavbar();


    /* =====================================================
       MENU ATIVO CONFORME A SEÇÃO
    ===================================================== */

    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    function updateActiveLink() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === `#${currentSection}`) {
                link.classList.add("active");
            }

        });
    }

    window.addEventListener("scroll", updateActiveLink);

    updateActiveLink();


    /* =====================================================
       SCROLL SUAVE
    ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });


            /* Fecha o menu mobile */

            const menu = document.querySelector("#menu");

            if (
                menu &&
                menu.classList.contains("show")
            ) {

                const bsCollapse =
                    bootstrap.Collapse.getInstance(menu);

                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }

        });

    });


    /* =====================================================
       ANIMAÇÃO DAS SEÇÕES
    ===================================================== */

    const elementsToReveal = document.querySelectorAll(
        "section:not(.hero), .card, .experience-item, form"
    );

    elementsToReveal.forEach(element => {
        element.classList.add("reveal");
    });


    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );


    elementsToReveal.forEach(element => {
        observer.observe(element);
    });


    /* =====================================================
       EFEITO DE DIGITAÇÃO
    ===================================================== */

    const subtitle = document.querySelector(".hero h2");

    if (subtitle) {

        const originalText = subtitle.textContent;

        subtitle.textContent = "";

        let index = 0;

        function typeText() {

            if (index < originalText.length) {

                subtitle.textContent += originalText.charAt(index);

                index++;

                setTimeout(typeText, 35);

            }

        }

        setTimeout(typeText, 500);
    }


    /* =====================================================
       EFEITO DE TILT NA FOTO
    ===================================================== */

    const profile = document.querySelector(".profile");

    if (profile && window.innerWidth > 768) {

        profile.addEventListener("mousemove", event => {

            const rect = profile.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -6;

            const rotateY =
                ((x - centerX) / centerX) * 6;

            profile.style.transform =
                `perspective(600px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 scale(1.03)`;

        });


        profile.addEventListener("mouseleave", () => {

            profile.style.transform =
                "perspective(600px) rotateX(0) rotateY(0) scale(1)";

        });

    }


    /* =====================================================
       FEEDBACK DO FORMULÁRIO
    ===================================================== */

    const form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", event => {

            event.preventDefault();

            const button =
                form.querySelector(
                    'button[type="submit"], input[type="submit"]'
                );

            if (button) {

                const originalText =
                    button.textContent ||
                    button.value;

                if (button.tagName === "BUTTON") {

                    button.textContent =
                        "Mensagem enviada ✓";

                } else {

                    button.value =
                        "Mensagem enviada ✓";

                }

                button.disabled = true;

                setTimeout(() => {

                    if (button.tagName === "BUTTON") {
                        button.textContent = originalText;
                    } else {
                        button.value = originalText;
                    }

                    button.disabled = false;

                }, 3000);

            }

        });

    }

});
