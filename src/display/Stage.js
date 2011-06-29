/*
 *  Stage
 *
 *  author @silviopaganini | s2paganini.com
 *
 */

CACILDS.Stage = function ()
{
	CACILDS.Display.call(this);
	this.dom = document.getElementsByTagName("body")[0];
	this.dom.parent = this;
}

CACILDS.Stage.prototype = new CACILDS.Display();
CACILDS.Stage.prototype.constructor = CACILDS.Stage;