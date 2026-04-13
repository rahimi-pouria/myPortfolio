import type { PropType } from "vue";


interface professionalProfileType {
    id: number;
    title: string;
    description: string;
}

export const dynamicPagePropTypes = {
    id: {type: String as PropType<string>, required: false, default: null},
    title: {type: String as PropType<string>, required: false, default: null},
    description: {type: String as PropType<string>, required: false, default: null},
    imgSrc: {type: String as PropType<string>, required: false, default: null},
    customClassTitle: {type: String as PropType<string>, required: false, default: null},
    customClassDescription: {type: String as PropType<string>, required: false, default: null},
    customClassImg: {type: String as PropType<string>, required: false, default: null},
    customClassImageWrapper: {type: String as PropType<string>, required: false, default: null},
    customClassWrapperText: {type: String as PropType<string>, required: false, default: null},
    altImg: {type: String as PropType<string>, required: false, default: null},
    titleHeading: {type: String as PropType<string>, required: false, default: null},
    descriptionHeading: {type: String as PropType<string>, required: false, default: null},
    customClassTitleHeading: {type: String as PropType<string>, required: false, default: null},
    customClassDescriptionHeading: {type: String as PropType<string>, required: false, default: null},
    professionalProfile: {type: Array as PropType<professionalProfileType[]>, default: null},

}