import type { Meta, StoryObj } from '@storybook/vue3'
import ExampleAddressForm from '../../examples/AddressForm.vue'

type Comp = InstanceType<typeof ExampleAddressForm>

const meta: Meta<Comp> = {
    title: 'Form/Examples/Address',
    component: ExampleAddressForm
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'Address',
    render: () => ({
        components: { ExampleAddressForm },
        template: '<ExampleAddressForm />'
    })
}
