import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import FormSwitch from '@glamseam/chaco-ui/dist/components/forms/FormSwitch.vue'

type Comp = InstanceType<typeof FormSwitch>

const meta: Meta<Comp> = {
    title: 'Form/Switch',
    component: FormSwitch
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'Switch',
    args: {
        classNameSuffix: 'default',
        inputName: 'switch',
        isDisabled: false,
        leftIcon: 'moon',
        primaryText: 'ダークテーマを使用',
        secondaryText: '暗い場所での目の負担を減らします。'
    },
    render: (args) => ({
        components: { FormSwitch },
        setup() {
            const checkedRef = ref(true)

            return {
                args,
                checkedRef
            }
        },
        template: `
            <div>
                <FormSwitch
                    v-bind="args"
                    :checked="checkedRef"
                    @update-checked="(v) => checkedRef = v"
                />
            </div>
            <p>
                binding value: {{ checkedRef }}
            </p>
        `
    })
}
