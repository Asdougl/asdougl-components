import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Input, InputProps } from '../components/Input'
import { useEffect, useState } from '@storybook/addons'

const metadata: Meta = {
  component: Input,
  title: 'Components/Input',
}

export default metadata

const Template: Story<InputProps> = (args) => {
  const [value, setValue] = useState(args.value)

  useEffect(() => {
    setValue(args.value)
  }, [args.value])

  return <Input {...args} value={value} onChange={setValue} />
}

export const Default = Template.bind({})
Default.args = {
  error: false,
  disabled: false,
}

export const Error = Template.bind({})
Error.args = {
  error: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  error: false,
  disabled: true,
}
