<script setup lang="ts">
import { twMerge } from 'tailwind-merge'

const props = defineProps({
    icon: {
        type: String as PropType<IconName>,
        required: false,
        default: 'sim-card',
    },
    title: {
        type: String as PropType<string>,
        required: true,
    },
    subTitle: {
        type: String as PropType<string>,
        required: true,
    },
})
</script>

<template>
    <li
        class="flex flex-wrap items-center justify-between hover:cursor-pointer hover:bg-gray-300 rounded-lg p-4 transition ease-in-out duration-300">
        <div class="flex items-center gap-2">
            <span class="rounded-full bg-gray-200 p-3">
                <Icon :name="props.icon" />
            </span>

            <div class="flex flex-col items-start justify-center gap-1">
                <span class="font-bold">{{ props.title }}</span>
                <span class="text-sm">{{ props.subTitle }}</span>
            </div>
        </div>

        <slot />
    </li>
</template>
