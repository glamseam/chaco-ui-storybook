import type { Meta, StoryObj } from '@storybook/vue3'
import { DateTime } from 'luxon'
import Datetime from '@glamseam/chaco-ui/dist/components/Datetime.vue'

type Comp = InstanceType<typeof Datetime>

const meta: Meta<Comp> = {
    title: 'Datetime',
    component: Datetime,
    argTypes: {
        value: { control: 'date' }
    }
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'Datetime',
    args: {
        value: DateTime.now().toMillis(),
        withTime: false,
        withWeekday: false
    },
    render: (args) => ({
        components: { Datetime },
        setup() {
            return { args }
        },
        template: '<Datetime v-bind="args" />'
    })
}
