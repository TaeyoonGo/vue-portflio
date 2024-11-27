<template>
    <div class="cursor" ref="cursor"></div>
    <app-header
        @scrollTo="goto"
    />
    <main>
        <section ref="section1" class="intro-section">
            <article class="scene-data">
                <div class="word-outer">
                    <div class="word-inner">
                        <h3 class="word-paragraph top">
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
                        </h3>
                        <h4 class="word-paragraph">
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
                        </h4>
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
        <section ref="section2" class="character-section">
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
        <section ref="section3" class="ability-section">
            <h3 style="font-size: 100px; color: #fff; ">Section2</h3>
            <ul>
                <li><span>HTML</span></li>
                <li><span>CSS</span></li>
                <li><span>SCSS</span></li>
                <li><span>TAILWINDCSS</span></li>
                <li><span>BOOTSTRAP</span></li>
                <li><span>JAVASCRIPT</span></li>
                <li><span>JQUERY</span></li>
                <li><span>VUE</span></li>
                <li><span>NEXT</span></li>
                <li><span>GULP</span></li>
                <li><span>LOTTIE</span></li>
                <li><span>GSAP</span></li>
                <li><span>GIT</span></li>
            </ul>
        </section>
        <section ref="section4" class="portfolio-section">
            <h3 style="font-size: 100px; color: #fff; ">Section3</h3>
        </section>
        <section ref="section5" class="contact-section">
        <span class="badge">
            Do You Like Me?
        </span>
            <h3 class="title">CONTACT ME</h3>
        </section>
    </main>
    <app-footer/>
</template>

<script setup>
import {gsap} from "gsap";
import AppFooter from "@/components/layouts/AppFooter.vue";
import AppHeader from "@/components/layouts/AppHeader.vue";
// gsap.registerPlugin(ScrollTrigger);
import {onMounted, ref } from "vue";

function textEffect() {
    gsap.registerEffect({
        name: 'textEffect',
        extendTimeline: true,
        defaults: {
            y: -30,
            duration: 0.5,
            opacity: 0
        },
        effect: (target, config) => {
            const {toArray} = gsap.utils
            const splitText = toArray(target)
            const tl = gsap.timeline()
            tl.from(splitText, {y: config.y, opacity: 0, stagger: {each: 0.02, from: 'random'}})
            return tl
        }
    })
    const animation = gsap.timeline();
    animation
        .fromTo('main', {autoAlpha: 0}, {autoAlpha: 1})
        .textEffect('h3 > .word')
        .textEffect('h4 > .word', {y: 'random(-30,30)'})
        .from('header', {y: -100})
        .from('.scroll-down', {y: '100', opacity: 0}, "<")
}

const cursor = ref(null);
function cursorEffect() {
    gsap.set(cursor.value,{autoAlpha:0})
    let xTo = gsap.quickTo(cursor.value, "x", {duration: 0.4, ease: "power3"});
    let yTo = gsap.quickTo(cursor.value, "y", {duration: 0.4, ease: "power3"});
    document.addEventListener('mousemove', ({clientX: x, clientY: y}) => {
        gsap.set(cursor.value,{autoAlpha:1})
        xTo(x - (cursor.value.offsetWidth * 0.5))
        yTo(y - (cursor.value.offsetHeight * 0.5))
    })
}

const section1 = ref(null)
const section2 = ref(null)
const section3 = ref(null)
const section4 = ref(null)
const section5 = ref(null)

function goto(refName) {
    const element = section5.value;
    if (element) {
        element.scrollIntoView({behavior: 'smooth'});
    }

}
onMounted(() => {
    textEffect();
    cursorEffect();
})
</script>

<style lang="scss" scoped>
.cursor {
    width: 40px;
    height: 40px;
    background: white;
    border-radius: 50%;
    pointer-events: none;
    position: fixed;
    top: 0;
    left: 0;
    mix-blend-mode: difference;
    z-index: 10000;
}

.ability-section {
    background-color: #111;
    height: 100vh;
}

.contact-section {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
    height: 100vh;
    flex-direction: column;
    gap: 10rem;

    .badge {
        border-radius: 2.6rem;
        padding: 1.5rem 3rem;
        color: #fff;
        font-size: 2.4rem;
        border: 1px solid #fff;
    }

    .title {
        font-size: 12rem;
        color: #fff;
        font-weight: 700;
    }
}

.portfolio-section {
    height: 100vh;
    padding: 0 2.4rem;
    background-color: #555;
}

.intro-section {
    position: relative;
    height: calc(100dvh - 7rem);
    padding: 2.4rem;

    background-color: #000;

    .scene-data {
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
                    font-size: 12rem;
                }
            }
        }
    }

    .scroll-down {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        color: #fff;
        text-align: center;
        bottom: 8rem;

        .text {
            font-weight: 700;
            font-size: 2.4rem;
            margin-bottom: 1rem;
        }
    }
}

.character-section {
    padding: 2.4rem;
    background-color: #fff;
    height: 100vh;

    .character-inner {
        display: flex;
        justify-content: space-between;
        gap: 4rem;

        .title-box {
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
