// import type { Meta, StoryObj } from '@storybook/vue3'
// import Table from '@glamseam/chaco-ui/dist/components/tables/Table.vue'
// import TableBody from '@glamseam/chaco-ui/dist/components/tables/TableBody.vue'
// import TableHead from '@glamseam/chaco-ui/dist/components/tables/TableHead.vue'

// type Comp = InstanceType<typeof Table>

// const meta: Meta<Comp> = {
//     title: 'Table',
//     component: Table,
//     argTypes: {
//         accentColor: {
//             control: { type: 'radio' },
//             options: [
//                 'primary',
//                 'secondary',
//                 'tertiary',
//                 'success',
//                 'caution',
//                 'danger',
//                 'default'
//             ]
//         }
//     }
// }

// const tableHeadData = ['ヘッダーA', 'ヘッダーB', 'ヘッダーC', 'ヘッダーD', 'ヘッダーE']
// const tableBodyData = [
//     ['セル A1', 'セル A2', 'セル A3', 'セル A4', 'セル A5'],
//     ['セル B1', 'セル B2', 'セル B3', 'セル B4', 'セル B5'],
//     ['セル C1', 'セル C2', 'セル C3', 'セル C4', 'セル C5 セル C5 セル C5 セル C5 セル C5 セル C5 セル C5 セル C5 セル C5 セル C5 セル C5'],
//     ['セル D1', 'セル D2', 'セル D3', 'セル D4', 'セル D5'],
//     ['セル E1', 'セル E2', 'セル E3', 'セル E4', 'セル E5']
// ]

// export default meta
// export const Default: StoryObj<Comp> = {
//     name: 'Table',
//     args: {
//         accentColor: 'default',
//         isBordered: false,
//         isStriped: false,
//         // @ts-ignore
//         slotSupportingSection: `<p>
//     ※ここにはちょっとした注意事項などをいれるのに便利です。
// </p>`
//     },
//     render: (args) => ({
//         components: {
//             Table,
//             TableBody,
//             TableHead
//         },
//         setup() {
//             return {
//                 args,
//                 tableHeadData,
//                 tableBodyData
//             }
//         },
//         template: `
//             <Table v-bind="args">
//                 <template #head>
//                     <TableHead :row="tableHeadData" />
//                 </template>
//                 <template #body>
//                     <TableBody :rows="tableBodyData" />
//                 </template>
//                 <template #supportingSection>
//                     ${args.slotSupportingSection}
//                 </template>
//             </Table>
//         `
//     })
// }
