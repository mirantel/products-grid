'use strict';

module.exports = function(grunt) {

grunt.initConfig({
	stylus: {
		compile: {
			options: {
				'include css': true,
			},
			files: {
				'css/screen.css': 'styl/screen.styl',
			}
		}
	},

	watch: {
		files: 'styl/*.styl',
		tasks: ['stylus'],
	},
});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-stylus');

	grunt.registerTask( 'default', ['watch']);
};