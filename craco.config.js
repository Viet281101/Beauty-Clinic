
module.exports = {
	style: {
		sass: {
			loaderOptions: {
				implementation: require('sass'),
			},
		},
	},
	eslint: {
		enable: true,
		mode: "extends",
		configure: {
			extends: ["react-app", "react-app/jest"]
		}
	}
};
