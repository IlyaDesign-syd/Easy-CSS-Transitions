This is a NextJS project, using Redux for state management.

About CSS Transition with Ease

This is a simple GUI animation tool, which is intended for web developers to make CSS keyframe animations
a simple process. Instead of having to painstakingly rewrite your CSS transitions and animation manually,
you can simply create animations in seconds using this animator, and convert the result into CSS code!


Roadmap

Features:
- Complete POC for canva object
- Start working on animating element
- Improve DRY - create utilities for interpolation
- Shift placeholder animation into redux state
- Remove magic numbers
- Install Lint
- Install TS
- Type animation data


Animation Methods Explained

Two approaches are available for managing animation based on keyframes:

Separate Parameter Interpolation: Each parameter (e.g., position, rotation) interpolates independently between keyframes.
Example: If the square moves from 0px to 20px from frames 1 to 20 and rotates 90 degrees at frame 30, the square gradually rotates alongside moving, as each parameter's interpolation is handled separately.
Pros:

Easier planning for certain users, like 3D animators.
Saves time by reducing manual rework.
Cons:

May require a more complex UI to manage separate channels.
Users may lose track of keyframes with specific parameter changes.
Frame-Based Interpolation: All parameters are interpolated together between frames without individual channels.
Example: The square moves from 0px to 20px from frames 1 to 20 and only begins rotating from frames 20 to 30, making parameter changes more predictable and cohesive.
Pros:

Predictable interpolation between frames.
Simple UI without separate channels.
Cons:

May require more planning for complex animations.
Changes require more frame edits, potentially increasing manual work.
This project aims to implement the second method for simplicity and alignment with traditional 2D animation tools.