<template>
    <TopAppBar>
        <template #left>
            <div class="loading-placeholder loading-placeholder-header-logo" />
        </template>
        <template #right>
            <div class="loading-placeholder loading-placeholder-action-button" />
            <Spacer
                direction="right"
                :is-inline="true"
                size="50"
            />
            <div class="loading-placeholder loading-placeholder-icon-button" />
        </template>
    </TopAppBar>
</template>

<script lang="ts" setup>
import TopAppBar from '@glamseam/chaco-ui/dist/components/TopAppBar.vue'
import Spacer from '@glamseam/chaco-ui/dist/components/spacers/Spacer.vue'
</script>

<style lang="scss">
@use '@glamseam/sparrow/design-token' as dt;
@use '@glamseam/sparrow/layouts/breakpoints';

.loading-placeholder-header-logo {
    flex-shrink: 0;
    width: 10rem;
    height: 2.5rem;
    border-radius: dt.$border-radius-pill;

    @include breakpoints.media-breakpoint-up('lg') {
        width: 16rem;
    }
}

.loading-placeholder-action-button {
    flex-shrink: 0;
    width: 9rem;
    height: 2.5rem;
    border-radius: dt.$border-radius-pill;
}

.loading-placeholder-icon-button {
    flex-shrink: 0;
    width: 3rem;
    height: 3rem;
    border-radius: dt.$border-radius-pill;
}
</style>
