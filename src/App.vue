<template>
  <div class="relative bg-white overflow-hidden">
    <div class="hidden lg:block lg:absolute lg:inset-0" aria-hidden="true">
      <svg class="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8" width="640" height="784" fill="none"
           viewBox="0 0 640 784">
        <defs>
          <pattern id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047" x="118" y="0" width="20" height="20"
                   patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"/>
          </pattern>
        </defs>
        <rect y="72" width="640" height="640" class="text-gray-50" fill="currentColor"/>
        <rect x="118" width="404" height="784" fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"/>
      </svg>
    </div>

    <div class="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
      <Popover>
        <nav class="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6" aria-label="Global">
          <div class="flex items-center flex-1">
            <div class="flex items-center justify-between w-full md:w-auto">
              <a href="#">
                <span class="sr-only">Sinov8</span>
                <img class="h-8 w-auto sm:h-10" src="http://localhost:3000/public/images/logo_sinov8.png" alt=""/>

              </a>
              <div class="-mr-2 flex items-center md:hidden">
                <PopoverButton
                    class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span class="sr-only">Open main menu</span>
                  <MenuIcon class="h-6 w-6" aria-hidden="true"/>
                </PopoverButton>
              </div>
            </div>
            <div class="hidden md:block md:ml-10 md:space-x-10">
              <router-link to="/">
                <a href="/" class="font-medium text-gray-500 hover:text-gray-900 ml-6">Home</a>
              </router-link>
              <router-link to="/our-software-solutions">
                <a href="/our-software-solutions" class="font-medium text-gray-500 hover:text-gray-900 ml-6">Our
                  Software Solutions</a>
              </router-link>
              <router-link to="/careers">
                <a href="/careers" class="font-medium text-gray-500 hover:text-gray-900 ml-6">Careers</a>
              </router-link>
            </div>
          </div>
        </nav>

        <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95"
                    enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in"
                    leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
          <PopoverPanel focus class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div class="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt=""/>
                </div>
                <div class="-mr-2">
                  <PopoverButton
                      class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span class="sr-only">Close main menu</span>
                    <XIcon class="h-6 w-6" aria-hidden="true"/>
                  </PopoverButton>
                </div>
              </div>
              <div class="px-2 pt-2 pb-3 space-y-1">
                <a v-for="item in navigation" :key="item.name" :href="item.href"
                   class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">{{
                    item.name
                  }}</a>
              </div>
              <a href="#"
                 class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">
                Log in
              </a>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>

      <main class="sm:mt-24 lg:mt-32">
        <router-view/>
      </main>
    </div>

    <FooterSection/>

  </div>
</template>

<script>
import {Popover, PopoverButton, PopoverPanel} from '@headlessui/vue'
import {MenuIcon, XIcon} from '@heroicons/vue/outline'
import FooterSection from "./components/FooterSection.vue";

const navigation = [
  {name: 'Home', href: '/'},
  {name: 'Our Software Solutions', href: '/our-software-solutions'},
  {name: 'Careers', href: '/careers'},
]

export default {
  components: {
    FooterSection,
    Popover,
    PopoverButton,
    PopoverPanel,
    MenuIcon,
    XIcon,
  },
  setup() {
    return {
      navigation,
    }
  },
}
</script>
