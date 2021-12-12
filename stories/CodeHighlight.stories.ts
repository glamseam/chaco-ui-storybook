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
        className: 'w-50',
        language: 'html',
        isShowLineNumbers: true,
        supportingText: '@@/components/Spacer.vue',
        code: `<section>
    <h2>
        Spacer
    </h2>
    <p>
        Spacerを使ってみる。
    </p>
</section>
<div style="margin-bottom: 2rem"></div>
<section>
    <h2>
        HTML
    </h2>
    <p>
        これが「Spacer div」
    </p>
</section>`
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
