import type { Meta, StoryObj } from '@storybook/vue3'
import Snackbar from '@glamseam/chaco-ui/dist/components/Snackbar.vue'
import ButtonText from '@glamseam/chaco-ui/dist/components/buttons/ButtonText.vue'

type Comp = InstanceType<typeof Snackbar>

const meta: Meta<Comp> = {
    title: 'Snackbar',
    component: Snackbar,
    argTypes: {
        position: {
            control: { type: 'inline-radio' },
            options: ['center', 'left', 'right']
        }
    }
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'Snackbar',
    args: {
        // actionButton: {
        //     fn: () => void
        //     text: 'string'
        // },
        classNameSuffix: 'main',
        isShow: false,
        msg: 'Show Snackbar',
        position: 'right'
    },
    render: (args) => ({
        components: {
            ButtonText,
            Snackbar
        },
        setup() {
            return { args }
        },
        template: '<Snackbar v-bind="args" />'
    })
}
