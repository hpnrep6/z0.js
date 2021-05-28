import { Sprite2DRenderer } from './sprite2d.js';

export class RenderBatch {
    static defaultVertCoords = [
        1,  1,
        1, -1,
       -1,  1,
        
       -1,  1,
        1, -1,
       -1, -1
    ];

    
    sprites = [];
    texture;
    shader;
    vao;
    buffers = {
        transform: null, // Location, rotation
        size: null, // Scaling, alpha
        texCoords: null // Texture coordinates
    };

    arrays = {
        transform: [],
        size: [],
        texCoords: []
    }
    static vertCoords = [];

    updateLoc = false;
    updateSize= false;
    updateTexture = false;
    updateAlpha = false;
    updateGeo = false;

    constructor(texture) {
        this.texture = texture;
    }

    updateBuffers(gl) {
        if(updateGeo) {
            for(let i = 0; i < this.sprites.length; i++) {
                let offset = i * 18;
                {
                    // Transformation buffers;
                    // 3 per vertex, 6 vertices per quad

                }

                offset = i * 12;
                {
                    // Texture coordinate buffers
                    // 2 per vertex, 6 vertices per quad
                    
                }
            }

        } else {

        if(updateLoc) {

        }

        if(updateSize || updateAlpha) {

        }

        if(updateTexture) {

        }

        }


        this.updateLoc = false;
        this.updateSize= false;
        this.updateTexture = false;
        this.updateAlpha = false;
        this.updateGeo = false;
    }

    add(sprite) {
        this.sprites.push(sprite);
        sprite._batch = this;
        console.log(this.texture)
    }
}