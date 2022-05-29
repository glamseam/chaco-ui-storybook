import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import FormFieldTextarea from '@glamseam/chaco-ui/dist/components/forms/FormFieldTextarea.vue'

type Comp = InstanceType<typeof FormFieldTextarea>

const meta: Meta<Comp> = {
    title: 'Form/Textarea',
    component: FormFieldTextarea
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'Textarea',
    args: {
        classNameSuffix: 'default',
        errorText: '',
        isDisabled: false,
        isRequired: false,
        label: 'お問い合わせ内容',
        icon: 'message-text',
        maxLength: undefined,
        supportingText: ''
    },
    render: (args) => ({
        components: { FormFieldTextarea },
        setup() {
            const valueRef = ref('')

            return {
                args,
                valueRef
            }
        },
        template: `
            <FormFieldTextarea
                v-bind="args"
                :value="valueRef"
                @update:value="(v) => valueRef = v"
            />
            <p>
                binding value: {{ valueRef }}
            </p>
        `
    })
}
