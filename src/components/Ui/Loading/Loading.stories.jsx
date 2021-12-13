import Loading from './Loading'


export default {
    title: 'UI-KIT/UiLoading',
    component:Loading
}

const Template = (args) => <Loading {...args} />

const props = { 
    isShadow:false,
    theme:'black',
    classes:''
}

export const White = Template.bind({})

White.args = {
    ...props,
    theme: 'white',
    isShadow:true
}

export const Black = Template.bind({})

Black.args = {
  ...props
}

export const Blue = Template.bind({})

Blue.args = {
    ...props,
    theme: 'blue',
    isShadow:true
 }