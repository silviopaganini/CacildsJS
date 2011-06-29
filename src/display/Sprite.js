/*
 *  Sprite
 *
 *  author @silviopaganini | s2paganini.com
 *
 */

CACILDS.Sprite = function ()
{
	CACILDS.Display.call(this);
	this.dom = document.createElement('div');
	this.dom.parent = this;
}

CACILDS.Sprite.prototype = new CACILDS.Display();
CACILDS.Sprite.prototype.constructor = CACILDS.Sprite;