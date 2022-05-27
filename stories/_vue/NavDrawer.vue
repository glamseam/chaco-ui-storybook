<template>
    <div class="nav-drawer-container">
        <nav class="nav-drawer">
            <div class="nav-drawer-title">
                <h1 class="typo-title-sm">
                    Navigation
                </h1>
            </div>
            <ul>
                <ButtonNav
                    color-type="secondary"
                    icon="home"
                    size="xl"
                    text="Home"
                >
                    <span class="button-right-content typo-title-sm">
                        <Badge color-class-name="badge-generic-default" />
                    </span>
                </ButtonNav>
                <ButtonNav
                    color-type="secondary"
                    :is-active="true"
                    icon="notification"
                    size="xl"
                    text="Notification"
                >
                    <span class="button-right-content typo-title-sm">
                        32
                    </span>
                </ButtonNav>
                <ButtonNav
                    v-for="view in exampleViews"
                    :key="view.id"
                    color-type="secondary"
                    :icon="view.icon"
                    size="xl"
                    :text="view.primaryText"
                />
            </ul>
            <div class="nav-drawer-divider" />
            <div class="nav-drawer-title">
                <h1 class="typo-title-sm">
                    SNS
                </h1>
            </div>
            <ul>
                <ButtonNav
                    :anchor="{
                        href: 'https://twitter.com/',
                        isNewTab: true
                    }"
                    color-type="secondary"
                    icon="brand-twitter"
                    size="xl"
                    text="Twitter"
                />
                <ButtonNav
                    :anchor="{
                        href: 'https://www.youtube.com/',
                        isNewTab: true
                    }"
                    color-type="secondary"
                    icon="brand-youtube"
                    size="xl"
                    text="YouTube"
                />
            </ul>
        </nav>
    </div>
</template>

<script lang="ts" setup>
import Badge from '@glamseam/chaco-ui/dist/components/Badge.vue'
import ButtonNav from '@glamseam/chaco-ui/dist/components/buttons/ButtonNav.vue'

const exampleViews = [
    { id: 1, primaryText: 'Inbox', icon: 'sms' },
    { id: 2, primaryText: 'Outbox', icon: 'send' },
    { id: 3, primaryText: 'Favorites', icon: 'heart' },
    { id: 4, primaryText: 'Trash', icon: 'trash' }
] as const
</script>
