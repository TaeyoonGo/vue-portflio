<template>
    <footer>
        <ul class="contact-list">
            <li class="item">
                <span class="title">MAIL : </span>
                <span class="contact">
                    <a href="mailto:TAEYOONGO007@gmail.com">TAEYOONGO007@gmail.com</a>
                </span>
            </li>
            <li class="item">
                <span class="title">PHONE : </span>
                <span class="contact">
                  <a href="tel:010-9971-7063">010-9971-7063</a>
                </span>
            </li>
            <li class="item">
                <span class="title">SOCIAL : </span>
                <span class="contact">
                    <a href="https://www.instagram.com/taeyoon__go" target="_blank">
                        <font-awesome-icon :icon="['fab', 'instagram']" size="2x" style="margin-right: 1rem"/>
                    </a>
                    <a href="https://github.com/TaeyoonGo" target="_blank">
                        <font-awesome-icon :icon="['fab', 'github']" size="2x"/>
                    </a>
                </span>
            </li>
            <li class="item">
                <span class="title">Worked : </span>
                <span class="contact">2020-2024</span>
            </li>
            <li class="item">
                <span class="copy-right">
                    © 2024 TAEYOONGO.<br/>All Rights Reserved.
                </span>
            </li>
        </ul>
    </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
footer {
    background-color: #000;
    border-top: 1px solid #fff;
    height: 16rem;
}

.contact-list {
    padding: 0 2.4rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;

    .item {
        color: #fff;
        .title {
            font-size: 3.2rem;
            display: block;
            font-weight: 700;
            margin-bottom: 1.6rem;
        }

        .copy-right {
            color: #fff;
            font-size: 1.4rem;
            line-height: 1.2;
        }

        .contact {
            font-size: 1.8rem;

            a {
                text-decoration: none;
                color: #fff;
            }

        }
    }
}
</style>

