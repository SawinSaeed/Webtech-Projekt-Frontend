import { test, expect } from 'vitest'
import { shallowMount, mount} from '@vue/test-utils'
import AboutView from '@/views/AboutView.vue'
import AppView from '@/views/AppView.vue'
import axios from 'axios'



// Erstellen Sie eine Spionfunktion für axios.post


test('RegisterView.vue', () => {
  let wrapper = shallowMount(AboutView)
  const textelements = wrapper.find("h1").text()
  expect(textelements).toEqual("Einkaufliste Aboutpage")
})