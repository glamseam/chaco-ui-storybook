import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import FormFieldSelect from '@glamseam/chaco-ui/dist/components/forms/FormFieldSelect.vue'

type Comp = InstanceType<typeof FormFieldSelect>

const meta: Meta<Comp> = {
    title: 'Form/Select',
    component: FormFieldSelect
}

const data = [
    { value: 'angular', primaryText: 'Angular' },
    { value: 'elm', primaryText: 'Elm' },
    { value: 'react', primaryText: 'React' },
    { value: 'svelte', primaryText: 'Svelte' },
    { value: 'vue', primaryText: 'Vue' }
]

export default meta
export const Default: StoryObj<Comp> = {
    name: 'Select',
    args: {
        classNameSuffix: 'default',
        errorText: '',
        isDisabled: false,
        isRequired: false,
        label: 'フロントエンド',
        icon: '',
        supportingText: ''
    },
    render: (args) => ({
        components: { FormFieldSelect },
        setup() {
            const valueRef = ref('0')

            return {
                args,
                data,
                valueRef
            }
        },
        template: `
            <FormFieldSelect
                v-bind="args"
                :value="valueRef"
                @update:value="(v) => valueRef = v"
            >
                <option value="0">
                    選択してください
                </option>
                <option
                    v-for="option in data"
                    :key="option.value"
                    :value="option.value"
                >
                    {{ option.primaryText }}
                </option>
            </FormFieldSelect>
            <p>
                binding value: {{ valueRef }}
            </p>
        `
    })
}
