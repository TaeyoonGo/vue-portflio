<template>
    <header>
        <div class="header-inner">
            <h1 class="logo">
                <router-link to="/" @click="router.go()">PORTFOLIO
                    <em>TAEYOONGO</em>
                </router-link>
            </h1>
            <nav class="navi">
                <ul>
                    <li>
                        <a @click="$emit('scrollTo','section1')">INTRO</a>
                    </li>
                    <li>
                        <a @click="$emit('scrollTo','section2')">CHARACTER</a>
                    </li>
                    <li>
                        <a @click="$emit('scrollTo','section3')">ABILITY</a>
                    </li>
                    <li>
                        <a @click="$emit('scrollTo','section4')">PORTFOLIO</a>
                    </li>
                    <li>
                        <a @click="$emit('scrollTo','section5')">CONTACT</a>
                    </li>
                </ul>
            </nav>
        </div>

    </header>
</template>

<script setup>
    import router from "@/router/index.js";

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
