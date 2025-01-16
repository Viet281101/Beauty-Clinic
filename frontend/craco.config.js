
module.exports = {
	style: {
		sass: {
			loaderOptions: {
				compact: true,
				implementation: require('sass'),
			},
		},
	},
	eslint: {
		enable: false,
		mode: "extends",
		configure: {
			extends: ["react-app", "react-app/jest"]
		}
	}
};
