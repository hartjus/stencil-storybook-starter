import * as Utils from '../../stories/StencilStorybookUtils';

export default {
    title: 'Example/My Component',
    parameters: {
        actions: {
            handles: ['tapped']
        }
    },
    decorators: [
    ]
};

const PROPS = ['first', 'middle', 'last'];
const EVENTS = ['tapped'];
const CSS_VARS = [
    '--border-size',
    '--border-color'
];
const SLOTS = ['one', 'two'];

const Template = args => {
    const el = document.createElement('my-component');

    Utils.bindProps(el, PROPS, args);
    Utils.bindEvents(el, EVENTS, args);
    Utils.bindStyles(el, CSS_VARS, args);
    Utils.bindSlots(el, SLOTS, args);

    return el;
}


export const Primary = Template.bind({});
Primary.args = {
    first: 'Homer',
    last: 'Simpson',
    tapped: (e) => console.log(e.detail),
    '--border-size': '1px',
    '--border-color': 'red',
    one: '<span slot="one">ONE</span>',
    two: '<span slot="two">TWO</span>'
}

export const Secondary = Template.bind({});
Secondary.args = {
    first: 'Bart',
    last: 'Simpson',
    '--border-size': '5px',
    '--border-color': 'lime',
}