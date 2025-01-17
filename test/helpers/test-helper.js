'use strict';

const fs = require('fs');
const path = require('path');
const os = require('os');

const TEST_API_ROOT = 'https://api.box.com';
const TEST_UPLOAD_ROOT = 'https://upload.box.com/api';
const TEST_DOWNLOAD_ROOT = 'https://dl.boxcloud.com';
const DEFAULT_DOWNLOAD_PATH = path.join(
				os.homedir(),
				'Downloads/Box-Downloads'
)

function getFixture(fixture) {
	if (!path.extname(fixture)) {
		fixture += '.json';
	}
	/* eslint-disable no-sync */
	return fs.readFileSync(
		path.join(__dirname, '..', `fixtures/${fixture}`),
		'utf8'
	);
	/* eslint-enable no-sync */
}

function getProgressBar(message) {
	return process.stderr.isTTY ? message : '';
}

function getBulkProgressBar(size) {
	return getProgressBar(
		`[----------------------------------------] 0% | 0/${size}[========================================] 100% | ${size}/${size}${os.EOL}`
	);
}

function getDownloadProgressBar(size) {
	return getProgressBar(
		`[----------------------------------------] 0% | ETA: 0s | 0/${size} | Speed: N/A MB/s[========================================] 100% | ETA: 0s | ${size}/${size} | Speed: N/A MB/s${os.EOL}`
	);
}

module.exports = {
	TEST_API_ROOT,
	TEST_UPLOAD_ROOT,
	TEST_DOWNLOAD_ROOT,
	DEFAULT_DOWNLOAD_PATH,
	getFixture,
	getBulkProgressBar,
	getDownloadProgressBar,
};
