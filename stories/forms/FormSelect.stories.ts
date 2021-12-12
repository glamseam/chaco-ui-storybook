import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import FormSelect from '@glamseam/chaco-ui/dist/components/forms/FormSelect.vue'

type Comp = InstanceType<typeof FormSelect>

const meta: Meta<Comp> = {
    title: 'Form/Select',
    component: FormSelect
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
        classNameSuffix: 'main',
        errorText: '',
        iconLeft: '',
        isDisabled: false,
        isRequired: false,
        label: 'フロントエンド',
        supportingText: ''
    },
    render: (args) => ({
        components: { FormSelect },
        setup() {
            const valueRef = ref('0')

            return {
                args,
                data,
                valueRef
            }
        },
        template: `
            <FormSelect
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
            </FormSelect>
            <p>
                binding value: {{ valueRef }}
            </p>
        `
    })
}
