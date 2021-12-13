import Video from './Video';

export default {
    title: 'UI-KIT/UiVideo',
    component:Video
}

const Template = (args) => <Video {...args} />


const props = {
    classes: '',
    src: '',
    playbackRate: 1.0
   
}

export const BaseVideo = Template.bind({})

BaseVideo.args = {
  ...props
}



