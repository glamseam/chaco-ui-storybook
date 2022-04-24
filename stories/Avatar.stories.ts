import type { Meta, StoryObj } from '@storybook/vue3'
import Avatar from '@glamseam/chaco-ui/dist/components/Avatar.vue'

type Comp = InstanceType<typeof Avatar>

const meta: Meta<Comp> = {
    title: 'Avatar',
    component: Avatar,
    argTypes: {
        badgeColorClassName: {
            control: { type: 'radio' },
            options: [
                'primary-on-surface-high',
                'secondary-on-surface-high',
                'tertiary-on-surface-high',
                'success-on-surface-high',
                'caution-on-surface-high',
                'danger-on-surface-high'
            ]
        },
        badgePosition: {
            control: { type: 'inline-radio' },
            options: [
                'top',
                'bottom',
                'none'
            ]
        }
    }
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'Default',
    args: {
        badgeColorClassName: 'primary-on-surface-high',
        badgePosition: 'bottom',
        badgeSize: 10,
        imgSrc: 'https://avatars.githubusercontent.com/u/25496839',
        imgSize: 40,
        imgInnerStrokeWidth: 2,
        maskIdName: 'maskIdName'
    },
    render: (args) => ({
        components: { Avatar },
        setup() {
            return { args }
        },
        template: '<Avatar v-bind="args" :index="0" />'
    })
}

export const Seen: StoryObj<Comp> = {
    name: 'Seen',
    args: {
        ...Default.args,
        badgePosition: 'none',
        isUseSeen: true
    },
    render: (args) => ({
        components: { Avatar },
        setup() {
            return { args }
        },
        template: `
            <div style="display: flex;">
                <Avatar v-bind="args" :index="0" />
                <Avatar v-bind="args" :index="1" />
                <Avatar v-bind="args" :index="2" />
            </div>
        `
    })
}
