import type { Meta, StoryObj } from '@storybook/vue3'
import CodeHighlight from '@glamseam/chaco-ui/dist/components/CodeHighlight.vue'

type Comp = InstanceType<typeof CodeHighlight>

const meta: Meta<Comp> = {
    title: 'CodeHighlight',
    component: CodeHighlight
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'CodeHighlight',
    args: {
        className: '',
        language: 'html',
        isRounded: true,
        isShowLineNumbers: true,
        supportingText: '@/components/CodeHighlight.vue',
        code: `<template>
    <div
        :class="[
            props.className,
            { 'code-highlight-radius': props.isRounded }
        ]"
        class="code-highlight code-highlight-container"
    >
        <span
            v-if="props.supportingText"
            class="code-highlight-label"
        >
            {{ supportingText }}
        </span>
        <pre :class="{ 'line-numbers': props.isShowLineNumbers }"><code :class="\`language-\${props.language}\`">{{ props.code }}</code></pre>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import * as Prism from 'prismjs'
import 'prismjs/components/prism-scss'
import 'prismjs/components/prism-typescript'
import 'prismjs/plugins/line-numbers/prism-line-numbers'

const props = withDefaults(defineProps<{
    className?: string
    code: string
    language: string
    isRounded?: boolean
    isShowLineNumbers?: boolean
    supportingText?: string
}>(), {
    isRounded: true,
    isShowLineNumbers: true
})

onMounted(() => {
    Prism.highlightAll()
})
<\/script>`
    },
    render: (args) => ({
        components: {
            CodeHighlight
        },
        setup() {
            return { args }
        },
        template: '<CodeHighlight v-bind="args" />'
    })
}
