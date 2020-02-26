import { DirectiveOptions, VNodeDirective } from "vue"
import * as DOMPurify from "dompurify"

export const cleanHtmlDirective: DirectiveOptions = {
    inserted(element: HTMLElement, binding: VNodeDirective) {
        element.innerHTML = DOMPurify.sanitize(binding.value)
    },
    componentUpdated(element: HTMLElement, binding: VNodeDirective) {
        if (binding.value !== binding.oldValue) {
            element.innerHTML = DOMPurify.sanitize(binding.value)
        }
    }
}