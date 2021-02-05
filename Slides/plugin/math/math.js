/**
 * A plugin which enables rendering of math equations inside
 * of reveal.js slides. Essentially a thin wrapper for MathJax.
 *
 * @author Hakim El Hattab
 */
const RevealMath = window.RevealMath || (function(){

	const options = Reveal.getConfig().math || {};
	const mathjax = options.mathjax || 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js';
	const config = options.config || 'TeX-AMS_HTML-full';
	const url = `${mathjax  }?config=${  config}`;

	const defaultOptions = {
		messageStyle: 'none',
		tex2jax: {
			inlineMath: [ [ '$', '$' ], [ '\\(', '\\)' ] ],
			skipTags: [ 'script', 'noscript', 'style', 'textarea', 'pre' ]
		},
		skipStartupTypeset: true
	};

	function defaults( options, defaultOptions ) {

		for ( const i in defaultOptions ) {
			if ( !options.hasOwnProperty( i ) ) {
				options[i] = defaultOptions[i];
			}
		}

	}

	function loadScript( url, callback ) {

		const head = document.querySelector( 'head' );
		const script = document.createElement( 'script' );
		script.type = 'text/javascript';
		script.src = url;

		// Wrapper for callback to make sure it only fires once
		const finish = function() {
			if( typeof callback === 'function' ) {
				callback.call();
				callback = null;
			}
		}

		script.onload = finish;

		// IE
		script.onreadystatechange = function() {
			if ( this.readyState === 'loaded' ) {
				finish();
			}
		}

		// Normal browsers
		head.appendChild( script );

	}

	return {
		init() {

			defaults( options, defaultOptions );
			defaults( options.tex2jax, defaultOptions.tex2jax );
			options.mathjax = options.config = null;

			loadScript( url, () => {

				MathJax.Hub.Config( options );

				// Typeset followed by an immediate reveal.js layout since
				// the typesetting process could affect slide height
				MathJax.Hub.Queue( [ 'Typeset', MathJax.Hub ] );
				MathJax.Hub.Queue( Reveal.layout );

				// Reprocess equations in slides when they turn visible
				Reveal.addEventListener( 'slidechanged', ( event ) => {

					MathJax.Hub.Queue( [ 'Typeset', MathJax.Hub, event.currentSlide ] );

				} );

			} );

		}
	}

})();

Reveal.registerPlugin( 'math', RevealMath );
