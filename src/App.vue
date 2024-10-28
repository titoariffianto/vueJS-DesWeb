<template>
  <div>
    <HeaderNavbar />
    <HeroProfile />
    <div class="container">
      <BiodataList />
      <h2>Pengalaman Kerja</h2>
      <ExperienceList />
      <h2>Galeri</h2>
      <MyGallery />
      <h2>Kontak</h2>
      <ContactForm />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import HeaderNavbar from '../src/components/HeaderNavbar.vue'; // SOAL : Import HeaderNavbar
import HeroProfile from './components/HeroProfile.vue'; // SOAL : Import HeroProfile
import BiodataList from './components/BiodataList.vue'; // SOAL : Import BiodataList
import ExperienceList from './components/ExperienceList.vue'; // SOAL : Import ExperienceList
import MyGallery from './components/MyGallery.vue'; // SOAL : Import MyGallery
import ContactForm from './components/ContactForm.vue'; // SOAL : Import ContactForm
import TheFooter from './components/TheFooter.vue'; // SOAL : Import TheFooter

export default {
  components: {
    HeaderNavbar,
    HeroProfile,
    BiodataList,
    ExperienceList,
    MyGallery,
    ContactForm,
    TheFooter
  },
};
</script>