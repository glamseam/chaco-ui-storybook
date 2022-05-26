import type { Meta, StoryObj } from '@storybook/vue3'
import FormCheckboxRadioTitle from '@glamseam/chaco-ui/dist/components/forms/FormCheckboxRadioTitle.vue'

type Comp = InstanceType<typeof FormCheckboxRadioTitle>

const meta: Meta<Comp> = {
    title: 'Form/Title',
    component: FormCheckboxRadioTitle
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'Title',
    args: {
        classNameSuffix: 'default',
        errorText: '',
        icon: '',
        isRequired: false,
        primaryText: 'フォームタイトル',
        secondaryText: `checkboxやradioを使う時のタイトルとして使用します。`
    },
    render: (args) => ({
        components: { FormCheckboxRadioTitle },
        setup() {
            return { args }
        },
        template: '<FormCheckboxRadioTitle v-bind="args" />'
    })
}
