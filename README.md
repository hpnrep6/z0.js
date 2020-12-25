## Description

A 2D Javascript game engine/framework with sprite (textured quad) rendering, scene mangement, collision detection, audio pooling, customisable shaders, and more.

## Examples

- [Cloud Tower Defence](https://github.com/hpnrep6/Cloud-Tower_Defence) 
- [Mandelbrot Fractal Explorer](https://github.com/hpnrep6/MandelbrotFractalExplorer)

## File Structure

- z0/audio: Scripts to manage and play audio
- z0/graphics: Manages the rendering order and contains the WebGL "renderers" for drawing the sprites
- z0/input: Input wrappers to simplify input management in a game
- z0/math: Unused math classes
- z0/physics: Manages collisions and collision layers
- z0/primitives: Unused primitive classes
- z0/tree: Where most of the update loop is contained, and manages the locations of the sprites
- z0/utils: General utils
- z0/var.js Global variables; Contains the WebGL context and a reference to the canvas to which the engine/framework was initalised with
- z0/z0.js Main script where the update loop is started and where the engine/framework first gets initalised
