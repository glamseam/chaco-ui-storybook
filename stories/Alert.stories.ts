import type { Meta, StoryObj } from '@storybook/vue3'
import Alert from '@glamseam/chaco-ui/dist/components/Alert.vue'

type Comp = InstanceType<typeof Alert>

const meta: Meta<Comp> = {
    title: 'Alert',
    component: Alert,
    argTypes: {
        colorType: {
            control: { type: 'radio' },
            options: [
                'default',
                'danger'
            ]
        }
    }
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'Alert',
    args: {
        colorType: 'default',
        icon: '',
        title: 'タイトル'
    },
    render: (args) => ({
        components: { Alert },
        setup() {
            return { args }
        },
        template: `
            <Alert v-bind="args">
                'template #body'を使用した場合は、pタグで囲っていないため、自前で実装する必要があります。<br>
                'template #body'を使用するユースケースはあまりありません。<br>
                基本的に'template #default'を使用してください。
            </Alert>
        `
    })
}
