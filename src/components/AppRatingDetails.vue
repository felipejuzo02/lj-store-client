<template>
  <div class="bg-black-200 text-white p-8 rounded-lg">
    <section class="flex items-center gap-4">
      <h5 class="text-primary text-4xl font-bold">
        4.6
      </h5>

      <div class="flex flex-col gap-1">
        <app-rating :rating="rating"></app-rating>

        <div class="text-gray-500 text-xs">(12 avaliações)</div>
      </div>
    </section>

    <ul class="mt-4">
      <li
        class="flex items-center gap-2"
        v-for="(item, index) in ratingDetails"
        :key="index"
      >
        <div class="w-72 bg-gray-600 h-2 rounded relative">
          <span class="absolute left-0 h-2 bg-primary" :style="getProgressStyle(item)"></span>
        </div>

        <div class="flex items-center gap-2 text-gray-400">
          <div>
            {{ index + 1 }}
          </div>

          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
          </svg>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import AppRating from './AppRating.vue';

defineOptions({ name: 'AppRatingDetails' })

const props = defineProps({
  rating: {
    type: Number,
    validator(value) {
      return value >= 0 && value <= 5
    }
  },

  ratingDetails: {
    type: Array,
    default: () => [15, 2, 0, 0, 0]
  }
})

function getProgressStyle (item) {
  const sumRating = props.ratingDetails.reduce((value, acc) => value + acc, 0)

  console.log(sumRating)
  return {
    width: `${(item / sumRating) * 100}%`
  }
}
</script>