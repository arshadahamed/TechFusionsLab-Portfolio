<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import CTA from '@/components/CTA.vue';
</script>

<template>
   <Header />
   <RouterView />
   <CTA />
   <Footer />
  
</template>