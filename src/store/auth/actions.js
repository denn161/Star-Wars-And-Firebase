

export const AUTH_PROFILE_SIGN = 'AUTH_PROFILE::AUTH'

export const AUTH_PROFILE_SIGNOUT = 'AUTH_PROFILE::SIGNOUT'

// export const ADD_TEXT_BUTTON_FORM='ADD_TEXT_BUTTON::FORM'


export const signInProfile = () => ({
    type:AUTH_PROFILE_SIGN
})

export const signOutProfile = () => ({
    type:AUTH_PROFILE_SIGNOUT
})
