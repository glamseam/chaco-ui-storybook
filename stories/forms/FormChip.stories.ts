// import type { Meta, StoryObj } from '@storybook/vue3'
// import { ref } from 'vue'
// import FormChip from '@glamseam/chaco-ui/dist/components/forms/FormChip.vue'
// import { formUtil } from '@glamseam/chaco-ui/dist/utils/form'

// type Comp = InstanceType<typeof FormChip>

// const meta: Meta<Comp> = {
//     title: 'Form/Chip',
//     component: FormChip
// }

// const data = [
//     { value: 'angular', primaryText: 'Angular' },
//     { value: 'elm', primaryText: 'Elm' },
//     { value: 'react', primaryText: 'React' },
//     { value: 'svelte', primaryText: 'Svelte' },
//     { value: 'vue', primaryText: 'Vue' }
// ]

// export default meta
// export const Default: StoryObj<Comp> = {
//     name: 'Radio',
//     args: {
//         classNameSuffix: 'main',
//         inputName: 'checkbox-radio',
//         isDisabled: false,
//         isOutlinedStyle: false
//     },
//     render: (args) => ({
//         components: { FormChip },
//         setup() {
//             const checkedRef = ref('elm')

//             return {
//                 ...args,
//                 data,
//                 checkedRef
//             }
//         },
//         template: `
//             <div>
//                 <FormChip
//                     v-for="option in data"
//                     :key="option.value"
//                     :checked-value="checkedRef"
//                     :class-name-suffix="classNameSuffix"
//                     :input-name="inputName"
//                     :is-disabled="isDisabled"
//                     :is-outlined-style="isOutlinedStyle"
//                     :option="option"
//                     @update-value="(payload) => checkedRef = payload.value"
//                 />
//             </div>
//             <p>
//                 binding value: {{ checkedRef }}
//             </p>
//         `
//     })
// }

// export const Checkbox: StoryObj<Comp> = {
//     name: 'Checkbox',
//     args: Default.args,
//     render: (args) => ({
//         components: { FormChip },
//         setup() {
//             const checkedRef = ref(['react'])
//             const updateCheckboxValues = formUtil()
//                 .updateCheckboxValues.bind(null, checkedRef.value)

//             return {
//                 ...args,
//                 data,
//                 checkedRef,
//                 updateCheckboxValues
//             }
//         },
//         template: `
//             <div>
//                 <FormChip
//                     v-for="option in data"
//                     :key="option.value"
//                     :checked-value="checkedRef"
//                     :class-name-suffix="classNameSuffix"
//                     :input-name="inputName"
//                     :is-disabled="isDisabled"
//                     :is-outlined-style="isOutlinedStyle"
//                     :option="option"
//                     @update-value="updateCheckboxValues($event)"
//                 />
//             </div>
//             <p>
//                 binding value: {{ checkedRef }}
//             </p>
//         `
//     })
// }

// const withIconOptions = [
//     { value: 'twitter', primaryText: 'Twitter', icon: 'brand-twitter' },
//     { value: 'facebook', primaryText: 'facebook', icon: 'brand-facebook' },
//     { value: 'instagram', primaryText: 'Instagram', icon: 'brand-instagram' },
//     { value: 'line', primaryText: 'LINE', icon: 'brand-line' }
// ]

// export const CheckboxWithIcon: StoryObj<Comp> = {
//     name: 'CheckboxWithIcon',
//     args: Default.args,
//     render: (args) => ({
//         components: { FormChip },
//         setup() {
//             const checkedRef = ref(['instagram'])
//             const updateCheckboxValues = formUtil()
//                 .updateCheckboxValues.bind(null, checkedRef.value)

//             return {
//                 ...args,
//                 withIconOptions,
//                 checkedRef,
//                 updateCheckboxValues
//             }
//         },
//         template: `
//             <div>
//                 <FormChip
//                     v-for="option in withIconOptions"
//                     :key="option.value"
//                     :checked-value="checkedRef"
//                     :class-name-suffix="classNameSuffix"
//                     :input-name="inputName"
//                     :is-disabled="isDisabled"
//                     :is-outlined-style="isOutlinedStyle"
//                     :option="option"
//                     @update-value="updateCheckboxValues($event)"
//                 />
//             </div>
//             <p>
//                 binding value: {{ checkedRef }}
//             </p>
//         `
//     })
// }
