import { describe, it } from 'vitest'

import { mount } from '@vue/test-utils'
import CustomDialog from '../CustomDialog.vue'

describe('CustomDialog', () => {
  it('renders properly', async () => {
    const wrapper = mount(CustomDialog)

    wrapper.vm.showDialog()
  })
})
