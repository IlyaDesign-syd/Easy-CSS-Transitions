// Object Properties
export type Position = [number, number];
export type Scale = [number, number];
export type Rotation = number;
export type Colour = string;

export interface AnimAttributes {
    position: Position,
    scale: Scale,
    rotation: Rotation;
    colour: Colour;
}

export type AnimationObj = {
    [key: number]: AnimAttributes;
};