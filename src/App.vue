<template>
    <app-header ref="header"/>
    <main>
        <section-intro ref="intro" id="intro"/>
        <section-challenge id="challenge"/>
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
import {onMounted, ref} from "vue";
import SectionContact from "@/views/SectionContact.vue";
import SectionChallenge from "@/views/SectionChallenge.vue";
import SectionPortfolio from "@/views/SectionPortfolio.vue";
import SectionIntro from "@/views/SectionIntro.vue";
import SectionAbility from "@/views/SectionAbility.vue";

const header = ref(null);


function gsapSet(){
    /*
    * autoAlpha 처리 이후 글자 호출 그 후에 Vue.js
    * 애니메이션 관련 호출
    *
    * */
    const tl = gsap.timeline({
        defaults:{
            duration:0.5,
            opacity:0
        }})

    tl.fromTo('main',{autoAlpha:0},{autoAlpha:1})
        .from('header',{y: -100})
        .from('.scroll-down',{y:100},"<")
}


onMounted(()=>{
    gsapSet();
})



</script>

<style lang="scss" scoped>

</style>
