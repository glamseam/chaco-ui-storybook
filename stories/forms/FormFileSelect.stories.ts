import type { Meta, StoryObj } from '@storybook/vue3'
import FormFileSelect from '@glamseam/chaco-ui/dist/components/forms/FormFileSelect.vue'
import ButtonText from '@glamseam/chaco-ui/dist/components/buttons/ButtonText.vue'

type Comp = InstanceType<typeof FormFileSelect>

const meta: Meta<Comp> = {
    title: 'Form/FileSelect',
    component: FormFileSelect
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'FileSelect',
    args: {
        inputAcceptExts: [
            'jpg',
            'jpeg',
            'gif',
            'png',
            'webp'
        ],
        inputId: 'formFile',
        inputName: 'media',
        numberOfMultipleChoices: 2
    },
    render: (args) => ({
        components: {
            FormFileSelect,
            ButtonText
        },
        setup() {
            return { args }
        },
        template: `
            <FormFileSelect
                input-id="formFile"
                :number-of-multiple-choices="12"
            >
                <template #default="slotProps">
                    <ButtonText
                        class-name="button-primary"
                        :for-name="slotProps.inputId"
                        :is-rounded-pill="true"
                        left-icon="cloud-upload"
                        text="画像をアップロード"
                    />
                </template>
            </FormFileSelect>
        `
    })
}
