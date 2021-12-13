
import { useState } from "react";
import Input from "./Input";
export default {
    title: 'UI-KIT/UiInput',
    component:Input
}

const Template = (args) => {
    
    const [value, setValue] = useState('')
    
    const handleChange = (value) => {
        setValue(value)
        
    }   
    
    return (
      <Input {...args} value={value} onChange={handleChange}/>
    )
}

const props = {
    value:'',
    onChange:()=>console.log('Input change'),
    placeholder:'Hello'
}

export const BaseInput = Template.bind({})

BaseInput.args = {
    ...props
}