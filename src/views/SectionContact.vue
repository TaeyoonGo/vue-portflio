<template>
    <section class="contact-section">
        <span class="badge">
            Do You Like Me?
        </span>
        <h3 class="title">CONTACT ME</h3>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .contact-section{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000;
        height: 100vh;
        flex-direction: column;
        gap: 10rem;
        .badge{
            border-radius: 2.6rem;
            padding: 1.5rem 3rem;
            color: #fff;
            font-size: 2.4rem;
            border: 1px solid #fff;
        }
        .title{
            font-size: 12rem;
            color: #fff;
            font-weight: 700;
        }
    }
</style>
