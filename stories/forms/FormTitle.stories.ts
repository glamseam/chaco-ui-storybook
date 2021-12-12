import type { Meta, StoryObj } from '@storybook/vue3'
import FormTitle from '@glamseam/chaco-ui/dist/components/forms/FormTitle.vue'

type Comp = InstanceType<typeof FormTitle>

const meta: Meta<Comp> = {
    title: 'Form/Title',
    component: FormTitle
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'Title',
    args: {
        classNameSuffix: 'main',
        errorText: '',
        icon: '',
        isRequired: false,
        primaryText: 'フォームタイトル',
        secondaryText: `checkboxやradioを使う時のタイトルとして使用します。`
    },
    render: (args) => ({
        components: { FormTitle },
        setup() {
            return { args }
        },
        template: '<FormTitle v-bind="args" />'
    })
}
