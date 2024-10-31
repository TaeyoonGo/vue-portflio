<template>
    <section class="intro-section">
        <div class="scene-data">
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
        </div>
        <div class="scroll-down">

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
}
</style>
