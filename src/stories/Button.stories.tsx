import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Button, ButtonProps } from '../components/Button'

export default {
  component: Button,
  title: 'Components/Button',
} as Meta

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Hello World</Button>
)

export const Primary = Template.bind({})
Primary.args = {
  style: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  style: 'secondary',
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  style: 'teritary',
}
