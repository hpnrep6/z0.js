
export class RenderBatch {
    sprites = [];
    texture;
    shader;

    updateLoc = false;
    updateSize= false;
    updateTexture = false;
    updateAlpha = false;
    updateGeo = false;

    constructor(texture) {
        this.texture = texture;
    }

    add(sprite) {
        this.sprites.push(sprite);
        sprite._batch = this;
        console.log(sprite)
    }
}