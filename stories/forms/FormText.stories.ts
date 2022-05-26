import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import FormFieldText from '@glamseam/chaco-ui/dist/components/forms/FormFieldText.vue'

type Comp = InstanceType<typeof FormFieldText>

const meta: Meta<Comp> = {
    title: 'Form/Text',
    component: FormFieldText,
    argTypes: {
        inputmode: {
            control: { type: 'radio' },
            options: ['none', 'text', 'tel', 'url', 'email', 'numeric', 'decimal', 'search']
        },
        type: {
            control: { type: 'radio' },
            options: ['email', 'number', 'password', 'tel', 'text', 'url']
        }
    }
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'Text',
    args: {
        classNameSuffix: 'default',
        errorText: '',
        inputmode: undefined,
        isDisabled: false,
        isRequired: false,
        label: 'お名前',
        leftIcon: '',
        maxLength: undefined,
        supportingText: '',
        type: 'text'
    },
    render: (args) => ({
        components: { FormFieldText },
        setup() {
            const valueRef = ref('')

            return {
                args,
                valueRef
            }
        },
        template: `
            <FormFieldText
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
