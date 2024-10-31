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
                        <a href="#">INTRO</a>
                    </li>
                    <li>
                        <a href="#">CHALLENGE</a>
                    </li>
                    <li>
                        <a href="#">ABILITY</a>
                    </li>
                    <li>
                        <a href="#">PORTFOLIO</a>
                    </li>
                    <li>
                        <a href="#">CONTACT</a>
                    </li>
                </ul>
            </nav>
        </div>

    </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
header {
    position: sticky;
    top: 0;
    left: 0;

    .header-inner {
        display: flex;
        padding: 1rem 2.4rem;
        justify-content: space-between;
        align-items: center;
        .logo{

            text-align: center;
            a{
                color: #000;
                font-size: 2rem;
                text-decoration: none;
            }
            em{
                color: #000;
                font-size:0.8rem;
                display: block;
            }

        }
        .navi{
            >ul{
                display: flex;
                gap: 1rem;
                a{
                    color: #000;
                    text-decoration: none;
                }
            }

        }
    }

}
</style>
