
module.exports = {
	style: {
		sass: {
			loaderOptions: {
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
