import type { Meta, StoryObj } from '@storybook/vue3'
import { onMounted, ref } from 'vue'
import FormDtPicker from '@glamseam/chaco-ui/dist/components/forms/dt-picker//FormDtPicker.vue'
import FormDtPickerInjected from '@glamseam/chaco-ui/dist/components/forms/dt-picker/FormDtPickerInjected.vue'
import FormDtPickerProvider from '@glamseam/chaco-ui/dist/components/forms/dt-picker/FormDtPickerProvider.vue'

type Comp = InstanceType<typeof FormDtPicker>

const meta: Meta<Comp> = {
    title: 'Form/DtPicker',
    component: FormDtPicker,
    argTypes: {
        pickerType: {
            control: { type: 'inline-radio' },
            options: ['time', 'date', 'datetime']
        }
    }
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'Default',
    args: {
        belowWrapperElementId: '',
        classNameSuffix: 'main',
        classNameSuffixForDialog: 'main',
        errorText: '',
        isDisabled: false,
        isRequired: false,
        label: '作成日時',
        supportingText: '',
        format: {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'short',
            hour: '2-digit',
            minute: '2-digit'
        },
        pickerType: 'datetime'
    },
    render: (args) => ({
        components: {
            FormDtPicker,
            FormDtPickerInjected,
            FormDtPickerProvider
        },
        setup() {
            const isShow = ref(false)
            const valueRef = ref('')
            onMounted(() => {
                isShow.value = true
            })

            return {
                args,
                isShow,
                valueRef
            }
        },
        template: `
            <FormDtPickerProvider v-if="isShow">
                <FormDtPickerInjected
                    :is-use-12-hour="true"
                    :value="valueRef"
                >
                    <FormDtPicker
                        v-bind="args"
                        @update-value="(v) => valueRef = v"
                    />
                </FormDtPickerInjected>
            </FormDtPickerProvider>
            <p>
                binding value: {{ valueRef }}
            </p>
        `
    })
}

export const Separate: StoryObj<Comp> = {
    name: 'Separate',
    args: Default.args,
    render: (args) => ({
        components: {
            FormDtPicker,
            FormDtPickerInjected,
            FormDtPickerProvider
        },
        setup() {
            const isShow = ref(false)
            const valueRef = ref('')
            onMounted(() => {
                isShow.value = true
            })

            return {
                args,
                isShow,
                valueRef
            }
        },
        template: `
            <FormDtPickerProvider v-if="isShow">
                <FormDtPickerInjected :value="valueRef">
                    <FormDtPicker
                        v-bind="args"
                        :format="{ year: 'numeric', month: 'long', day: 'numeric', weekday: 'short' }"
                        label="公開日"
                        picker-type="date"
                        @update-value="(v) => valueRef = v"
                    />
                    <div class="mb-200" />
                    <FormDtPicker
                        v-bind="args"
                        :format="{ hour: '2-digit', minute: '2-digit' }"
                        label="公開時間"
                        picker-type="time"
                        @update-value="(v) => valueRef = v"
                    />
                </FormDtPickerInjected>
            </FormDtPickerProvider>
            <p>
                binding value: {{ valueRef }}
            </p>
        `
    })
}
