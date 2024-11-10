// Object Properties
export type Position = [number, number];
export type Scale = [number, number];
export type Rotation = number;
export type Colour = string;

export interface AnimProp {
    position: Position,
    scale: Scale,
    rotation: Rotation;
    colour: Colour;
}