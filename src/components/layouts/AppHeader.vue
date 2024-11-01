<template>
    <header>
        <div class="header-inner">
            <h1 class="logo">
                <a href="/">PORTFOLIO
                    <em>TAEYOONGO</em>
                </a>
            </h1>
            <nav class="navi">
                <ul>
                    <li>
                        <a @click="scrollToSection('intro')">INTRO</a>
                    </li>
                    <li>
                        <a @click="scrollToSection('challenge')">CHALLENGE</a>
                    </li>
                    <li>
                        <a @click="scrollToSection('ability')">ABILITY</a>
                    </li>
                    <li>
                        <a @click="scrollToSection('portfolio')">PORTFOLIO</a>
                    </li>
                    <li>
                        <a @click="scrollToSection('contact')">CONTACT</a>
                    </li>
                </ul>
            </nav>
        </div>

    </header>
</template>

<script setup>
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({behavior: 'smooth'});
        }
    }



</script>

<style lang="scss" scoped>
header {
    height: 7rem;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 100;
    a{
        cursor: pointer;
    }
    background-color: #fff;
    .header-inner {
        display: flex;
        padding: 1rem 2.4rem;
        justify-content: space-between;
        align-items: center;
        .logo{
            text-align: center;
            font-weight: 700;
            a{
                color: #000;
                font-size: 3.2rem;
                text-decoration: none;
            }
            em{
                font-weight: 500;
                color: #000;
                font-size: 1.8rem;
                display: block;
            }

        }
        .navi{
            >ul{
                display: flex;
                gap:2rem;
                a{
                    font-size: 1.8rem;
                    color: #000;
                    text-decoration: none;
                }
            }

        }
    }

}
</style>
