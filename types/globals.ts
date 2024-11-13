import { AnimAttributes } from "./element-properties";

export const INVALID_PREV_FRAME: number = -1;
export const INVALID_NEXT_FRAME: number = 999;
export const CANVAS_WIDTH: number = 1200;
export const CANVAS_HEIGHT: number = 900;

export const NUMBERS_ARR_1_to_100 = [...Array(100).keys()].map(i => i + 1);

export const DEFAULT_ANIM_PROPS: AnimAttributes = {
    position: [CANVAS_WIDTH/2, CANVAS_HEIGHT/2],
    scale: [100, 100],
    rotation: 0,
    colour: 'yellow',
}