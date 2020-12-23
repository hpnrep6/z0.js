import * as MODULE from '../tree/module.js';
import { angleTo } from '../math/math2d.js';

export class Sprite extends MODULE.Module {
    constructor(parent, xLoc, yLoc, xSize, ySize, rot, zLoc, alpha = 1) {
        super(parent, xLoc, yLoc, rot);

        this.xSizeActual = xSize;
        this.ySizeActual = ySize;
        this.xSize = xSize;
        this.ySize = ySize;
        this.zLoc = zLoc;

        this.alpha = alpha;

        this.visible = true;
    }

    /**
     * Sets the location of the top left corner of the sprite relative to its parent module
     * 
     * @param {number} x Location in x-axis to set to
     * @param {number} y Location in y-axis to set to
     */

    setLocCorner(x, y) {
        this.xLoc = x + this.xSizeActual;
        this.yLoc = y + this.ySizeActual;
    }

    /**
     * Sets the scaling and dimensions of the sprite
     * 
     * @param {number} x New width of the sprite
     * @param {number} y New height of the sprite
     */
    setSize(x, y) {
        this.xSizeActual = x;
        this.ySizeActual = y;

        if(this.visible) {
            this.xSize = x;
            this.ySize = y;
        }
    }

    /**
     * Sets the width of the sprite
     * 
     * @param {number} width New width
     */
    setWidth(width) {
        this.setSize(width, this.ySizeActual);
    }

    /**
     * Sets the height of the sprite
     * 
     * @param {number} height New height
     */
    setHeight(height) {
        this.setSize(this.xSizeActual, height);
    }

    /**
     * Sets the visibility of the sprite
     * 
     * @param {boolean} visible Whether or not the sprite should be visible
     */
    setVisible(visible) {
        this.visible = visible;

        // When not visible, the dimensions of the sprite is 0 x 0
        if(visible) {
            this.xSize = this.xSizeActual;
            this.ySize = this.ySizeActual;
        } else {
            this.xSize = 0;
            this.ySize = 0;
        }
    }

    setZ(z) {
        this.glcanvas.removeSprite(this);
        this.zLoc = z;
        this.glcanvas.addSprite(this);
    }

    setAlpha(alpha) {
        this.alpha = alpha;
    }

    getZ() {
        return this.zLoc;
    }

    getXSize() {
        return this.xSize;
    }

    getYSize() {
        return this.ySize;
    }

    getVisible() {
        return this.visible;
    }

    getAlpha() {
        return this.alpha;
    }

    _destroy() {
        super._destroy();
        this.glcanvas.removeSprite(this);
    }

}