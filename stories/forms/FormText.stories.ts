import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import FormText from '@glamseam/chaco-ui/dist/components/forms/FormText.vue'

type Comp = InstanceType<typeof FormText>

const meta: Meta<Comp> = {
    title: 'Form/Text',
    component: FormText,
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
        classNameSuffix: 'main',
        errorText: '',
        iconLeft: '',
        inputmode: undefined,
        isDisabled: false,
        isRequired: false,
        isTextarea: false,
        label: 'お名前',
        maxLength: undefined,
        supportingText: '',
        type: 'text'
    },
    render: (args) => ({
        components: { FormText },
        setup() {
            const valueRef = ref('')

            return {
                args,
                valueRef
            }
        },
        template: `
            <FormText
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
