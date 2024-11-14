<template>
    <section class="character-section">
        <article class="character-inner">
            <div class="title-box">
                <h3 class="title">Character</h3>
            </div>
            <ul class="character-list">
                <li>
                    <span class="number">1</span>
                    <h5 class="subject">CSS Tricks</h5>
                    <p class="content">자신에소개소개소개</p>
                </li>
                <li>
                    <span class="number">2</span>
                    <h5 class="subject">CSS Tricks</h5>
                    <p class="content">장점컨텐츠 장점컨텐츠</p>
                </li>
                <li>
                    <span class="number">3</span>
                    <h5 class="subject">중요한건 자신에 대한 메타인지</h5>
                    <p class="content">단점컨텐츠 단점컨텐츠</p>
                </li>

            </ul>
        </article>

    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.character-section {
    padding: 2.4rem;
    background-color: #fff;
    height: 100vh;

    .character-inner {
        display: flex;
        justify-content: space-between;
        gap: 4rem;
        .title-box{
            flex: 1 1 50%;
            .title {
                font-size: 10rem;
                color: #000;
                border-bottom: 1rem solid #000;
                font-weight: 700;

                em {
                    font-weight: 600;
                    font-size: 2rem;
                }
            }
        }
        .character-list {
            flex: 1 1 50%;

            .number {
                font-weight: 800;
                font-size: 10rem;
            }

        }
    }

}
</style>
