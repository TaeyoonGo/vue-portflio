<template>
    <app-header/>
    <main>
        <section-intro id="intro"/>
        <section-character id="character"/>
        <SectionAbility id="ability"/>
        <section-portfolio id="portfolio"/>
        <section-contact id="contact"/>
    </main>
    <app-footer/>
</template>

<script setup>
import {gsap} from "gsap";
import AppFooter from "@/components/layouts/AppFooter.vue";
import AppHeader from "@/components/layouts/AppHeader.vue";
import SectionContact from "@/views/SectionContact.vue";
import SectionPortfolio from "@/views/SectionPortfolio.vue";
import SectionCharacter from "@/views/SectionCharacter.vue";
import SectionIntro from "@/views/SectionIntro.vue";
import SectionAbility from "@/views/SectionAbility.vue";
import {onMounted} from "vue";



function gsapSet(){
    gsap.registerEffect({
        name: 'textEffect',
        extendTimeline:true,
        defaults:{
            y:-100,
            duration:0.5,
            opacity:0
        },
        effect: (target,config) => {
            const {toArray} = gsap.utils
            const splitText = toArray(target)
            const tl = gsap.timeline()
            tl.from(splitText,{y:config.y,opacity:0,stagger:{each:0.02,from: 'random'}})
            return tl
        }
    })
    const animation = gsap.timeline();
    animation
        .fromTo('main',{autoAlpha:0},{autoAlpha:1})
        .textEffect('h3 > .word')
        .textEffect('h4 > .word',{y:'random(-100,100)'})
        .from('header',{y: -100})
        .from('.scroll-down',{y:300,opacity:0},"<")
}
onMounted(()=>{
    gsapSet();
})



</script>

<style lang="scss" scoped>

</style>
