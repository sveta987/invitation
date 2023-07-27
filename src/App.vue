<template>
  <div class="bg-[#FFFEF4] vrdznagir">
    <div class="relative max-md:h-[100vh]">
      <img src="../src/assets/img/bg-image.png" alt="bg-image" class="max-md:h-[100vh] max-md:object-cover lg:h-fit lg:w-full">
      <div class="absolute top-0 left-0 right-0 z-10 h-full backgroundOverlay">
        <div class="mt-[15%] text-center text-[#98904A] z-30 text-[85px] max-sm:text-[30px] max-md:text-[40px]">
          <p class="whitespace-nowrap md:whitespace-normal max-md:!mt-[80%]">
            Հարությունյան եղբայրների <br>
            Սուրբ մկրտություն
          </p>
          <p>
            05.08.2023
          </p>
          <img src="../src/assets/img/arrow.svg" alt="arrow" class="mx-auto mt-[8%] bounce w-[4%] max-md:w-[10%] max-md:mt-[80%] max-sm:mt-[50%]" @click="scrollToSeeDetails">
        </div>
      </div>
    </div>
    <div id="invitation" class="py-[110px] max-md:py-[30px]">
      <p class="text-[#98904A] text-center text-[58px] max-sm:text-[18px] max-md:text-[25px]">
        Սիրելի բարեկամներ հրավիրում ենք Ձեզ
        մասնակցելու Հարությունյան եղբայրների սուրբ մկրտության
        արարողությանը
      </p>
    </div>
    <div class="details flex flex-col gap-[5%] border-y border-[#98904A] w-fit mx-auto my-[6%] py-10">
      <div class="w-fit text-center text-[#98904A] z-30 text-[85px] max-sm:text-[30px] max-md:text-[40px] ">
        <p class="whitespace-nowrap md:whitespace-normal">
          Մկրտության արարողություն
        </p>
        <img src="./assets/img/church.png" alt="church" class="mx-auto max-sm:w-[25%] max-md:w-[30%]">
       
        <div class="flex flex-col gap-[5%] mt-[10%]">
          <p class="text-[#98904A] text-center text-[58px] max-sm:text-[18px] max-md:text-[25px] leading-[150%]">
            Սրբոց նահատակաց եկեղեցի
          </p>
          <p class="text-[#98904A] text-center text-[58px] max-sm:text-[18px] max-md:text-[25px] leading-[150%]">16։30</p>
          <a href="https://www.google.com/maps/search/%D4%B4%D5%A1%D5%BE%D5%AB%D5%A9%D5%A1%D5%B7%D5%A5%D5%B6%D5%AB+%D5%BD%D6%80%D5%A2%D5%B8%D6%81+%D5%B6%D5%A1%D5%B0%D5%A1%D5%BF%D5%A1%D5%AF%D5%A1%D6%81+%D5%A5%D5%AF%D5%A5%D5%B2%D5%A5%D6%81%D5%AB/@40.2145744,44.4895791,18z?entry=ttu"
             class="text-[40px] max-md:text-[20px] max-sm:text-[15px] underline" target="_blank">
            Տեսնել հասցեն
          </a>
        </div>
      </div>
      <div class="pt-10 w-fit text-center text-[#98904A] z-30 text-[85px] max-sm:text-[30px] max-md:text-[40px]">
        <p class="whitespace-nowrap md:whitespace-normal">
          Հանդիսությունների սրահ
        </p>
        <img src="./assets/img/wine-glass.png" alt="wine_glases" class="mx-auto max-sm:w-[25%] max-md:w-[30%]">

        <div class="flex flex-col gap-[5%] mt-[10%]">
          <p class="text-[#98904A] text-center text-[58px] max-sm:text-[18px] max-md:text-[25px] leading-[150%]">
            <span style="font-family: Mardoto">«ՎԱՆԱՍԱ»</span> ռեստորանային <br>
            համալիր
          </p>
          <p class="text-[#98904A] text-center text-[58px] max-sm:text-[18px] max-md:text-[25px] leading-[150%]">17։30</p>
          <a href="https://www.google.com/maps/place/%D5%8E%D5%A1%D5%B6%D5%A1%D5%BD%D5%A1/@40.2239241,44.5062518,16z/data=!4m6!3m5!1s0x406aa2a9d6c35411:0x9c3409c39b8dc9e0!8m2!3d40.2239241!4d44.5062518!16s%2Fg%2F11f3pqh5_h?entry=ttu"
             class="text-[40px] max-md:text-[20px] max-sm:text-[15px] underline" target="_blank">
            Տեսնել հասցեն
          </a>
        </div>
      </div>
    </div>
    <p class="text-[#98904A] text-center text-[58px] max-sm:text-[18px] max-md:text-[25px]">
      Սիրով սպասում ենք ձեզ
    </p>
    
    <p class="text-[25px] max-md:text-[15px] max-sm:text-[10px] mt-[5%] text-[#98904A] text-center ">
      Եթե ցանկանում ես ունենալ նման կայք անցիր հղումով
      <a href="https://www.instagram.com/onlineinvitationcards_/" target="_blank" class="flex items-center gap-2 text-sm justify-center">
        <img src="./assets/img/instagram.png" alt="" class="w-[15px] text-[#98904A]">
        onlineinvitationcards
      </a>
    </p>
    <div class="absolute top-[350%] left-0 max-md:top-[200%] max-sm:top-[150%]">
      <img src="./assets/img/angel-l.png" alt="angel" class="max-md:w-[40%] max-sm:w-[30%] md:w-[45%] lg:w-[100%]">
    </div>
    <div class="absolute top-[270%] !left-[100%] max-md:top-[180%] max-sm:top-[150%] w-fit h-fit">
      <img src="./assets/img/angel-r.png" alt="angel" class="max-md:h-[40%] max-sm:h-[30%] h-[80%]">
    </div>
  </div>
</template>

<script setup>
const scrollToSeeDetails = () => {
  let access = document.getElementById("invitation");
  access.scrollIntoView({behavior: 'smooth'}, true);
}
</script>

<style scoped>
.backgroundOverlay{
    background: linear-gradient(180deg, rgba(255, 253, 237, 0.42) 0%, #FFFEF4 100%);
}
.bounce {
    -moz-animation: bounce 2s infinite;
    -webkit-animation: bounce 2s infinite;
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-30px);
    }
    60% {
        transform: translateY(-15px);
    }
}

.vrdznagir{
    font-family: vrdznagir;
}
</style>
