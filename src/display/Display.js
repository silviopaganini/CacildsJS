/*
 *  Display
 *
 *  author @silviopaganini | s2paganini.com
 *
 */

CACILDS.Display = function()
{
	this.children = [];
	this.name = "";
	this.dom = {};
	this.parent = {};
};

CACILDS.Display.prototype = {
	
	addChild : function ( child )
	{
		var dom = child.dom || child.domElement;

		this.children.push(child);
		this.dom.appendChild(dom);
	},
	
	removeChild : function ( child )
	{
		var dom = child.dom || child.domElement;
		var childIndex = this.children.indexOf( child );

		if ( childIndex !== - 1 ) {

			this.children.splice( childIndex, 1 );
			this.dom.removeChild(dom);
		}
	},
	
	removeAllChildren : function ()
	{
		while(this.children.length > 0)
		{
			this.removeChild(this.children[0]);
			this.children.splice( this.children.length - 1, 0 );
		}
	},
	
	getChildByName : function ( name )
	{
		var i, child;
		
		for ( var i = 0; i < this.children.length; i++ ) {

			child = this.children[ i ];

			if ( child.name === name) {

				return child;

			}
		}
	},
	
	html : function ( p )
	{
		if (p) this.dom.innerHTML = p;
		else return this.dom.innerHTML;
	},
	
	style : function ( style )
	{
		if(style)
		{
			for(var name in style)
			{
				this.dom.style[name] = style[name];
			}
		} else {
			return this.dom.style;
		}
	},

	addEventListener : function(type, handler)
	{
		this.dom.addEventListener(type, handler);
	}, 

	removeEventListener : function (type, handler)
	{
		this.dom.removeEventListener(type, handler);
	}
}