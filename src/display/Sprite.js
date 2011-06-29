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
}

CACILDS.Sprite.prototype = new CACILDS.Display();
CACILDS.Sprite.prototype.constructor = CACILDS.Sprite;
CACILDS.Sprite.prototype.supr = CACILDS.Display.prototype;