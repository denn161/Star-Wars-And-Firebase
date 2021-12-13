import Button from './Button'


export default {
    title: 'UI-KIT/UiButton',
    component:Button
}

const Template = (args) => <Button {...args} />

const props = {
    children:'Hello',
    onClick:()=>console.log('Button click'),
    disabled:false,
    theme:'dark',
    classes:''
}

export const Light = Template.bind({})

Light.args = {
  ...props,
   theme:'light'
}

export const Dark = Template.bind({})

Dark.args = {
  ...props   
}

export const Disabled = Template.bind({})

Disabled.args = {
    ...props,
    disabled: true,
  theme:'light'
}

