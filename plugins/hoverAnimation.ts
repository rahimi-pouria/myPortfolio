import { ref } from 'vue';

// mouse position
export const updateMousePosition  = (event, wrapperElement) => {
    if(!wrapperElement) return;
    const rect = wrapperElement.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

// add event listener
export const addMouseMoveListener = (elementRef, handler) => {
    if (elementRef && elementRef.value) {
        elementRef.value.addEventListener("mousemove", handler);
    }
}

// remove event listener
export const removeMouseMoveListener = (elementRef, handler) => {
    if (elementRef && elementRef.value) {
        elementRef.value.removeEventListener("mousemove", handler);
    }
}
