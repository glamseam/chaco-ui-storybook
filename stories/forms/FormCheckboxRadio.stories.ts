import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import FormCheckboxRadio from '@glamseam/chaco-ui/dist/components/forms/FormCheckboxRadio.vue'
import { formUtil } from '@glamseam/chaco-ui/dist/utils/form'

type Comp = InstanceType<typeof FormCheckboxRadio>

const meta: Meta<Comp> = {
    title: 'Form/CheckboxRadio',
    component: FormCheckboxRadio
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
    name: 'Radio',
    args: {
        classNameSuffix: 'default',
        inputName: 'checkbox-radio',
        isDisabled: false
    },
    render: (args) => ({
        components: { FormCheckboxRadio },
        setup() {
            const checkedRef = ref('elm')

            return {
                ...args,
                data,
                checkedRef
            }
        },
        template: `
            <div class="form-radio-group">
                <FormCheckboxRadio
                    v-for="option in data"
                    :key="option.value"
                    :checked-value="checkedRef"
                    :class-name-suffix="classNameSuffix"
                    :input-name="inputName"
                    :is-disabled="isDisabled"
                    :option="option"
                    @update-value="(payload) => checkedRef = payload.value"
                />
            </div>
            <p>
                binding value: {{ checkedRef }}
            </p>
        `
    })
}

export const Checkbox: StoryObj<Comp> = {
    name: 'Checkbox',
    args: Default.args,
    render: (args) => ({
        components: { FormCheckboxRadio },
        setup() {
            const checkedRef = ref(['react'])
            const updateCheckboxValues = formUtil()
                .updateCheckboxValues.bind(null, checkedRef.value)

            return {
                ...args,
                data,
                checkedRef,
                updateCheckboxValues
            }
        },
        template: `
            <div class="form-radio-group">
                <FormCheckboxRadio
                    v-for="option in data"
                    :key="option.value"
                    :checked-value="checkedRef"
                    :class-name-suffix="classNameSuffix"
                    :input-name="inputName"
                    :is-disabled="isDisabled"
                    :option="option"
                    @update-value="updateCheckboxValues($event)"
                />
            </div>
            <p>
                binding value: {{ checkedRef }}
            </p>
        `
    })
}

export const CheckboxBool: StoryObj<Comp> = {
    name: 'CheckboxBool',
    args: {
        classNameSuffix: 'default',
        inputName: 'checkbox-bool',
        isDisabled: false,
        option: {
            value: undefined,
            primaryText: '規約に同意する',
            secondaryText: 'サービスを利用するには規約に同意して頂く必要があります。'
        }
    },
    render: (args) => ({
        components: { FormCheckboxRadio },
        setup() {
            const checkedRef = ref(false)

            return {
                ...args,
                checkedRef
            }
        },
        template: `
            <div class="form-radio-group">
                <FormCheckboxRadio
                    :checked-value="checkedRef"
                    :class-name-suffix="classNameSuffix"
                    :input-name="inputName"
                    :is-disabled="isDisabled"
                    :option="option"
                    @update-checked="(v) => checkedRef = v"
                />
            </div>
            <p>
                binding value: {{ checkedRef }}
            </p>
        `
    })
}
