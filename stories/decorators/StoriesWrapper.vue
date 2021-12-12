<template>
    <div
        :style="{
            width: '100%',
            maxWidth: props.maxWidth
        }"
    >
        <slot />
    </div>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
    maxWidth?: string
}
>(), {
    maxWidth: '600px'
})
</script>
