import type {PropType} from "vue";


export const creativeProjectsGalleryType = {
    id: { type: Number as PropType<number | string>, default: null },
    videoTitle: {type: String as PropType<string>, default: null },
    subTitleVideo: {type: String as PropType<string>, default: null },
    videoDescription: {type: String as PropType<string>, default: null },
    videoSrc: { type: String as PropType<string>, required: Boolean ,default: null },
    controlsVideo: {type: Boolean as PropType<boolean>, default: true },
    widthVideo: {type: Number as PropType<number>, default: 500 },
    customClassVideoTittle: {type: String as PropType<string>, default: null },
    customClassWrapper: {type: String as PropType<string>, default: null },
    customClassVideo: {type: String as PropType<string>, default: null },
    customClassVideoDescription: {type: String as PropType<string>, default: null },
}