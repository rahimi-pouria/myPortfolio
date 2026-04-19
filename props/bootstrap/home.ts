import type {PropType} from 'vue'

export const homeType  = {
    func: { type: Function as PropType<(payload?: Event) => void>, default: () => {} },
}