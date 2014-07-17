(function () {
	var JPlayerBuffer = function (id) {
		this.jPlayerId = id;
		this.cssSeekBar = '.jp-seek-bar';
		this.cssBufferBar = '.jp-buffer-bar'; 
	};

	JPlayerBuffer.prototype.setBufferWidth = function(width) {
		$(this.cssBufferBar).attr('style',  'width: ' + width + '%' );
	};

	JPlayerBuffer.prototype.buffer = function() {
		var that = this;
		return function (event) {
			var audio = $('#' + that.jPlayerId + ' audio')[0];

			if ( ! audio ) return;

			if (!audio.buffered.length) { 
			    that.setBufferWidth(0);
			} else {
			    var duration = event.jPlayer.status.duration;
			    var playtime = event.jPlayer.status.currentTime;
			    var buffertime = audio.buffered.end(0);

			    if ( Math.floor(duration) == Math.floor(buffertime) ) {
			        that.setBufferWidth(100 - event.jPlayer.status.currentPercentRelative - 0.2); // minus 0.2 to avoid overflow when css is changing
			        var width = $(that.cssSeekBar).width() + 1; // tmp fix of bootstrap stack gap when resizing
			        $(that.cssSeekBar).css('width', width + 'px'); 
			    } else {
			        that.setBufferWidth( (buffertime - playtime) * 100 / duration);
			    }
			} 
		}
    };

    window.JPlayerBuffer = JPlayerBuffer;
})();
