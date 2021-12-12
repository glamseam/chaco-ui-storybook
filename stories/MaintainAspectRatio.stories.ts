import type { Meta, StoryObj } from '@storybook/vue3'
import MaintainAspectRatio from '@glamseam/chaco-ui/dist/components/MaintainAspectRatio.vue'

type Comp = InstanceType<typeof MaintainAspectRatio>

const meta: Meta<Comp> = {
    title: 'MaintainAspectRatio',
    component: MaintainAspectRatio
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'MaintainAspectRatio',
    args: {
        aspectRatio: {
            horizontal: 16,
            vertical: 10
        },
        className: '',
        itemClassName: '',
        // @ts-ignore
        slotDefault: `<iframe
        width="100%"
        height="100%"
        src="https://www.youtube-nocookie.com/embed/El8Jw2CFj7g?rel=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer;autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen />`
    },
    render: (args) => ({
        components: {
            MaintainAspectRatio
        },
        setup() {
            return { args }
        },
        template: `
            <div :style="{ width: '100%', maxWidth: '600px'}">
                <MaintainAspectRatio v-bind="args">
                    ${args.slotDefault}
                </MaintainAspectRatio>
            </div>
        `
    })
}
