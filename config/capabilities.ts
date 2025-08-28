export const myCapabilities = [
	{
		"browserName": "chromium",
		"browserVersion": "139.0",
		"LT:Options": {
            "build": "Playwright Build",
            "name": "Playwright in Windows 10 & Chrome",
            "project": "Playwright101 Certification Exam",
            //"username": process.env.LT_USERNAME,
            //"accessKey": process.env.LT_ACCESS_KEY,
            "username": "carlosacervantesc",
            "accessKey": "LT_LMQg6Jk8nfl3gdIVVeEli1Qvz0XPFcgZW2Nh8ix770XOC1M",
            "resolution": "1920x1080",
            "headless": false,
            "video": true,
		    "platform": "Windows 10",
		    "tunnel": true,
		    "console": true
            }
	},


    {
        "browserName": "chromium",
        "browserVersion": "139.0",
        "LT:Options": {
            "build": "Playwright Build",
            "name": "Playwright in Linux & Chrome",
            "project": "Playwright101 Certification Exam",
            //"username": process.env.LT_USERNAME,
            //"accessKey": process.env.LT_ACCESS_KEY,
            "username": "carlosacervantesc",
            "accessKey": "LT_LMQg6Jk8nfl3gdIVVeEli1Qvz0XPFcgZW2Nh8ix770XOC1M",
            "resolution": "1920x1080",
            "headless": false,
            "video": true,
		    "platform": "Linux",
		    "tunnel": true,
		    "console": true

        }
    },

    {
        "browserName": "chromium",
        "browserVersion": "139.0",
        "LT:Options": {
            "build": "Playwright Build",
            "name": "Playwright in Mac & Chrome",
            "project": "Playwright101 Certification Exam",
            //"username": process.env.LT_USERNAME,
            //"accessKey": process.env.LT_ACCESS_KEY,
            "username": "carlosacervantesc",
            "accessKey": "LT_LMQg6Jk8nfl3gdIVVeEli1Qvz0XPFcgZW2Nh8ix770XOC1M",
            "resolution": "1920x1080",
            "headless": false,
            "video": true,
            "platform": "macOS Ventura",
		    "tunnel": true,
		    "console": true

        }
    }
]

//module.exports = myCapabilities;