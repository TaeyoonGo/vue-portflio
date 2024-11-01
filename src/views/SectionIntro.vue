<template>
    <section class="intro-section">
        <article class="scene-data">
            <div class="word-outer">
                <div class="word-inner">
                    <div class="word-paragraph">
                        <span class="word">L</span>
                        <span class="word">e</span>
                        <span class="word">a</span>
                        <span class="word">r</span>
                        <span class="word">n</span>
                        <span class="word">&nbsp;</span>
                        <span class="word">T</span>
                        <span class="word">o</span>
                        <span class="word">d</span>
                        <span class="word">a</span>
                        <span class="word">y</span>

                    </div>
                    <div class="word-paragraph">
                        <span class="word">U</span>
                        <span class="word">s</span>
                        <span class="word">e</span>
                        <span class="word">&nbsp;</span>
                        <span class="word">T</span>
                        <span class="word">o</span>
                        <span class="word">m</span>
                        <span class="word">o</span>
                        <span class="word">r</span>
                        <span class="word">r</span>
                        <span class="word">o</span>
                        <span class="word">w</span>
                    </div>
                </div>
            </div>
        </article>
        <div class="scroll-down">
            <span class="text">SCROLL DOWN</span>
            <font-awesome-icon
                :icon="['fas', 'fa-arrow-down']"
                size="3x"
                style="color: #fff; margin: 2rem auto 0; display: block;"
            />
        </div>
    </section>
</template>

<script setup>
import {onMounted} from 'vue'
import {gsap} from "gsap";

onMounted(() => {
    gsap.to('.text', {});
})


</script>

<style lang="scss" scoped>
.intro-section {
    height: 100vh;
    padding: 0 2.4rem;
    position: relative;
    background-color: #444;
    .scene-data{
        height: 100%;
    }
    .word-outer {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        .word-inner {
            .word-paragraph {
                display: flex;
                align-items: center;
                justify-content: center;
                .word {
                    color: #fff;
                    line-height: 1.2;
                    font-weight: 700;
                    font-size: 9rem;
                }
            }
        }
    }
    .scroll-down{
        position: absolute;
        bottom: 8rem;
        left: 50%;
        transform: translate(-50%,-50%);
        color: #fff;
        text-align: center;
        .text{
            font-weight: 700;
            font-size: 2.4rem;
            margin-bottom: 1rem;
        }
    }
}
</style>
